import React from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'

const Story = () => {
  return (
    <PageLayout>
      <section style={{ 
        paddingTop: 'calc(var(--header-height) + 80px)', 
        paddingBottom: '120px',
        backgroundColor: '#1a0f08',
        backgroundImage: 'linear-gradient(to bottom, rgba(26,15,8,0.9), rgba(26,15,8,0.9)), url("/factory_narrative.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ textAlign: 'center', marginBottom: '5rem' }}
          >
            <h1 className="text-gradient" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              The Legend of Cornelius Pumpernickel
            </h1>
            <div style={{ width: '100px', height: '4px', background: 'var(--accent-gold)', margin: '0 auto' }}></div>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <div className="ornate-border" style={{ padding: '15px', background: 'var(--accent-gold)', borderRadius: '8px', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>
                <img 
                  src="/pumpernickel.png" 
                  alt="Cornelius Pumpernickel" 
                  style={{ width: '100%', height: '550px', objectFit: 'cover', borderRadius: '4px' }} 
                />
              </div>
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--accent-gold)', padding: '15px 30px', color: '#1a0f08', fontWeight: 'bold', fontFamily: 'Playfair Display', fontSize: '1.2rem', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>
                Founder, 1883
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ 
                background: 'rgba(255, 248, 230, 0.03)', 
                backdropFilter: 'blur(10px)',
                padding: '3rem', 
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '16px',
                boxShadow: 'inset 0 0 50px rgba(0,0,0,0.2)'
              }}
            >
              <div style={{ color: 'var(--cream)', fontSize: '1.15rem', lineHeight: '1.9', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p>
                  Born from a single golden cocoa bean found in the Venezuelan mists, our factory was founded by the legendary <strong style={{ color: 'var(--accent-gold)' }}>Cornelius Pumpernickel</strong> in 1883. An obsessive explorer and master of the sweet sciences, he dreamt of a place where chocolate engaged every sense.
                </p>
                <p>
                  Cornelius moved to the Prinsengracht canal in Amsterdam, specifically choosing the location for its natural cooling properties. His massive copper tempering machines, powered by an intricate system of steam and clockwork, were designed to produce the "Liquid Gold" that would soon capture the hearts of the world.
                </p>
                <p>
                  Today, we maintain those original machines, their gears still chiming with the same whimsical rhythm. We don't just make chocolate; we cultivate wonder, one golden bean at a time.
                </p>
                <img src="/logo.svg" alt="Seal" style={{ width: '80px', height: '80px', alignSelf: 'center', marginTop: '1rem', opacity: 0.8 }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Story
