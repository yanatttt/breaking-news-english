import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: '"Google Sans", "Roboto", Arial, sans-serif',
    h1: { fontSize: "2.25rem", fontWeight: 400, lineHeight: 1.06, letterSpacing: "-0.0075em" },
    h2: { fontSize: "2rem", fontWeight: 400, lineHeight: 1.06, letterSpacing: "-0.01em" },
    h3: { fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.06 },
    h4: { fontSize: "1.5rem", fontWeight: 400 },
    h5: { fontSize: "1.25rem", fontWeight: 500 },
    h6: { fontSize: "1.125rem", fontWeight: 500 },
    body1: { fontSize: "1rem", lineHeight: 1.5 },
    body2: { fontSize: "0.875rem", lineHeight: 1.43 },
    caption: { fontSize: "0.75rem", lineHeight: 1.66 },
    overline: { fontSize: "0.625rem", letterSpacing: "0.1em", textTransform: "uppercase" },
    subtitle1: { fontSize: "1rem", fontWeight: 500, lineHeight: 1.5 },
    subtitle2: { fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.43 },
  },
  palette: {
    mode: "light",
    primary: { main: "#121317", contrastText: "#ffffff" },
    secondary: { main: "#45474d", contrastText: "#ffffff" },
    background: { default: "#ffffff", paper: "#f8f9fc" },
    text: {
      primary: "#121317",
      secondary: "#45474d",
      disabled: "rgba(33,34,38,0.38)",
    },
    divider: "rgba(33,34,38,0.12)",
    error: { main: "#be1c1b" },
    warning: { main: "#e57e00" },
    success: { main: "#008052" },
    info: { main: "#2b4fda" },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 9999,
          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.90625rem",
          fontFamily: "inherit",
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },
        contained: {
          backgroundColor: "#121317",
          color: "#ffffff",
          "&:hover": { backgroundColor: "#121317", opacity: 0.88 },
        },
        outlined: {
          borderColor: "rgba(33,34,38,0.15)",
          color: "#121317",
          "&:hover": { backgroundColor: "rgba(33,34,38,0.04)", borderColor: "rgba(33,34,38,0.3)" },
        },
        text: {
          color: "#45474d",
          "&:hover": { backgroundColor: "rgba(33,34,38,0.04)" },
        },
        sizeLarge: { height: 48, padding: "0 28px" },
        sizeMedium: { height: 40, padding: "0 24px" },
        sizeSmall: { height: 32, padding: "0 16px", fontSize: "0.8125rem" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          fontFamily: "inherit",
          fontWeight: 500,
          fontSize: "0.75rem",
          height: 28,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "none",
          border: "1px solid rgba(47,48,52,0.15)",
          backgroundColor: "#ffffff",
          transition:
            "transform 200ms cubic-bezier(0.4,0,0.2,1), box-shadow 200ms cubic-bezier(0.4,0,0.2,1)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 24px rgba(33,34,38,0.08)",
          },
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          "&:hover .MuiCardActionArea-focusHighlight": { opacity: 0 },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { fontFamily: "inherit", fontSize: "1rem" },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(33,34,38,0.12)" },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(33,34,38,0.3)" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#121317",
            borderWidth: "1.5px",
          },
        },
        input: { padding: "10px 20px", height: "auto" },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.875rem",
          minHeight: 36,
          borderRadius: 9999,
          padding: "6px 16px",
          minWidth: "unset",
          color: "#45474d",
          border: "1.5px solid rgba(33,34,38,0.12)",
          marginRight: 4,
          "&.Mui-selected": {
            backgroundColor: "#121317",
            color: "#ffffff",
            borderColor: "#121317",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { display: "none" },
        root: { minHeight: 40 },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 36,
          boxShadow: "0 4px 32px rgba(33,34,38,0.12)",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1.5px solid rgba(33,34,38,0.12)",
          marginBottom: 8,
          padding: "14px 16px",
          "&:hover": {
            backgroundColor: "rgba(33,34,38,0.04)",
            borderColor: "rgba(33,34,38,0.24)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": { backgroundColor: "rgba(33,34,38,0.04)" },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": { boxSizing: "border-box" },
        body: {
          fontFamily: '"Google Sans", "Roboto", Arial, sans-serif',
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        a: { textDecoration: "none", color: "inherit" },
      },
    },
  },
})

export default theme
