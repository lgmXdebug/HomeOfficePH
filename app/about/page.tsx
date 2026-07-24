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
        <span className={styles.eyebrow}>ABOUT HOMEOFFICEPH</span>

        <h1 className={styles.title}>
          Helping Filipino Remote Workers
          <br />
          <em>Build Better Home Offices</em>
        </h1>

        <p className={styles.heroDescription}>
          HomeOfficePH is dedicated to helping Filipinos create productive,
          comfortable, and affordable workspaces through honest reviews,
          practical buying guides, and carefully researched recommendations.
        </p>
        </div>
      </section>

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyEmoji}>🖥️</div>
            <div className={styles.storyText}>
              <h2 className={styles.storyTitle}>Why HomeOfficePH Exists</h2>
              <p>
                HomeOfficePH started with a simple goal: to make choosing home office
                equipment easier for Filipino remote workers.
              </p>

              <p>
                After spending years working in IT and using a home office every day,
                I realized how difficult it was to find trustworthy recommendations
                that were actually relevant to the Philippine market. Many reviews
                focused on products that were unavailable locally or priced far beyond
                what most Filipinos were willing to spend.
              </p>

              <p>
                Instead of relying on generic advice, I created HomeOfficePH to share
                practical buying guides, honest reviews, and product recommendations
                that prioritize value, comfort, and productivity. Every article is
                written with one objective: to help readers make informed purchasing
                decisions with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <blockquote className={styles.quote}>
            "Our mission is simple: help every Filipino build a productive,
            comfortable, and affordable home office without wasting money on
            products that don't deliver."
          </blockquote>
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
            <p>
              HomeOfficePH participates in affiliate programs, including Lazada
              Affiliate and other trusted partner programs. If you purchase a product
              through one of our links, we may earn a small commission at no
              additional cost to you.
            </p>

            <p>
              These commissions help support the website and allow us to continue
              creating free, honest, and independent content. Affiliate partnerships
              never influence our recommendations or editorial decisions.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
