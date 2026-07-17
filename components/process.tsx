'use client'

import { motion } from 'framer-motion'
import {
    PhoneCall,
    Truck,
    SearchCheck,
    Wrench,
    CheckCircle2,
} from 'lucide-react'

const steps = [
    {
        icon: PhoneCall,
        title: 'Book a Service',
        description:
            'Call us or submit an enquiry through our website to schedule your laptop service.',
    },
    {
        icon: Truck,
        title: 'Pickup or Visit',
        description:
            'Bring your laptop to our service center or choose our doorstep pickup service where available.',
    },
    {
        icon: SearchCheck,
        title: 'Diagnosis',
        description:
            'Our technicians inspect the device, identify the issue, and provide a transparent repair estimate.',
    },
    {
        icon: Wrench,
        title: 'Repair & Testing',
        description:
            'After approval, we repair the laptop using quality parts and thoroughly test it for reliable performance.',
    },
    {
        icon: CheckCircle2,
        title: 'Delivery',
        description:
            'Collect your repaired laptop or have it delivered back to your location, ready to use.',
    },
]

export function Process() {
    return (
        <section className="bg-white py-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <span className="font-semibold uppercase tracking-widest text-primary">
                        Our Process
                    </span>

                    <h2 className="mt-3 text-4xl md:text-4xl font-bold text-gray-900">
                        Simple, Fast & Transparent
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
                        We've streamlined our repair process to make laptop servicing easy,
                        reliable, and hassle-free from start to finish.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative mt-20">

                    {/* Desktop Connector */}
                    <div className="absolute left-0 right-0 top-10 hidden lg:block">
                        <div className="mx-auto h-1 w-[80%] rounded-full bg-slate-200" />
                    </div>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

                        {steps.map((step, index) => {
                            const Icon = step.icon

                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="relative text-center"
                                >
                                    {/* Step Number */}
                                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-6 rounded-full bg-primary px-3 py-1 text-sm font-bold text-white shadow-lg">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-primary text-white shadow-lg">
                                        <Icon size={34} />
                                    </div>

                                    {/* Card */}
                                    <div className="mt-8 rounded-2xl border border-gray-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {step.title}
                                        </h3>

                                        <p className="mt-3 text-gray-600 leading-7">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}

                    </div>

                </div>
            </div>
        </section>
    )
}