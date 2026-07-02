'use client'
import { useState } from 'react'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (email) setSubmitted(true)
  }

  return (
    <section className={styles.section} id="newsletter">
      <div className={styles.container}>
        <div className={styles.inner}>
          <span className={styles.emoji}>📬</span>
          <h2 className={styles.title}>Get the Free WFH Setup Guide</h2>
          <p className={styles.sub}>
            Join 2,000+ Filipino remote workers. Get our free
            <strong> "₱20,000 Dream Setup Guide"</strong> plus weekly reviews straight to your inbox.
          </p>

          {submitted ? (
            <div className={styles.success}>
              🎉 You're in! Check your inbox for the free guide.
            </div>
          ) : (
            <div className={styles.form}>
              <input
                type="email"
                placeholder="yourname@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={styles.input}
              />
              <button onClick={handleSubmit} className={styles.btn}>
                Get Free Guide
              </button>
            </div>
          )}

          <p className={styles.note}>No spam. Unsubscribe anytime. 🔒</p>
        </div>
      </div>
    </section>
  )
}
