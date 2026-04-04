import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'

const blogArticles = [
  {
    id: 1,
    title: "The Secret of the Golden Cocoa Bean",
    category: "Origins",
    date: "Mars 15, 1884",
    excerpt: "Hidden in the Venezuelan mist is a cacao bean so rare it was once used as currency for the gods themselves...",
    image: "/blog-bean.png"
  },
  {
    id: 2,
    title: "Steampunk & Sugar: The 19th Century Copper Vat",
    category: "Craft",
    date: "April 2, 1884",
    excerpt: "Why do we persist with heavy copper and brass gears when modern machines are faster? The answer lies in the heat...",
    image: "/blog-vat.png"
  },
  {
    id: 3,
    title: "Canal-Side Magic: Why Leidsestraat?",
    category: "Heritage",
    date: "April 18, 1884",
    excerpt: "The heritage of the Leidsestraat do more than carry shoppers; they cool our basement tempering rooms naturally...",
    image: "/blog-canal.png"
  },
  {
    id: 4,
    title: "A Wonka Winter: Magical Festive Sets",
    category: "Gifting",
    date: "October 30, 1883",
    excerpt: "Preparing for the festive holiday rush involves more than wrapping; it involves an orchestra of clockwork packaging...",
    image: "/blog-gift.png"
  },
  {
    id: 5,
    title: "Mastering the Art of Liquid Gold",
    category: "Science",
    date: "January 12, 1884",
    excerpt: "Liquid gold is what we call our signature 72% dark blend. Tempering it to a snap requires nerves of iron...",
    image: "/blog-craft.png"
  }
]

const Blog = () => {
  return (
    <PageLayout>
      <section style={{ 
        paddingTop: 'calc(var(--header-height) + 60px)', 
        paddingBottom: '100px',
        backgroundColor: '#1a0f08'
      }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1rem' }}>The Factory Blog</h1>
            <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
              Tales of clockwork, cocoa, and chocolate magic from the heart of Amsterdam.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {blogArticles.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid var(--accent-gold)', 
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                   <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                    <span>{post.category}</span>
                    <span style={{ opacity: 0.6 }}>{post.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>{post.title}</h3>
                  <p style={{ opacity: 0.6, fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="btn-primary" style={{ textAlign: 'center', fontSize: '0.8rem', padding: '10px 20px', display: 'inline-block' }}>
                    Continue Reading
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Blog
