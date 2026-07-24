import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './terms-of-use.module.css'

export default function TermsOfUsePage() {
  return (
    <main>
      <Navbar />
        <section className={styles.hero}>
            <div className={styles.heroInner}>
                <span className={styles.eyebrow}>TERMS OF USE</span>

                <h1 className={styles.title}>
                Terms of Use
                </h1>

                <p className={styles.sub}>
                Please read these terms carefully before using HomeOfficePH.
                </p>

                <p className={styles.updated}>
                Last updated: July 3, 2026
                </p>
            </div>
        </section>

        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.contentCard}>
                    <h2>1. Acceptance of Terms</h2>

                    <p>
                    By accessing and using HomeOfficePH, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please discontinue using this website.
                    </p>

                    <h2>2. Website Content</h2>

                    <p>
                    The information provided on HomeOfficePH is intended for general informational and educational purposes only. While we strive to keep our content accurate and up to date, we make no guarantees regarding the completeness, reliability, or accuracy of any information.
                    </p>

                    <h2>3. Affiliate Disclosure</h2>

                    <p>
                    Some links on this website are affiliate links. We may earn a commission if you purchase products through these links, at no additional cost to you. Affiliate relationships do not influence our editorial opinions or recommendations.
                    </p>

                    <h2>4. Intellectual Property</h2>

                    <p>
                    All articles, graphics, logos, branding, and other original content published on HomeOfficePH are the property of HomeOfficePH unless otherwise stated. You may not copy, reproduce, or distribute our content without prior written permission.
                    </p>

                    <h2>5. User Responsibilities</h2>

                    <p>
                    You agree to use this website only for lawful purposes and in a manner that does not interfere with the operation of the site or the experience of other users.
                    </p>

                    <h2>6. External Links</h2>

                    <p>
                    HomeOfficePH may contain links to third-party websites. We are not responsible for the content, policies, or practices of those external websites.
                    </p>

                    <h2>7. Disclaimer</h2>

                    <p>
                    Product availability, pricing, specifications, and promotions may change without notice. Readers should verify information directly with the retailer before making purchasing decisions.
                    </p>

                    <h2>8. Limitation of Liability</h2>

                    <p>
                    HomeOfficePH shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on its content.
                    </p>

                    <h2>9. Changes to These Terms</h2>

                    <p>
                    We reserve the right to modify these Terms of Use at any time. Updates will be posted on this page together with the revised effective date.
                    </p>

                    <h2>10. Contact Us</h2>

                    <p>
                    If you have questions regarding these Terms of Use, please contact us through our Contact page.
                    </p>
                </div>
            </div>
        </section>
      <Footer />
    </main>
  )
}
