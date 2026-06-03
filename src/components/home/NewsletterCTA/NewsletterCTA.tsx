"use client"

import { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Collapse from "@mui/material/Collapse"
import Alert from "@mui/material/Alert"

type Status = "idle" | "loading" | "success" | "error"

export default function NewsletterCTA() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    setTimeout(() => {
      console.log("Newsletter signup:", email)
      setStatus("success")
      setEmail("")
    }, 800)
  }

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f8f9fc",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 3.5 },
        textAlign: "center",
      }}
    >
      <Box sx={{ maxWidth: 560, mx: "auto" }}>
        <Typography
          variant="overline"
          sx={{ display: "block", color: "text.secondary", mb: 2, letterSpacing: "0.1em" }}
        >
          Stay updated
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 300,
            letterSpacing: "-0.02em",
            fontSize: { xs: "2rem", md: "2.5rem", lg: "2.75rem" },
            mb: 2,
          }}
        >
          2 new lessons, every week
        </Typography>

        <Typography variant="body1" sx={{ color: "text.secondary", mb: 5 }}>
          Free · No spam · Join 50,000+ learners
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            gap: 1.5,
            flexDirection: { xs: "column", sm: "row" },
            maxWidth: 460,
            mx: "auto",
            mb: 2,
          }}
        >
          <TextField
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            fullWidth
            required
            disabled={status === "loading" || status === "success"}
            variant="outlined"
            slotProps={{ htmlInput: { "aria-label": "Email address" } }}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: 9999, height: 48 },
              "& .MuiOutlinedInput-input": { py: 0 },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={status === "loading" || status === "success"}
            sx={{ borderRadius: 9999, whiteSpace: "nowrap", height: 48, flexShrink: 0 }}
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </Button>
        </Box>

        <Collapse in={status === "success"}>
          <Alert severity="success" sx={{ borderRadius: 3, maxWidth: 460, mx: "auto", mb: 2 }}>
            ✓ You&rsquo;re subscribed! Check your inbox.
          </Alert>
        </Collapse>

        <Collapse in={status === "error"}>
          <Alert severity="error" sx={{ borderRadius: 3, maxWidth: 460, mx: "auto", mb: 2 }}>
            Something went wrong. Please try again.
          </Alert>
        </Collapse>

        <Typography variant="caption" sx={{ display: "block", color: "text.secondary" }}>
          Join 50,000+ teachers and learners in 180+ countries
        </Typography>
      </Box>
    </Box>
  )
}
