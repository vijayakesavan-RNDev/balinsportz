export default function WhyBalin() {
    return (
        <section className="px-4 py-16 md:px-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black">Why BalinSportz?</h2>
                <div className="w-20 h-1 bg-[#137fec] mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:-translate-y-2 transition-transform border border-slate-100">
                    <div className="w-16 h-16 rounded-full bg-[#137fec]/10 flex items-center justify-center text-[#137fec] mb-6">
                        <span className="material-symbols-outlined text-4xl">architecture</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Technical Expertise</h3>
                    <p className="text-slate-600">Rooted in B.E Civil Engineering, we handle complex drainage, sub-base work, and leveling with surgical precision.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:-translate-y-2 transition-transform border border-slate-100">
                    <div className="w-16 h-16 rounded-full bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e] mb-6">
                        <span className="material-symbols-outlined text-4xl">public</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">International Standards</h3>
                    <p className="text-slate-600">All materials and installation processes comply with FIFA, ITF, and FIBA requirements for optimal athlete safety.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:-translate-y-2 transition-transform border border-slate-100">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-6">
                        <span className="material-symbols-outlined text-4xl">schedule</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Timely Execution</h3>
                    <p className="text-slate-600">We understand that time is of the essence. Our project management ensures 100% on-time completion schedules.</p>
                </div>
            </div>
        </section>
    )
}
