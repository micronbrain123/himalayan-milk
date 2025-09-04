'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = ({ mobile = false, onItemClick }) => {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/processing', label: 'Processing' },
  ]

  const baseClasses = mobile 
    ? "block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
    : "nav-link"

  const activeClasses = mobile
    ? "text-primary-600 bg-primary-50"
    : "nav-link-active"

  const inactiveClasses = mobile
    ? "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
    : "nav-link"

  return (
    <nav className={mobile ? "px-2 pt-2 pb-3 space-y-1" : "hidden md:block"}>
      <div className={mobile ? "" : "ml-10 flex items-baseline space-x-4"}>
        {navItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              onClick={onItemClick}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation