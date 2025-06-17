import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eveez Demo Website',
  description: 'Electric Scooter Website Demo',
  generator: 'eveezdemowebsite',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
