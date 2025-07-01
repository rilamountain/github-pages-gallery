import '@/styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: '239Wine – Your Curated Wine Companion',
  description: 'Browse your curated list of 239 wines with pairing suggestions and more.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}