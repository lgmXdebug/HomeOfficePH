import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Legal</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.sub}>Last updated: July 3, 2026</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>

          <h2>1. Information We Collect</h2>
          <p>HomeOfficePH ("we", "us", or "our") collects information you voluntarily provide when you subscribe to our newsletter, contact us, or interact with our website. This may include your name and email address.</p>
          <p>We also automatically collect certain information when you visit our site, including your IP address, browser type, pages visited, and time spent on pages. This is collected through standard web analytics tools.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Send you our newsletter and product recommendations (only if you subscribed)</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Analyze site traffic and improve our content</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Cookies</h2>
          <p>Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use cookies for analytics and to remember your preferences. You can disable cookies in your browser settings, though this may affect site functionality.</p>

          <h2>4. Third-Party Services</h2>
          <p>We use third-party services including Google Analytics for website traffic analysis. These services have their own privacy policies. We also participate in affiliate programs (Lazada, Shopee, Amazon) — when you click our affiliate links, those platforms may use cookies to track purchases.</p>

          <h2>5. Data Sharing</h2>
          <p>We do not sell, trade, or transfer your personal information to third parties. We may share anonymized, aggregated data for analytical purposes.</p>

          <h2>6. Data Security</h2>
          <p>We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

          <h2>7. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at hello@homeofficeph.com. You may also unsubscribe from our newsletter at any time using the unsubscribe link in any email we send.</p>

          <h2>8. Children's Privacy</h2>
          <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children under 13.</p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.</p>

          <h2>10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at: <a href="mailto:hello@homeofficeph.com">hello@homeofficeph.com</a></p>

        </div>
      </section>
      <Footer />
    </main>
  )
}
