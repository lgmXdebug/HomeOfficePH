'use client'
import { useState, useEffect } from 'react'
import styles from './admin.module.css'

interface Product {
  id: string
  name: string
  price: string
  store: string
  affiliateUrl: string
  imageUrl: string
  article: string
  category: string
  emoji: string
}

const ARTICLES = [
  { slug: 'best-ergonomic-chairs-under-10000-philippines', label: 'Best Ergonomic Chairs Under ₱10,000' },
  { slug: 'best-standing-desks-small-spaces-philippines', label: 'Best Standing Desks for Small Spaces' },
  { slug: 'best-webcams-video-calls-philippines-2026', label: 'Best Webcams for Video Calls' },
  { slug: '5000-peso-home-office-starter-kit-philippines', label: '₱5,000 Home Office Starter Kit' },
  { slug: 'best-ring-lights-video-calls-philippines-2026', label: 'Best Ring Lights for Video Calls' },
  { slug: 'top-mechanical-keyboards-under-3000-philippines', label: 'Top Mechanical Keyboards Under ₱3,000' },
  { slug: 'desk-organization-ideas-small-home-offices-philippines', label: 'Desk Organization Ideas' },
  { slug: 'best-noise-cancelling-headphones-wfh-philippines', label: 'Best Noise-Cancelling Headphones' },
]

const EMPTY_FORM = {
  name: '', price: '', store: 'Lazada', affiliateUrl: '', imageUrl: '',
  article: ARTICLES[0].slug, category: 'Chair Review', emoji: '🪑'
}

export default function AdminPage() {
  const [tab, setTab] = useState<'products' | 'add' | 'edit'>('products')
  const [products, setProducts] = useState<Product[]>([])
  const [form, setForm] = useState({ ...EMPTY_FORM })
  const [editId, setEditId] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => { fetchProducts() }, [])

  async function fetchProducts() {
    const res = await fetch('/api/products')
    const data = await res.json()
    setProducts(data.products || [])
  }

  function showMsg(text: string) {
    setMsg(text)
    setTimeout(() => setMsg(''), 3000)
  }

  async function saveProduct() {
    if (!form.name || !form.price) return showMsg('❌ Name and price are required!')
    setSaving(true)
    try {
      if (editId) {
        await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'update', id: editId, updates: form })
        })
        showMsg('✅ Product updated!')
      } else {
        await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'add', name: form.name, product: form })
        })
        showMsg('✅ Product added!')
      }
      await fetchProducts()
      setForm({ ...EMPTY_FORM })
      setEditId(null)
      setTab('products')
    } catch {
      showMsg('❌ Error saving product')
    }
    setSaving(false)
  }

  async function deleteProduct(id: string) {
    if (!confirm('Delete this product?')) return
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'delete', id })
    })
    showMsg('🗑️ Product deleted')
    fetchProducts()
  }

  function startEdit(p: Product) {
    setForm({ name: p.name, price: p.price, store: p.store, affiliateUrl: p.affiliate_url, imageUrl: p.image_url, article: p.article, category: p.category, emoji: p.emoji })
    setEditId(p.id)
    setTab('add')
  }

  const filtered = filter === 'all' ? products : products.filter(p => p.article === filter)
  const withLinks = products.filter(p => p.affiliateUrl).length
  const withImages = products.filter(p => p.imageUrl).length

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>🌿 HomeOfficePH Admin</h1>
          <p className={styles.sub}>Manage your products, affiliate links, and images</p>
        </div>
        <a href="/" className={styles.viewSite}>View site →</a>
      </div>

      {msg && <div className={styles.toast}>{msg}</div>}

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>{products.length}</span>
          <span className={styles.statLabel}>Total products</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{withLinks}</span>
          <span className={styles.statLabel}>With affiliate link</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{withImages}</span>
          <span className={styles.statLabel}>With image</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{products.length - withLinks}</span>
          <span className={styles.statLabel}>Missing links</span>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${tab === 'products' ? styles.activeTab : ''}`} onClick={() => { setTab('products'); setEditId(null); setForm({ ...EMPTY_FORM }) }}>All Products</button>
        <button className={`${styles.tab} ${tab === 'add' ? styles.activeTab : ''}`} onClick={() => setTab('add')}>
          {editId ? '✏️ Edit Product' : '+ Add Product'}
        </button>
      </div>

      {/* Products list */}
      {tab === 'products' && (
        <div className={styles.section}>
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Filter by article:</span>
            <select className={styles.select} value={filter} onChange={e => setFilter(e.target.value)}>
              <option value="all">All articles</option>
              {ARTICLES.map(a => <option key={a.slug} value={a.slug}>{a.label}</option>)}
            </select>
          </div>

          <div className={styles.productList}>
            {filtered.length === 0 && (
              <div className={styles.empty}>No products yet. Click "Add Product" to get started!</div>
            )}
            {filtered.map(p => (
              <div key={p.id} className={styles.productCard}>
                <div className={styles.productLeft}>
                  {p.imageUrl
                    ? <img src={p.imageUrl} alt={p.name} className={styles.productImg} />
                    : <div className={styles.productImgEmpty}>{p.emoji}</div>
                  }
                  <div className={styles.productInfo}>
                    <div className={styles.productName}>{p.name}</div>
                    <div className={styles.productMeta}>₱{Number(p.price).toLocaleString()} · {p.store}</div>
                    <div className={styles.productArticle}>{ARTICLES.find(a => a.slug === p.article)?.label || p.article}</div>
                  </div>
                </div>
                <div className={styles.productRight}>
                  <div className={styles.badges}>
                    <span className={`${styles.badge} ${p.affiliateUrl ? styles.badgeGreen : styles.badgeOrange}`}>
                      {p.affiliateUrl ? '✅ Has link' : '⚠️ No link'}
                    </span>
                    <span className={`${styles.badge} ${p.imageUrl ? styles.badgeGreen : styles.badgeGray}`}>
                      {p.imageUrl ? '🖼️ Has image' : '📷 No image'}
                    </span>
                  </div>
                  <div className={styles.productActions}>
                    <button className={styles.editBtn} onClick={() => startEdit(p)}>Edit</button>
                    <button className={styles.deleteBtn} onClick={() => deleteProduct(p.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add / Edit form */}
      {tab === 'add' && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{editId ? 'Edit Product' : 'Add New Product'}</h2>

          <div className={styles.form}>
            <div className={styles.formRow}>
              <label className={styles.label}>Product Name *</label>
              <input className={styles.input} placeholder="e.g. Logitech C920 Webcam" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formRow}>
                <label className={styles.label}>Price (₱) *</label>
                <input className={styles.input} placeholder="e.g. 4200" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
              </div>
              <div className={styles.formRow}>
                <label className={styles.label}>Store</label>
                <select className={styles.input} value={form.store} onChange={e => setForm({ ...form, store: e.target.value })}>
                  <option>Lazada</option>
                  <option>Shopee</option>
                  <option>IKEA Philippines</option>
                  <option>Official Website</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Affiliate Link URL</label>
              <input className={styles.input} placeholder="https://s.lazada.com.ph/s.xxxxx or https://shopee.ph/..." value={form.affiliateUrl} onChange={e => setForm({ ...form, affiliateUrl: e.target.value })} />
              <span className={styles.hint}>Copy from your Lazada/Shopee affiliate dashboard</span>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Product Image URL</label>
              <input className={styles.input} placeholder="https://ph-live.slatic.net/p/xxxxx.jpg" value={form.imageUrl} onChange={e => setForm({ ...form, imageUrl: e.target.value })} />
              <span className={styles.hint}>Right-click product photo on Lazada/Shopee → Copy image address</span>
            </div>

            {form.imageUrl && (
              <div className={styles.imgPreview}>
                <img src={form.imageUrl} alt="Preview" onError={e => (e.currentTarget.style.display = 'none')} />
                <span>Image preview</span>
              </div>
            )}

            <div className={styles.formGrid}>
              <div className={styles.formRow}>
                <label className={styles.label}>Article</label>
                <select className={styles.input} value={form.article} onChange={e => setForm({ ...form, article: e.target.value })}>
                  {ARTICLES.map(a => <option key={a.slug} value={a.slug}>{a.label}</option>)}
                </select>
              </div>
              <div className={styles.formRow}>
                <label className={styles.label}>Emoji</label>
                <input className={styles.input} placeholder="🪑" value={form.emoji} onChange={e => setForm({ ...form, emoji: e.target.value })} />
              </div>
            </div>

            <div className={styles.formActions}>
              <button className={styles.saveBtn} onClick={saveProduct} disabled={saving}>
                {saving ? 'Saving...' : editId ? 'Update Product' : 'Add Product'}
              </button>
              <button className={styles.cancelBtn} onClick={() => { setTab('products'); setEditId(null); setForm({ ...EMPTY_FORM }) }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
