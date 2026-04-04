import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData
        }).toString(),
      })
      setSubmitted(true)
    } catch (error) {
      console.error("The Archive carrier pigeon was lost in transit:", error)
    }
  }

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
            style={{ textAlign: 'center', marginBottom: '5rem' }}
          >
            <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', marginBottom: '1rem' }}>Send a Carrier Pigeon</h1>
            <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
              Whether you have a curious question or you've found a golden ticket, we look forward to hearing from you.
            </p>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
               <div className="ornate-border" style={{ padding: '8px', background: 'var(--accent-gold)', borderRadius: '12px' }}>
                  <img src="/pigeon-brass.png" alt="Brass Messenger" style={{ width: '100%', height: '550px', objectFit: 'cover', borderRadius: '4px' }} />
               </div>
               <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'var(--accent-gold)', padding: '10px 20px', color: '#1a0f08', fontWeight: 'bold' }}>
                  URGENT DELIVERY
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ 
                background: 'rgba(255, 248, 230, 0.03)', 
                border: '1px solid rgba(212, 175, 55, 0.3)', 
                padding: '4rem', 
                borderRadius: '16px',
                boxShadow: 'var(--shadow-ornate)',
                minHeight: '550px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Your Official Name</label>
                      <input 
                        name="name" 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        style={{ background: 'transparent', border: 'none', borderBottom: '2px solid rgba(212, 175, 55, 0.4)', padding: '12px 0', fontSize: '1.2rem', color: 'white', outline: 'none' }} 
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Your Steam-Mail</label>
                      <input 
                        name="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        style={{ background: 'transparent', border: 'none', borderBottom: '2px solid rgba(212, 175, 55, 0.4)', padding: '12px 0', fontSize: '1.2rem', color: 'white', outline: 'none' }} 
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>A Message to the Chocolatier</label>
                      <textarea 
                        name="message" 
                        rows="4" 
                        required 
                        value={formData.message}
                        onChange={handleChange}
                        style={{ background: 'transparent', border: 'none', borderBottom: '2px solid rgba(212, 175, 55, 0.4)', padding: '12px 0', fontSize: '1.2rem', color: 'white', outline: 'none', resize: 'none' }} 
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ padding: '15px 40px', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                      Launch Messenger <Send size={20} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{ textAlign: 'center', color: '#f5e6d3' }}
                  >
                    <CheckCircle size={64} style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} />
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: 'Playfair Display' }}>Message Launched!</h2>
                    <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.6' }}>
                      Your scroll has been secured and the carrier pigeon is in flight. Expect a response from the factory archives shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      style={{ background: 'transparent', border: 'none', color: 'var(--accent-gold)', marginTop: '2rem', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div style={{ 
            marginTop: '80px', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '40px',
            textAlign: 'center' 
          }}>
            <div style={{ padding: '2rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px' }}>
              <MapPin style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} size={36} />
              <h4 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '0.5rem' }}>The Shop</h4>
              <p style={{ opacity: 0.7, color: 'var(--cream)' }}>Leidsestraat 87, Amsterdam</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px' }}>
              <Phone style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} size={36} />
              <h4 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '0.5rem' }}>The Office</h4>
              <p style={{ opacity: 0.7, color: 'var(--cream)' }}>+31 (0) 20 123 4567</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px' }}>
              <Mail style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} size={36} />
              <h4 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '0.5rem' }}>The Archives</h4>
              <p style={{ opacity: 0.7, color: 'var(--cream)' }}>hello@chocolatefactory.nl</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Contact
