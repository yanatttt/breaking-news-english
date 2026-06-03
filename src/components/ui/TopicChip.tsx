"use client"

import Chip from "@mui/material/Chip"

interface Props {
  topic: string
  size?: "small" | "medium"
}

export function TopicChip({ topic, size = "small" }: Props) {
  return (
    <Chip
      label={topic}
      size={size}
      sx={{
        backgroundColor: "#f8f9fc",
        color: "#45474d",
        border: "1px solid rgba(33,34,38,0.12)",
        fontWeight: 400,
        fontSize: size === "small" ? "0.7rem" : "0.8rem",
        height: size === "small" ? 24 : 28,
      }}
    />
  )
}
