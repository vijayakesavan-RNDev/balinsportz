export default function SiteVisit() {

    const handleSiteVisit = () => {
        const phoneNumber = "919710660603";

        const message = `
                      Hi.
                      I’m interested in booking a site visit for building a sports arena.

                      * Location:
                      * Preferred Date:
                      * Project Type (Indoor / Outdoor):
                      * Contact Details:

                      Please let me know the next steps. Thank you!`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <div className="w-full py-20 px-4 md:px-6">
            <div className="max-w-[1200px] mx-auto w-full relative rounded-3xl overflow-hidden shadow-2xl">

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Professional sports facility"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPVu1zoKeq7MLOti372Kx0I5D6Tt_jV0nHp73uPHxPmdd1WkMembNBoWW2EVvxp8qokmV4RHqBveM7Oi4Y4nl_RyGlYwx_GH93MS-G6HMfJcK_WToJfQte-3ZWGLWiUexPqH2KXf67ltxUeaiSnoROrhPh5yggrAdAuZoZGEsNoa3tR7ByrH1ipX1y3KOZyTH6eq-P_n_U-Lhy6fCkBNMLb2nNsTfoayTvU0f8daq8aYAaivZHNSzduay1ERSEM1P2_18QxtVKW4tR"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col items-start max-w-2xl">
                    <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                        Ready to Build Your Dream Sports Arena?
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
                        Schedule a professional consultation and site evaluation with our expert team today.
                    </p>

                    {/* WhatsApp Button */}
                    <button
                        onClick={handleSiteVisit}
                        className="flex items-center gap-3 bg-[#137fec] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30"
                    >
                        <span>Book Site Visit Now</span>
                        <span className="material-symbols-outlined">calendar_today</span>
                    </button>

                    {/* Helper Text */}
                    <p className="text-gray-400 text-sm mt-4">
                        Instant confirmation via WhatsApp
                    </p>
                </div>
            </div>
        </div>
    );
}
