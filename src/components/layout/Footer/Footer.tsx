"use client"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import ShareIcon from "@mui/icons-material/Share"
import RssFeedIcon from "@mui/icons-material/RssFeed"
import EmailIcon from "@mui/icons-material/Email"

const LESSONS_LINKS = [
  { label: "All 3,629 lessons", href: "https://breakingnewsenglish.com" },
  { label: "Easier lessons", href: "https://breakingnewsenglish.com" },
  { label: "Harder lessons", href: "https://breakingnewsenglish.com" },
  { label: "Business English", href: "https://breakingnewsenglish.com/business_english.html" },
  { label: "Holiday lessons", href: "https://breakingnewsenglish.com" },
  { label: "Podcast", href: "https://breakingnewsenglish.com/podcast.html" },
]

const LEVELS_LINKS = [
  { label: "A1 · Level 0", href: "https://breakingnewsenglish.com" },
  { label: "A2 · Level 1", href: "https://breakingnewsenglish.com" },
  { label: "B1 · Levels 2–3", href: "https://breakingnewsenglish.com" },
  { label: "B2 · Levels 4–5", href: "https://breakingnewsenglish.com" },
  { label: "C1 · Level 6", href: "https://breakingnewsenglish.com" },
  { label: "Which level am I?", href: "https://breakingnewsenglish.com/help.html", accent: true },
]

const ABOUT_LINKS = [
  { label: "About Sean Banville", href: "https://breakingnewsenglish.com" },
  { label: "For teachers", href: "https://breakingnewsenglish.com" },
  { label: "How to use this site", href: "https://breakingnewsenglish.com/help.html" },
  { label: "Contact", href: "https://breakingnewsenglish.com" },
  { label: "Privacy policy", href: "https://breakingnewsenglish.com" },
  { label: "More free sites", href: "https://freeeslmaterials.com/sean_banville_lessons.html" },
]

function FooterLinkCol({ title, links }: { title: string; links: typeof LESSONS_LINKS }) {
  return (
    <Box>
      <Typography
        variant="overline"
        sx={{ display: "block", color: "text.secondary", mb: 2, letterSpacing: "0.06em", fontWeight: 600 }}
      >
        {title}
      </Typography>
      {links.map((link) => (
        <Typography
          key={link.label}
          component="a"
          href={link.href}
          variant="body2"
          sx={{
            display: "block",
            lineHeight: 2.4,
            color: (link as { accent?: boolean }).accent ? "#2b4fda" : "text.primary",
            cursor: "pointer",
            textDecoration: "none",
            transition: "color 150ms ease",
            "&:hover": { color: "text.secondary" },
          }}
        >
          {link.label}
        </Typography>
      ))}
    </Box>
  )
}

export default function Footer() {
  return (
    <Box
      component="footer"
      id="about"
      sx={{
        backgroundColor: "#eff2f7",
        borderTop: "1px solid rgba(33,34,38,0.08)",
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 5 },
        px: { xs: 2, md: 3.5 },
      }}
    >
      <Box sx={{ maxWidth: 1440, mx: "auto" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "2fr 1fr 1fr 1fr",
            },
            gap: { xs: 4, md: 8 },
            mb: 5,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5 }}>
              Breaking News English
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", maxWidth: 240, lineHeight: 1.6, mb: 3 }}
            >
              Free ESL/EFL news lessons. 3,629 lessons across 7 levels. Since 2004.
            </Typography>
            <Stack direction="row" spacing={1}>
              {[
                { icon: <ShareIcon fontSize="small" />, label: "Share" },
                { icon: <RssFeedIcon fontSize="small" />, label: "RSS" },
                { icon: <EmailIcon fontSize="small" />, label: "Email" },
              ].map(({ icon, label }) => (
                <IconButton
                  key={label}
                  aria-label={label}
                  size="small"
                  sx={{
                    width: 40,
                    height: 40,
                    border: "1px solid rgba(33,34,38,0.12)",
                    borderRadius: "50%",
                    color: "#45474d",
                    "&:hover": { backgroundColor: "#e1e6ec" },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          <FooterLinkCol title="Lessons" links={LESSONS_LINKS} />
          <FooterLinkCol title="Levels" links={LEVELS_LINKS} />
          <FooterLinkCol title="About" links={ABOUT_LINKS} />
        </Box>

        <Box
          sx={{
            pt: 3,
            borderTop: "1px solid rgba(33,34,38,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            © 2004–2026 Sean Banville
          </Typography>
          <Stack direction="row" spacing={3}>
            {["Privacy", "Terms", "Sitemap"].map((t) => (
              <Typography
                key={t}
                component="a"
                href="https://breakingnewsenglish.com"
                variant="caption"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "text.primary" } }}
              >
                {t}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
