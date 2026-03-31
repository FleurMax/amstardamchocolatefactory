import React from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'

const Chocolates = () => {
  const chocolateProducts = [
    { name: "Liquid Gold bar", text: "Our signature 72% dark blend with sea salt crystals.", img: "/pralines.png" },
    { name: "Copper Cream Truffle", text: "Smooth milk chocolate with a molten caramel center.", img: "/store3.jpg" },
    { name: "Wonka Whimsy Box", text: "A mystical selection of 12 artisan fusions.", img: "/store2.jpg" },
    { name: "Steampunk Pralines", text: "Crunchy hazelnut in a brass-colored cocoa shell.", img: "/pralines.png" },
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
            style={{ fontSize: '4rem', marginBottom: '2rem' }}
          >
            Handcrafted Creations
          </motion.h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {chocolateProducts.map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                style={{ 
                  background: 'rgba(212, 175, 55, 0.05)', 
                  border: '1px solid var(--accent-gold)', 
                  padding: '2rem',
                  borderRadius: '16px'
                }}
              >
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '220px', objectFit: 'cover', border: '3px solid var(--accent-gold)', borderRadius: '12px', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>{product.name}</h3>
                <p style={{ opacity: 0.7, fontSize: '1rem' }}>{product.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Chocolates
