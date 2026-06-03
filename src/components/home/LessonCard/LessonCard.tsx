"use client"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActionArea from "@mui/material/CardActionArea"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import { LevelChip, DifficultyChip, TopicChip } from "@/components/ui"
import type { Lesson } from "@/lib/types"

const TOPIC_ICONS: Record<string, string> = {
  "World News": "public",
  Technology: "computer",
  Health: "favorite",
  Business: "business_center",
  Science: "science",
  Environment: "park",
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
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
  })
}

export default function LessonCard({ lesson, isBookmarked, onToggleBookmark }: Props) {
  const icon = TOPIC_ICONS[lesson.topic] || "article"

  return (
    <Card sx={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea
        href={lesson.url || "https://breakingnewsenglish.com"}
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          flexGrow: 1,
        }}
      >
        {/* Image area */}
        <Box
          sx={{
            position: "relative",
            aspectRatio: "16/9",
            backgroundColor: "#e6eaf0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: 48,
              color: "#b2bbc5",
              fontVariationSettings: "'FILL' 0, 'wght' 200",
            }}
          >
            {icon}
          </span>
        </Box>

        {/* Body */}
        <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", p: 2.5 }}>
          <Stack direction="row" spacing={0.75} sx={{ mb: 1, flexWrap: "wrap" }}>
            <DifficultyChip difficulty={lesson.difficulty} size="small" />
            <TopicChip topic={lesson.topic} size="small" />
          </Stack>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: 1.4,
              mb: 1.5,
              mt: 0.5,
              flex: 1,
            }}
          >
            {lesson.title}
          </Typography>

          <Stack
            direction="row"
            spacing={0.75}
            sx={{ mt: "auto", flexWrap: "wrap", alignItems: "center" }}
          >
            <LevelChip cefr={lesson.cefr} size="small" />
            <Typography variant="caption" sx={{ color: "text.disabled" }}>·</Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {formatDate(lesson.publishedAt)}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.disabled" }}>·</Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {lesson.activityCount} activities
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>

      {/* Bookmark — outside CardActionArea to prevent navigation */}
      <IconButton
        onClick={(e) => {
          e.stopPropagation()
          onToggleBookmark(lesson.id)
        }}
        aria-label={isBookmarked ? "Remove bookmark" : "Bookmark lesson"}
        aria-pressed={isBookmarked}
        size="small"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          width: 36,
          height: 36,
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(4px)",
          "&:hover": { backgroundColor: "#fff" },
        }}
      >
        {isBookmarked ? (
          <BookmarkIcon sx={{ fontSize: 20, color: "#2b4fda" }} />
        ) : (
          <BookmarkBorderIcon sx={{ fontSize: 20, color: "#45474d" }} />
        )}
      </IconButton>
    </Card>
  )
}
