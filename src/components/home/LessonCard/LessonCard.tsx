"use client"

import type { Lesson } from "@/lib/types"
import styles from "./LessonCard.module.css"

const TOPIC_ICONS: Record<string, string> = {
  "World News": "public",
  Technology: "computer",
  Health: "favorite",
  Business: "business_center",
  Science: "science",
  Environment: "eco",
  Education: "school",
  Lifestyle: "self_improvement",
  People: "person",
}

interface Props {
  lesson: Lesson
  isBookmarked: boolean
  onToggleBookmark: (id: string) => void
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}

export default function LessonCard({ lesson, isBookmarked, onToggleBookmark }: Props) {
  const icon = TOPIC_ICONS[lesson.topic] || "article"

  return (
    <article className={styles.card}>
      <div className={styles.imageArea}>
        <span className="material-symbols-outlined">{icon}</span>
        <button
          className={styles.bookmarkBtn}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onToggleBookmark(lesson.id)
          }}
          aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this lesson"}
          aria-pressed={isBookmarked}
        >
          <span className={`material-symbols-outlined ${isBookmarked ? styles.bookmarkedIcon : ""}`}>
            {isBookmarked ? "bookmark" : "bookmark_border"}
          </span>
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.tagRow}>
          <span className={`${styles.diffChip} ${lesson.difficulty === "harder" ? styles.harder : styles.easier}`}>
            {lesson.difficulty.charAt(0).toUpperCase() + lesson.difficulty.slice(1)}
          </span>
          <span className={styles.topicChip}>{lesson.topic}</span>
        </div>

        <h3 className={styles.title}>{lesson.title}</h3>

        <div className={styles.meta}>
          <span className={styles.cefrBadge}>{lesson.cefr}</span>
          <span className={styles.dot}>·</span>
          <span>{formatDate(lesson.publishedAt)}</span>
          <span className={styles.dot}>·</span>
          <span>{lesson.activityCount} activities</span>
        </div>
      </div>
    </article>
  )
}
