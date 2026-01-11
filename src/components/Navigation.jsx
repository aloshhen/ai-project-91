import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Меню', href: '#menu' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'События', href: '#events' },
    { label: 'Бронирование', href: '#booking' }
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-bar-dark/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-display text-bar-gold">Luxe Bar</div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-bar-gold transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bar-dark">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-white hover:bg-bar-burgundy/20"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  )
}