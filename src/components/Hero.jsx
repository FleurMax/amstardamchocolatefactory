import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: 'calc(65vh - var(--header-height))',
      marginTop: 'var(--header-height)',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '80px'
    }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(rgba(26, 15, 8, 0.3), rgba(26, 15, 8, 0.7))',
        zIndex: 0
      }} />

      <div className="container" style={{ textAlign: 'center', maxWidth: '1000px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}
        >
          <img
            src="/hat.png"
            className="hero-logo"
            alt="The Magician's Hat"
            style={{
              height: 'clamp(80px, 15vw, 110px)',
              width: 'auto',
              margin: '0 auto',
              filter: 'drop-shadow(0 0 25px rgba(212, 175, 55, 0.6))'
            }}
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4.2rem)', marginBottom: '0.8rem', lineHeight: '1', width: '100%' }}
          className="text-gradient"
        >
          A World of Pure Imagination
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', marginBottom: '2em', fontStyle: 'italic', opacity: 0.9, maxWidth: '800px', marginInline: 'auto' }}
        >
          Where Belgian craftsmanship meets the magic of Amsterdam. Experience a modern-day chocolate factory filled with wonder, whimsy, and the finest artisanal treats.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <button className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.85rem' }}>Discover the Magic</button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
