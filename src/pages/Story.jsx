import React from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'

const Story = () => {
  return (
    <PageLayout>
      <section style={{ 
        paddingTop: 'calc(var(--header-height) + 60px)', 
        paddingBottom: '100px',
        backgroundColor: '#1a0f08'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-gradient" 
            style={{ fontSize: '4rem', marginBottom: '2rem' }}
          >
            The Legend of Our Factory
          </motion.h1>
          
          <div style={{ position: 'relative', marginBottom: '3rem' }}>
            <img src="/factory_narrative.png" alt="Story" style={{ width: '100%', height: '400px', objectFit: 'cover', border: '5px solid var(--accent-gold)', borderRadius: '12px' }} />
          </div>

          <div style={{ color: 'var(--cream)', fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p>
              Born from a single golden cocoa bean found in the Venezuelan mists, our factory was founded by the legendary Cornelius Pumpernickel in 1883. He dreamt of a place where chocolate wasn’t just a food, but an experience that engaged every sense—especially the sense of wonder.
            </p>
            <p>
              He moved to the Prinsengracht canal in Amsterdam, where the water could cool his enormous copper tempering machines. Today, we carry on his legacy, combining 19th-century techniques with the whimsical innovation of the modern world. Every gear you see turning has a purpose; every steam vent contributes to the aromatic magic.
            </p>
            <p>
              We are not just a chocolate shop; we are a fairytale written in cocoa and gold. Step inside, let the chime of our clockwork bells welcome you, and taste the pure imagination that goes into every single bar.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Story
