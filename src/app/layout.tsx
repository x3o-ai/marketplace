import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'x3o.ai - Mass Automation Marketplace',
  description: 'Deploy enterprise-grade explainable AI solutions in 15 minutes. Trinity Agent architecture with OpenConductor infrastructure.',
  keywords: [
    'AI automation',
    'Trinity Agents',
    'explainable AI',
    'mass automation',
    'enterprise AI',
    'Oracle Agent',
    'Sentinel Agent', 
    'Sage Agent',
    'business automation',
    'department replacement'
  ],
  authors: [{ name: 'SonnierVentures', url: 'https://sonnierventures.com' }],
  creator: 'SonnierVentures',
  publisher: 'x3o.ai',
  openGraph: {
    title: 'x3o.ai - Mass Automation Marketplace',
    description: 'Deploy enterprise-grade explainable AI solutions in 15 minutes',
    url: 'https://x3o.ai',
    siteName: 'x3o.ai',
    images: [
      {
        url: 'https://x3o.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'x3o.ai Mass Automation Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'x3o.ai - Mass Automation Marketplace',
    description: 'Deploy enterprise-grade explainable AI solutions in 15 minutes',
    creator: '@x3o_ai',
    images: ['https://x3o.ai/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ef4444" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}