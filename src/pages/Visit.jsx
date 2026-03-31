import React from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'

const Visit = () => {
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
            The Factory Experience
          </motion.h1>
          
          <img src="/store1.jpg" alt="Visit the Factory" style={{ width: '100%', height: '400px', objectFit: 'cover', border: '5px solid var(--accent-gold)', borderRadius: '12px', marginBottom: '3rem' }} />

          <div style={{ color: 'var(--cream)', fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p>
              The Prinsengracht 123 in Amsterdam is more than just a shop. It's a sanctuary for chocolate lovers and those who believe in magic. As you approach, the sweet aroma of roasting cocoa beans will call to you from the canal side.
            </p>
            <p>
              When you enter, you’ll witness our massive copper gears turning, and our steam vents whispering secrets of ancient Mayan recipes and 19th-century Dutch innovation. We offer guided tours every hour, where we reveal the science of tempered perfection and the whimsy of the golden cocoa bean.
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>
              "Everything in this room is eatable, even I'm eatable! But that is called cannibalism, my dear children, and is in fact frowned upon in most societies." — Cornelius Pumpernickel
            </p>
            <div style={{ padding: '2rem', border: '2px dashed var(--accent-gold)', borderRadius: '12px', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>Visit Details</h3>
              <p>📍 Prinsengracht 123, Amsterdam</p>
              <p>⏰ Open Monday to Sunday, 10:00 - 19:00</p>
              <p>🎟️ Tours: €15 per person (including a tasting)</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Visit
