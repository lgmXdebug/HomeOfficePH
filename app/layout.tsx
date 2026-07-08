import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'
import AdminButton from '@/components/AdminButton'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "HomeOfficePH",
    template: "%s | HomeOfficePH",
},
  description:
    'Honest reviews, expert guides, and curated picks for the best home office gear in the Philippines. Desks, chairs, lighting, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body>
        {children}
        <AdminButton />
      </body>
    </html>
  )
}
