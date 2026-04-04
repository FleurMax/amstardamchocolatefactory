import React from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'

const Gifts = () => {
  const giftProducts = [
    { name: "The Golden Ticket Box", text: "A curated collection of our 12 most magical artisan pralines in a velvet-lined brass case.", price: "€45.00" },
    { name: "Copper Gear Collection", text: "8 milk chocolate gears with salted caramel and brass-colored cocoa dust.", price: "€28.00" },
    { name: "The Amsterdam Fairytale", text: "A massive chocolate-covered storytelling book with 4 dark bars and a map of the Leidsestraat.", price: "€55.00" },
  ]

  return (
    <PageLayout>
      <section style={{ 
        paddingTop: 'calc(var(--header-height) + 60px)', 
        paddingBottom: '120px',
        backgroundColor: '#1a0f08'
      }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', marginBottom: '1rem' }}>Gifts of Wonder</h1>
            <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
              Perfect for those who seek the extraordinary. Every box is hand-packed and sealed with clockwork precision.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
               <div className="ornate-border" style={{ padding: '4px', background: 'var(--accent-gold)' }}>
                  <img src="/gift-stack.png" alt="Gift Collections" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
               </div>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {giftProducts.map((gift, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  style={{ 
                    borderBottom: '1px solid rgba(212, 175, 55, 0.2)', 
                    paddingBottom: '2.5rem',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', fontFamily: 'Playfair Display' }}>{gift.name}</h3>
                    <span style={{ fontSize: '1.4rem', color: 'white', fontWeight: 'bold' }}>{gift.price}</span>
                  </div>
                  <p style={{ color: 'var(--cream)', opacity: 0.7, fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>{gift.text}</p>
                  <button className="btn-primary" style={{ padding: '10px 30px' }}>Gift the Magic</button>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              background: 'var(--wood-texture)', 
              padding: '4rem', 
              borderRadius: '20px', 
              textAlign: 'center', 
              border: '2px solid var(--accent-gold)',
              boxShadow: 'var(--shadow-ornate)'
            }}
          >
            <h2 style={{ fontSize: '2.5rem', color: '#f5e6d3', marginBottom: '1.5rem', fontFamily: 'Playfair Display' }}>Corporate & Grand Events</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', color: '#f5e6d3', opacity: 0.8, fontSize: '1.2rem' }}>
              Looking for bespoke clockwork-themed gifts for your company or a special celebration? We specialize in larger-than-life chocolate experiences.
            </p>
            <button className="btn-primary" style={{ padding: '15px 40px' }}>Inquire for Events</button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Gifts
