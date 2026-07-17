'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Ravi Kumar',
        location: 'Hyderabad',
        review:
            'Excellent service! My Dell laptop had a motherboard issue, and it was repaired within a day. The staff explained everything clearly and the pricing was transparent.',
    },
    {
        name: 'Sneha Reddy',
        location: 'LB Nagar',
        review:
            'Very professional technicians. They replaced my laptop screen with a genuine part and even cleaned the entire device. Highly recommended.',
    },
    {
        name: 'Arjun Sharma',
        location: 'Vanasthalipuram',
        review:
            'My laptop stopped booting before an important presentation. The team recovered my data and fixed the issue quickly. Great experience!',
    },
]

export function Testimonials() {
    return (
        <section className="bg-slate-50 py-8">
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
                        Testimonials
                    </span>

                    <h2 className="mt-3 text-4xl font-semibold text-gray-900 md:text-4xl">
                        What Our Customers Say
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
                        Customer satisfaction is our priority. Here's what people say about
                        their experience with our laptop repair services.
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
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
                            className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl"
                        >
                            {/* Quote Icon */}
                            <Quote
                                size={42}
                                className="absolute right-6 top-6 text-primary/20"
                            />

                            {/* Stars */}
                            <div className="mb-6 flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="leading-8 text-gray-600">
                                "{testimonial.review}"
                            </p>

                            {/* Customer */}
                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                                    {testimonial.name.charAt(0)}
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h4>

                                    <p className="text-sm text-gray-500">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}