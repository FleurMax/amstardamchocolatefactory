import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#1a0f08', 
      color: '#f5e6d3', 
      padding: '80px 0 40px 0',
      borderTop: '4px solid var(--accent-gold)',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>
          
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
            <img src="/logo_straight.svg" alt="Amsterdam Chocolate Factory" style={{ height: '40px', filter: 'brightness(1.5)' }} />
          </Link>
          
          <div className="footer-links-container" style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', gap: '30px', marginBottom: '20px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <Link to="/story" style={{ color: '#f5e6d3', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>The Story</Link>
              <Link to="/chocolates" style={{ color: '#f5e6d3', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Chocolates</Link>
              <Link to="/visit" style={{ color: '#f5e6d3', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Visit Us</Link>
              <Link to="/gifts" style={{ color: '#f5e6d3', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Gift Boxes</Link>
              <Link to="/blog" style={{ color: '#f5e6d3', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Blog</Link>
              <Link to="/contact" style={{ color: '#f5e6d3', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</Link>
            </div>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end' }}>
              <a href="#" style={{ color: 'var(--accent-gold)' }}><Instagram size={20} /></a>
              <a href="#" style={{ color: 'var(--accent-gold)' }}><Facebook size={20} /></a>
              <a href="#" style={{ color: 'var(--accent-gold)' }}><Twitter size={20} /></a>
              <a href="#" style={{ color: 'var(--accent-gold)' }}><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', fontSize: '0.8rem', opacity: 0.6 }}>
          <p>© 1884 Amsterdam Chocolate Factory. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="#" style={{ color: '#f5e6d3', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="#" style={{ color: '#f5e6d3', textDecoration: 'none' }}>Terms of Service</Link>
            <Link to="#" style={{ color: '#f5e6d3', textDecoration: 'none' }}>Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
