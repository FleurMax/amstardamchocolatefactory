import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import { ArrowLeft, Clock, User, Tag } from 'lucide-react'

const blogArticles = [
  {
    id: 1,
    title: "The Secret of the Golden Cocoa Bean",
    category: "Origins",
    date: "Mars 15, 1884",
    image: "/blog-bean.png",
    content: [
      "Hidden in the Venezuelan mist is a cacao bean so rare it was once used as currency for the gods themselves. Legend specifically identifies the Ocumare valley as the cradle of the Golden Bean—a mutation so rare it occurs only once in a thousand trees.",
      "Cornelius Pumpernickel spent seven years tracking the rumors of this bean. When he finally found it, he realized its flavor wasn't just 'chocolate'—it was a symphony of honey, toasted wood, and an ethereal floral note that defied standard classification.",
      "Today, we process these beans in our specialized brass-lined roasters, ensuring that the 'gold' within is preserved for our signature bars. It's a taste of history, mystery, and pure craftsmanship."
    ]
  },
  {
    id: 2,
    title: "Steampunk & Sugar: The 19th Century Copper Vat",
    category: "Craft",
    date: "April 2, 1884",
    image: "/blog-vat.png",
    content: [
      "Why do we persist with heavy copper and brass gears when modern machines are faster? The answer lies in the heat. Copper is the most honest of metals; it conducts heat with a precision that modern stainless steel simply cannot replicate.",
      "Our mixing vats are over 140 years old, yet they function with the grace of a clockwork ballerina. The constant, rhythmic churning of the brass paddles ensures that every molecule of cocoa butter is perfectly emulsified with the sugar crystals.",
      "This isn't just manufacturing; it's a slow dance of elements. By slowing down the tempering process using these massive vintage vats, we achieve a unique 'snap' that has become the hallmark of the Amsterdam Chocolate Factory."
    ]
  },
  {
    id: 3,
    title: "Canal-Side Magic: Why Prinsengracht?",
    category: "Heritage",
    date: "April 18, 1884",
    image: "/blog-canal.png",
    content: [
      "The waters of the Prinsengracht do more than carry boats; they cool our basement tempering rooms naturally. In the 1880s, refrigeration was a luxury of the future. Cornelius, ever the innovator, designed a series of subterranean arches that utilize the constant temperature of the canal water.",
      "By placing our factory on the edge of the canal, we integrated the city of Amsterdam into our very recipe. The slight humidity of the water-front air helps prevent the chocolate from drying too quickly, resulting in a creamier texture.",
      "When you visit us today, you're not just standing in a building—you're standing inside a living machine that breathes the cool air of the Amsterdam canals."
    ]
  },
  {
    id: 4,
    title: "A Wonka Winter: Magical Festive Sets",
    category: "Gifting",
    date: "October 30, 1883",
    image: "/blog-gift.png",
    content: [
      "Preparing for the festive holiday rush involves more than wrapping; it involves an orchestra of clockwork packaging. Each gift set we produce is designed to be a puzzle and a treasure chest in one.",
      "Our winter collections feature the 'Snowflake Praline'—a white chocolate creation with a liquid center of spiced orange and cardamom. Each praline is hand-dusted with edible gold leaf, reflecting the candlelight of a Victorian Christmas dinner.",
      "The boxes themselves are made of thick, wood-pressed paper and feature brass mechanical latches that chime a tiny bell when opened. It’s the ultimate gift for those who still believe in the magic of winter."
    ]
  },
  {
    id: 5,
    title: "Mastering the Art of Liquid Gold",
    category: "Science",
    date: "January 12, 1884",
    excerpt: "Liquid gold is what we call our signature 72% dark blend. Tempering it to a snap requires nerves of iron...",
    image: "/blog-craft.png",
    content: [
      "Liquid gold is what we call our signature 72% dark blend. It doesn't just melt; it flows. Achieving this perfect viscosity requires a balance of temperature so precise that even a single degree change can ruin a 50kg batch.",
      "We use a 3-day tempering cycle. Most factories do it in 2 hours. Why the wait? Because time is the silent ingredient in premium chocolate. By letting the cocoa crystals stabilize naturally over 72 hours, we achieve a deep, complex gloss that shines like polished mahogany.",
      "Our master chocolatier, Henri Van Der Veen, uses a antique brass thermometer to check the 'Golden Point'. It's a combination of chemistry, physics, and a touch of alchemy that makes our Liquid Gold legendary."
    ]
  }
]

const BlogPost = () => {
  const { id } = useParams()
  const post = blogArticles.find(a => a.id === parseInt(id))

  if (!post) {
    return (
      <PageLayout>
        <div style={{ padding: '200px 0', textAlign: 'center', color: 'white' }}>
          <h2>Article not found in the archives!</h2>
          <Link to="/blog" style={{ color: 'var(--accent-gold)' }}>Return to Blog</Link>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <article style={{ 
        paddingTop: 'calc(var(--header-height) + 40px)', 
        paddingBottom: '100px',
        backgroundColor: '#1a0f08',
        color: 'var(--cream)'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ marginBottom: '2rem' }}
          >
            <Link to="/blog" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', textDecoration: 'none', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
              <ArrowLeft size={16} /> Back to Journals
            </Link>
          </motion.div>

          <header style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Tag size={14} /> {post.category}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> {post.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={14} /> C. Pumpernickel</span>
            </div>
            <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2', marginBottom: '2rem' }}>{post.title}</h1>
          </header>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: '3.5rem' }}
          >
            <img 
              src={post.image} 
              alt={post.title} 
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '500px', 
                objectFit: 'cover', 
                borderRadius: '16px', 
                border: '4px solid var(--accent-gold)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
              }} 
            />
          </motion.div>

          <div style={{ fontSize: '1.25rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {post.content.map((para, i) => (
              <motion.p 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          <footer style={{ marginTop: '5rem', padding: '3rem', borderTop: '1px solid rgba(212, 175, 55, 0.2)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>Enjoyed this tale?</h3>
            <p style={{ opacity: 0.7, marginBottom: '2rem' }}>Step into our factory and join the Chocolate Club for more whimsical stories delivered via carrier pigeon.</p>
            <Link to="/contact" className="btn-primary" style={{ padding: '12px 40px' }}>Join the Club</Link>
          </footer>
        </div>
      </article>
    </PageLayout>
  )
}

export default BlogPost
