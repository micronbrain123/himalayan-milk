'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Navigation from './Navigation'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const phoneNumber = '+919876543210' // Your phone number for calling

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[color:var(--color-primary-900)] text-white py-2 px-4 text-sm hidden md:block">
        <div className="container-max flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Trade License: E04/SDL/0118</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>hmilkunit123@gmail.com</span>
            </div>
          </div>
          <div className="text-xs">
            <span>FSSAI: 22324002000438 | GST: 11BNDPS4973B3Z5</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img 
                  src="/images/logo.jpg" 
                  alt="Himalayan - Sikkim Supreme Cow Milk" 
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <Navigation />

            {/* Contact Button (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right text-sm">
                <p className="text-gray-600">Call us:</p>
                <p className="font-semibold text-[color:var(--color-primary-600)]">+91 98765 43210</p>
              </div>
              <button 
                onClick={handleCallClick}
                className="btn-primary flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <Navigation mobile={true} onItemClick={closeMobileMenu} />
            
            {/* Mobile Contact Info */}
            <div className="px-5 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[color:var(--color-primary-600)]" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-[color:var(--color-primary-600)]" />
                  <span>hmilkunit123@gmail.com</span>
                </div>
                <button 
                  onClick={() => {
                    handleCallClick()
                    closeMobileMenu()
                  }}
                  className="btn-primary mt-3 text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header