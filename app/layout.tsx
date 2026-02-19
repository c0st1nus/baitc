import type { Metadata } from 'next'
import { interTight, inter, ibmPlexMono } from '../config/fonts'
import { LangProvider } from '@/context/LangContext'
import { ModeProvider } from '@/context/ModeContext'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'BAITC — Building AI & Blockchain Ecosystems',
    template: '%s | BAITC',
  },
  description:
    "Kazakhstan's leading R&D center. Home of Decentrathon, AI Qyzmet, Meta Llama Accelerator.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://baitc.org',
    siteName: 'BAITC',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', creator: '@baitc_kz' },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${interTight.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}
        data-mode="neutral"
      >
        <LangProvider>
          <ModeProvider>
            {children}
          </ModeProvider>
        </LangProvider>
      </body>
    </html>
  )
}
