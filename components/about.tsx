'use client'

import { motion } from 'framer-motion'

export function About() {
    return (
        <section className="bg-slate-50 py-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >

                    <span className="text-primary font-semibold uppercase tracking-wider">
                        About Us
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
                        Trusted Laptop Repair Experts in Hyderabad
                    </h2>

                    <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600">

                        We provide reliable laptop repair and maintenance services for
                        students, professionals, businesses, and home users. Whether it's
                        hardware repairs, software issues, motherboard diagnostics, screen
                        replacement, battery replacement, or data recovery, our experienced
                        technicians deliver quality service using genuine spare parts and
                        professional tools.

                    </p>

                    <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-gray-600">

                        Our mission is to provide fast turnaround, transparent pricing, and
                        excellent customer support while ensuring every device performs at
                        its best.

                    </p>

                </motion.div>

            </div>
        </section>
    )
}