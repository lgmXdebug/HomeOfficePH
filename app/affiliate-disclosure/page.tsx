import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './affiliate-disclosure.module.css'

export default function AffiliateDisclosurePage() {
  return (
    <main>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>AFFILIATE DISCLOSURE</span>

          <h1 className={styles.title}>
            Affiliate Disclosure
          </h1>

          <p className={styles.sub}>
            Transparency matters. Here's how HomeOfficePH earns money while keeping our reviews honest and independent.
          </p>

          <p className={styles.updated}>
            Last updated: July 3, 2026
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contentCard}>
            <h2>1. Our Mission</h2>

            <p>
            HomeOfficePH was created to help Filipino remote workers make informed purchasing decisions through honest reviews, buying guides, and carefully researched recommendations.
            </p>

            <h2>2. Affiliate Links</h2>

            <p>
            Some links on HomeOfficePH are affiliate links. If you click one of these links and make a purchase, we may earn a small commission from the retailer.
            </p>

            <p>
            This comes at no additional cost to you and helps support the operation of this website.
            </p>

            <h2>3. Editorial Independence</h2>

            <p>
            Affiliate partnerships never influence our opinions. We do not accept payment in exchange for positive reviews, and we only recommend products that we believe provide genuine value.
            </p>

            <h2>4. How Affiliate Commissions Help</h2>

            <p>
            Affiliate commissions help cover the costs of website hosting, domain registration, research, content creation, and ongoing improvements so we can continue providing free resources for our readers.
            </p>

            <h2>5. Affiliate Programs</h2>

            <p>
            HomeOfficePH may participate in affiliate programs including:
            </p>

            <ul>
              <li>Lazada Affiliate Program</li>
              <li>Shopee Affiliate Program</li>
              <li>Amazon Associates (if applicable)</li>
            </ul>

            <h2>6. No Extra Cost to You</h2>

            <p>
            Using our affiliate links does not increase the price you pay. The retailer pays us a commission after a qualifying purchase.
            </p>

            <h2>7. Our Promise</h2>

            <p>
            Our priority is to earn your trust—not commissions. If we believeS a product is not worth your money, we will say so regardless of any affiliate relationship.
            </p>

            <h2>8. Contact Us</h2>

            <p>
            If you have questions about this Affiliate Disclosure, please contact us through our Contact page.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
