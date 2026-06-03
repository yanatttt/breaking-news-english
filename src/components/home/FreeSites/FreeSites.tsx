"use client"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"

const SITES = [
  { name: "1-Minute Listening", url: "https://1minuteenglish.com" },
  { name: "ESL Discussions", url: "https://esldiscussions.com" },
  { name: "Famous People Lessons", url: "https://famouspeoplelessons.com" },
  { name: "Holiday Lessons", url: "https://holidaysenglish.com" },
  { name: "Business English", url: "https://businessenglishsite.com" },
  { name: "Lessons on Movies", url: "https://moviesenglish.com" },
  { name: "American Presidents", url: "https://americanpresidentsenglish.com" },
  { name: "Free ESL Materials", url: "https://freeeslmaterials.com" },
]

export default function FreeSites() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f8f9fc",
        py: { xs: 5, md: 6 },
        px: { xs: 2, md: 3.5 },
      }}
    >
      <Box sx={{ maxWidth: 1440, mx: "auto" }}>
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 3 }}>
          More by Sean Banville
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {SITES.map((site) => (
            <Chip
              key={site.name}
              label={site.name}
              variant="outlined"
              clickable
              component="a"
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: "rgba(33,34,38,0.12)",
                color: "#45474d",
                "&:hover": {
                  backgroundColor: "#eff2f7",
                  borderColor: "rgba(33,34,38,0.2)",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
