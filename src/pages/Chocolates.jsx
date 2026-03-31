import React from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'

const Chocolates = () => {
  const chocolateProducts = [
    { name: "Liquid Gold Bar", text: "Our signature 72% dark blend, harvest from specific golden cacao beans.", price: "€12.50", img: "/pralines.png" },
    { name: "Copper Cream Truffle", text: "Smooth milk chocolate with a molten caramel center churned in brass.", price: "€4.50", img: "/store3.jpg" },
    { name: "Wonka Whimsy Box", text: "A mystical selection of 12 artisan fusions, no two boxes are same.", price: "€38.00", img: "/store2.jpg" },
    { name: "Steampunk Pralines", text: "Crunchy hazelnut in a brass-colored cocoa shell, gear-shaped.", price: "€18.00", img: "/pralines.png" },
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
            style={{ textAlign: 'center', marginBottom: '5rem' }}
          >
            <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', marginBottom: '1rem' }}>Our Creations</h1>
            <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
              Handcrafted in small batches using 19th-century copper vats and modern imagination.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ marginBottom: '5rem', position: 'relative' }}
          >
            <div className="ornate-border" style={{ padding: '4px', background: 'var(--accent-gold)' }}>
              <img src="/pralines-tray.png" alt="Selection" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
               <h2 style={{ fontSize: '3rem', color: 'white', textShadow: '0 4px 20px rgba(0,0,0,0.8)', fontFamily: 'Playfair Display' }}>The Master Selection</h2>
            </div>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {chocolateProducts.map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(212, 175, 55, 0.3)', 
                  padding: '2.5rem',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-ornate)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ y: -10, borderColor: 'var(--accent-gold)' }}
              >
                <div style={{ height: '220px', overflow: 'hidden', borderRadius: '12px', marginBottom: '2rem', border: '2px solid var(--accent-gold)' }}>
                   <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>{product.name}</h3>
                <p style={{ opacity: 0.6, fontSize: '1rem', marginBottom: '1.5rem', minHeight: '3rem' }}>{product.text}</p>
                <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>{product.price}</div>
                <button className="btn-primary" style={{ padding: '12px 30px', width: '100%' }}>Add to Basket</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Chocolates
