export default function Philosophy() {
    return (
        <section className="px-4 py-16 md:px-10">
            <div className="flex flex-col gap-12">
                <div className="max-w-[800px]">
                    <span className="text-[#137fec] font-bold uppercase tracking-widest text-sm">Philosophy</span>
                    <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4">Architecting Excellence in Every Square Foot</h2>
                    <p className="text-slate-600 text-lg">Our commitment is to bridge the gap between Indian athletes and world-className infrastructure, ensuring accessibility and performance parity for schools, academies, and private clubs alike.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4 p-8 rounded-2xl border border-[#cfdbe7] bg-white shadow-sm hover:shadow-md transition-all border-l-4 border-l-[#137fec]">
                        <div className="bg-[#137fec]/10 w-12 h-12 rounded-lg flex items-center justify-center text-[#137fec]">
                            <span className="material-symbols-outlined">visibility</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                            <p className="text-[#4c739a] leading-relaxed">
                                To be India's premier choice for sports infrastructure, transforming the nation's athletic landscape through innovative engineering and sustainable construction practices.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-8 rounded-2xl border border-[#cfdbe7] shadow-sm hover:shadow-md transition-all border-l-4 border-l-[#22c55e]">
                        <div className="bg-[#22c55e]/10 w-12 h-12 rounded-lg flex items-center justify-center text-[#22c55e]">
                            <span className="material-symbols-outlined">engineering</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                            <p className="text-[#4c739a] leading-relaxed">
                                To deliver international-standard facilities with technical precision, ensuring long-term durability, safety, and performance for every athlete, regardless of the level of play.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
