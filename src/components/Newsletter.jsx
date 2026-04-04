import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section style={{ 
      padding: '60px 0', 
      backgroundColor: '#1a0f08', 
      borderTop: '1px solid rgba(212, 175, 55, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <div className="newsletter-text">
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#d4af37' }}>Join the Chocolate Club</h3>
            <p style={{ opacity: 0.8, marginBottom: '2rem', fontSize: '1.1rem' }}>
              Sign up for exclusive news, secret tasting invites, and your chance to <strong>Win a Golden Gift Box</strong> every month!
            </p>
            
            <AnimatePresence>
              {!subscribed ? (
                <motion.form 
                  onSubmit={handleSubscribe} 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}
                >
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..." 
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '15px 25px',
                      borderRadius: '50px',
                      color: 'white',
                      flex: 1,
                      fontSize: '1rem',
                      outline: 'none',
                      minWidth: '250px'
                    }}
                  />
                  <button type="submit" className="btn-primary">Subscribe to the Magic</button>
                </motion.form>
              ) : (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{ 
                    padding: '15px 30px', 
                    background: 'rgba(212, 175, 55, 0.1)', 
                    border: '2px solid #d4af37', 
                    borderRadius: '12px',
                    textAlign: 'center',
                    color: '#f5e6d3'
                  }}
                >
                  <h4 style={{ fontSize: '1.4rem', color: '#d4af37', marginBottom: '8px' }}>Welcome to the Club!</h4>
                  <p>Your golden ticket to the latest news will arrive shortly via carrier pigeon.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="ticket-visual" style={{ perspective: '1000px', display: 'flex', justifyContent: 'center' }}>
            <motion.div 
              style={{
                width: '400px',
                height: '240px',
                position: 'relative',
                transformStyle: 'preserve-3d',
                cursor: 'pointer'
              }}
              animate={{ rotateY: [0, 180, 0] }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              {/* Front */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(212, 175, 55, 0.3)',
                border: '2px solid #d4af37'
              }}>
                <img src="/ticket-front.jpg" alt="Golden Ticket Front" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              {/* Back */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(212, 175, 55, 0.3)',
                border: '2px solid #d4af37'
              }}>
                <img src="/ticket-back.jpg" alt="Golden Ticket Back" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Newsletter
