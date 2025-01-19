'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const journeySteps = [
  {
    year: '2022',
    title: 'The Beginning',
    subtitle: 'ANITS IT Department',
    description: 'Like every great story, mine began with a challenge. Not getting into IIT wasn\'t the end - it was my intermission, setting the stage for something greater.',
    image: '/deepu1.jpeg',
    quote: '"Sometimes the best stories start with a setback"'
  },
  {
    year: '2023',
    title: 'Rising Star',
    subtitle: 'Leading the First Junior Team',
    description: 'Just as Savitri broke barriers in cinema, we broke through limitations. Leading the first junior team to SIH finals wasn\'t just an achievement - it was a statement.',
    image: '/deepu7.jpeg',
    quote: '"Leadership isn\'t given, it\'s earned through courage"'
  },
  {
    year: '2024',
    title: 'The Breakthrough',
    subtitle: 'Business Combat Victory',
    description: 'Every protagonist has that defining moment. Mine came with the Business Combat victory, proving that technology and business acumen can create magic together.',
    image: '/deepu3.jpeg',
    quote: '"Success is when preparation meets opportunity"'
  },
  {
    year: '2024',
    title: 'Data Storyteller',
    subtitle: 'Analytics & Visualization',
    description: 'Like a director crafting scenes, I learned to tell stories through data. Each visualization became a frame, each insight a powerful dialogue.',
    image: '/deepu4.jpeg',
    quote: '"In data, we find the truth of our digital age"'
  },
  {
    year: '2025',
    title: 'Mission Rail-Go',
    subtitle: 'Current Chapter',
    description: 'Now, like those climactic scenes that keep you on the edge, I\'m writing the most exciting chapter yet. Rail-Go isn\'t just a project - it\'s a revolution in motion.',
    image: '/deepu5.jpeg',
    quote: '"The best stories are the ones that change lives"'
  }
]

export const JourneySection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <Image
          src="/savirti 2.jpg"
          alt="Journey Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-gold text-xl tracking-[0.3em] font-light mb-4">
            MY STORY
          </h2>
          <p className="text-4xl md:text-5xl text-white font-bold mb-6">
            Chapters of <span className="text-gold">Growth</span>
          </p>
          <p className="text-center text-lg text-cream/80 mb-12">
            &ldquo;Every frame of life is a story waiting to be told with grace and determination&rdquo;
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="space-y-32">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Year Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-16">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 rounded-full bg-black border-2 border-gold flex items-center justify-center"
                >
                  <span className="text-gold text-xl font-bold">{step.year}</span>
                </motion.div>
              </div>

              {/* Content Side */}
              <motion.div
                className={`w-1/2 ${index % 2 === 0 ? 'pr-20' : 'pl-20'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl text-white font-bold mb-2">{step.title}</h3>
                <p className="text-gold text-xl mb-4">{step.subtitle}</p>
                <p className="text-cream/80 leading-relaxed mb-6">{step.description}</p>
                <p className="text-gold/60 italic text-lg">{step.quote}</p>
              </motion.div>

              {/* Image Side */}
              <motion.div
                className={`w-1/2 ${index % 2 === 0 ? 'pl-20' : 'pr-20'}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-purple-500/20 to-gold/20 rounded-lg blur-lg"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gold/30">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>

              {/* Connecting Line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                className="absolute left-1/2 h-full w-px bg-gradient-to-b from-gold/50 via-gold/30 to-transparent"
                style={{ top: '100px' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
