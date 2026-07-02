import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './best-picks.module.css'

const lists = [
  {
    title: 'Best Home Office Chairs',
    subtitle: 'Ranked by comfort, durability & value',
    emoji: '🪑',
    color: '#6B8F71',
    items: [
      { rank: 1, name: 'Sihoo M57', price: '₱8,500', label: 'Best Overall' },
      { rank: 2, name: 'IKEA Markus', price: '₱12,000', label: 'Best Premium' },
      { rank: 3, name: 'Okano HC-2', price: '₱4,200', label: 'Best Budget' },
    ],
  },
  {
    title: 'Best Standing Desks',
    subtitle: 'For every space & budget',
    emoji: '🖥️',
    color: '#C9A84C',
    items: [
      { rank: 1, name: 'FlexiSpot E2', price: '₱18,000', label: 'Best Overall' },
      { rank: 2, name: 'Motorized Homey', price: '₱12,500', label: 'Best Value' },
      { rank: 3, name: 'Manual L-Desk', price: '₱4,800', label: 'Best Budget' },
    ],
  },
  {
    title: 'Best Webcams',
    subtitle: 'Look sharp on every call',
    emoji: '📷',
    color: '#4C6EC9',
    items: [
      { rank: 1, name: 'Logitech C920', price: '₱4,200', label: 'Best Overall' },
      { rank: 2, name: 'Anker PowerConf C300', price: '₱3,500', label: 'Best Value' },
      { rank: 3, name: 'A4Tech PK-910H', price: '₱1,200', label: 'Best Budget' },
    ],
  },
  {
    title: 'Best Mechanical Keyboards',
    subtitle: 'Satisfying to type, built to last',
    emoji: '⌨️',
    color: '#8F6BC9',
    items: [
      { rank: 1, name: 'Keychron K2', price: '₱3,800', label: 'Editor\'s Choice' },
      { rank: 2, name: 'Royal Kludge RK61', price: '₱1,800', label: 'Best Budget' },
      { rank: 3, name: 'Ducky One 3', price: '₱6,500', label: 'Best Premium' },
    ],
  },
  {
    title: 'Best Ring Lights',
    subtitle: 'Professional lighting on any budget',
    emoji: '💡',
    color: '#C96B8F',
    items: [
      { rank: 1, name: 'Elgato Ring Light', price: '₱6,500', label: 'Best Premium' },
      { rank: 2, name: 'Neewer 18" Ring Light', price: '₱2,800', label: 'Best Value' },
      { rank: 3, name: 'Ulanzi LT028', price: '₱800', label: 'Best Budget' },
    ],
  },
  {
    title: 'Best USB Hubs',
    subtitle: 'Expand your ports, not your problems',
    emoji: '🔌',
    color: '#4CC9A8',
    items: [
      { rank: 1, name: 'Anker 7-in-1 USB-C', price: '₱1,800', label: 'Best Overall' },
      { rank: 2, name: 'Baseus 8-in-1', price: '₱1,500', label: 'Best Value' },
      { rank: 3, name: 'Ugreen USB 3.0 Hub', price: '₱650', label: 'Best Budget' },
    ],
  },
]

export default function BestPicksPage() {
  return (
    <main>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Best Picks</span>
          <h1 className={styles.title}>The Best of Everything</h1>
          <p className={styles.sub}>Our top-ranked products in every category — updated regularly based on real testing.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {lists.map(list => (
              <div key={list.title} className={styles.card}>
                <div className={styles.cardHeader} style={{ borderColor: list.color }}>
                  <span className={styles.cardEmoji}>{list.emoji}</span>
                  <div>
                    <h2 className={styles.cardTitle}>{list.title}</h2>
                    <p className={styles.cardSub}>{list.subtitle}</p>
                  </div>
                </div>
                <div className={styles.rankList}>
                  {list.items.map(item => (
                    <a key={item.name} href="#" className={styles.rankItem}>
                      <span className={styles.rank} style={{ background: item.rank === 1 ? list.color : 'var(--cream-dark)', color: item.rank === 1 ? 'white' : 'var(--text-muted)' }}>
                        #{item.rank}
                      </span>
                      <div className={styles.rankInfo}>
                        <span className={styles.rankName}>{item.name}</span>
                        <span className={styles.rankLabel}>{item.label}</span>
                      </div>
                      <span className={styles.rankPrice}>{item.price}</span>
                    </a>
                  ))}
                </div>
                <a href="#" className={styles.seeAll}>See full list →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
