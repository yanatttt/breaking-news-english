"use client"

import Chip from "@mui/material/Chip"
import { DIFFICULTY_COLORS } from "@/lib/levelColors"

interface Props {
  difficulty: "easier" | "harder"
  size?: "small" | "medium"
}

export function DifficultyChip({ difficulty, size = "small" }: Props) {
  const color = DIFFICULTY_COLORS[difficulty]
  return (
    <Chip
      label={difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      size={size}
      sx={{
        ...color.chipSx,
        fontWeight: 500,
        fontSize: size === "small" ? "0.7rem" : "0.8rem",
        height: size === "small" ? 24 : 28,
      }}
    />
  )
}
