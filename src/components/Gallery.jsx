import React from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  return (
    <section id="gallery" style={{ padding: 'clamp(60px, 10vw, 80px) 0', backgroundColor: '#1a0f08' }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '60px', 
        alignItems: 'center' 
      }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="ornate-border"
          style={{ height: 'clamp(300px, 40vh, 450px)', overflow: 'hidden' }}
        >
          <img src="/store1.jpg" alt="Amsterdam Store Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Visit the Heart of Amsterdam</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2rem', lineHeight: '1.8' }}>
            Located in the historic center, our flagship store brings together the industrial beauty of the 17th century with the magical craft of modern chocolate making. Take a seat, enjoy the aroma, and watch the magic happen.
          </p>
          <div style={{ padding: '20px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: '8px' }}>
            <h4 style={{ color: 'var(--accent-gold)', marginBottom: '10px' }}>Location & Hours</h4>
            <p style={{ fontSize: '0.9rem' }}>Prinsengracht 123, Amsterdam</p>
            <p style={{ fontSize: '0.9rem' }}>Open daily: 10:00 - 19:00</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
