"use client"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import PrintIcon from "@mui/icons-material/Print"
import SpeedIcon from "@mui/icons-material/Speed"
import EditNoteIcon from "@mui/icons-material/EditNote"
import SpellcheckIcon from "@mui/icons-material/Spellcheck"
import MenuBookIcon from "@mui/icons-material/MenuBook"

const COLUMNS = [
  {
    Icon: PrintIcon,
    label: "Print",
    links: ["27-page lesson (40 exercises)", "2-page MINI lesson"],
  },
  {
    Icon: SpeedIcon,
    label: "Read",
    links: ["Speed Read (4 speeds)", "Cloze reading"],
  },
  {
    Icon: EditNoteIcon,
    label: "Grammar",
    links: ["Gap-fill", "Prepositions", "Word order", "20 questions"],
  },
  {
    Icon: SpellcheckIcon,
    label: "Spell",
    links: ["No letters", "Listen and spell"],
  },
  {
    Icon: MenuBookIcon,
    label: "Words",
    links: ["Word pairs", "Missing words"],
  },
]

export default function OnlineActivities() {
  return (
    <Box
      component="section"
      id="activities"
      sx={{ py: { xs: 5, md: 7 }, px: { xs: 2, md: 3.5 } }}
    >
      <Box sx={{ maxWidth: 1440, mx: "auto" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 400, letterSpacing: "-0.01em", mb: 5 }}
        >
          What you can practice
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: 3.5,
          }}
        >
          {COLUMNS.map(({ Icon, label, links }) => (
            <Box key={label}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  borderBottom: "1px solid rgba(33,34,38,0.08)",
                  pb: 1.5,
                  mb: 2,
                }}
              >
                <Icon sx={{ fontSize: 22, color: "#45474d" }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  {label}
                </Typography>
              </Stack>
              {links.map((link) => (
                <Typography
                  key={link}
                  component="a"
                  href="https://breakingnewsenglish.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body2"
                  sx={{
                    display: "block",
                    lineHeight: 2.2,
                    color: "text.secondary",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "color 150ms ease",
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
