// // components/Footer.tsx
'use client'

import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/odunayo-dauda-103600191/',
      label: 'LinkedIn'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/D-o-v',
      label: 'GitHub'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:daudavictorodunayo@gmail.com',
      label: 'Email'
    }
  ]

  return (
    <footer className="bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white py-8 z-1">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className=" group transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#6a11cb]"
              aria-label={link.label}
            >
              <link.icon 
                className="h-7 w-7 transition-transform duration-300 
                group-hover:rotate-12 group-hover:text-white"
              />
            </Link>
          ))}
        </div>
        <p className="text-sm opacity-75 hover:opacity-100 transition-opacity">
          © {new Date().getFullYear()} Odunayo Dauda. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
