import styles from "./FreeSites.module.css"

const SITES = [
  { name: "1-Minute Listening", url: "https://1minuteenglish.com" },
  { name: "ESL Discussions", url: "https://esldiscussions.com" },
  { name: "Famous People", url: "https://famouspeople lessons.com" },
  { name: "Holiday Lessons", url: "https://holidaysenglish.com" },
  { name: "Business English", url: "https://businessenglishsite.com" },
  { name: "Lessons on Movies", url: "https://moviesenglish.com" },
  { name: "American Presidents", url: "https://americanpresidentsenglish.com" },
  { name: "Free ESL Materials", url: "https://freeeslmaterials.com" },
]

export default function FreeSites() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>More by Sean Banville</h2>
        <div className={styles.chips}>
          {SITES.map((site) => (
            <a
              key={site.name}
              href={site.url}
              className={styles.chip}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
