'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './contact.module.css'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    if (form.name && form.email && form.message) setSent(true)
  }

  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Contact Us</span>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.sub}>Have a question, a product suggestion, or just want to say hi? We'd love to hear from you.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* Info cards */}
            <div className={styles.info}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>✉️</span>
                <div>
                  <h3 className={styles.infoTitle}>Email Us</h3>
                  <p className={styles.infoText}>hello@homeofficeph.com</p>
                  <p className={styles.infoNote}>We reply within 24–48 hours on weekdays.</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>💼</span>
                <div>
                  <h3 className={styles.infoTitle}>Brand Partnerships</h3>
                  <p className={styles.infoText}>partners@homeofficeph.com</p>
                  <p className={styles.infoNote}>For affiliate programs and product review requests. We do not accept paid reviews.</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>🐛</span>
                <div>
                  <h3 className={styles.infoTitle}>Found a Mistake?</h3>
                  <p className={styles.infoText}>We appreciate corrections!</p>
                  <p className={styles.infoNote}>If you spot outdated pricing or incorrect info, please let us know.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formWrap}>
              {sent ? (
                <div className={styles.success}>
                  <span className={styles.successEmoji}>🎉</span>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out, {form.name}! We'll get back to you within 24–48 hours.</p>
                </div>
              ) : (
                <div className={styles.form}>
                  <h2 className={styles.formTitle}>Send a Message</h2>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label}>Name</label>
                      <input name="name" value={form.name} onChange={handleChange} className={styles.input} placeholder="Juan dela Cruz" />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Email</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} className={styles.input} placeholder="juan@email.com" />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange} className={styles.input}>
                      <option value="">Select a topic...</option>
                      <option>Product Question</option>
                      <option>Review Request</option>
                      <option>Brand Partnership</option>
                      <option>Content Correction</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} className={styles.textarea} rows={5} placeholder="Write your message here..." />
                  </div>
                  <button onClick={handleSubmit} className={styles.btn}>Send Message</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
