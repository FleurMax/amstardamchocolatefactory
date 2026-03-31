import React from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'

const Gifts = () => {
  const giftProducts = [
    { name: "The Golden Ticket Box", text: "A curated collection of our 12 most magical artisan pralines.", price: "€45.00" },
    { name: "Copper Gear Collection", text: "8 milk chocolate gears with salted caramel and brass-colored cocoa dust.", price: "€28.00" },
    { name: "The Amsterdam Fairytale", text: "A massive chocolate-covered storytelling book with 4 dark bars.", price: "€55.00" },
    { name: "Cornelius' Secret Pouch", text: "Hand-roasted cocoa nibs and our signature gold-dusted almonds.", price: "€18.00" },
  ]

  return (
    <PageLayout>
      <section style={{ 
        paddingTop: 'calc(var(--header-height) + 60px)', 
        paddingBottom: '100px',
        backgroundColor: '#1a0f08'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gradient" 
            style={{ fontSize: '4rem', marginBottom: '2.5rem' }}
          >
            Gift Collections of Pure Imagination
          </motion.h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {giftProducts.map((gift, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                style={{ 
                  background: 'rgba(212, 175, 55, 0.1)', 
                  border: '2px solid var(--accent-gold)', 
                  padding: '2rem',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>{gift.name}</h3>
                <p style={{ opacity: 0.7, fontSize: '1rem', flex: 1, marginBottom: '1.5rem' }}>{gift.text}</p>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>{gift.price}</div>
                <button className="btn-primary" style={{ padding: '12px 30px' }}>Gift the Magic</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Gifts
