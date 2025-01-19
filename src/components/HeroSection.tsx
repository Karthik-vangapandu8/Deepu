'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const letterAnimation = {
  initial: { y: 100, opacity: 0, scale: 0.5, rotate: -30 },
  animate: { y: 0, opacity: 1, scale: 1, rotate: 0 },
}

const glowAnimation = {
  initial: { opacity: 0 },
  animate: { 
    opacity: [0.3, 1, 0.3], 
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}

const imageVariants = {
  enter: {
    opacity: 0,
    scale: 1.2,
    filter: 'brightness(1.5) blur(10px)',
  },
  center: {
    zIndex: 1,
    opacity: 1,
    scale: 1,
    filter: 'brightness(1) blur(0px)',
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    scale: 0.8,
    filter: 'brightness(0.5) blur(10px)',
  }
}

export const HeroSection = () => {
  const [currentScene, setCurrentScene] = useState(0)
  const firstNameLetters = "Dedeepya".split("")
  const lastNameLetters = "AKULA".split("")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % 2)
    }, 5000) 
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Cinematic Background with Image Transitions */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          {currentScene === 0 ? (
            <motion.div
              key="modern"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.6 },
                filter: { duration: 0.4 }
              }}
              className="absolute inset-0"
            >
              <Image
                src="/deepu5.jpeg"
                alt="Modern Vision"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </motion.div>
          ) : (
            <motion.div
              key="savitri"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.6 },
                filter: { duration: 0.4 }
              }}
              className="absolute inset-0"
            >
              <Image
                src="/savirti 2.jpg"
                alt="Savitri Inspiration"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Film Reel Decorations */}
      <div className="absolute -left-20 top-0 bottom-0 w-40 film-strip opacity-20 rotate-12" />
      <div className="absolute -right-20 top-0 bottom-0 w-40 film-strip opacity-20 -rotate-12" />

      <div className="relative z-10 text-center px-4">
        {/* Presenting Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="vintage-border inline-block p-3 mb-6 transform rotate-[-2deg]">
            <p className="elegant-text text-2xl tracking-widest">Presenting</p>
          </div>
        </motion.div>

        {/* First Name */}
        <div className="mb-6 overflow-hidden">
          <motion.div
            className="flex justify-center items-center space-x-1 md:space-x-2"
            initial="initial"
            animate="animate"
          >
            {firstNameLetters.map((letter, index) => (
              <motion.div
                key={index}
                className="relative sparkle"
                variants={letterAnimation}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.33, 1, 0.68, 1]
                }}
              >
                <span className="dramatic-text font-cinzel text-6xl md:text-8xl font-black">
                  {letter}
                </span>
                <motion.span
                  variants={glowAnimation}
                  className="absolute inset-0 text-6xl md:text-8xl font-black text-gold/30 blur-sm"
                >
                  {letter}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Last Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: firstNameLetters.length * 0.1 }}
          className="relative"
        >
          <div className="flex justify-center space-x-4 md:space-x-6">
            {lastNameLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: (firstNameLetters.length * 0.1) + (index * 0.1),
                  ease: "easeOut"
                }}
                className="royal-text text-5xl md:text-7xl font-bold majestic-text"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle with Scene-based Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: (firstNameLetters.length + lastNameLetters.length) * 0.1 }}
          className="mt-16"
        >
          <div className="h-px w-60 mx-auto bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-8" />
          <AnimatePresence mode="wait">
            <motion.p
              key={currentScene}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="elegant-text text-2xl md:text-3xl"
            >
              {currentScene === 0 
                ? "Innovating for Tomorrow's Technology"
                : "Inspired by the Golden Era of Cinema"
              }
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Classic Cinema Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-gold/60 font-serif tracking-[0.3em] text-sm mb-4">SCROLL</p>
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent mx-auto" />
      </motion.div>
    </section>
  )
}
