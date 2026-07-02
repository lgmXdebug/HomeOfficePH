import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>🇵🇭 For Remote Workers in the Philippines</span>
          <h1 className={styles.headline}>
            Build a Home Office<br />
            <em>You Actually Love</em>
          </h1>
          <p className={styles.sub}>
            Honest reviews, budget-friendly picks, and expert guides
            for desks, chairs, lighting, and everything in between —
            curated for Filipino remote workers.
          </p>
          <div className={styles.actions}>
            <a href="#categories" className={styles.btnPrimary}>Browse by Category</a>
            <a href="#reviews" className={styles.btnSecondary}>Read Latest Reviews</a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>120+</span>
              <span className={styles.statLabel}>Products Reviewed</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>50+</span>
              <span className={styles.statLabel}>Buying Guides</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>₱0</span>
              <span className={styles.statLabel}>Paid Reviews</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.deskCard}>
            <div className={styles.monitor}>
              <div className={styles.screen}>
                <div className={styles.screenLine} />
                <div className={styles.screenLine} style={{ width: '70%' }} />
                <div className={styles.screenLine} style={{ width: '85%' }} />
                <div className={styles.screenAccent} />
              </div>
              <div className={styles.stand} />
              <div className={styles.base} />
            </div>
            <div className={styles.deskSurface}>
              <div className={styles.keyboard} />
              <div className={styles.mouse} />
              <div className={styles.plant}>🌿</div>
              <div className={styles.lamp}>💡</div>
            </div>
            <div className={styles.badge}>
              <span>⭐ Top Pick 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {['Standing Desks', 'Ergonomic Chairs', 'Monitor Arms', 'Webcams', 'Ring Lights', 'Mechanical Keyboards', 'Desk Organizers', 'USB Hubs', 'Noise-Cancelling Headphones', 'Desk Lamps',
            'Standing Desks', 'Ergonomic Chairs', 'Monitor Arms', 'Webcams', 'Ring Lights', 'Mechanical Keyboards', 'Desk Organizers', 'USB Hubs', 'Noise-Cancelling Headphones', 'Desk Lamps'
          ].map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              {item} <span className={styles.tickerDot}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
