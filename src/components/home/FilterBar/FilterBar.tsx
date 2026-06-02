"use client"

import useStore from "@/lib/useStore"
import type { SortOrder, Topic } from "@/lib/types"
import lessonsData from "@/lib/lessonsData.json"
import mockData from "@/lib/mockData"
import styles from "./FilterBar.module.css"

const TOPICS: Topic[] = [
  "All",
  "World News",
  "Technology",
  "Health",
  "Business",
  "Science",
  "Environment",
  "Education",
  "Lifestyle",
  "People",
]

const rawLessons = lessonsData.length > 0 ? lessonsData : mockData

export default function FilterBar() {
  const {
    activeTopic,
    setActiveTopic,
    activeDifficulty,
    setActiveDifficulty,
    sortOrder,
    setSortOrder,
  } = useStore()

  const count = rawLessons.filter((l) => {
    if (activeTopic !== "All" && l.topic !== activeTopic) return false
    if (activeDifficulty !== "all" && l.difficulty !== activeDifficulty)
      return false
    return true
  }).length

  return (
    <div className={styles.filterBar}>
      <div className={styles.inner}>
        {TOPICS.map((topic) => (
          <button
            key={topic}
            className={`${styles.chip} ${activeTopic === topic ? styles.chipActive : ""}`}
            onClick={() => setActiveTopic(topic)}
            aria-pressed={activeTopic === topic}
          >
            {topic}
          </button>
        ))}

        <div className={styles.divider} aria-hidden="true" />

        {(["easier", "harder"] as const).map((diff) => (
          <button
            key={diff}
            className={`${styles.chip} ${activeDifficulty === diff ? styles.chipActive : ""}`}
            onClick={() =>
              setActiveDifficulty(activeDifficulty === diff ? "all" : diff)
            }
            aria-pressed={activeDifficulty === diff}
          >
            {diff.charAt(0).toUpperCase() + diff.slice(1)}
          </button>
        ))}

        <div className={styles.spacer} />

        <select
          className={styles.sortSelect}
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          aria-label="Sort order"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

        <span className={styles.count}>{count} lessons</span>
      </div>
    </div>
  )
}
