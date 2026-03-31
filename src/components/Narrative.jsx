import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Narrative = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: 'clamp(50px, 8vw, 100px) 0'
    }}>
      <motion.div
        style={{
          position: 'absolute',
          top: '-20%',
          left: 0,
          width: '100%',
          height: '130%',
          backgroundImage: 'linear-gradient(rgba(26, 15, 8, 0.7), rgba(26, 15, 8, 0.8)), url("/factory_narrative.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
          zIndex: -1
        }}
      />

      <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: '3rem', marginBottom: '2rem' }}
          className="text-gradient"
        >
          A Legacy of Sweet Innovation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ fontSize: '1.3rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '2.5rem' }}
        >
          "Part of the renowned Gautam Group, we bring decades of international hospitality and retail excellence to the heart of Amsterdam. We don’t just sell chocolate; we curate memories. From the moment you hear the chime of our door to the last melt-on-the-tongue bite, you are part of our story."
        </motion.p>
        <button className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)' }}>
          Learn About Our Heritage
        </button>
      </div>
    </section>
  )
}

export default Narrative
