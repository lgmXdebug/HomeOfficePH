import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './reviews.module.css'

const reviews = [
  { name: 'Sihoo M57 Ergonomic Chair', rating: 4.8, price: '₱8,500', verdict: 'Best Buy', category: 'Chair', pros: ['Excellent lumbar support', 'Breathable mesh', 'Adjustable armrests'], cons: ['Assembly takes 45 mins', 'Limited color options'], emoji: '🪑', tagColor: '#6B8F71' },
  { name: 'FlexiSpot E2 Standing Desk', rating: 4.6, price: '₱18,000', verdict: 'Top Pick', category: 'Desk', pros: ['Sturdy dual motors', 'Memory presets', 'Wide desktop'], cons: ['Expensive', 'Heavy to move'], emoji: '🖥️', tagColor: '#C9A84C' },
  { name: 'Logitech C920 Webcam', rating: 4.7, price: '₱4,200', verdict: 'Best Value', category: 'Webcam', pros: ['1080p clarity', 'Auto light correction', 'Wide compatibility'], cons: ['No 4K', 'Plastic build'], emoji: '📷', tagColor: '#4C6EC9' },
  { name: 'Keychron K2 Keyboard', rating: 4.9, price: '₱3,800', verdict: 'Editor\'s Choice', category: 'Keyboard', pros: ['Compact 75% layout', 'Hot-swappable switches', 'Wireless + wired'], cons: ['Takes time to get used to'], emoji: '⌨️', tagColor: '#8F6BC9' },
  { name: 'Elgato Ring Light', rating: 4.5, price: '₱6,500', verdict: 'Premium Pick', category: 'Lighting', pros: ['App-controlled', 'Soft diffused light', 'Adjustable color temp'], cons: ['Pricey for a ring light'], emoji: '💡', tagColor: '#C96B8F' },
  { name: 'Anker USB-C Hub 7-in-1', rating: 4.6, price: '₱1,800', verdict: 'Best Budget', category: 'Hub', pros: ['Compact design', '4K HDMI out', 'Fast charging pass-through'], cons: ['Gets warm under load'], emoji: '🔌', tagColor: '#4CC9A8' },
]

function Stars({ rating }: { rating: number }) {
  return (
    <span className={styles.stars}>
      {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
      <span className={styles.ratingNum}>{rating}</span>
    </span>
  )
}

export default function ReviewsPage() {
  return (
    <main>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Product Reviews</span>
          <h1 className={styles.title}>Honest Reviews. Real Testing.</h1>
          <p className={styles.sub}>Every product is purchased and tested by our team — no freebies, no paid reviews.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {reviews.map(r => (
              <div key={r.name} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.emoji}>{r.emoji}</span>
                  <span className={styles.verdict} style={{ background: r.tagColor }}>{r.verdict}</span>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.category} style={{ color: r.tagColor }}>{r.category}</span>
                  <h2 className={styles.name}>{r.name}</h2>
                  <div className={styles.ratingRow}>
                    <Stars rating={r.rating} />
                    <span className={styles.price}>{r.price}</span>
                  </div>
                  <div className={styles.proscons}>
                    <div className={styles.pros}>
                      <span className={styles.prosTitle}>✅ Pros</span>
                      {r.pros.map(p => <p key={p} className={styles.proItem}>{p}</p>)}
                    </div>
                    <div className={styles.cons}>
                      <span className={styles.consTitle}>❌ Cons</span>
                      {r.cons.map(c => <p key={c} className={styles.conItem}>{c}</p>)}
                    </div>
                  </div>
                  <a href="#" className={styles.readMore}>Read Full Review →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
