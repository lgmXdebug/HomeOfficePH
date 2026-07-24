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
    if (
      form.name.trim() &&
      form.email.trim() &&
      form.message.trim()
    ) {
      setSent(true)
    }
  }

  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>CONTACT HOMEOFFICEPH</span>
          <h1 className={styles.title}>Let's Talk</h1>
          <p className={styles.sub}>
            Questions, product suggestions, partnership inquiries, or feedback? We'd love to hear from you. 
            We typically reply within 24–48 hours.
          </p>
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
                  <p className={styles.infoText}>lgmabuti@gmail.com</p>
                  <p className={styles.infoNote}>We reply within 24–48 hours on weekdays.</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>💼</span>
                <div>
                  <h3 className={styles.infoTitle}>Brand Partnerships</h3>
                  <p className={styles.infoText}>lgmabuti@gmail.com</p>
                  <p className={styles.infoNote}>
                    For partnership inquiries, affiliate opportunities,
                    or product review requests.

                    Please note that accepting a product does not
                    guarantee a positive review.
                  </p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>🐛</span>
                <div>
                  <h3 className={styles.infoTitle}>Found a Mistake?</h3>
                  <p className={styles.infoText}>Help Us Improve</p>
                  <p className={styles.infoNote}>
                    If you notice outdated prices,
                    broken links,
                    or incorrect information,
                    please let us know.

                    Your feedback helps us keep our content accurate.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formWrap}>
              {sent ? (
                <div className={styles.success}>
                  <span className={styles.successEmoji}>🎉</span>
                  <h3>Thank You!</h3>
                  <p>
                    Thanks for contacting HomeOfficePH, {form.name}!

                    We've received your message and will respond
                    within 24–48 business hours.
                  </p>
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
                  <button
                    onClick={handleSubmit}
                    className={styles.btn}
                    disabled={sent}
                  >
                    {sent ? 'Message Sent ✓' : 'Send Message'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

<section className={styles.faq}>
  <div className={styles.container}>
    <h2 className={styles.faqTitle}>
      Frequently Asked Questions
    </h2>

    <div className={styles.faqGrid}>

      <div className={styles.faqItem}>
        <h3>How long does it take to receive a reply?</h3>
        <p>
          We usually respond within 24–48 business hours.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h3>Do you accept sponsored reviews?</h3>
        <p>
          No. Our reviews remain independent and are never influenced by payments or sponsorships.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h3>Can I suggest a product for review?</h3>
        <p>
          Absolutely! We welcome recommendations for products that would benefit Filipino remote workers and home office enthusiasts.
        </p>
      </div>

    </div>
  </div>
</section>

      <Footer />
    </main>
  )
}
