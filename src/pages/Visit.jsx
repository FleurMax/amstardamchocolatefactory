import React from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import { MapPin, Clock, Ticket } from 'lucide-react'

const Visit = () => {
  return (
    <PageLayout>
      <section style={{ 
        paddingTop: 'calc(var(--header-height) + 60px)', 
        paddingBottom: '120px',
        backgroundColor: '#1a0f08'
      }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', marginBottom: '1rem' }}>Visit The Copper Works</h1>
            <p style={{ opacity: 0.7, maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
              Step into a world of clockwork, cocoa, and pure imagination on the historic canals of Amsterdam.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'start' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
               <div className="ornate-border" style={{ padding: '8px', background: 'var(--accent-gold)', borderRadius: '12px' }}>
                  <img src="/entrance-night.png" alt="Factory Entrance" style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '4px' }} />
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div style={{ 
                background: 'rgba(255, 248, 230, 0.05)', 
                border: '1px solid var(--accent-gold)', 
                padding: '3rem', 
                borderRadius: '16px',
                color: 'var(--cream)'
              }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-gold)', fontFamily: 'Playfair Display' }}>Plan Your Journey</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <MapPin style={{ color: 'var(--accent-gold)', flexShrink: 0 }} size={28} />
                    <div>
                       <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Location</h4>
                       <p style={{ opacity: 0.7 }}>Leidsestraat 87, 1017 NX Amsterdam, Netherlands</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '20px' }}>
                    <Clock style={{ color: 'var(--accent-gold)', flexShrink: 0 }} size={28} />
                    <div>
                       <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Business Hours</h4>
                       <p style={{ opacity: 0.7 }}>Monday – Sunday: 10:00 – 19:00</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '20px' }}>
                    <Ticket style={{ color: 'var(--accent-gold)', flexShrink: 0 }} size={28} />
                    <div>
                       <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Guided Tours</h4>
                       <p style={{ opacity: 0.7 }}>Daily at 11:00, 14:00, and 16:00. <br/>Adults: €15 | Children: €8</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '3rem' }}>
                  <button className="btn-primary" style={{ width: '100%', padding: '15px' }}>Book Your Tour</button>
                </div>
              </div>

              <div style={{ padding: '2rem', borderLeft: '4px solid var(--accent-gold)', background: 'rgba(212, 175, 55, 0.02)' }}>
                <p style={{ fontStyle: 'italic', opacity: 0.8, lineHeight: '1.6' }}>
                  "The scent of roasting cocoa is our north star. Follow it to the Leidsestraat, where the pulse of the city meets the heart of the bean."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Visit
