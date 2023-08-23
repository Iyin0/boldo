import './globals.scss'
import type { Metadata } from 'next'
import { Open_Sans, Manrope } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export const metadata: Metadata = {
  title: 'Boldo',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${manrope.variable}`}>{children}</body>
    </html>
  )
}
