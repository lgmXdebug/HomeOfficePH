'use client'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🖥️</span>
          <span className={styles.logoText}>
            Home<span className={styles.logoAccent}>Office</span>PH
          </span>
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          <li><a href="/best-picks">Best Picks</a></li>
          <li><a href="/reviews">Reviews</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <a href="#newsletter" className={styles.cta}>Get Free Guide</a>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
