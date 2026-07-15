'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const brands = [
    { name: 'Dell', image: '/brands/dell.png' },
    { name: 'HP', image: '/brands/hp.png' },
    { name: 'Lenovo', image: '/brands/lenovo.png' },
    { name: 'Apple', image: '/brands/apple.png' },
    { name: 'Asus', image: '/brands/asus.png' },
    { name: 'Acer', image: '/brands/acer.png' },
    { name: 'MSI', image: '/brands/msi.png' },
    { name: 'Samsung', image: '/brands/samsung.png' },
    { name: 'Toshiba', image: '/brands/toshiba.png' },
    { name: 'LG', image: '/brands/lg.png' },
    { name: 'Sony', image: '/brands/sony.png' },
    { name: 'Microsoft', image: '/brands/microsoft.png' },
]

export function Brands() {
    return (
        <section className="bg-slate-50 py-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="font-semibold uppercase tracking-widest text-primary">
                        Supported Brands
                    </span>

                    <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
                        We Repair All Leading Laptop Brands
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
                        Our technicians are experienced in servicing laptops from the
                        world's most trusted manufacturers using quality spare parts and
                        professional diagnostic tools.
                    </p>
                </motion.div>

                {/* Brand Grid */}
                <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

                    {brands.map((brand, index) => (
                        <motion.div
                            key={brand.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.05,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                            }}
                            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl"
                        >
                            <div className="flex h-20 items-center justify-center">

                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    width={120}
                                    height={60}
                                    className="h-12 w-auto object-contain transition duration-300 group-hover:scale-110"
                                />

                            </div>

                            <p className="mt-5 text-center text-lg font-semibold text-gray-700">
                                {brand.name}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    )
}