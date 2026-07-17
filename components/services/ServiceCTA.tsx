'use client'

import { ArrowRight, Phone, Mail } from "lucide-react";

export default function ServiceCTA() {
    return (
        <>
            {/* CTA SECTION */}
            <section className="py-12 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                        Fast • Reliable • Professional
                    </span>

                    <h2 className="text-5xl font-bold mt-6">
                        Need Professional IT Support?
                    </h2>

                    <p className="max-w-3xl mx-auto mt-6 text-lg text-blue-100">
                        From laptop repair and chip-level servicing to complete
                        school lab setups and corporate IT deployment, our experts
                        provide end-to-end solutions tailored to your needs.
                    </p>

                    <div className="flex flex-wrap justify-center gap-5 mt-10">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition">
                            Request Service
                            <ArrowRight size={18} />
                        </button>

                        <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition">
                            Get Free Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

                    <div>
                        <span className="text-blue-600 font-semibold">
                            CONTACT OUR EXPERTS
                        </span>

                        <h2 className="text-5xl font-bold text-slate-900 mt-4">
                            Request a Service
                        </h2>

                        <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                            Tell us your issue and our technical team will contact
                            you shortly with the best solution.
                        </p>

                        <div className="mt-10 space-y-6">

                            <div className="flex items-center gap-4">
                                <div className="bg-blue-600 text-white p-4 rounded-xl">
                                    <Phone size={22} />
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-900">
                                        Call Us
                                    </p>
                                    <p className="text-slate-600">
                                        +91 9876543210
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-blue-600 text-white p-4 rounded-xl">
                                    <Mail size={22} />
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-900">
                                        Email Support
                                    </p>
                                    <p className="text-slate-600">
                                        support@yourcompany.com
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8">
                        <form className="space-y-5">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <select className="w-full border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Select Service</option>
                                <option>Laptop Repair Services</option>
                                <option>Computer Repair Services</option>
                                <option>MacBook Repair Services</option>
                                <option>Data Recovery Services</option>
                                <option>Chip Level Repair Services</option>
                                <option>Printer Repair Services</option>
                                <option>Hardware Upgrade Services</option>
                                <option>Software & Security Services</option>
                                <option>Corporate IT Solutions</option>
                                <option>School & College Lab Setup</option>
                                <option>Laptop Setup Services</option>
                                <option>Network & Infrastructure Services</option>
                            </select>

                            <textarea
                                rows={5}
                                placeholder="Describe your issue or requirement..."
                                className="w-full border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
                            >
                                Submit Request
                            </button>

                        </form>
                    </div>
                </div>
            </section>


        </>
    );
}