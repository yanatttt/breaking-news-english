import axios from "axios"
import * as cheerio from "cheerio"
import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface Lesson {
  id: string
  slug: string
  title: string
  topic: string
  levelMin: number
  levelMax: number
  cefr: string
  difficulty: "easier" | "harder"
  publishedAt: string
  activityCount: number
  url: string
}

const BASE_URL = "https://breakingnewsenglish.com"
const DELAY_MS = 1000

const TOPIC_KEYWORDS: Record<string, string> = {
  population: "World News",
  shrink: "World News",
  election: "World News",
  war: "World News",
  conflict: "World News",
  military: "World News",
  president: "People",
  king: "People",
  queen: "People",
  celebrity: "People",
  actor: "People",
  singer: "People",
  ferrari: "Business",
  electric: "Technology",
  car: "Technology",
  robot: "Technology",
  ai: "Technology",
  tech: "Technology",
  computer: "Technology",
  internet: "Technology",
  "air-traffic": "Technology",
  gaming: "Technology",
  gold: "Business",
  economy: "Business",
  bank: "Business",
  finance: "Business",
  market: "Business",
  business: "Business",
  health: "Health",
  medical: "Health",
  diet: "Health",
  food: "Health",
  packaging: "Health",
  science: "Science",
  research: "Science",
  space: "Science",
  climate: "Environment",
  environment: "Environment",
  nature: "Environment",
  animal: "Environment",
  wildlife: "Environment",
  hedgehog: "Environment",
  planet: "Environment",
  electricity: "Environment",
  africa: "World News",
  continent: "World News",
  ufo: "Science",
  uap: "Science",
  press: "World News",
  freedom: "World News",
  advertisement: "Business",
  school: "Education",
  education: "Education",
  student: "Education",
  right_handed: "Science",
  looksmaxxing: "Lifestyle",
  hot: "Environment",
}

function guessTopic(slug: string): string {
  const lower = slug.toLowerCase()
  for (const [keyword, topic] of Object.entries(TOPIC_KEYWORDS)) {
    if (lower.includes(keyword)) return topic
  }
  return "World News"
}

function levelToCefr(level: number): string {
  if (level <= 0) return "A1"
  if (level <= 1) return "A2"
  if (level <= 3) return "B1"
  if (level <= 5) return "B2"
  return "C1"
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchPage(url: string): Promise<string> {
  const resp = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
    },
    timeout: 15000,
  })
  return resp.data as string
}

interface LessonGroup {
  slug: string
  baseSlug: string
  dateCode: string
  monthCode: string
  levels: number[]
  baseUrl?: string
}

async function scrapeLesson(
  url: string,
  group: LessonGroup
): Promise<Lesson | null> {
  try {
    const html = await fetchPage(url)
    const $ = cheerio.load(html)

    let title = $("h1").first().text().trim()

    // Many pages have title like "Breaking News English Lesson: Actual Topic"
    if (!title || title.toLowerCase().includes("breaking news english")) {
      const pageTitle = $("title").text()
      // Try to extract the actual topic part after a colon or dash
      const colonMatch = pageTitle.match(/:\s*(.+)$/)
      const dashMatch = pageTitle.match(/-\s*(.+)$/)
      if (colonMatch) title = colonMatch[1].trim()
      else if (dashMatch) title = dashMatch[1].trim()
      else title = pageTitle.replace(/Breaking News English/gi, "").replace(/\|/g, "").trim()
    }

    // Fallback to slug-based title
    if (!title || title.length < 3) {
      title = group.baseSlug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
    }

    // Clean up title
    title = title.replace(/\s+/g, " ").trim()

    const levels = group.levels
    const levelMin = levels.length ? Math.min(...levels) : 0
    const levelMax = levels.length ? Math.max(...levels) : 6
    const cefr = levelToCefr(levelMin)

    // Easier = levels 0-3, Harder = levels 4+
    const difficulty: "easier" | "harder" =
      levelMin <= 3 && (levels.length === 0 || levels.some((l) => l <= 3))
        ? "easier"
        : "harder"

    // Parse date from dateCode like "260601"
    let publishedAt = new Date().toISOString().split("T")[0]
    const dc = group.dateCode
    if (dc && dc.length === 6) {
      const year = `20${dc.slice(0, 2)}`
      const month = dc.slice(2, 4)
      const day = dc.slice(4, 6)
      const parsed = new Date(`${year}-${month}-${day}`)
      if (!isNaN(parsed.getTime())) {
        publishedAt = parsed.toISOString().split("T")[0]
      }
    }

    const topic = guessTopic(group.baseSlug)

    // Count activity links
    const actLinks = $("a[href]").filter((_, el) => {
      const href = $(el).attr("href") || ""
      return (
        href.includes("online") ||
        href.includes("activity") ||
        href.includes("exercise") ||
        href.includes("quiz") ||
        href.includes("gap") ||
        href.includes("matching") ||
        href.includes("spelling")
      )
    }).length
    const activityCount = Math.max(actLinks, 6)

    return {
      id: `${group.dateCode}-${group.baseSlug}`,
      slug: `${group.dateCode}-${group.baseSlug}`,
      title,
      topic,
      levelMin,
      levelMax,
      cefr,
      difficulty,
      publishedAt,
      activityCount,
      url,
    }
  } catch {
    return null
  }
}

async function main() {
  console.log("Fetching homepage…")

  let homepageHtml: string
  try {
    homepageHtml = await fetchPage(BASE_URL)
  } catch (err) {
    console.error("Failed to fetch homepage:", err)
    process.exit(1)
  }

  const $ = cheerio.load(homepageHtml)

  // Collect lesson links matching pattern: YYMM/YYMMDD-slug[-N].html
  const lessonRe = /^(\d{4})\/(\d{6})-([a-z0-9-]+?)(-(\d))?\.html$/

  const groups = new Map<string, LessonGroup>()

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href") || ""
    const m = href.match(lessonRe)
    if (!m) return

    const monthCode = m[1]  // e.g. "2606"
    const dateCode = m[2]   // e.g. "260601"
    const baseSlug = m[3]   // e.g. "japans-shrinking-population"
    const levelStr = m[5]   // e.g. "4" or undefined
    const key = `${dateCode}-${baseSlug}`

    if (!groups.has(key)) {
      groups.set(key, {
        slug: key,
        baseSlug,
        dateCode,
        monthCode,
        levels: [],
        baseUrl: `${BASE_URL}/${monthCode}/${dateCode}-${baseSlug}.html`,
      })
    }

    const group = groups.get(key)!
    if (levelStr !== undefined) {
      const lvl = parseInt(levelStr, 10)
      if (!group.levels.includes(lvl)) group.levels.push(lvl)
    }
  })

  console.log(`Found ${groups.size} unique lesson groups`)

  if (groups.size === 0) {
    console.log("No lessons found — falling back to mockData")
    const outPath = path.join(__dirname, "../src/lib/lessonsData.json")
    fs.writeFileSync(outPath, JSON.stringify([], null, 2))
    return
  }

  // For each group, create one lesson per difficulty bucket
  const lessonEntries = Array.from(groups.values())

  const lessons: Lesson[] = []
  let i = 0

  for (const group of lessonEntries) {
    i++
    // Pick the URL to scrape (prefer base URL)
    const url = group.baseUrl!

    const lesson = await scrapeLesson(url, group)
    if (lesson) {
      lessons.push(lesson)
      console.log(`Scraped ${i}/${lessonEntries.length}: ${lesson.title}`)
    } else {
      // Fallback: generate from slug
      const titleFromSlug = group.baseSlug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())

      let publishedAt = new Date().toISOString().split("T")[0]
      const dc = group.dateCode
      if (dc && dc.length === 6) {
        const year = `20${dc.slice(0, 2)}`
        const month = dc.slice(2, 4)
        const day = dc.slice(4, 6)
        const parsed = new Date(`${year}-${month}-${day}`)
        if (!isNaN(parsed.getTime())) publishedAt = parsed.toISOString().split("T")[0]
      }

      const levelMin = group.levels.length ? Math.min(...group.levels) : 0
      const levelMax = group.levels.length ? Math.max(...group.levels) : 6
      lessons.push({
        id: group.slug,
        slug: group.slug,
        title: titleFromSlug,
        topic: guessTopic(group.baseSlug),
        levelMin,
        levelMax,
        cefr: levelToCefr(levelMin),
        difficulty: levelMin <= 3 ? "easier" : "harder",
        publishedAt,
        activityCount: 8,
        url,
      })
      console.log(`Skipped ${i}/${lessonEntries.length}: ${url} — used slug fallback`)
    }

    if (i < lessonEntries.length) await delay(DELAY_MS)
  }

  const outPath = path.join(__dirname, "../src/lib/lessonsData.json")

  if (lessons.length < 10) {
    console.log(`Only ${lessons.length} lessons scraped — writing empty array (mockData fallback will be used)`)
    fs.writeFileSync(outPath, JSON.stringify([], null, 2))
  } else {
    fs.writeFileSync(outPath, JSON.stringify(lessons, null, 2))
    console.log(`\nSaved ${lessons.length} lessons to ${outPath}`)
  }
}

main().catch(console.error)
