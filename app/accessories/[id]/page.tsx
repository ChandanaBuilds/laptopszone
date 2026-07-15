'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
} from 'lucide-react'
import { notFound } from 'next/navigation'

import { accessories } from '@/lib/data'
import { EnquiryModal } from '@/components/enquiry-modal'
import { AccessoryCard } from '@/components/accessory-card'

export default function AccessoryDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const accessory = accessories.find(
    (item) => item.id === params.id
  )

  const [enquiryOpen, setEnquiryOpen] =
    useState(false)

  const [wishlisted, setWishlisted] =
    useState(false)

  if (!accessory) {
    notFound()
  }

  const relatedProducts = accessories
    .filter(
      (item) =>
        item.category === accessory.category &&
        item.id !== accessory.id
    )
    .slice(0, 4)

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">

          <div className="grid gap-12 md:grid-cols-2">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

                {!accessory.inStock && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
                    <p className="text-2xl font-bold text-white">
                      Out of Stock
                    </p>
                  </div>
                )}

                <Image
                  src={accessory.image}
                  alt={accessory.name}
                  width={700}
                  height={700}
                  className="h-[450px] w-full object-contain"
                />
              </div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="space-y-6"
            >
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase text-slate-700">
                {accessory.category}
              </span>

              <h1 className="text-4xl font-bold">
                {accessory.name}
              </h1>

              {/* Rating */}

              <div className="flex items-center gap-4">

                <div className="flex gap-1">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i <
                          Math.floor(
                            accessory.rating
                          )
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-slate-300'
                      }
                    />
                  ))}

                </div>

                <span className="text-slate-500">
                  {accessory.rating}
                  {' • '}
                  {accessory.reviews} Reviews
                </span>

              </div>

              {/* Price */}

              <div className="flex items-center gap-4">

                <h2 className="text-5xl font-bold text-black">
                  ₹{accessory.price}
                </h2>

                {accessory.originalPrice && (
                  <p className="text-2xl text-slate-400 line-through">
                    ₹{accessory.originalPrice}
                  </p>
                )}

              </div>

              {/* Description */}

              <p className="text-lg leading-8 text-slate-600">
                {accessory.description}
              </p>

              {/* Stock */}

              <div>
                {accessory.inStock ? (
                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                    In Stock
                  </span>
                ) : (
                  <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Buttons */}

              <div className="space-y-4">

                <button
                  onClick={() =>
                    setEnquiryOpen(true)
                  }
                  disabled={
                    !accessory.inStock
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-4 font-semibold text-white disabled:opacity-50"
                >
                  <ShoppingCart size={20} />
                  Request Information
                </button>

                <div className="flex gap-4">

                  <button
                    onClick={() =>
                      setWishlisted(
                        !wishlisted
                      )
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 py-4 font-semibold"
                  >
                    <Heart
                      size={20}
                      className={
                        wishlisted
                          ? 'fill-red-500 text-red-500'
                          : ''
                      }
                    />
                    Wishlist
                  </button>

                  <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 py-4 font-semibold">
                    <Share2 size={20} />
                    Share
                  </button>

                </div>

              </div>

            </motion.div>

          </div>

          {/* RELATED PRODUCTS */}

          {relatedProducts.length > 0 && (
            <section className="mt-24">

              <h2 className="mb-10 text-3xl font-bold">
                Related Accessories
              </h2>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                {relatedProducts.map(
                  (
                    product,
                    index
                  ) => (
                    <motion.div
                      key={product.id}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.08,
                      }}
                    >
                      <AccessoryCard
                        product={product}
                      />
                    </motion.div>
                  )
                )}

              </div>

            </section>
          )}

        </div>
      </section>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() =>
          setEnquiryOpen(false)
        }
        productName={accessory.name}
      />
    </>
  )
}