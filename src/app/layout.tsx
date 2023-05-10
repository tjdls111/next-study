import './globals.css'
import styles from './layout.module.css'

import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'shopping mall',
  description: 'shopping mall',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className={styles.title}>🎀Next study🎀</h1>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Product</Link>

        </nav>
        {children}
        </body>
    </html>
  )
}
