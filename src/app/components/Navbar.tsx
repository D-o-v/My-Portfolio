'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { 
  FaHome, 
  FaFile, 
  FaFolderOpen, 
  FaEnvelope,
  FaUser,
  FaBars,
  FaTimes
} from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home', icon: FaHome },
    { href: '/about', label: 'About', icon: FaUser },
    { href: '/projects', label: 'Projects', icon: FaFolderOpen },
    { href: '/resume', label: 'Resume', icon: FaFile },
    { href: '/contact', label: 'Contact', icon: FaEnvelope },
  ]

  return (
    <nav className="fixed w-full z-50 top-0 bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo with Gradient Text and Hover Effect */}
        <Link 
          href="/" 
          className="text-3xl font-bold bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent 
          hover:brightness-125 transition-all duration-300 ease-in-out"
        >
          OD
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none transition-all transform hover:rotate-90 hover:scale-110"
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={`flex items-center gap-2 transition-all duration-300 ease-in-out 
                transform hover:scale-105 hover:tracking-wider
                ${pathname === item.href 
                  ? 'text-[#6a11cb] font-bold scale-105 tracking-wider' 
                  : 'text-white hover:text-[#6a11cb]'}`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-[#2c3e50] to-[#3498db] md:hidden animate-slide-down">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`px-4 py-3 border-t border-blue-700 flex items-center gap-3 
                transition-colors duration-300
                ${pathname === item.href 
                  ? 'bg-blue-800 text-[#6a11cb] font-bold' 
                  : 'hover:bg-blue-800 text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}