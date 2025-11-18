import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'X-Breaker Pro - Break The Limit | Expert Advisor Trading Terbaik',
  description: 'Raih profit konsisten 10-30% per bulan dengan X-Breaker Pro EA. Forward test terbukti 26.5% ROI dalam 2.5 bulan. Hosting EA, Development Custom EA, dan Konsultasi Trading.',
  keywords: 'EA trading, expert advisor, forex robot, NASDAQ trading, automated trading, EA hosting, custom EA development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
