"use client"

import { useState } from "react"
import styles from "./NewsletterCTA.module.css"

export default function NewsletterCTA() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>Stay updated</div>
        <h2 className={styles.title}>2 new lessons, every week</h2>
        <p className={styles.subtitle}>Free · No spam · Join 50,000+ learners</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.input}
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <button type="submit" className={styles.submitBtn}>
            Subscribe
          </button>
        </form>

        <p className={styles.socialProof}>
          Joined by teachers and learners in 180+ countries
        </p>
      </div>
    </section>
  )
}
