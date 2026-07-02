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
              <a href="#">Ergonomic Chairs</a>
              <a href="#">Standing Desks</a>
              <a href="#">Lighting</a>
              <a href="#">Keyboards</a>
            </div>
            <div className={styles.col}>
              <span className={styles.colTitle}>Content</span>
              <a href="#">Latest Reviews</a>
              <a href="#">Buying Guides</a>
              <a href="#">Best Picks</a>
              <a href="#">Budget Builds</a>
            </div>
            <div className={styles.col}>
              <span className={styles.colTitle}>Site</span>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Affiliate Disclosure</a>
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
