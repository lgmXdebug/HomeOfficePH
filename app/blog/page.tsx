'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './blog.module.css'

const posts = [
  { slug: 'best-ergonomic-chairs-under-10000-philippines', tag: 'Chair Review', tagColor: '#6B8F71', title: 'Best Ergonomic Chairs Under ₱10,000 in the Philippines (2026)', excerpt: 'We tested 10 chairs over 3 months. Here are the ones that actually support your back during those long WFH days.', readTime: '8 min read', emoji: '🪑', date: 'June 28, 2026' },
  { slug: 'best-standing-desks-small-spaces-philippines', tag: 'Desk Guide', tagColor: '#C9A84C', title: 'Best Standing Desks for Small Spaces', excerpt: 'Space-saving desks that don\'t compromise on quality or functionality.', readTime: '7 min read', emoji: '🖥️', date: 'July 3, 2026' },
  { slug: 'best-webcams-video-calls-philippines-2026', tag: 'Webcam', tagColor: '#C9844C', title: 'Best Webcams for Video Calls Philippines 2026', excerpt: 'Upgrade your video call quality without spending a fortune.', readTime: '6 min read', emoji: '📷', date: 'July 3, 2026' },
  { slug: '5000-peso-home-office-starter-kit-philippines', tag: 'Budget Picks', tagColor: '#4C6EC9', title: '₱5,000 Home Office Starter Kit', excerpt: 'Everything you need to build a functional home office on a tight budget.', readTime: '5 min read', emoji: '💰', date: 'July 3, 2026' },
  { slug: 'best-ring-lights-video-calls-philippines-2026', tag: 'Lighting', tagColor: '#C96B8F', title: 'Best Ring Lights for Video Calls Philippines 2026', excerpt: 'Good lighting is the fastest upgrade you can make to your video call setup.', readTime: '5 min read', emoji: '💡', date: 'July 3, 2026' },
  { slug: 'top-mechanical-keyboards-under-3000-philippines', tag: 'Keyboard', tagColor: '#8F6BC9', title: 'Top Mechanical Keyboards Under ₱3,000', excerpt: 'Satisfying to type on, easy on the wallet.', readTime: '7 min read', emoji: '⌨️', date: 'July 3, 2026' },
  { slug: 'desk-organization-ideas-small-home-offices-philippines', tag: 'Storage', tagColor: '#4CC9A8', title: 'Desk Organization Ideas for Small Home Offices', excerpt: 'Maximize your desk space with these clever storage solutions.', readTime: '6 min read', emoji: '📦', date: 'July 3, 2026' },
  { slug: 'best-noise-cancelling-headphones-wfh-philippines', tag: 'Headphones', tagColor: '#6B8F71', title: 'Best Noise-Cancelling Headphones for WFH Philippines', excerpt: 'Block out distractions and focus.', readTime: '9 min read', emoji: '🎧', date: 'July 3, 2026' },
]

const tags = ['All', 'Chair Review', 'Desk Guide', 'Lighting', 'Keyboard', 'Webcam', 'Storage', 'Headphones', 'Budget Picks']

function BlogContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category') || 'All'
  const [active, setActive] = useState(categoryParam)

  useEffect(() => {
    setActive(categoryParam)
  }, [categoryParam])

  const filtered = active === 'All' ? posts : posts.filter(p => p.tag === active)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.filters}>
          {tags.map(t => (
            <button
              key={t}
              className={`${styles.filterBtn} ${active === t ? styles.active : ''}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No articles in this category yet. Check back soon! 🌿</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map(post => (
              <a key={post.title} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardEmoji}>{post.emoji}</div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.tag} style={{ background: post.tagColor + '20', color: post.tagColor }}>{post.tag}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <span className={styles.readTime}>⏱ {post.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>All Articles</span>
          <h1 className={styles.title}>Reviews, Guides & Buying Tips</h1>
          <p className={styles.sub}>Everything you need to build the perfect home office in the Philippines.</p>
        </div>
      </section>
      <Suspense fallback={<div style={{ padding: '60px 24px', textAlign: 'center' }}>Loading articles...</div>}>
        <BlogContent />
      </Suspense>
      <Footer />
    </main>
  )
}
