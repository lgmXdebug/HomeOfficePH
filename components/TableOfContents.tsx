'use client'
import { useState, useEffect } from 'react'
import styles from './TableOfContents.module.css'

interface TocItem {
  id: string
  text: string
  level: number
}

interface Props {
  headings: TocItem[]
}

export default function TableOfContents({ headings }: Props) {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-80px 0px -60% 0px' }
    )

    headings.forEach(h => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 2) return null

  return (
    <nav className={styles.toc}>
      <button className={styles.tocHeader} onClick={() => setOpen(o => !o)}>
        <span className={styles.tocTitle}>📋 Table of Contents</span>
        <span className={styles.tocToggle}>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <ol className={styles.tocList}>
          {headings.map((h, i) => (
            <li
              key={h.id}
              className={`${styles.tocItem} ${h.level === 3 ? styles.sub : ''} ${active === h.id ? styles.active : ''}`}
            >
              <a href={`#${h.id}`} className={styles.tocLink}>
                <span className={styles.tocNum}>{i + 1}.</span>
                {h.text}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  )
}
