import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'

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

const siteDescription = 'Honest reviews, expert guides, and curated picks for the best home office gear in the Philippines. Desks, chairs, lighting, and more.'

export const metadata: Metadata = {
  metadataBase: new URL('https://home-office-ph.vercel.app'),  
  title: {
    default: "HomeOfficePH",
    template: "%s | HomeOfficePH",
  },
  description: siteDescription,
    robots: {
      index: true,
      follow: true,
    },

//openGraph
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: '/',
    siteName: 'HomeOfficePH',
    title: 'HomeOfficePH',
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HomeOfficePH',
      },
    ],
  },

//twitter
  twitter: {
    card: 'summary_large_image',
    title: 'HomeOfficePH',
    description: siteDescription,
    images: ['/og-image.png'],
  },  
}



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
