'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  const contactCards = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'support@laptopservicezone.com',
    },
    {
      icon: <Phone size={28} />,
      title: 'Phone',
      value: '+91 98765 43210',
    },
    {
      icon: <MapPin size={28} />,
      title: 'Address',
      value: 'Hyderabad, Telangana, India',
    },
    {
      icon: <Clock size={28} />,
      title: 'Working Hours',
      value: 'Mon - Sat | 9 AM - 8 PM',
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative h-[260px] md:h-[380px] overflow-hidden">
        <img
          src="/contact.jpg"
          alt="Contact Us"
          className="absolute inset-0 h-full w-full object-cover"
        />


        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                Contact Laptop Service Zone
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white mt-5 mb-4">
                Get In Touch
              </h1>

              <p className="text-white text-sm md:text-lg leading-7">
                Need laptop repairs, upgrades, or technical support?
                Our team is ready to help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {contactCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="bg-white  rounded-2xl p-6 shadow-sm text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4 text-black">
                  {item.icon}
                </div>

                <h3 className="font-bold text-lg text-black mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-black">
                  {item.value}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="pb-14">
        <div className="max-w-4xl mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white  rounded-3xl shadow-sm p-8 md:p-10"
          >
            {!submitted ? (
              <>
                <h2 className="text-3xl font-bold text-black mb-2">
                  Send Us a Message
                </h2>

                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will contact you shortly.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className=" rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className=" rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className=" rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                  />

                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="md:col-span-2  rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-black"
                  />

                  <button
                    type="submit"
                    className="md:col-span-2 bg-black text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
                  >
                    Send Message
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <CheckCircle
                  size={60}
                  className="mx-auto text-green-500 mb-4"
                />

                <h3 className="text-2xl font-bold text-black mb-3">
                  Message Sent Successfully
                </h3>

                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
              </div>
            )}
          </motion.div>

        </div>
      </section>
    </>
  )
}