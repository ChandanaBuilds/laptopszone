'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    PhoneCall,
    ArrowRight,
    Clock3,
    ShieldCheck,
    Truck,
} from 'lucide-react'

export function CTA() {
    return (
        <section className="relative overflow-hidden bg-slate-400 py-8">
            {/* Background Decoration */}
            <div className="absolute inset-0">
                <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid items-center gap-12 lg:grid-cols-2"
                >

                    {/* Left */}
                    <div>

                        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                            Fast • Reliable • Affordable
                        </span>

                        <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                            Need Your Laptop Repaired?
                        </h2>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                            Whether it's a broken screen, motherboard issue, battery problem,
                            software error, or data recovery, our experienced technicians are
                            ready to help. Contact us today for quick diagnosis and reliable
                            repair solutions.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Link
                                href="tel:+919966111637"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-50"
                            >
                                <PhoneCall size={20} />
                                Call Now
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700"
                            >
                                Request Service
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                    </div>

                    {/* Right */}
                    <div className="grid gap-6 sm:grid-cols-3">

                        <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
                            <Clock3 className="mx-auto mb-4 text-white" size={34} />
                            <h3 className="font-semibold text-white">
                                Quick Service
                            </h3>
                            <p className="mt-2 text-sm text-blue-100">
                                Fast diagnosis and timely repairs.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
                            <ShieldCheck className="mx-auto mb-4 text-white" size={34} />
                            <h3 className="font-semibold text-white">
                                Genuine Parts
                            </h3>
                            <p className="mt-2 text-sm text-blue-100">
                                Quality components for dependable performance.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
                            <Truck className="mx-auto mb-4 text-white" size={34} />
                            <h3 className="font-semibold text-white">
                                Pickup Service
                            </h3>
                            <p className="mt-2 text-sm text-blue-100">
                                Convenient pickup and delivery in selected areas.
                            </p>
                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    )
}