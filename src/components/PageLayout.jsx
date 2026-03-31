import React from 'react'

const PageLayout = ({ children }) => {
  return (
    <main style={{ minHeight: '80vh', backgroundColor: 'var(--primary-dark)', padding: '0' }}>
      {children}
    </main>
  )
}

export default PageLayout
