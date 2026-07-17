import ServiceHero from "@/components/services/ServiceHero";
import ServiceSection from "@/components/services/ServiceSection";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import ServiceCTA from "@/components/services/ServiceCTA";
import FAQSection from "@/components/services/FAQSection";

export default function ServicesPage() {
    return (
        <>
            <ServiceHero />
            <ServiceSection />
            <ServiceCTA />
            <FAQSection />
        </>
    );
}