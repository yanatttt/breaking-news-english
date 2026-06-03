"use client"

import { useEffect, useState } from "react"
import useStore from "@/lib/useStore"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import { LevelChip } from "@/components/ui"

const LEVELS = [
  { cefr: "A1", name: "Beginner", range: "Level 0" },
  { cefr: "A2", name: "Elementary", range: "Level 1" },
  { cefr: "B1", name: "Pre-Intermediate", range: "Levels 2–3" },
  { cefr: "B2", name: "Intermediate", range: "Levels 4–5", popular: true },
  { cefr: "C1", name: "Upper-Intermediate", range: "Level 6" },
]

export default function LevelModal() {
  const { selectedLevel, setSelectedLevel } = useStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const open = selectedLevel === null

  const handleSelect = (cefr: string) => {
    setSelectedLevel(cefr)
  }

  return (
    <Dialog
      open={open}
      maxWidth="xs"
      fullWidth
      slotProps={{ paper: { sx: { borderRadius: "36px !important", p: 1 } } }}
    >
      <DialogContent>
        <Typography variant="h4" sx={{ fontWeight: 400, mb: 1 }}>
          What&rsquo;s your English level?
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
          We&rsquo;ll show the right lessons. No sign-up needed.
        </Typography>

        <List disablePadding sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {LEVELS.map((lvl) => (
            <ListItemButton
              key={lvl.cefr}
              onClick={() => handleSelect(lvl.cefr)}
              sx={{ borderRadius: 2 }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}
              >
                <LevelChip cefr={lvl.cefr} size="small" />

                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {lvl.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    {lvl.range}
                  </Typography>
                </Box>

                {lvl.popular && (
                  <Chip
                    label="Most popular"
                    size="small"
                    sx={{
                      backgroundColor: "#DDEEFF",
                      color: "#0D3B7A",
                      border: "1px solid #90C4FF",
                      fontSize: "0.65rem",
                      height: 22,
                    }}
                  />
                )}
              </Box>
            </ListItemButton>
          ))}
        </List>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", textAlign: "center", mt: 2.5, cursor: "pointer", "&:hover": { color: "text.primary" } }}
          onClick={() => handleSelect("B1")}
        >
          Not sure? Start with B1 →
        </Typography>
      </DialogContent>
    </Dialog>
  )
}
