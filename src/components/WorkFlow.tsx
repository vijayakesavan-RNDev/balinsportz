export default function WorkFlow() {
    return (
        <section className="px-4 py-16 md:px-10 bg-slate-100 rounded-[2rem] mx-4 md:mx-10 mb-20">
            <div className="text-center mb-16">
                <span className="text-[#22c55e] font-bold uppercase tracking-widest text-sm">Workflow</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2">Journey of Excellence</h2>
                <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Our streamlined construction process ensures that every project meets international sporting standards while maintaining strict engineering rigor.</p>
            </div>
            <div className="relative">
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px process-connector -translate-y-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    <div className="flex flex-col items-center text-center group">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#137fec] group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-4xl text-[#137fec]">architecture</span>
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#137fec] text-white text-sm font-black flex items-center justify-center">1</div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Consultation &amp; Design</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Initial site assessment, feasibility study, and technical CAD drafting based on sporting requirements.</p>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#22c55e] group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-4xl text-[#22c55e]">foundation</span>
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#22c55e] text-white text-sm font-black flex items-center justify-center">2</div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Site Engineering</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Civil work including excavation, drainage systems, and high-precision sub-base leveling for longevity.</p>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 rounded-full bg-white  shadow-xl flex items-center justify-center border-4 border-[#137fec] group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-4xl text-[#137fec]">layers</span>
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#137fec] text-white text-sm font-black flex items-center justify-center">3</div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Surface Installation</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Expert application of FIFA-grade turf, acrylic coatings, or PU flooring with laser-precision marking.</p>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#22c55e] group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-4xl text-[#22c55e]">handshake</span>
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#22c55e] text-white text-sm font-black flex items-center justify-center">4</div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Handover &amp; Maintenance</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Final quality certification, client training, and long-term maintenance scheduling for peak performance.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
