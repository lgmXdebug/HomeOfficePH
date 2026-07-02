import styles from './WhyUs.module.css'

const reasons = [
  {
    icon: '🔍',
    title: 'Actually Tested',
    desc: 'We buy and use every product we review. No freebies, no bias — just honest, first-hand experience.',
  },
  {
    icon: '🇵🇭',
    title: 'Made for Filipinos',
    desc: 'We factor in local availability, peso pricing, and Philippine shipping realities — not just USD price tags.',
  },
  {
    icon: '💸',
    title: 'Budget-Aware',
    desc: 'We cover every price range. From ₱500 upgrades to ₱50,000 dream setups — we help you spend smarter.',
  },
  {
    icon: '📊',
    title: 'Data-Backed',
    desc: 'Every recommendation is backed by hands-on testing, user feedback, and performance benchmarks.',
  },
]

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Why Home Office PH?</span>
          <h2 className={styles.title}>Reviews You Can Actually Trust</h2>
          <p className={styles.sub}>
            There are a lot of affiliate sites out there copy-pasting Amazon descriptions.
            We're not that. We test, we compare, and we tell you the truth — even when
            a product isn't worth your money.
          </p>
          <a href="#about" className={styles.link}>Learn more about us →</a>
        </div>

        <div className={styles.right}>
          {reasons.map((r) => (
            <div key={r.title} className={styles.card}>
              <span className={styles.icon}>{r.icon}</span>
              <div>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardDesc}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
