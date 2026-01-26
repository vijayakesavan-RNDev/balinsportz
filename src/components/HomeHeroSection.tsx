const HomeHeroSection = () => {
    return (
        <>
            <section className="relative w-full h-150 overflow-hidden">
                <div className="absolute inset-0 w-full h-full z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />

                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaakOUeQtftqkwFScxqiRdR_A_eC9CvElaP7esIWUHyCtpGjpjbRjeeKMGnYHP0tHSvqF2R8RR4Q6dhDs5MPpreoQT2U6ZmsA_lNL_etXW52steWxNGBwvnmf10YOzwzEB6cfpp8B_e49u4__4bOr6icMzppw7AtxLnUEgYwIIejYC1Yi0u2tfP2JVwEg_QCOFhVVoa8i7dozkNqZzlhQDyNrZ3eVHyZD5q9hziN8qr5GA2xoomAjq_VwH0RtxhVpoNrC-X6PYzpZl"
                        alt="Panoramic view of a professional soccer stadium at night"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <div className="relative z-20 w-full h-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center h-full">
                        <div className="max-w-3xl animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#137fec]/20 backdrop-blur-sm border border-[#137fec]/30 mb-6">
                                <span className="w-2 h-2 rounded-full bg-blue-600" />

                                <span className="text-xs font-bold uppercase tracking-wider text-white">
                                    Premier Sports Construction
                                </span>
                            </div>


                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                                World-Class Sports Infrastructure <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#137fec] to-blue-300">
                                    Concept to Completion
                                </span>

                            </h1>

                            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
                                Building champions starts with the ground they play on. We deliver
                                premium turnkey sports facilities for schools, clubs, and real
                                estate developers with uncompromising quality.
                            </p>

                            {/* <div className="flex flex-wrap gap-4">
                                <button className="flex items-center justify-center h-14 px-8 rounded-lg bg-[#137fec] hover:bg-[#0e64bd] text-white text-base font-bold transition-all shadow-xl shadow-[#137fec]/40 transform hover:-translate-y-0.5">
                                    Get a Quote
                                    <span className="ml-2 text-xl">→</span>
                                </button>

                                <button className="flex items-center justify-center h-14 px-8 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold transition-all">
                                    Book Consultation
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative z-20 w-full bg-surface-light/95 dark:bg-surface-dark/95 border-b border-gray-200 dark:border-gray-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-[#4c739a] uppercase tracking-widest mb-4">Trusted Standards</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2 font-bold text-xl text-gray-500"><span className="material-symbols-outlined">verified</span>FIFA QUALITY</div>
                        <div className="flex items-center gap-2 font-bold text-xl text-gray-500"><span className="material-symbols-outlined">verified</span>ITF CERTIFIED</div>
                        <div className="flex items-center gap-2 font-bold text-xl text-gray-500"><span className="material-symbols-outlined">verified</span>BWF STANDARD</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHeroSection;
