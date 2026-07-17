'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
    'Free Pickup & Home Delivery Across Hyderabad',
    'Same Day Repair Services Available for Selected Locations',
    'Certified and Experienced Laptop Repair Technicians',
    'Genuine Spare Parts with Quality Assurance',
    'Support for Dell, HP, Lenovo, ASUS, Acer and Apple Devices',
    'Corporate IT Support and Annual Maintenance Services',
    'School and College Computer Lab Setup Solutions',
    'Network Infrastructure and Server Deployment Services',
]

export function About() {
    return (
        <section className="bg-slate-50 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-semibold uppercase tracking-wider">
                            About Us
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Trusted Laptop Repair Experts
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We provide reliable laptop repair and maintenance services for
                            students, professionals, businesses, and home users across
                            Hyderabad. From hardware repairs and software troubleshooting to
                            motherboard diagnostics, screen replacement, battery replacement,
                            and data recovery, our experienced technicians deliver quality
                            service using professional tools and genuine spare parts.
                        </p>


                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:pl-10  "
                    >
                        <div className="space-y-6">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle2
                                        size={24}
                                        className="text-blue-600 flex-shrink-0 mt-1"
                                    />

                                    <p className="text-gray-700 text-base md:text-lg leading-7">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    )
}