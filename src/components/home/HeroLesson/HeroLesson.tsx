import lessonsData from "@/lib/lessonsData.json"
import mockData from "@/lib/mockData"
import styles from "./HeroLesson.module.css"
import type { Lesson } from "@/lib/types"

const lessons: Lesson[] = (lessonsData.length > 0 ? lessonsData : mockData) as Lesson[]
const hero = lessons[0]

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}

export default function HeroLesson() {
  if (!hero) return null

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>Featured lesson</div>
          <h1 className={styles.title}>{hero.title}</h1>
          <div className={styles.chips}>
            <span className={`${styles.diffChip} ${hero.difficulty === "harder" ? styles.harder : styles.easier}`}>
              {hero.difficulty.charAt(0).toUpperCase() + hero.difficulty.slice(1)}
            </span>
            <span className={styles.topicChip}>{hero.topic}</span>
            <span className={styles.cefrChip}>{hero.cefr}</span>
            <span className={styles.dateChip}>{formatDate(hero.publishedAt)}</span>
          </div>
          <div className={styles.buttons}>
            <a
              href={hero.url || "https://breakingnewsenglish.com"}
              className={styles.primaryBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start lesson →
            </a>
            <button className={styles.secondaryBtn}>Save for later</button>
          </div>
        </div>

        <div className={styles.imageArea} aria-hidden="true">
          <span className="material-symbols-outlined">newspaper</span>
        </div>
      </div>
    </section>
  )
}
