
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    ArrowRight,
    CheckCircle2,
    Laptop,
    Cpu,
    HardDrive,
    Monitor,
} from 'lucide-react'

const services = [
    {
        title: 'Laptop Repair',
        icon: Laptop,
        image: '/repair.webp',
        description:
            'Our expert technicians diagnose and repair laptops from all leading brands. Whether your laptop is running slow, overheating, or experiencing hardware failures, we provide reliable repair solutions using quality components and professional tools.',

        bullets: [
            'Hardware Diagnostics',
            'Battery Replacement',
            'Keyboard Repair',
            'RAM & SSD Upgrades',
        ],
    },

    {
        title: 'Motherboard Repair',
        icon: Cpu,
        image: '/mother.webp',
        description:
            'We specialize in chip-level motherboard repairs for laptops with power issues, display failures, overheating, liquid damage, and boot problems. Every repair is performed using advanced diagnostic equipment.',

        bullets: [
            'Chip-Level Repair',
            'BIOS Programming',
            'Power IC Replacement',
            'Motherboard Diagnostics',
        ],
    },

    {
        title: 'Data Recovery',
        icon: HardDrive,
        image: '/data.webp',
        description:
            'Lost important files? Our secure recovery process helps retrieve documents, photos, videos, office files, and business data from damaged HDDs and SSDs while maintaining complete confidentiality.',

        bullets: [
            'Deleted File Recovery',
            'SSD Recovery',
            'Corrupted Drive Repair',
            'Backup Solutions',
        ],
    },

    {
        title: 'Screen Replacement',
        icon: Monitor,
        image: '/screen.webp',
        description:
            'We replace cracked, damaged, flickering, or dead laptop screens with premium-quality LCD and LED displays, ensuring excellent clarity and long-lasting performance.',

        bullets: [
            'LCD Replacement',
            'LED Panels',
            'Touch Screen Repair',
            'Display Cable Replacement',
        ],
    },
]

export function Services() {
    return (
        <section className="bg-slate-50 py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="font-semibold uppercase tracking-[0.3em] text-primary">
                        OUR SERVICES
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-4xl">
                        Professional Laptop Repair Solutions
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        From minor software issues to advanced motherboard repairs,
                        we provide reliable repair services with genuine spare parts,
                        skilled technicians, and fast turnaround times.
                    </p>
                </motion.div>

                <div className="mt-5 space-y-5">

                    {services.map((service, index) => {

                        const reverse = index % 2 !== 0

                        return (

                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`grid items-center gap- lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''
                                    }`}
                            >

                                {/* IMAGE */}

                                <div className="flex justify-center">

                                    <div className="relative">

                                        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

                                        <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-xl">

                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                width={520}
                                                height={350}
                                                className="h-[260px] w-full rounded-2xl object-cover transition duration-700 hover:scale-105"
                                            />

                                        </div>

                                    </div>

                                </div>

                                {/* CONTENT */}

                                <div>



                                    <h3 className="text-3xl font-bold text-gray-900 lg:text-3xl">
                                        {service.title}
                                    </h3>

                                    <p className="mt-5 text-lg leading-8 text-gray-600">
                                        {service.description}
                                    </p>

                                    <div className="mt-8 grid gap-4">
                                        {service.bullets.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-3"
                                            >
                                                <CheckCircle2
                                                    size={22}
                                                    className="text-primary"
                                                />

                                                <span className="text-gray-700">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:gap-4 hover:bg-blue-700"
                                        >
                                            Request Service

                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>

                                </div>

                            </motion.div>

                        )
                    })}
                </div>

            </div>
        </section>
    )
}
