export const LEVEL_COLORS = {
  A1: {
    bg: "#FFE4EE",
    text: "#8B1A4A",
    border: "#FFB3CE",
    label: "A1 · Beginner",
    chipSx: { backgroundColor: "#FFE4EE", color: "#8B1A4A", border: "1px solid #FFB3CE" },
  },
  A2: {
    bg: "#FFE8D6",
    text: "#7D3200",
    border: "#FFBF96",
    label: "A2 · Elementary",
    chipSx: { backgroundColor: "#FFE8D6", color: "#7D3200", border: "1px solid #FFBF96" },
  },
  B1: {
    bg: "#FFF8C4",
    text: "#6B5000",
    border: "#FFE566",
    label: "B1 · Pre-Intermediate",
    chipSx: { backgroundColor: "#FFF8C4", color: "#6B5000", border: "1px solid #FFE566" },
  },
  B2: {
    bg: "#D6F5E3",
    text: "#0A5C36",
    border: "#8FE0B4",
    label: "B2 · Intermediate",
    chipSx: { backgroundColor: "#D6F5E3", color: "#0A5C36", border: "1px solid #8FE0B4" },
  },
  C1: {
    bg: "#DDEEFF",
    text: "#0D3B7A",
    border: "#90C4FF",
    label: "C1 · Upper-Intermediate",
    chipSx: { backgroundColor: "#DDEEFF", color: "#0D3B7A", border: "1px solid #90C4FF" },
  },
}

export type CEFRLevel = keyof typeof LEVEL_COLORS

export function getLevelColor(cefr: string) {
  const key = (cefr?.toUpperCase().slice(0, 2)) as CEFRLevel
  return LEVEL_COLORS[key] ?? LEVEL_COLORS["B1"]
}

export const DIFFICULTY_COLORS = {
  easier: {
    bg: "#D6F5E3",
    text: "#0A5C36",
    border: "#8FE0B4",
    chipSx: { backgroundColor: "#D6F5E3", color: "#0A5C36", border: "1px solid #8FE0B4" },
  },
  harder: {
    bg: "#DDEEFF",
    text: "#0D3B7A",
    border: "#90C4FF",
    chipSx: { backgroundColor: "#DDEEFF", color: "#0D3B7A", border: "1px solid #90C4FF" },
  },
}
