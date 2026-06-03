"use client"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { LevelChip, DifficultyChip, TopicChip } from "@/components/ui"
import lessonsDataRaw from "@/lib/lessonsData.json"
import mockData from "@/lib/mockData"
import type { Lesson } from "@/lib/types"

const lessons: Lesson[] = (lessonsDataRaw.length > 0 ? lessonsDataRaw : mockData) as Lesson[]
const hero = lessons[0]

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
  })
}

export default function HeroLesson() {
  if (!hero) return null

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f8f9fc",
        py: { xs: 6, md: 9 },
        px: { xs: 2, md: 3.5 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
        }}
      >
        {/* Content */}
        <Box>
          <Typography
            variant="overline"
            sx={{ display: "block", color: "text.secondary", mb: 2, letterSpacing: "0.1em" }}
          >
            Featured lesson
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem", lg: "3rem" },
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            {hero.title}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: "wrap" }}>
            <DifficultyChip difficulty={hero.difficulty} size="medium" />
            <TopicChip topic={hero.topic} size="medium" />
            <LevelChip cefr={hero.cefr} size="medium" showLabel />
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", alignSelf: "center" }}
            >
              {formatDate(hero.publishedAt)}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              component="a"
              href={hero.url || "https://breakingnewsenglish.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start lesson
            </Button>
            <Button variant="outlined" size="large">
              Save for later
            </Button>
          </Stack>
        </Box>

        {/* Image placeholder */}
        <Box
          sx={{
            aspectRatio: "16/9",
            backgroundColor: "#e6eaf0",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            order: { xs: -1, md: 1 },
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: 64,
              color: "#b2bbc5",
              fontVariationSettings: "'FILL' 0, 'wght' 200",
            }}
          >
            newspaper
          </span>
        </Box>
      </Box>
    </Box>
  )
}
