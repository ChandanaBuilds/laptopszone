'use client'

import { motion } from 'framer-motion'
import {
    Award,
    Clock3,
    ShieldCheck,
    Truck,
    Wrench,
    IndianRupee,
} from 'lucide-react'

const features = [
    {
        icon: Award,
        title: 'Certified Technicians',
        description:
            'Our experienced engineers diagnose and repair laptops with precision and care.',
    },
    {
        icon: Clock3,
        title: 'Fast Turnaround',
        description:
            'Most repairs are completed quickly to help you get back to work without delays.',
    },
    {
        icon: ShieldCheck,
        title: 'Genuine Spare Parts',
        description:
            'We use high-quality replacement parts to ensure reliable and long-lasting performance.',
    },
    {
        icon: Truck,
        title: 'Doorstep Pickup & Delivery',
        description:
            'Convenient pickup and delivery service available in selected service areas.',
    },
    {
        icon: Wrench,
        title: 'All Laptop Brands',
        description:
            'We repair Dell, HP, Lenovo, Asus, Acer, Apple, MSI, Samsung, Toshiba, and many more.',
    },
    {
        icon: IndianRupee,
        title: 'Transparent Pricing',
        description:
            'Clear estimates with no hidden charges, so you always know what to expect.',
    },
]

export function WhyChooseUs() {
    return (
        <section className="bg-white py-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="text-primary font-semibold uppercase tracking-widest">
                        Why Choose Us
                    </span>

                    <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
                        Reliable Laptop Repair Services You Can Trust
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
                        We combine technical expertise, quality workmanship, and excellent
                        customer support to deliver dependable laptop repair solutions for
                        every customer.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="group rounded-2xl border border-gray-200 bg-slate-50 p-8 transition-all duration-300 hover:border-primary hover:shadow-xl"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="leading-7 text-gray-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}