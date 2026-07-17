'use client'

import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'
import Image from 'next/image'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  'Laptop Repair',
  'Motherboard Repair',
  'Data Recovery',
  'Screen Replacement',
  'Battery Replacement',
]

export function Footer() {
  return (
    <footer className="bg-slate-200 text-black">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}
          <div>
            <Image
              src="/logo.png"
              alt="Laptop Service Zone"
              width={250}
              height={80}
              className="object-contain"
            />

            <p className="mt-5 leading-7">
              Reliable laptop repair and upgrade solutions by experienced technicians.
            </p>


          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-black">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 transition "
                  >
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-1
                    "
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-black">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-black">
              Contact Us
            </h3>

            <div className="mt-6 space-y-2">

              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-primary" size={20} />
                <div>
                  <p className="font-medium text-black">
                    Phone
                  </p>
                  <a
                    href="tel:+919966111637"
                    className=""
                  >
                    +91 9966111637
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-primary" size={20} />
                <div>
                  <p className="font-medium text-black">
                    Email
                  </p>
                  <a
                    href="mailto:info@laptopservicezone.com"
                    className=""
                  >
                    info@laptopservicezone.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-primary" size={20} />
                <div>
                  <p className="font-medium text-black">
                    Address
                  </p>
                  <p>
                    Vanasthalipuram,
                    Hyderabad,
                    Telangana
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Laptop Service Zone. All rights reserved.
        </div> */}

      </div>
    </footer>
  )
}