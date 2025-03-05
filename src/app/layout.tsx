import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // metadataBase: new URL('https://odunayodauda.com'),
  metadataBase: new URL('https://odunayodauda.netlify.app'),
  title: {
    default: 'Odunayo Dauda - Software Developer Portfolio',
    template: '%s | Odunayo Dauda'
  },
  description: 'Professional portfolio of Odunayo Dauda, a skilled software developer specializing in React, Next.js, and .NET development with expertise in full-stack web technologies',
  keywords: [
    'Software Developer', 
    'React', 
    'Next.js', 
    '.NET', 
    'TypeScript', 
    'Full-Stack Developer', 
    'Web Development',
    'Portfolio',
    'Frontend Engineer'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://odunayodauda.com',
    siteName: 'Odunayo Dauda Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Odunayo Dauda - Software Developer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@odunayodauda',
    creator: '@odunayodauda',
    title: 'Odunayo Dauda - Software Developer Portfolio',
    description: 'Professional portfolio showcasing full-stack development skills and projects',
    images: ['/og-image.png']
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
  verification: {
    google: 'your-google-site-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-[#000428] to-[#004e92] text-white flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 md:px-8 lg:px-16 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}