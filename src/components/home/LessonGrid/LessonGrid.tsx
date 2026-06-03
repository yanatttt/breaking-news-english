"use client"

import { useState } from "react"
import useStore from "@/lib/useStore"
import LessonCard from "@/components/home/LessonCard/LessonCard"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import type { Lesson } from "@/lib/types"
import lessonsDataRaw from "@/lib/lessonsData.json"
import mockData from "@/lib/mockData"

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
    <Box
      component="section"
      id="lessons"
      sx={{ py: { xs: 5, md: 7 }, px: { xs: 2, md: 3.5 } }}
    >
      <Box sx={{ maxWidth: 1440, mx: "auto" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 400, letterSpacing: "-0.01em", mb: 4 }}
        >
          Latest lessons
        </Typography>

        {filtered.length === 0 ? (
          <Typography
            sx={{ py: 8, color: "text.secondary", textAlign: "center" }}
          >
            No lessons match your filters.
          </Typography>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 3.5,
            }}
          >
            {visible.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                isBookmarked={bookmarks.includes(lesson.id)}
                onToggleBookmark={toggleBookmark}
              />
            ))}
          </Box>
        )}

        {hasMore && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => setPage((p) => p + 1)}
            >
              Load more lessons
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  )
}
