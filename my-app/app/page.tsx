'use client'

import Hero from '../components/Hero'
import Projects from '../components/Project'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      <motion.div initial="initial" animate="animate" variants={{ initial: {}, animate: {} }}>
        <Hero />
        <Projects />
        <Contact />
        
      </motion.div>
    </main>
  )
}