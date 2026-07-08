import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../privacy-policy/page.module.css'

export default function AffiliateDisclosurePage() {
  return (
    <main>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Legal</span>
          <h1 className={styles.title}>Affiliate Disclosure</h1>
          <p className={styles.sub}>Last updated: July 3, 2026</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>

          <h2>Our Commitment to Transparency</h2>
          <p>HomeOfficePH believes in full transparency with our readers. This page explains how we earn money and how that affects (or doesn't affect) our content.</p>

          <h2>What Are Affiliate Links?</h2>
          <p>Some links on HomeOfficePH are affiliate links. This means when you click a link and make a purchase, we may earn a small commission from the retailer — at no extra cost to you. The price you pay is exactly the same whether you use our link or go directly to the retailer.</p>

          <h2>Which Programs Do We Participate In?</h2>
          <ul>
            <li><strong>Shopee Affiliate Program</strong> — for products available on Shopee Philippines</li>
            <li><strong>Lazada Affiliate Program</strong> — for products available on Lazada Philippines</li>
            <li><strong>Amazon Associates</strong> — for products available on Amazon</li>
          </ul>

          <h2>Does This Affect Our Reviews?</h2>
          <p><strong>No.</strong> Our editorial opinions are never influenced by affiliate relationships. We recommend what we genuinely believe is best for our readers — even when that means recommending a product that earns us a lower commission or no commission at all.</p>
          <p>We have never and will never accept payment in exchange for a positive review. Brands cannot buy our recommendations.</p>

          <h2>How We Choose Products to Review</h2>
          <p>We choose products based on reader interest, market popularity, and our own curiosity. We purchase most products we review with our own money. Occasionally, we receive review units from brands — when this happens, we disclose it clearly in the review and it does not affect our rating or recommendation.</p>

          <h2>FTC Compliance</h2>
          <p>In accordance with the FTC's guidelines on endorsements and testimonials, we disclose our affiliate relationships clearly. You will see a disclosure note at the bottom of any article that contains affiliate links.</p>

          <h2>Questions?</h2>
          <p>If you have any questions about our affiliate relationships or how we make money, we're happy to answer them. Contact us at <a href="mailto:hello@homeofficeph.com">hello@homeofficeph.com</a></p>

        </div>
      </section>
      <Footer />
    </main>
  )
}
