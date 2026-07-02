import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './about.module.css'

const values = [
  { icon: '🔍', title: 'We Actually Test', desc: 'Every product we recommend is purchased with our own money and tested in real home office environments across the Philippines.' },
  { icon: '🚫', title: 'No Paid Reviews', desc: 'We have never accepted payment for a positive review. Brands cannot buy our recommendations — only our readers can trust them.' },
  { icon: '🇵🇭', title: 'Built for Filipinos', desc: 'We only recommend products available in the Philippines, with Philippine pricing, local shipping info, and peso comparisons.' },
  { icon: '📝', title: 'Always Updated', desc: 'We revisit and update our reviews regularly. Prices change, new models come out, and our content should reflect that.' },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>About Us</span>
          <h1 className={styles.title}>We're Just WFH Filipinos<br /><em>Who Got Tired of Bad Advice</em></h1>
        </div>
      </section>

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyEmoji}>🖥️</div>
            <div className={styles.storyText}>
              <h2 className={styles.storyTitle}>Our Story</h2>
              <p>HomeOfficePH started in 2024 when our founder — a full-time remote worker in Manila — spent three months buying the wrong chair, the wrong desk, and the wrong webcam before finally figuring out what actually works.</p>
              <p>The problem wasn't a lack of reviews online. It was that most reviews were written for American budgets, American Amazon links, and American home sizes. Nothing was made for someone working in a 30sqm condo in Quezon City with a ₱15,000 budget.</p>
              <p>So we built it ourselves. HomeOfficePH is the resource we wish we had when we started — honest, local, and actually useful.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.valuesTitle}>What We Stand For</h2>
          <div className={styles.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueName}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className={styles.disclosure}>
        <div className={styles.container}>
          <div className={styles.disclosureBox}>
            <h3 className={styles.disclosureTitle}>📢 Affiliate Disclosure</h3>
            <p>HomeOfficePH participates in affiliate programs including Amazon Associates, Lazada Affiliate, and Shopee Affiliate. When you click our links and make a purchase, we may earn a small commission at no extra cost to you. This is how we keep the site running and the reviews free.</p>
            <p>Our editorial opinions are never influenced by affiliate relationships. We recommend what we genuinely believe is best for our readers.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
