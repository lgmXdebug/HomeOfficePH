import styles from './Categories.module.css'

const categories = [
  { icon: '🪑', name: 'Ergonomic Chairs', count: '24 reviews', color: '#E8F4E8', slug: 'Chair Review' },
  { icon: '🖥️', name: 'Desks & Surfaces', count: '18 reviews', color: '#FFF4E0', slug: 'Desk Guide' },
  { icon: '💡', name: 'Lighting', count: '15 reviews', color: '#FFF9E0', slug: 'Lighting' },
  { icon: '⌨️', name: 'Keyboards & Mice', count: '22 reviews', color: '#F0F0FF', slug: 'Keyboard' },
  { icon: '📷', name: 'Webcams', count: '12 reviews', color: '#FFE8F0', slug: 'Webcam' },
  { icon: '🎧', name: 'Headphones', count: '16 reviews', color: '#E8F0FF', slug: 'Headphones' },
  { icon: '📦', name: 'Storage & Org', count: '20 reviews', color: '#E8FFF4', slug: 'Storage' },
  { icon: '🔌', name: 'Hubs & Cables', count: '10 reviews', color: '#FFF0E8', slug: 'Budget Picks' },
]

export default function Categories() {
  return (
    <section className={styles.section} id="categories">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Browse by Category</span>
          <h2 className={styles.title}>Everything Your Desk Needs</h2>
          <p className={styles.sub}>From budget finds to premium picks — we cover it all.</p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={`/blog?category=${encodeURIComponent(cat.slug)}`}
              className={styles.card}
            >
              <div className={styles.iconWrap} style={{ background: cat.color }}>
                <span className={styles.icon}>{cat.icon}</span>
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{cat.name}</span>
                <span className={styles.count}>{cat.count}</span>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
