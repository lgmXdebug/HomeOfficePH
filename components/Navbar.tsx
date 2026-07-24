'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'

const navItems = [
  { label: 'Best Picks',href: '/best-picks', },
  { label: 'Reviews', href: '/reviews', },
  { label: 'Blog', href: '/blog', },
  { label: 'About', href: '/about', },
  { label: 'Contact', href: '/contact', },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/brand/logo.png"
            alt="HomeOfficePH"
            width={360}
            height={110}
            priority
            className={styles.logoImage}
          />
        </Link>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={
                pathname === item.href
                  ? styles.activeLink
                  : styles.link
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
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
