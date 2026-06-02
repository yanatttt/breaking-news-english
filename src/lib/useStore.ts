"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Lesson, Difficulty, SortOrder } from "./types"

interface BNEStore {
  selectedLevel: string | null
  setSelectedLevel: (level: string) => void
  lastLesson: Pick<Lesson, "id" | "title" | "cefr" | "topic" | "slug"> | null
  setLastLesson: (lesson: BNEStore["lastLesson"]) => void
  bookmarks: string[]
  toggleBookmark: (id: string) => void
  streak: number
  lastVisitDate: string | null
  updateStreak: () => void
  activeTopic: string
  setActiveTopic: (topic: string) => void
  activeDifficulty: Difficulty
  setActiveDifficulty: (d: Difficulty) => void
  sortOrder: SortOrder
  setSortOrder: (s: SortOrder) => void
}

const useStore = create<BNEStore>()(
  persist(
    (set, get) => ({
      selectedLevel: null,
      setSelectedLevel: (level) => set({ selectedLevel: level }),

      lastLesson: null,
      setLastLesson: (lesson) => set({ lastLesson: lesson }),

      bookmarks: [],
      toggleBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(id)
            ? state.bookmarks.filter((b) => b !== id)
            : [...state.bookmarks, id],
        })),

      streak: 0,
      lastVisitDate: null,
      updateStreak: () => {
        const today = new Date().toDateString()
        const { lastVisitDate, streak } = get()
        if (lastVisitDate === today) return
        const yesterday = new Date(Date.now() - 86400000).toDateString()
        set({
          streak: lastVisitDate === yesterday ? streak + 1 : 1,
          lastVisitDate: today,
        })
      },

      activeTopic: "All",
      setActiveTopic: (topic) => set({ activeTopic: topic }),

      activeDifficulty: "all",
      setActiveDifficulty: (d) => set({ activeDifficulty: d }),

      sortOrder: "newest",
      setSortOrder: (s) => set({ sortOrder: s }),
    }),
    { name: "bne-store" }
  )
)

export default useStore
