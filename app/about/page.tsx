'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  const services = [
    'Laptop Sales',
    'Laptop Repairs',
    'Accessories',
    'Upgrade Services',
    'Battery Replacement',
    'Keyboard Replacement',
    'Data Recovery',
    'Business Solutions',
  ]

  const features = [
    {
      title: 'Genuine Parts',
      description:
        'Original components and accessories for all major laptop brands.',
      icon: '🛡️',
    },
    {
      title: 'Expert Technicians',
      description:
        'Experienced engineers with expertise across multiple laptop brands.',
      icon: '👨‍💻',
    },
    {
      title: 'Transparent Pricing',
      description:
        'Clear quotations and pricing without hidden charges.',
      icon: '💰',
    },
    {
      title: 'Fast Turnaround',
      description:
        'Quick diagnosis and reliable repair services.',
      icon: '⚡',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[260px] md:h-[380px] overflow-hidden">
        <img
          src="/about.jpg"
          alt="About TechHub"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Light Overlay */}

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="bg-black text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                Trusted Laptop Store & Service Center
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white mt-5 mb-4">
                About TechHub
              </h1>

              <p className="text-white text-sm md:text-lg leading-7">
                Delivering premium laptops, genuine accessories,
                upgrades, and expert technical support for students,
                professionals, creators, and businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-black mb-5">
                Who We Are
              </h2>

              <p className="text-black text-sm md:text-base leading-8 mb-4">
                TechHub specializes in premium laptops, accessories,
                upgrades, and repair solutions. Our experienced
                technicians support major brands including Dell,
                HP, Lenovo, ASUS, Acer, MSI, and Apple devices.
              </p>

              <p className="text-black text-sm md:text-base leading-8">
                From gaming laptops to business workstations,
                we help customers choose the right technology
                backed by expert support and reliable service.
              </p>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className=" rounded-2xl p-5 text-center bg-white shadow-md">
                <h3 className="text-3xl font-bold text-black">10K+</h3>
                <p className="text-sm text-black mt-2">
                  Customers Served
                </p>
              </div>

              <div className=" rounded-2xl p-5 text-center bg-white shadow-md">
                <h3 className="text-3xl font-bold text-black">500+</h3>
                <p className="text-sm text-black mt-2">
                  Products Available
                </p>
              </div>

              <div className=" rounded-2xl p-5 text-center bg-white shadow-md">
                <h3 className="text-3xl font-bold text-black">4.8★</h3>
                <p className="text-sm text-black mt-2">
                  Customer Rating
                </p>
              </div>

              <div className=" rounded-2xl p-5 text-center bg-white shadow-md">
                <h3 className="text-3xl font-bold text-black">24/7</h3>
                <p className="text-sm text-black mt-2">
                  Technical Support
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-center text-black mb-8">
            Our Services
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-md transition"
              >
                <p className="font-medium text-sm text-black">
                  {service}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-center text-black mb-8">
            Why Choose TechHub
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="bg-white  rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">
                  {feature.icon}
                </div>

                <h3 className="font-bold text-lg text-black mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm text-black leading-7">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white text-center p-10 shadow-md"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Looking for the Perfect Laptop?
            </h2>

            <p className="text-black mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Explore our latest collection of premium laptops,
              accessories, and upgrade solutions tailored for your needs.
            </p>

            <Link
              href="/laptops"
              className="inline-block px-8 py-3 bg-black text-white rounded-xl font-semibold hover:opacity-90 transition"
            >
              Explore Products
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  )
}