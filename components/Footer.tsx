import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.top}>

          <div className={styles.brand}>
            <h2>HomeOfficePH</h2>

            <p>
              Helping Filipino remote workers build productive,
              comfortable, and affordable home offices.
            </p>
          </div>

          <div className={styles.column}>
            <h3>Explore</h3>

            <Link href="/reviews">Reviews</Link>
            <Link href="/best-picks">Best Picks</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/categories">Categories</Link>
          </div>

          <div className={styles.column}>
            <h3>Company</h3>

            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>

          <div className={styles.column}>
            <h3>Resources</h3>

            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/affiliate-disclosure">
              Affiliate Disclosure
            </Link>
            <Link href="/terms-of-use">
              Terms of Use
            </Link>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} HomeOfficePH. All rights reserved.
          </p>

          <p>
            Some links on this website may be affiliate links. We may earn a
            commission at no additional cost to you.
          </p>
        </div>

      </div>
    </footer>
  );
}