import styles from "./OnlineActivities.module.css"

const COLUMNS = [
  {
    icon: "print",
    label: "Print",
    links: ["27-page lesson (40 exercises)", "2-page MINI lesson"],
  },
  {
    icon: "speed",
    label: "Read",
    links: ["Speed Read (4 speeds)", "Cloze reading"],
  },
  {
    icon: "edit_note",
    label: "Grammar",
    links: ["Gap-fill", "Prepositions", "Word order", "20 questions"],
  },
  {
    icon: "spellcheck",
    label: "Spell",
    links: ["No letters", "Listen and spell"],
  },
  {
    icon: "dictionary",
    label: "Words",
    links: ["Word pairs", "Missing words"],
  },
]

export default function OnlineActivities() {
  return (
    <section className={styles.section} id="activities">
      <div className={styles.inner}>
        <h2 className={styles.heading}>What you can practice</h2>
        <div className={styles.grid}>
          {COLUMNS.map((col) => (
            <div key={col.label} className={styles.column}>
              <div className={styles.colHeader}>
                <span className="material-symbols-outlined">{col.icon}</span>
                <span className={styles.colLabel}>{col.label}</span>
              </div>
              <div className={styles.links}>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="https://breakingnewsenglish.com"
                    className={styles.activityLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
