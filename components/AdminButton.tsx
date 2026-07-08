'use client'
import { useEffect, useState } from 'react'
import styles from './AdminButton.module.css'

export default function AdminButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_auth')
    if (auth === '1') setShow(true)
  }, [])

  if (!show) return null

  return (
    <a href="/admin" className={styles.btn} title="Admin Dashboard">
      🌿 Admin
    </a>
  )
}
