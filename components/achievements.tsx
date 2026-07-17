'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import {
    Laptop,
    Users,
    Award,
    Headphones,
} from 'lucide-react'

const stats = [
    {
        icon: Laptop,
        number: 5000,
        suffix: '+',
        title: 'Laptops Repaired',
        description: 'Successfully repaired devices across multiple leading brands.',
    },
    {
        icon: Users,
        number: 3500,
        suffix: '+',
        title: 'Happy Customers',
        description: 'Trusted by students, professionals, businesses, and home users.',
    },
    {
        icon: Award,
        number: 98,
        suffix: '%',
        title: 'Customer Satisfaction',
        description: 'Committed to quality repairs and excellent customer service.',
    },
    {
        icon: Headphones,
        number: 24,
        suffix: '/7',
        title: 'Customer Support',
        description: 'We are ready to assist with enquiries and service requests.',
    },
]

export function Achievements() {
    return (
        <section className="bg-white py-6">
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
                        Our Achievements
                    </span>

                    <h2 className="mt-3 text-4xl font-semibold text-gray-900 md:text-4xl">
                        Numbers That Reflect Our Commitment
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
                        Over the years, we've earned the trust of thousands of customers by
                        delivering dependable laptop repair services with professionalism and care.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon

                        return (
                            <motion.div
                                key={stat.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -8 }}
                                className="rounded-2xl border border-gray-200 bg-slate-50 p-8 text-center shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-6 text-3xl font-semibold text-primary">
                                    <CountUp
                                        end={stat.number}
                                        duration={2.5}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                    {stat.suffix}
                                </h3>

                                <h4 className="mt-3 text-xl font-semibold text-gray-900">
                                    {stat.title}
                                </h4>

                                <p className="mt-3 leading-7 text-gray-600">
                                    {stat.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}