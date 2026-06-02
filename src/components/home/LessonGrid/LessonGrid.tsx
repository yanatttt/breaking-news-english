"use client"

import { useState } from "react"
import useStore from "@/lib/useStore"
import LessonCard from "@/components/home/LessonCard/LessonCard"
import type { Lesson } from "@/lib/types"
import lessonsDataRaw from "@/lib/lessonsData.json"
import mockData from "@/lib/mockData"
import styles from "./LessonGrid.module.css"

const allLessons: Lesson[] = (lessonsDataRaw.length > 0 ? lessonsDataRaw : mockData) as Lesson[]

const PAGE_SIZE = 9

export default function LessonGrid() {
  const { activeTopic, activeDifficulty, sortOrder, bookmarks, toggleBookmark } = useStore()
  const [page, setPage] = useState(1)

  const filtered = allLessons
    .filter((l) => {
      if (activeTopic !== "All" && l.topic !== activeTopic) return false
      if (activeDifficulty !== "all" && l.difficulty !== activeDifficulty) return false
      return true
    })
    .sort((a, b) => {
      const da = new Date(a.publishedAt).getTime()
      const db = new Date(b.publishedAt).getTime()
      return sortOrder === "newest" ? db - da : da - db
    })

  const visible = filtered.slice(0, page * PAGE_SIZE)
  const hasMore = visible.length < filtered.length

  return (
    <section className={styles.section} id="lessons">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Latest lessons</h2>
        <div className={styles.grid}>
          {visible.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              isBookmarked={bookmarks.includes(lesson.id)}
              onToggleBookmark={toggleBookmark}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No lessons match your filters.</p>
        )}

        {hasMore && (
          <div className={styles.loadMoreRow}>
            <button
              className={styles.loadMoreBtn}
              onClick={() => setPage((p) => p + 1)}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
