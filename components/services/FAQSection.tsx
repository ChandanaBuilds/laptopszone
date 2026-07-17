'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "Do you provide doorstep laptop repair services?",
        a: "Yes, we offer pickup and delivery services for laptops and computers, ensuring convenience and minimal downtime for our customers.",
    },
    {
        q: "Do you support corporate clients?",
        a: "Yes, we provide complete IT support, infrastructure management, AMC services, and workstation deployment solutions for businesses of all sizes.",
    },
    {
        q: "Can you setup computer labs for schools?",
        a: "Absolutely. We provide complete lab planning, computer installation, networking, server setup, and ongoing maintenance support for educational institutions.",
    },
    {
        q: "Do you repair Apple MacBooks?",
        a: "Yes, our technicians specialize in MacBook repairs including screen replacement, battery replacement, logic board repair, and macOS recovery services.",
    },
    {
        q: "Do you provide networking services?",
        a: "Yes, we offer LAN setup, WiFi deployment, firewall configuration, router installation, switch management, and server setup services.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6">

                <div className="text-center mb-14">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#439FFE]">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Find answers to the most common questions about our services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.q}
                            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                                    {faq.q}
                                </h3>

                                <ChevronDown
                                    className={`text-blue-600 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    size={24}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-6 pb-6 text-slate-600 leading-7">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}