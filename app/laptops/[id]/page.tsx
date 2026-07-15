'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Star,
  Heart,
  Phone,
  MessageCircle,
  Share2,
  ArrowLeft,
  CheckCircle,
  ShieldCheck,
  Truck,
  RotateCcw,
} from 'lucide-react'

import { notFound } from 'next/navigation'

import { laptops } from '@/lib/laptops'
import { ProductCard } from '@/components/product-card'
import { EnquiryModal } from '@/components/enquiry-modal'

interface PageProps {
  params: {
    id: string
  }
}

export default function LaptopDetailsPage({
  params,
}: PageProps) {

  const laptop = useMemo(() => {
    return laptops.find(
      (item) => item.id === params.id
    )
  }, [params.id])

  const [selectedImage, setSelectedImage] =
    useState(0)

  const [wishlisted, setWishlisted] =
    useState(false)

  const [enquiryOpen, setEnquiryOpen] =
    useState(false)

  if (!laptop) {
    notFound()
  }

  const images = [
    laptop.image,
    laptop.image,
    laptop.image,
    laptop.image,
  ]

  const relatedProducts = laptops
    .filter(
      (item) =>
        item.category === laptop.category &&
        item.id !== laptop.id
    )
    .slice(0, 4)

  return (
    <>

      {/* Breadcrumb */}

      <section className="border-b bg-slate-50">

        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-5 text-sm text-slate-500">

          <Link
            href="/"
            className=""
          >
            Home
          </Link>

          /

          <Link
            href="/laptops"
            className=""
          >
            Laptops
          </Link>

          /

          <span className="font-medium text-slate-900">

            {laptop.name}

          </span>

        </div>

      </section>

      {/* Main */}

      <section className="py-14">

        <div className="mx-auto max-w-7xl px-4">

          <Link
            href="/laptops"
            className="mb-8 inline-flex items-center gap-2 font-medium text-primary "
          >
            <ArrowLeft size={18} />

            Back to Products

          </Link>

          <div className="grid gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .5,
              }}
            >

              <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">

                <Image
                  src={images[selectedImage]}
                  alt={laptop.name}
                  width={700}
                  height={700}
                  className="h-[520px] w-full object-contain p-10"
                />

              </div>

              {/* Gallery */}

              <div className="mt-5 flex gap-4">

                {images.map((image, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      setSelectedImage(index)
                    }
                    className={`overflow-hidden rounded-2xl border p-2 transition ${selectedImage === index
                      ? 'border-primary'
                      : 'border-slate-200'
                      }`}
                  >

                    <Image
                      src={image}
                      alt=""
                      width={90}
                      height={90}
                      className="h-20 w-20 object-contain"
                    />

                  </button>

                ))}

              </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .6,
              }}
            >

              <div className="flex gap-3">

                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

                  {laptop.brand}

                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm capitalize text-slate-600">

                  {laptop.category}

                </span>

              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight">

                {laptop.name}

              </h1>

              {/* Rating */}

              <div className="mt-6 flex items-center gap-4">

                <div className="flex">

                  {[...Array(5)].map((_, i) => (

                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.floor(laptop.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-slate-300'
                      }
                    />

                  ))}

                </div>

                <span className="text-slate-500">

                  {laptop.rating}

                  {' • '}

                  {laptop.reviews} Reviews

                </span>

              </div>

              {/* Price */}

              <div className="mt-8 flex items-end gap-4">

                <h2 className="text-5xl font-bold text-primary">

                  ₹{laptop.price.toLocaleString('en-IN')}

                </h2>

                {laptop.originalPrice && (

                  <p className="pb-2 text-2xl text-slate-400 line-through">

                    ₹{laptop.originalPrice.toLocaleString('en-IN')}

                  </p>

                )}

              </div>

              {laptop.discount && (

                <div className="mt-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                  Save {laptop.discount}% Today

                </div>

              )}

              {/* Stock */}

              <div className="mt-8 flex items-center gap-3">

                <CheckCircle
                  size={22}
                  className="text-green-600"
                />

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                  In Stock

                </span>

              </div>

              {/* Description */}

              <p className="mt-8 text-lg leading-8 text-slate-600">

                {laptop.description}

              </p>
              {/* Action Buttons */}

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setEnquiryOpen(true)}
                  className="rounded-2xl bg-primary py-4 text-lg font-semibold text-white transition "
                >
                  Book Now
                </motion.button>

                <a
                  href="tel:+919966111637"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 py-4 font-semibold transition hover:border-primary "
                >
                  <Phone size={20} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919966111637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-green-500 py-4 font-semibold text-green-700 transition hover:bg-green-50"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>

                <button
                  onClick={() => setWishlisted(!wishlisted)}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 py-4 font-semibold transition "
                >
                  <Heart
                    size={20}
                    className={
                      wishlisted
                        ? 'fill-red-500 text-red-500'
                        : ''
                    }
                  />

                  {wishlisted
                    ? 'Wishlisted'
                    : 'Add Wishlist'}
                </button>

              </div>

              {/* Share */}

              <button className="mt-5 flex items-center gap-2 text-slate-500 hover:text-primary">

                <Share2 size={18} />

                Share this Product

              </button>

              {/* Features */}

              <div className="mt-10 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl border border-slate-200 p-5 text-center">

                  <ShieldCheck
                    className="mx-auto text-primary"
                    size={30}
                  />

                  <h4 className="mt-3 font-semibold">

                    Genuine Product

                  </h4>

                  <p className="mt-2 text-sm text-slate-500">

                    100% Original Brand Warranty

                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 p-5 text-center">

                  <Truck
                    className="mx-auto text-primary"
                    size={30}
                  />

                  <h4 className="mt-3 font-semibold">

                    Fast Delivery

                  </h4>

                  <p className="mt-2 text-sm text-slate-500">

                    Delivery Across India

                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 p-5 text-center">

                  <RotateCcw
                    className="mx-auto text-primary"
                    size={30}
                  />

                  <h4 className="mt-3 font-semibold">

                    Easy Returns

                  </h4>

                  <p className="mt-2 text-sm text-slate-500">

                    Hassle Free Replacement

                  </p>

                </div>

              </div>

            </motion.div>

          </div>

          {/* Specifications */}

          <section className="mt-24">

            <h2 className="mb-8 text-3xl font-bold">

              Technical Specifications

            </h2>

            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">

              <table className="w-full">

                <tbody>

                  {Object.entries(laptop.specs).map(
                    ([key, value], index) => (

                      <tr
                        key={key}
                        className={
                          index % 2 === 0
                            ? 'bg-slate-50'
                            : 'bg-white'
                        }
                      >

                        <td className="w-64 border-r px-8 py-5 font-semibold capitalize text-slate-700">

                          {key.replace(
                            /([A-Z])/g,
                            ' $1'
                          )}

                        </td>

                        <td className="px-8 py-5 text-slate-600">

                          {value}

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          </section>
          {/* Related Products */}

          {relatedProducts.length > 0 && (

            <section className="mt-24">

              <div className="mb-10 flex items-center justify-between">

                <div>

                  <h2 className="text-3xl font-bold">

                    Similar Laptops

                  </h2>

                  <p className="mt-2 text-slate-500">

                    You may also be interested in these products

                  </p>

                </div>

                <Link
                  href="/laptops"
                  className="font-semibold text-primary hover:underline"
                >
                  View All →
                </Link>

              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                {relatedProducts.map((product, index) => (

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
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >

                    <ProductCard
                      product={product}
                      href={`/laptops/${product.id}`}
                    />

                  </motion.div>

                ))}

              </div>

            </section>

          )}

          {/* Need Help Section */}

          <section className="mt-24">

            <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-primary via-blue-700 to-blue-900 p-10 text-white shadow-xl">

              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

                <div>

                  <h2 className="text-4xl font-bold">

                    Need Help Choosing a Laptop?

                  </h2>

                  <p className="mt-5 text-lg text-blue-100">

                    Our experts will help you choose the perfect laptop
                    according to your budget and requirements.

                  </p>

                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">

                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="rounded-xl bg-white px-8 py-4 font-semibold text-primary transition hover:bg-slate-100"
                  >
                    Book Enquiry
                  </button>

                  <a
                    href="tel:+919966111637"
                    className="rounded-xl border border-white px-8 py-4 text-center font-semibold transition hover:bg-white hover:text-primary"
                  >
                    📞 Call Now
                  </a>

                </div>

              </div>

            </div>

          </section>

        </div>

      </section>

      {/* Enquiry Modal */}

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        productName={laptop.name}
      />

    </>

  )
}