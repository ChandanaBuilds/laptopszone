import { Truck, Phone } from "lucide-react";

export function AnnouncementBar() {
    return (
        <div className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 py-2">

                {/* Mobile */}
                <div className="flex md:hidden items-center justify-center gap-2 text-xs font-medium">
                    <Truck size={14} />
                    <span>Free Pickup & Delivery Across Hyderabad</span>
                </div>

                {/* Desktop */}
                <div className="hidden md:flex items-center justify-center gap-6 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <Truck size={16} />
                        <span>Free Pickup & Home Delivery Across Hyderabad</span>
                    </div>

                    <div className="w-1 h-1 rounded-full bg-white/60" />

                    <span>Same Day Service Available</span>

                    <div className="w-1 h-1 rounded-full bg-white/60" />

                    <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>Call: +91 XXXXX XXXXX</span>
                    </div>
                </div>

            </div>
        </div>
    );
}