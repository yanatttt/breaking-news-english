export interface Lesson {
  id: string
  slug: string
  title: string
  topic: string
  levelMin: number
  levelMax: number
  cefr: string
  difficulty: "easier" | "harder"
  publishedAt: string
  activityCount: number
  url?: string
}

export type Topic =
  | "All"
  | "World News"
  | "Technology"
  | "Health"
  | "Business"
  | "Science"
  | "Environment"
  | "Education"
  | "Lifestyle"
  | "People"

export type Difficulty = "all" | "easier" | "harder"
export type SortOrder = "newest" | "oldest"
