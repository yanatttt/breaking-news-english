import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer} id="about">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>Breaking News English</div>
            <p className={styles.tagline}>
              Free ESL/EFL lessons based on real news stories. 3,629 lessons
              across 7 levels. Since 2004.
            </p>
            <div className={styles.socialRow}>
              <button aria-label="Share">
                <span className="material-symbols-outlined">share</span>
              </button>
              <button aria-label="RSS Feed">
                <span className="material-symbols-outlined">rss_feed</span>
              </button>
              <button aria-label="Email">
                <span className="material-symbols-outlined">mail_outline</span>
              </button>
            </div>
          </div>

          <div className={styles.linkCol}>
            <div className={styles.colTitle}>Lessons</div>
            <a href="https://breakingnewsenglish.com">All 3,629 lessons</a>
            <a href="https://breakingnewsenglish.com">Easier lessons</a>
            <a href="https://breakingnewsenglish.com">Harder lessons</a>
            <a href="https://breakingnewsenglish.com/business_english.html">Business English</a>
            <a href="https://breakingnewsenglish.com">Holiday lessons</a>
            <a href="https://breakingnewsenglish.com/podcast.html">Podcast</a>
          </div>

          <div className={styles.linkCol}>
            <div className={styles.colTitle}>Levels</div>
            <a href="https://breakingnewsenglish.com">A1 · Level 0</a>
            <a href="https://breakingnewsenglish.com">A2 · Level 1</a>
            <a href="https://breakingnewsenglish.com">B1 · Levels 2–3</a>
            <a href="https://breakingnewsenglish.com">B2 · Levels 4–5</a>
            <a href="https://breakingnewsenglish.com">C1 · Level 6</a>
            <hr className={styles.divider} />
            <a href="https://breakingnewsenglish.com/help.html" className={styles.levelLink}>
              Which level am I?
            </a>
          </div>

          <div className={styles.linkCol}>
            <div className={styles.colTitle}>About</div>
            <a href="https://breakingnewsenglish.com">About Sean Banville</a>
            <a href="https://breakingnewsenglish.com">For teachers</a>
            <a href="https://breakingnewsenglish.com/help.html">How to use this site</a>
            <a href="https://breakingnewsenglish.com">Contact</a>
            <a href="https://breakingnewsenglish.com">Privacy policy</a>
            <a href="https://freeeslmaterials.com/sean_banville_lessons.html">More free sites</a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>© 2004–2026 Sean Banville</span>
          <div className={styles.bottomLinks}>
            <a href="https://breakingnewsenglish.com">Privacy</a>
            <a href="https://breakingnewsenglish.com">Terms</a>
            <a href="https://breakingnewsenglish.com">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
