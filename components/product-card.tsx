'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, X } from 'lucide-react'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  brand: string
  category: string
  image: string
  price: number
  originalPrice?: number
  rating: number
  inStock: boolean
  specs: {
    processor?: string
    ram?: string
    storage?: string
    display?: string
  }
}

interface ProductCardProps {
  product: Product
  href: string
}

export function ProductCard({
  product,
}: ProductCardProps) {
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // API call goes here

    setSubmitted(true)
  }

  return (
    <>
      {/* Card */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl"
      >
        {/* Image */}
        <div className="relative overflow-hidden bg-slate-50">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={350}
            className="h-44DS w-full object-contain p-5 transition duration-500 group-hover:scale-105"
          />

          {/* Brand */}
          <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            {product.brand}
          </div>

          {/* Stock */}
          <div
            className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${product.inStock
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
              }`}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs uppercase tracking-widest text-primary">
            {product.category}
          </p>

          <h3 className="mt-2 min-h-[52px] line-clamp-2 text-lg font-semibold text-black">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-slate-300'
                  }
                />
              ))}
            </div>


          </div>

          {/* Specs */}
          <div className="mt-4 space-y-1 text-sm text-slate-600">
            <p className="truncate">
              <span className="font-medium text-black">CPU:</span>{' '}
              {product.specs.processor}
            </p>

            <p>
              <span className="font-medium text-black">RAM:</span>{' '}
              {product.specs.ram}
            </p>

            <p>
              <span className="font-medium text-black">SSD:</span>{' '}
              {product.specs.storage}
            </p>
          </div>

          {/* Price */}
          <div className="mt-5 flex items-end gap-2">
            <h4 className="text-2xl font-bold text-primary">
              ₹{product.price.toLocaleString('en-IN')}
            </h4>

            {product.originalPrice && (
              <p className="pb-1 text-sm text-slate-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </p>
            )}
          </div>

          {/* Buy Button */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-5 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Buy Now
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl"
            >
              {!submitted ? (
                <>
                  {/* Header */}
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-black">
                        Laptop Inquiry
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        Our team will contact you shortly.
                      </p>
                    </div>

                    <button
                      onClick={() => setShowModal(false)}
                      className="rounded-lg p-2 hover:bg-slate-100"
                    >
                      <X size={20} className="text-black" />
                    </button>
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Laptop Name */}
                    <div>
                      <label className="mb-1 block text-sm font-medium text-black">
                        Selected Laptop
                      </label>

                      <input
                        value={product.name}
                        disabled
                        className="w-full rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-black"
                      />
                    </div>

                    <input
                      required
                      placeholder="Full Name"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-black outline-none focus:border-primary"
                    />

                    <input
                      required
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-black outline-none focus:border-primary"
                    />

                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-black outline-none focus:border-primary"
                    />

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-6 text-center">
                  <div className="text-4xl">✅</div>

                  <h3 className="mt-4 text-xl font-bold text-black">
                    Inquiry Submitted
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Our team will contact you regarding
                    <span className="font-semibold text-black">
                      {' '}
                      {product.name}
                    </span>
                    .
                  </p>

                  <button
                    onClick={() => {
                      setShowModal(false)
                      setSubmitted(false)
                    }}
                    className="mt-5 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}