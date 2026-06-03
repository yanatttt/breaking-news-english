"use client"

import Chip from "@mui/material/Chip"
import { getLevelColor } from "@/lib/levelColors"

interface LevelChipProps {
  cefr: string
  size?: "small" | "medium"
  showLabel?: boolean
}

export function LevelChip({ cefr, size = "small", showLabel = false }: LevelChipProps) {
  const color = getLevelColor(cefr)
  return (
    <Chip
      label={showLabel ? color.label : cefr}
      size={size}
      sx={{
        ...color.chipSx,
        fontWeight: 600,
        fontSize: size === "small" ? "0.7rem" : "0.8rem",
        height: size === "small" ? 24 : 28,
      }}
    />
  )
}
