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

function getProducts(slug: string) {
  try {
    const dataPath = path.join(process.cwd(), 'data', 'products.json')
    const raw = fs.readFileSync(dataPath, 'utf8')
    const { products } = JSON.parse(raw)
    return products.filter((p: { article: string }) => p.article === slug)
  } catch {
    return []
  }
}

function extractHeadings(md: string) {
  return md.split('\n')
    .filter(line => /^#{2,3} /.test(line))
    .map(line => {
      const level = line.startsWith('### ') ? 3 : 2
      const text = line.replace(/^#{2,3} /, '').trim()
      const id = text.toLowerCase().replace(/[^a-z0-9\s₱]/g, '').replace(/\s+/g, '-').trim()
      return { id, text, level }
    })
}

function parseMarkdown(md: string, products: { id: string; affiliateUrl: string; imageUrl: string; name: string }[]): string {
  // Build product lookup map
  const productMap: Record<string, { affiliateUrl: string; imageUrl: string; name: string }> = {}
  products.forEach(p => { productMap[p.id] = p })

  return md
    // Images
    .replace(/!\[(.+?)\]\((.+?)\)/g, (_, alt, src) => {
      // Try to find matching product image from data
      const match = products.find(p => p.name.toLowerCase().includes(alt.toLowerCase().split(' ')[0]))
      const imgSrc = match?.imageUrl || src
      if (!imgSrc || imgSrc === 'SIHOO_M57_IMAGE_URL') return ''
      return `<img src="${imgSrc}" alt="${alt}" loading="lazy" />`
    })
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
    // Links — inject real affiliate URL from products.json if available
    .replace(/\[(.+?)\]\((.+?)\)/g, (_, text, href) => {
      // Find matching product affiliate URL
      const match = products.find(p => p.affiliateUrl && (href.includes('lazada') || href.includes('shopee')))
      const finalHref = match?.affiliateUrl || href
      return `<a href="${finalHref}" target="_blank" rel="noopener noreferrer nofollow">${text}</a>`
    })
    // Lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/gs, match => `<ul>${match}</ul>`)
    // Blockquote
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // HR
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
  const products = getProducts(params.slug)
  const headings = extractHeadings(content)
  const htmlContent = parseMarkdown(content, products)

  return (
    <main>
      <Navbar />
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

      <section className={styles.articleSection}>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <TableOfContents headings={headings} />
          </aside>
          <article className={styles.article}>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </article>
        </div>
      </section>

      <div className={styles.backWrap}>
        <a href="/blog" className={styles.back}>← Back to all articles</a>
      </div>

      <Footer />
    </main>
  )
}
