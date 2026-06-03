"use client"

import useStore from "@/lib/useStore"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import HistoryIcon from "@mui/icons-material/History"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { LevelChip, TopicChip } from "@/components/ui"

export default function ContinueBanner() {
  const { lastLesson } = useStore()

  if (!lastLesson) return null

  const shortTitle =
    lastLesson.title.length > 60
      ? lastLesson.title.slice(0, 60) + "…"
      : lastLesson.title

  return (
    <Box
      sx={{
        backgroundColor: "#DDEEFF",
        borderBottom: "1px solid #90C4FF",
        py: 1.25,
        px: { xs: 2, md: 3.5 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <HistoryIcon sx={{ color: "#0D3B7A", fontSize: 18, flexShrink: 0 }} />

        <Box
          sx={{ flex: 1, display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", minWidth: 0 }}
        >
          <Typography variant="caption" sx={{ fontWeight: 600, color: "#0D3B7A", whiteSpace: "nowrap" }}>
            Continue:
          </Typography>
          <Typography
            variant="body2"
            noWrap
            sx={{ fontWeight: 500, maxWidth: 400 }}
          >
            {shortTitle}
          </Typography>
          <LevelChip cefr={lastLesson.cefr} size="small" />
          <TopicChip topic={lastLesson.topic} size="small" />
        </Box>

        <Button
          variant="outlined"
          size="small"
          endIcon={<ArrowForwardIcon />}
          href="https://breakingnewsenglish.com"
          component="a"
          sx={{
            borderColor: "#0D3B7A",
            color: "#0D3B7A",
            flexShrink: 0,
            "&:hover": { backgroundColor: "rgba(13,59,122,0.06)", borderColor: "#0D3B7A" },
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  )
}
