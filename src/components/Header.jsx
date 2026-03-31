import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'The Story', path: '/story' },
    { name: 'Our Chocolates', path: '/chocolates' },
    { name: 'Visit the Factory', path: '/visit' },
    { name: 'Gift Boxes', path: '/gifts' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        height: 'var(--header-height)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 clamp(1rem, 5vw, 4rem)',
        background: 'var(--wood-texture, #2d1a10)',
        backdropFilter: 'blur(8px)',
        borderBottom: '4px solid var(--accent-gold)',
        boxShadow: 'var(--shadow-ornate, 0 4px 15px rgba(0,0,0,0.5))'
      }}
    >
      <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src="/logo_straight.svg" alt="Amsterdam Chocolate Factory" style={{ height: '60px', width: 'auto', filter: 'brightness(1.5)' }} />
      </Link>

      {/* Desktop Nav */}
      <nav className="desktop-nav" style={{ display: 'none' }}>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link to={item.path} style={{ 
                color: '#f5e6d3', 
                textDecoration: 'none', 
                fontSize: '0.8rem', 
                fontWeight: '400', 
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                transition: 'all 0.3s'
              }}>
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a href="#" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
              Shop Online
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ background: 'transparent', border: 'none', color: 'var(--accent-gold)', cursor: 'pointer', display: 'block', zIndex: 1100 }}
      >
        {isOpen ? <X size={36} /> : <Menu size={36} />}
      </button>

      <style>{`
        @media (min-width: 1200px) {
          .desktop-nav { display: block !important; }
          button { display: none !important; }
        }
      `}</style>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'var(--primary-dark)',
              zIndex: 1050,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <ul style={{ listStyle: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    onClick={() => setIsOpen(false)}
                    style={{ color: '#f5e6d3', textDecoration: 'none', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '3px', fontFamily: 'Playfair Display' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: '2rem' }}>
                <a href="#" className="btn-primary" style={{ fontSize: '1.2rem', padding: '16px 40px' }}>Shop Online</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  )
}

export default Header
