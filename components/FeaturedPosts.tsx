import styles from './FeaturedPosts.module.css'

const posts = [
  { slug: 'best-ergonomic-chairs-under-10000-philippines', tag: 'Chair Review', tagColor: '#6B8F71', title: 'Best Ergonomic Chairs Under ₱10,000 in the Philippines (2026)', excerpt: 'We tested 10 chairs over 3 months. Here are the ones that actually support your back during those long WFH days.', readTime: '8 min read', emoji: '🪑', featured: true },
  { slug: 'best-standing-desks-small-spaces-philippines', tag: 'Desk Guide', tagColor: '#C9A84C', title: 'Best Standing Desks for Small Spaces Philippines', excerpt: 'Space-saving desks that don\'t compromise on quality or functionality.', readTime: '7 min read', emoji: '🖥️', featured: false },
  { slug: '5000-peso-home-office-starter-kit-philippines', tag: 'Budget Picks', tagColor: '#4C6EC9', title: '₱5,000 Home Office Starter Kit', excerpt: 'Everything you need to build a functional home office on a tight budget.', readTime: '5 min read', emoji: '💰', featured: false },
  { slug: 'best-ring-lights-video-calls-philippines-2026', tag: 'Lighting', tagColor: '#C96B8F', title: 'Best Ring Lights for Video Calls Philippines 2026', excerpt: 'Good lighting is the fastest upgrade for your video call setup.', readTime: '5 min read', emoji: '💡', featured: false },
  { slug: 'best-webcams-video-calls-philippines-2026', tag: 'Webcam', tagColor: '#C9844C', title: 'Best Webcams for Video Calls Philippines 2026', excerpt: 'Upgrade your video call quality without spending a fortune.', readTime: '6 min read', emoji: '📷', featured: false },
  { slug: 'top-mechanical-keyboards-under-3000-philippines', tag: 'Keyboard', tagColor: '#8F6BC9', title: 'Top Mechanical Keyboards Under ₱3,000', excerpt: 'Satisfying to type on, easy on the wallet.', readTime: '7 min read', emoji: '⌨️', featured: false },
  { slug: 'desk-organization-ideas-small-home-offices-philippines', tag: 'Storage', tagColor: '#4CC9A8', title: 'Desk Organization Ideas for Small Home Offices', excerpt: 'Maximize your desk space with these clever storage solutions.', readTime: '6 min read', emoji: '📦', featured: false },
  { slug: 'best-noise-cancelling-headphones-wfh-philippines', tag: 'Headphones', tagColor: '#6B8F71', title: 'Best Noise-Cancelling Headphones for WFH Philippines', excerpt: 'Block out distractions and focus with the best ANC headphones in PH.', readTime: '9 min read', emoji: '🎧', featured: false },
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
          <a href={`/blog/${featured.slug}`} className={`${styles.card} ${styles.featured}`}>
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

          {/* Smaller cards grid */}
          <div className={styles.smallGrid}>
            {rest.map((post) => (
              <a key={post.title} href={`/blog/${post.slug}`} className={styles.card}>
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
          <a href="/blog" className={styles.viewAllBtn}>View All Articles →</a>
        </div>
      </div>
    </section>
  )
}
