import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const ExperienceTrio = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Delayed automatic playback with viscous deceleration
    const timer = setTimeout(() => {
      if (videoRef.current) {
        const video = videoRef.current;
        video.play().catch(() => { });

        const checkVicosity = () => {
          if (!video) return;

          const remainingTime = video.duration - video.currentTime;

          // Start slowing down when 3.5s are remaining
          if (remainingTime < 3.5 && remainingTime > 3) {
            // scale playbackRate down for a thick 'melted' feel
            video.playbackRate = Math.max(0.4, (remainingTime - 2.3) / 1.2);
          }

          // Exact pause point: Ending the video 2.3s before real end
          if (remainingTime <= 2.3) {
            video.pause();
            video.playbackRate = 1; // Reset
            return;
          }

          requestAnimationFrame(checkVicosity);
        };

        requestAnimationFrame(checkVicosity);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [])

  const experiences = [
    {
      title: 'Artisanal Creations',
      img: '/pralines.png',
      text: 'Discover our selection of fresh Belgian chocolates, from traditional truffles to avant-garde flavor fusions.'
    },
    {
      title: 'The Copper Works',
      img: '/store2.jpg',
      text: 'More than a shop; it’s a sensory journey. Watch the gears turn and smell the liquid gold in the heart of the city.'
    },
    {
      title: 'A Dutch Fairytale',
      img: '/store3.jpg',
      text: 'Take a piece of the story home with our characterful bars and luxurious, storytelling gift collections.'
    }
  ]

  return (
    <section
      id="discovery"
      style={{
        paddingTop: 'clamp(100px, 15vw, 220px)',
        paddingBottom: 'clamp(50px, 8vw, 100px)',
        backgroundColor: '#ffffff',
        position: 'relative',
        zIndex: 10,
        overflow: 'visible',
        width: '100%'
      }}
    >
      {/* Delayed Automatic Drip Video with Viscous Deceleration */}
      <video
        ref={videoRef}
        muted
        playsInline
        loop={false}
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: 'auto',
          minHeight: '200px',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <source src="/chocolate-drip-video.mp4" type="video/mp4" />
      </video>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px'
        }}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              style={{ textAlign: 'center' }}
            >
              <div className="ornate-border" style={{
                height: '240px',
                width: '100%',
                overflow: 'hidden',
                marginBottom: '25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
              }}>
                <img
                  src={exp.img}
                  alt={exp.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#1a0f08', marginBottom: '1rem' }}>{exp.title}</h3>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6', fontWeight: '400' }}>{exp.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTrio
