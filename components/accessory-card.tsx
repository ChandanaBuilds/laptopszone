'use client'

import Image from 'next/image'
import { Star, X } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
    product: any
}

export function AccessoryCard({ product }: Props) {
    const [showModal, setShowModal] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    return (
        <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">

            <div className="relative h-64 bg-slate-50">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition duration-300"
                />
            </div>

            <div className="p-5">
                <span className="text-xs uppercase text-slate-500">
                    {product.category}
                </span>

                <h3 className="mt-2 text-lg font-bold line-clamp-2">
                    {product.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                    {product.description}
                </p>

                <div className="mt-3 flex items-center gap-2">
                    <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-sm">
                        {product.rating}
                    </span>

                    <span className="text-sm text-slate-500">
                        ({product.reviews})
                    </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <p className="text-2xl font-bold text-black">
                        ₹{product.price}
                    </p>

                    <span
                        className={`text-sm font-medium ${product.inStock
                            ? 'text-green-600'
                            : 'text-red-600'
                            }`}
                    >
                        {product.inStock
                            ? 'In Stock'
                            : 'Out of Stock'}
                    </span>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    Buy Now
                </button>
            </div>
            <AnimatePresence>
                {showModal && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.95,
                            }}
                            className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl"
                        >
                            {!submitted ? (
                                <>
                                    <div className="mb-5 flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl font-bold text-black">
                                                Accessory Inquiry
                                            </h2>

                                            <p className="text-sm text-slate-500">
                                                Our team will contact you shortly.
                                            </p>
                                        </div>

                                        <button
                                            onClick={() =>
                                                setShowModal(false)
                                            }
                                        >
                                            <X size={22} />
                                        </button>
                                    </div>

                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault()
                                            setSubmitted(true)
                                        }}
                                        className="space-y-4"
                                    >
                                        <input
                                            value={product.name}
                                            disabled
                                            className="w-full rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-black"
                                        />

                                        <input
                                            required
                                            placeholder="Full Name"
                                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-black outline-none focus:border-blue-600"
                                        />

                                        <input
                                            required
                                            placeholder="Phone Number"
                                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-black outline-none focus:border-blue-600"
                                        />

                                        <input
                                            required
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-black outline-none focus:border-blue-600"
                                        />

                                        <button
                                            type="submit"
                                            className="w-full rounded-xl bg-black py-3 font-semibold text-white hover:bg-blue-700"
                                        >
                                            Submit Inquiry
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="py-8 text-center">
                                    <div className="text-4xl">
                                        ✅
                                    </div>

                                    <h3 className="mt-4 text-xl font-bold text-black">
                                        Inquiry Submitted
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        Our team will contact you
                                        regarding{' '}
                                        <span className="font-semibold text-black">
                                            {product.name}
                                        </span>
                                        .
                                    </p>

                                    <button
                                        onClick={() => {
                                            setShowModal(false)
                                            setSubmitted(false)
                                        }}
                                        className="mt-5 rounded-xl bg-black px-6 py-3 text-white hover:bg-blue-700"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>

    )
}