'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[340px] xl:h-[400px]"      >
        <Image
          src="/home.png" // Place your image in public/images/
          alt="Laptop Store Hero Banner"
          fill
          priority
          className="object-cover"
          sizes="80vw"
        />
      </motion.div>
    </section>
  )
}