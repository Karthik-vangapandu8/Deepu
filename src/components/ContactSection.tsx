'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export const ContactSection = () => {
  const [isMessageSent, setIsMessageSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsMessageSent(true)
    setTimeout(() => setIsMessageSent(false), 3000)
  }

  return (
    <section className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Cinematic Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <Image
          src="/savirti 2.jpg"
          alt="Inspiration"
          fill
          className="object-cover opacity-5"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </motion.div>

      {/* Floating Elements - Like dreams and aspirations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [-20, 20, -20]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            y: [20, -20, 20]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title - Movie Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-gold text-xl tracking-[0.3em] font-light mb-4">
              THE FINAL SCENE
            </h2>
            <p className="text-4xl md:text-5xl text-white font-bold mb-6">
              Let&apos;s Create <span className="text-gold">Magic Together</span>
            </p>
            <p className="text-lg text-cream/80 mb-8">
              Let&apos;s create something extraordinary together
            </p>
            <p className="text-lg text-cream/80 mb-12">
              &ldquo;In the world of technology, every connection is a chance to create magic&rdquo;
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Card Backdrop with Animated Gradient */}
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-purple-500/20 to-gold/20 rounded-lg blur-lg"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Main Card */}
            <div className="relative bg-black/80 backdrop-blur-xl border border-gold/30 rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Your Story */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    {/* Profile Image with Cinematic Effect */}
                    <div className="relative w-48 h-48 mx-auto md:mx-0">
                      <motion.div 
                        className="absolute -inset-4 bg-gradient-to-r from-gold/30 via-purple-500/30 to-gold/30 rounded-full blur-md"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      />
                      <div className="relative rounded-full overflow-hidden border-2 border-gold/50">
                        <Image
                          src="/deepu5.jpeg"
                          alt="Deepu Akula"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* Your Message */}
                    <div className="text-center md:text-left">
                      <h3 className="text-3xl text-white font-bold mb-2">Deepu Akula</h3>
                      <p className="text-gold/90 text-xl italic mb-6">Tech Visionary & Innovator</p>
                      
                      <div className="space-y-6">
                        <p className="text-cream/90 leading-relaxed">
                          From ANITS to creating impactful solutions, 
                          my journey is about turning challenges into opportunities. 
                          Let&apos;s collaborate and bring your vision to life
                        </p>
                        
                        {/* Contact Links with Hover Effects */}
                        <div className="space-y-4">
                          <motion.a 
                            href="mailto:your.email@example.com"
                            className="flex items-center justify-center md:justify-start text-cream/80 hover:text-gold transition-all group"
                            whileHover={{ x: 5 }}
                          >
                            <span className="mr-3 text-xl">✉️</span>
                            <span className="border-b border-transparent group-hover:border-gold">
                              your.email@example.com
                            </span>
                          </motion.a>
                          <motion.a 
                            href="https://linkedin.com/in/yourprofile"
                            className="flex items-center justify-center md:justify-start text-cream/80 hover:text-gold transition-all group"
                            whileHover={{ x: 5 }}
                          >
                            <span className="mr-3 text-xl">👩‍💻</span>
                            <span className="border-b border-transparent group-hover:border-gold">
                              Connect on LinkedIn
                            </span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side - Interactive Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 text-6xl text-gold/20 font-serif">✨</div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div whileHover={{ y: -2 }} className="space-y-2">
                      <label className="block text-gold/90 text-lg">Your Name</label>
                      <input
                        type="text"
                        className="w-full bg-black/50 border-2 border-gold/30 rounded-sm px-4 py-3 text-cream
                                 focus:outline-none focus:border-gold transition-all"
                        placeholder="What should I call you?"
                      />
                    </motion.div>
                    
                    <motion.div whileHover={{ y: -2 }} className="space-y-2">
                      <label className="block text-gold/90 text-lg">Your Email</label>
                      <input
                        type="email"
                        className="w-full bg-black/50 border-2 border-gold/30 rounded-sm px-4 py-3 text-cream
                                 focus:outline-none focus:border-gold transition-all"
                        placeholder="Where can I reach you?"
                      />
                    </motion.div>
                    
                    <motion.div whileHover={{ y: -2 }} className="space-y-2">
                      <label className="block text-gold/90 text-lg">Your Message</label>
                      <textarea
                        className="w-full bg-black/50 border-2 border-gold/30 rounded-sm px-4 py-3 text-cream
                                 focus:outline-none focus:border-gold transition-all h-40"
                        placeholder="Tell me about your vision..."
                      />
                    </motion.div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-sm text-xl font-semibold
                                ${isMessageSent 
                                  ? 'bg-green-600 text-white' 
                                  : 'bg-gradient-to-r from-gold via-yellow-500 to-gold text-black hover:from-white hover:to-white transition-all'}`}
                    >
                      {isMessageSent ? '✨ Message Sent! ✨' : 'Let&apos;s Begin Our Story'}
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gold/60 font-serif italic text-lg mb-8">
            &ldquo;Every great achievement starts with a conversation&rdquo;
          </p>
          <div className="flex justify-center gap-8">
            {[
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dedeepya-akula-10b540255/?originalSubdomain=in' },
              { name: 'GitHub', url: 'https://github.com/Deepu8238' }
            ].map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#FFD700' }}
                className="text-gold/80 hover:text-gold transition-all"
              >
                {platform.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Cinematic Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
