"use client"

import useStore from "@/lib/useStore"
import styles from "./ContinueBanner.module.css"

export default function ContinueBanner() {
  const { lastLesson } = useStore()

  if (!lastLesson) return null

  const shortTitle =
    lastLesson.title.length > 60
      ? lastLesson.title.slice(0, 60) + "…"
      : lastLesson.title

  return (
    <div className={styles.banner}>
      <span className={`material-symbols-outlined ${styles.icon}`}>
        history
      </span>
      <div className={styles.middle}>
        <span className={styles.label}>Continue:</span>{" "}
        <span className={styles.lessonTitle}>{shortTitle}</span>
        <span className={styles.cefrBadge}>{lastLesson.cefr}</span>
        <span className={styles.topicChip}>{lastLesson.topic}</span>
      </div>
      <a
        href={`https://breakingnewsenglish.com`}
        className={styles.continueBtn}
        aria-label={`Continue lesson: ${lastLesson.title}`}
      >
        Continue →
      </a>
    </div>
  )
}
