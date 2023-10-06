import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Midlife Crisis Motorcycle Club | MCMC Norway',
  description: 'Embrace the freedom of the open road with Midlife Crisis Motorcycle Club – a haven for mature new riders finding joy in riding during their midlife years. Join our community of enthusiasts, embark on unforgettable adventures, and share the thrill of rediscovering life on two wheels!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
