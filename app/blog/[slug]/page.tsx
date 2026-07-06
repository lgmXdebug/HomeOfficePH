import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TableOfContents from '@/components/TableOfContents'
import styles from './slug.module.css'

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts')
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  return files.map(f => ({ slug: f.replace('.md', '') }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`)
  if (!fs.existsSync(filePath)) return {}
  const { data } = matter(fs.readFileSync(filePath, 'utf8'))
  return { title: data.title, description: data.excerpt }
}

// Extract headings from markdown for TOC
function extractHeadings(md: string) {
  const lines = md.split('\n')
  return lines
    .filter(line => /^#{2,3} /.test(line))
    .map(line => {
      const level = line.startsWith('### ') ? 3 : 2
      const text = line.replace(/^#{2,3} /, '').trim()
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s₱]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
      return { id, text, level }
    })
}

// Markdown to HTML with anchor IDs on headings
function parseMarkdown(md: string): string {
  return md
    // Images — must come BEFORE links
    .replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1" loading="lazy" />')
    // Tables
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split('|').filter(c => c.trim() !== '')
      return `<tr>${cells.map(c => `<td>${c.trim()}</td>`).join('')}</tr>`
    })
    .replace(/^(\|[-| :]+\|)$/gm, '')
    .replace(/(<tr>.*<\/tr>)/gs, (match) => {
      const rows = match.split('\n').filter(r => r.includes('<tr>'))
      const [header, ...rest] = rows
      const theadRow = header.replace(/<td>/g, '<th>').replace(/<\/td>/g, '</th>')
      return `<table><thead>${theadRow}</thead><tbody>${rest.join('')}</tbody></table>`
    })
    // Headings with anchor IDs
    .replace(/^### (.+)$/gm, (_, text) => {
      const id = text.toLowerCase().replace(/[^a-z0-9\s₱]/g, '').replace(/\s+/g, '-').trim()
      return `<h3 id="${id}">${text}</h3>`
    })
    .replace(/^## (.+)$/gm, (_, text) => {
      const id = text.toLowerCase().replace(/[^a-z0-9\s₱]/g, '').replace(/\s+/g, '-').trim()
      return `<h2 id="${id}">${text}</h2>`
    })
    .replace(/^# (.+)$/gm, (_, text) => {
      const id = text.toLowerCase().replace(/[^a-z0-9\s₱]/g, '').replace(/\s+/g, '-').trim()
      return `<h1 id="${id}">${text}</h1>`
    })
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Unordered list items
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/gs, match => `<ul>${match}</ul>`)
    // Horizontal rule
    .replace(/^---$/gm, '<hr />')
    // Paragraphs
    .split('\n\n')
    .map(block => {
      block = block.trim()
      if (!block) return ''
      if (block.startsWith('<')) return block
      return `<p>${block.replace(/\n/g, '<br/>')}</p>`
    })
    .join('\n')
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`)
  if (!fs.existsSync(filePath)) notFound()

  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const headings = extractHeadings(content)
  const htmlContent = parseMarkdown(content)

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.meta}>
            <span className={styles.tag}>{data.tag}</span>
            <span className={styles.date}>{data.date}</span>
            <span className={styles.readTime}>⏱ {data.readTime}</span>
          </div>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.excerpt}>{data.excerpt}</p>
        </div>
      </section>

      {/* Article body with sidebar TOC */}
      <section className={styles.articleSection}>
        <div className={styles.layout}>

          {/* Sidebar TOC */}
          <aside className={styles.sidebar}>
            <TableOfContents headings={headings} />
          </aside>

          {/* Main content */}
          <article className={styles.article}>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </article>

        </div>
      </section>

      {/* Back to blog */}
      <div className={styles.backWrap}>
        <a href="/blog" className={styles.back}>← Back to all articles</a>
      </div>

      <Footer />
    </main>
  )
}
