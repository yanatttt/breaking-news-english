"use client"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import SearchIcon from "@mui/icons-material/Search"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(33,34,38,0.08)",
        color: "#121317",
      }}
    >
      <Toolbar
        sx={{
          gap: { xs: 1.5, md: 3 },
          minHeight: "64px !important",
          px: { xs: 2, md: 3.5 },
        }}
      >
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "#121317",
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Breaking News English
        </Typography>

        <Box
          sx={{
            flex: 1,
            maxWidth: 320,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 0.75,
            backgroundColor: "#f8f9fc",
            borderRadius: 9999,
            border: "1px solid transparent",
            transition: "border-color 150ms ease, background-color 150ms ease",
            "&:focus-within": {
              borderColor: "rgba(33,34,38,0.2)",
              backgroundColor: "#fff",
            },
          }}
        >
          <SearchIcon sx={{ color: "#45474d", fontSize: 20, flexShrink: 0 }} />
          <InputBase
            placeholder="Search lessons…"
            sx={{ flex: 1, fontSize: "0.9rem", "& input": { padding: 0 } }}
            inputProps={{ "aria-label": "Search lessons" }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 1, ml: "auto", alignItems: "center" }}>
          <Button
            variant="outlined"
            size="small"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              borderColor: "rgba(33,34,38,0.15)",
              color: "#121317",
            }}
          >
            Topics
          </Button>
          <Button
            variant="outlined"
            size="small"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              borderColor: "rgba(33,34,38,0.15)",
              color: "#121317",
            }}
          >
            Levels
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<BookmarkBorderIcon />}
            sx={{
              borderColor: "rgba(33,34,38,0.15)",
              color: "#121317",
            }}
          >
            <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
              My list
            </Box>
          </Button>
          <IconButton
            aria-label="Search"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <SearchIcon sx={{ color: "#121317" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
