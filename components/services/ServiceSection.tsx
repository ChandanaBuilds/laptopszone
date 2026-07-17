import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const services = [
    {
        title: "Laptop Repair Services",
        image: "/lrep.jpg",
        description:
            "Our laptop repair services cover everything from motherboard failures and display issues to battery replacements and software optimization. We support all major brands including Dell, HP, Lenovo, ASUS, Acer, MSI, Samsung and Apple devices with reliable and cost-effective repair solutions.",
        points: [
            "Expert motherboard diagnostics and chip-level repair services.",
            "Professional screen replacement for damaged or flickering displays.",
            "Battery replacement and charging issue resolution.",
            "Thermal servicing and overheating prevention solutions.",
            "Water damage diagnosis and recovery services.",
            "Performance optimization to improve speed and reliability.",
        ],
    },

    {
        title: "Computer Repair Services",
        image: "/repair.webp",
        description:
            "We provide complete desktop and workstation repair solutions for homes, businesses and enterprises. Our team handles everything from hardware failures to software troubleshooting and system upgrades.",
        points: [
            "Complete hardware diagnostics and troubleshooting services.",
            "Power supply, RAM and storage issue resolution.",
            "Operating system repair and recovery solutions.",
            "Desktop performance upgrades and optimization.",
            "Peripheral installation and configuration support.",
            "Preventive maintenance for long-term reliability.",
        ],
    },

    {
        title: "Apple MacBook Repair Services",
        image: "/app.jpg",
        description:
            "Our technicians provide specialized repair services for Apple MacBooks including display replacement, logic board repairs and battery servicing using professional tools and techniques.",
        points: [
            "MacBook display replacement and repair services.",
            "Battery health diagnostics and replacements.",
            "Logic board troubleshooting and repair.",
            "Keyboard and trackpad replacement solutions.",
            "macOS installation and recovery support.",
            "SSD upgrades and storage migration services.",
        ],
    },

    {
        title: "Data Recovery Services",
        image: "/mother.webp",
        description:
            "Recover important business and personal files from damaged, corrupted or inaccessible storage devices through advanced data recovery solutions.",
        points: [
            "Recovery of accidentally deleted files and folders.",
            "Hard disk and SSD recovery services.",
            "Corrupted partition restoration solutions.",
            "Virus and malware damage recovery support.",
            "Secure backup and restoration services.",
            "Business-critical data recovery solutions.",
        ],
    },

    {
        title: "Corporate IT Solutions",
        image: "/crep.jpg",
        description:
            "We help organizations deploy, maintain and manage their IT infrastructure efficiently through proactive support and modern technology solutions.",
        points: [
            "Office workstation deployment and setup services.",
            "Annual maintenance contracts for businesses.",
            "Remote and onsite technical support solutions.",
            "IT asset management and lifecycle planning.",
            "Network implementation and administration.",
            "Scalable infrastructure support for growth.",
        ],
    },

    {
        title: "School & College Lab Setup",
        image: "/srep.jpg",
        description:
            "Our educational infrastructure solutions include complete planning, installation and maintenance of computer laboratories and smart classrooms.",
        points: [
            "Complete computer laboratory installation services.",
            "Structured networking and internet deployment.",
            "Server and centralized management setup.",
            "Projector and smart classroom integration.",
            "Printer installation and device configuration.",
            "Annual maintenance and technical support services.",
        ],
    },

    {
        title: "Laptop Setup & Deployment Services",
        image: "/dep.jpg",
        description:
            "We provide professional laptop deployment services for businesses, schools and training institutions requiring large-scale device provisioning.",
        points: [
            "Bulk laptop deployment and configuration.",
            "Software installation and environment setup.",
            "Domain joining and user provisioning services.",
            "Security policy and compliance configuration.",
            "Asset tagging and inventory management.",
            "Ready-to-use device delivery solutions.",
        ],
    },

    {
        title: "Network & Infrastructure Services",
        image: "/screen.webp",
        description:
            "Our networking solutions help businesses build secure, scalable and high-performance IT environments that support business continuity and future growth.",
        points: [
            "Enterprise LAN and WiFi deployment services.",
            "Router, switch and firewall configuration.",
            "Server installation and maintenance support.",
            "Structured cabling and infrastructure setup.",
            "Network troubleshooting and optimization.",
            "Scalable infrastructure design for expansion.",
        ],
    },
];

export default function ServiceSection() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#439FFE]">
                        Our Services
                    </h2>

                    <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
                        We provide complete IT repair, deployment and infrastructure
                        solutions for homes, businesses and educational institutions.
                    </p>
                </div>

                <div className="space-y-18">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`grid lg:grid-cols-2 gap-14 items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="relative h-[280px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-3xl lg:text-4xl font-semibold text-[#439FFE] mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 text-lg leading-8 mb-2">
                                    {service.description}
                                </p>

                                <div className="space-y-3">
                                    {service.points.map((point, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-2"
                                        >
                                            <CheckCircle2
                                                size={22}
                                                className="text-green-600 mt-1 flex-shrink-0"
                                            />

                                            <p className="text-slate-700 leading-7">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}