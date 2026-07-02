import styles from './FeaturedPosts.module.css'

const posts = [
  {
    tag: 'Chair Review',
    tagColor: '#6B8F71',
    title: 'Best Ergonomic Chairs Under ₱10,000 in the Philippines (2026)',
    excerpt: 'We tested 12 chairs over 3 months. Here are the ones that actually support your back during those long WFH days.',
    readTime: '8 min read',
    emoji: '🪑',
    featured: true,
  },
  {
    tag: 'Desk Guide',
    tagColor: '#C9A84C',
    title: 'Best Standing Desks for Small Spaces',
    excerpt: 'Space-saving desks that don\'t compromise on quality or functionality.',
    readTime: '6 min read',
    emoji: '🖥️',
    featured: false,
  },
  {
    tag: 'Budget Picks',
    tagColor: '#4C6EC9',
    title: '₱5,000 Home Office Starter Kit',
    excerpt: 'Everything you need to build a functional home office on a tight budget.',
    readTime: '5 min read',
    emoji: '💰',
    featured: false,
  },
  {
    tag: 'Lighting',
    tagColor: '#C96B8F',
    title: 'Best Ring Lights for Video Calls',
    excerpt: 'Look professional on Zoom without breaking the bank.',
    readTime: '4 min read',
    emoji: '💡',
    featured: false,
  },
]

export default function FeaturedPosts() {
  const [featured, ...rest] = posts

  return (
    <section className={styles.section} id="reviews">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Latest Reviews & Guides</span>
          <h2 className={styles.title}>What We've Been Testing</h2>
        </div>

        <div className={styles.grid}>
          {/* Featured large card */}
          <a href="#" className={`${styles.card} ${styles.featured}`}>
            <div className={styles.featuredEmoji}>{featured.emoji}</div>
            <div className={styles.cardBody}>
              <span className={styles.tag} style={{ background: featured.tagColor + '20', color: featured.tagColor }}>
                {featured.tag}
              </span>
              <h3 className={styles.cardTitle}>{featured.title}</h3>
              <p className={styles.cardExcerpt}>{featured.excerpt}</p>
              <span className={styles.readTime}>⏱ {featured.readTime}</span>
            </div>
          </a>

          {/* Smaller cards */}
          <div className={styles.smallGrid}>
            {rest.map((post) => (
              <a key={post.title} href="#" className={styles.card}>
                <span className={styles.smallEmoji}>{post.emoji}</span>
                <div className={styles.cardBody}>
                  <span className={styles.tag} style={{ background: post.tagColor + '20', color: post.tagColor }}>
                    {post.tag}
                  </span>
                  <h3 className={styles.cardTitleSm}>{post.title}</h3>
                  <p className={styles.cardExcerptSm}>{post.excerpt}</p>
                  <span className={styles.readTime}>⏱ {post.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.viewAll}>
          <a href="#" className={styles.viewAllBtn}>View All Articles →</a>
        </div>
      </div>
    </section>
  )
}
