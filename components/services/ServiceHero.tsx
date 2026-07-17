import Image from "next/image";

export default function ServiceHero() {
    return (
        <section className="relative w-full h-[250px] md:h-[400px] lg:h-[400px] overflow-hidden">
            <Image
                src="/contact.jpg"
                alt="Laptop Repair Services"
                fill
                priority
                className="object-cover"
            />
        </section>
    );
}