import React from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
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
            Send a Carrier Pigeon
          </motion.h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', textAlign: 'left' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>Contact Details</h3>
              <p style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.2rem', color: 'var(--cream)' }}>
                <MapPin size={24} style={{ color: 'var(--accent-gold)' }} />
                <span>Prinsengracht 123, Amsterdam</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.2rem', color: 'var(--cream)' }}>
                <Phone size={24} style={{ color: 'var(--accent-gold)' }} />
                <span>+31 (0) 20 123 4567</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.2rem', color: 'var(--cream)' }}>
                <Mail size={24} style={{ color: 'var(--accent-gold)' }} />
                <span>magic@amsterdamchocolatefactory.nl</span>
              </p>
              <p style={{ opacity: 0.7, marginTop: '2rem' }}>
                We are always listening. Whether you have a question about our roasting gears or you've found a golden ticket, we look forward to hearing from you.
              </p>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ 
                background: 'rgba(212, 175, 55, 0.05)', 
                border: '1px solid var(--accent-gold)', 
                padding: '3rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              <input type="text" placeholder="Your Name" style={{ background: 'transparent', border: 'none', borderBottom: '2px solid rgba(212, 175, 55, 0.3)', padding: '15px', fontSize: '1.1rem', color: 'white', focusOutline: 'var(--accent-gold)' }} />
              <input type="email" placeholder="Your Steam-Mail" style={{ background: 'transparent', border: 'none', borderBottom: '2px solid rgba(212, 175, 55, 0.3)', padding: '15px', fontSize: '1.1rem', color: 'white' }} />
              <textarea placeholder="Your Message to the Chocolatier" style={{ background: 'transparent', border: 'none', borderBottom: '2px solid rgba(212, 175, 55, 0.3)', padding: '15px', fontSize: '1.1rem', color: 'white', minHeight: '150px' }} />
              <button className="btn-primary" style={{ padding: '15px 40px', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '1.5rem' }}>
                Send Pigeon <Send size={20} />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Contact
