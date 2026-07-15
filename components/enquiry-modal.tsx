'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle } from 'lucide-react'
import type { EnquiryForm } from '@/lib/types'

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
}

export function EnquiryModal({ isOpen, onClose, productName }: EnquiryModalProps) {
  const [formData, setFormData] = useState<EnquiryForm>({
    name: '',
    email: '',
    phone: '',
    productInterest: productName,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Enquiry submitted:', formData)
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          productInterest: productName,
          message: '',
        })
        onClose()
      }, 2000)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-card border border-border rounded-lg shadow-xl z-50 p-6"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close enquiry modal"
              title="Close enquiry modal"
              className="absolute top-4 right-4 p-1 hover:bg-secondary rounded-lg transition-colors"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-2">Interested in {productName}?</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and our team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="enquiry-name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2 bg-secondary border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${errors.name ? 'border-red-500' : 'border-border'
                        }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="enquiry-email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2 bg-secondary border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${errors.email ? 'border-red-500' : 'border-border'
                        }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="enquiry-phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-2 bg-secondary border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${errors.phone ? 'border-red-500' : 'border-border'
                        }`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Product Interest */}
                  <div>
                    <label htmlFor="enquiry-product" className="block text-sm font-medium text-foreground mb-2">
                      Product of Interest
                    </label>
                    <input
                      id="enquiry-product"
                      type="text"
                      value={formData.productInterest}
                      disabled
                      className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground opacity-60 cursor-not-allowed"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="enquiry-message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="enquiry-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2 bg-secondary border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${errors.message ? 'border-red-500' : 'border-border'
                        }`}
                      rows={4}
                      placeholder="Tell us more about your inquiry..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity mt-6"
                  >
                    Send Enquiry
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  Your enquiry has been submitted successfully. We&apos;ll get back to you soon.
                </p>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
