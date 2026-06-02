"use client"

import { useEffect, useState } from "react"
import useStore from "@/lib/useStore"
import styles from "./LevelModal.module.css"

const LEVELS = [
  { cefr: "A1", name: "Beginner", levels: "Level 0" },
  { cefr: "A2", name: "Elementary", levels: "Level 1" },
  { cefr: "B1", name: "Pre-Intermediate", levels: "Levels 2–3" },
  { cefr: "B2", name: "Intermediate", levels: "Levels 4–5", popular: true },
  { cefr: "C1", name: "Upper-Intermediate", levels: "Level 6" },
]

export default function LevelModal() {
  const { selectedLevel, setSelectedLevel } = useStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || selectedLevel !== null) return null

  const handleSelect = (cefr: string) => {
    setSelectedLevel(cefr)
  }

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Choose your level">
      <div className={styles.modal}>
        <h2 className={styles.title}>What&rsquo;s your English level?</h2>
        <p className={styles.subtitle}>
          We&rsquo;ll show you the most relevant lessons first.
        </p>

        {LEVELS.map((lvl) => (
          <button
            key={lvl.cefr}
            className={styles.levelRow}
            onClick={() => handleSelect(lvl.cefr)}
            aria-label={`Select ${lvl.name} (${lvl.cefr})`}
          >
            <span className={styles.cefrCode}>{lvl.cefr}</span>
            <span className={styles.levelName}>
              {lvl.name}
              {lvl.popular && <span className={styles.popularBadge}>Most popular</span>}
            </span>
            <span className={styles.levelRange}>{lvl.levels}</span>
          </button>
        ))}

        <div className={styles.footer} onClick={() => handleSelect("B1")}>
          Not sure? Start with B1 →
        </div>
      </div>
    </div>
  )
}
