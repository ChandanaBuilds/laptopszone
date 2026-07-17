import {
    ShieldCheck,
    Clock3,
    Truck,
    BadgeCheck,
    Wrench,
    Headphones,
} from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Certified Technicians",
        desc: "Experienced professionals handling every repair and setup.",
    },
    {
        icon: Clock3,
        title: "Fast Turnaround",
        desc: "Quick diagnosis and repair with minimal downtime.",
    },
    {
        icon: Truck,
        title: "Doorstep Pickup",
        desc: "Convenient pickup and delivery service available.",
    },
    {
        icon: BadgeCheck,
        title: "Genuine Parts",
        desc: "Only high-quality and genuine replacement components.",
    },
    {
        icon: Wrench,
        title: "Complete IT Solutions",
        desc: "Repair, networking, deployment and infrastructure support.",
    },
    {
        icon: Headphones,
        title: "Dedicated Support",
        desc: "Friendly support team ready to help whenever needed.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-slate-900">
                        Why Choose Us
                    </h2>

                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        We combine technical expertise with exceptional customer service
                        to deliver reliable IT solutions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="bg-white p-8 rounded-3xl border border-slate-200"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5">
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-600 mt-4">
                                    {feature.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}