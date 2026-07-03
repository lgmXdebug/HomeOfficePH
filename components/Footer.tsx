import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>🖥️ Home<span>Office</span>PH</span>
            <p className={styles.tagline}>
              Honest home office reviews for Filipino remote workers.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.col}>
              <span className={styles.colTitle}>Categories</span>
              <a href="/blog?category=Chair%20Review">Ergonomic Chairs</a>
              <a href="/blog?category=Desk%20Guide">Standing Desks</a>
              <a href="/blog?category=Lighting">Lighting</a>
              <a href="/blog?category=Keyboard">Keyboards</a>
            </div>
            <div className={styles.col}>
              <span className={styles.colTitle}>Content</span>
              <a href="/blog">Latest Reviews</a>
              <a href="/blog">Buying Guides</a>
              <a href="/best-picks">Best Picks</a>
              <a href="/blog?category=Budget%20Picks">Budget Builds</a>
            </div>
            <div className={styles.col}>
              <span className={styles.colTitle}>Site</span>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/affiliate-disclosure">Affiliate Disclosure</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 HomeOfficePH. All rights reserved.</p>
          <p className={styles.disclosure}>
            Disclosure: HomeOfficePH earns commissions from qualifying purchases via affiliate links.
            This does not affect our editorial independence.
          </p>
        </div>
      </div>
    </footer>
  )
}
