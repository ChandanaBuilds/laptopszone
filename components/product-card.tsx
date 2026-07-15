'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Eye } from 'lucide-react'

interface Product {
  id: string
  name: string
  brand: string
  category: string
  image: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
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
  href,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .25,
      }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative overflow-hidden bg-slate-50">

        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={350}
          className="h-60 w-full object-contain p-8 transition duration-500 group-hover:scale-105"
        />

        {/* Brand */}

        <div className="absolute left-5 top-5 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
          {product.brand}
        </div>

        {/* Stock */}

        <div
          className={`absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-semibold ${product.inStock
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
            }`}
        >
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <p className="text-sm uppercase tracking-widest text-primary">
          {product.category}
        </p>

        <h3 className="mt-2 line-clamp-2 text-xl font-bold text-slate-900">
          {product.name}
        </h3>

        {/* Rating */}

        <div className="mt-4 flex items-center gap-2">

          <div className="flex">

            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-slate-300'
                }
              />
            ))}

          </div>

          <span className="text-sm text-slate-500">
            ({product.reviews})
          </span>

        </div>

        {/* Specs */}

        <div className="mt-5 grid gap-2 text-sm text-slate-600">

          <p>
            <span className="font-semibold">
              Processor:
            </span>{' '}
            {product.specs.processor}
          </p>

          <p>
            <span className="font-semibold">
              RAM:
            </span>{' '}
            {product.specs.ram}
          </p>

          <p>
            <span className="font-semibold">
              Storage:
            </span>{' '}
            {product.specs.storage}
          </p>

        </div>

        {/* Price */}

        <div className="mt-6 flex items-end gap-3">

          <h4 className="text-3xl font-bold text-primary">
            ₹{product.price.toLocaleString('en-IN')}
          </h4>

          {product.originalPrice && (
            <p className="pb-1 text-lg text-slate-400 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </p>
          )}

        </div>

        {/* Button */}

        <Link
          href={href}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Eye size={18} />

          View Details
        </Link>

      </div>
    </motion.div>
  )
}