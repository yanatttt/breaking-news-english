"use client"

import useStore from "@/lib/useStore"
import type { SortOrder } from "@/lib/types"
import lessonsData from "@/lib/lessonsData.json"
import mockData from "@/lib/mockData"
import Box from "@mui/material/Box"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Chip from "@mui/material/Chip"
import Typography from "@mui/material/Typography"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import { DIFFICULTY_COLORS } from "@/lib/levelColors"

const TOPICS = [
  "All", "World News", "Technology", "Health",
  "Business", "Science", "Environment",
  "Education", "Lifestyle", "People",
]

const rawLessons = lessonsData.length > 0 ? lessonsData : mockData

export default function FilterBar() {
  const {
    activeTopic, setActiveTopic,
    activeDifficulty, setActiveDifficulty,
    sortOrder, setSortOrder,
  } = useStore()

  const count = rawLessons.filter((l) => {
    if (activeTopic !== "All" && l.topic !== activeTopic) return false
    if (activeDifficulty !== "all" && l.difficulty !== activeDifficulty) return false
    return true
  }).length

  return (
    <Box
      sx={{
        position: "sticky",
        top: 64,
        zIndex: 90,
        backgroundColor: "#fff",
        borderBottom: "1px solid rgba(33,34,38,0.08)",
        py: 1,
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: "auto",
          px: { xs: 2, md: 3.5 },
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        {/* Topic Tabs — scrollable, chip-style */}
        <Tabs
          value={activeTopic}
          onChange={(_, v) => setActiveTopic(v)}
          variant="scrollable"
          scrollButtons={false}
          sx={{
            minHeight: 40,
            flex: 1,
            minWidth: 0,
            "& .MuiTabs-flexContainer": { gap: 0.5 },
            "& .MuiTabs-indicator": { display: "none" },
          }}
        >
          {TOPICS.map((t) => (
            <Tab key={t} label={t} value={t} disableRipple />
          ))}
        </Tabs>

        {/* Divider */}
        <Box
          sx={{
            width: 1,
            height: 20,
            backgroundColor: "rgba(33,34,38,0.12)",
            flexShrink: 0,
            mx: 0.5,
          }}
        />

        {/* Difficulty + Sort + Count — always visible */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexShrink: 0 }}>
          {(["easier", "harder"] as const).map((diff) => {
            const active = activeDifficulty === diff
            const col = DIFFICULTY_COLORS[diff]
            return (
              <Chip
                key={diff}
                label={diff.charAt(0).toUpperCase() + diff.slice(1)}
                onClick={() => setActiveDifficulty(active ? "all" : diff)}
                size="small"
                sx={
                  active
                    ? { ...col.chipSx, fontWeight: 600, cursor: "pointer" }
                    : {
                        backgroundColor: "transparent",
                        border: "1.5px solid rgba(33,34,38,0.12)",
                        color: "#45474d",
                        cursor: "pointer",
                        "&:hover": { backgroundColor: "#f8f9fc" },
                      }
                }
              />
            )
          })}

          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            size="small"
            variant="outlined"
            sx={{
              borderRadius: 9999,
              fontSize: "0.8rem",
              height: 32,
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(33,34,38,0.12)" },
              "& .MuiSelect-select": { py: "4px", pr: "28px !important", pl: "14px" },
            }}
          >
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
          </Select>

          <Typography
            variant="caption"
            sx={{ color: "text.secondary", whiteSpace: "nowrap", display: { xs: "none", sm: "block" } }}
          >
            {count} lessons
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
