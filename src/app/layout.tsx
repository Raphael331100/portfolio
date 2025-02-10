import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Votre Nom - Portfolio',
  description: 'Portfolio de développeur web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}