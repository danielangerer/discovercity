// components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navItems = ['Home', 'About', 'Contact']

  return (
    <header className="sticky top-0 z-50 bg-[#FDEECE] shadow-md">
      <div className="max-w-8xl mx-auto px-6 lg:px-8 py-1 flex justify-between items-center">
        
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/discovercity_logo.png"
            alt="City Explorer Logo"
            width={120}
            height={72}
            className="h-18 w-auto transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden md:flex space-x-12">
          {navItems.map(label => (
            <Link
              key={label}
              href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
              className="relative text-[#206176] font-medium hover:text-[#7EBABC] transition"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FECD6D] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Mobile burger menu */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#206176] p-2 rounded-md hover:bg-[#7EBABC]/20 transition"
        >
          {open ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navItems.map(label => (
            <Link
              key={label}
              href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
              className="block text-[#206176] text-lg font-medium px-2 py-2 rounded-md hover:bg-[#7EBABC]/20 transition"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}