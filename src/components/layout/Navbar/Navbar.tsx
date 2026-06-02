import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          Breaking News English
        </a>
        <div className={styles.navLinks}>
          <a href="#lessons">Lessons</a>
          <a href="#activities">Practice</a>
          <a href="#about">About</a>
        </div>
        <div className={styles.actions}>
          <button aria-label="Search">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button aria-label="My saved lessons">
            <span className="material-symbols-outlined">bookmark</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
