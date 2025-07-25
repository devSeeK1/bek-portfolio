'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="text-center mb-16 mt-8">
      <motion.img
        src="/avatar.jpg"
        alt=""
        width={120}
        height={120}
        
        className="rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I am BEK
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 dark:text-gray-300 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Full-Stack Developer & UI Designer
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="#projects"
          className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-md"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  )
}