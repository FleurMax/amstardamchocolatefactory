import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ 
      padding: '60px 0', 
      backgroundColor: '#140b06', 
      borderTop: '1px solid rgba(212, 175, 55, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src="/logo_straight.svg" alt="Amsterdam Chocolate Factory" style={{ height: '40px', filter: 'brightness(1.5)' }} />
            </Link>
          </div>
          
          <div className="footer-links-container" style={{ textAlign: 'right' }}>
            <div className="footer-links" style={{ display: 'flex', justifyContent: 'flex-end', gap: '30px', listStyle: 'none', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', flexWrap: 'wrap' }}>
              {['Privacy Policy', 'Terms of Service', 'Instagram', 'Facebook', 'TikTok'].map(link => (
                <Link key={link} to="#" style={{ color: '#f5e6d3', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{link}</Link>
              ))}
              <Link to="/blog" style={{ color: '#f5e6d3', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Blog</Link>
            </div>
            <p style={{ fontSize: '0.85rem', opacity: 0.4 }}>© 2024 The Amsterdam Chocolate Factory. All rights reserved.</p>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .footer-links-container, .footer-links { justify-content: center !important; text-align: center !important; }
            }
          `}</style>
        </div>
      </div>
    </footer>
  )
}

export default Footer
