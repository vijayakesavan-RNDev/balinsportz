export default function QA() {
    return (
        <div className="w-full bg-white py-16 border-t border-gray-200">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 w-full text-center">
                <div className="flex flex-col items-center mb-10">
                    <span className="text-[#137fec] font-bold text-sm uppercase tracking-widest mb-2">Quality Assurance</span>
                    <h2 className="text-[#0d141b]  text-3xl md:text-4xl font-extrabold leading-tight">Our Construction Certifications &amp; Standards</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl">We adhere to the highest international standards in sports infrastructure, ensuring durability, safety, and elite performance levels for every facility we build.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-80">
                    <div className="flex flex-col items-center gap-4 group">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-full flex items-center justify-center p-4 border border-gray-100 group-hover:border-[#137fec] transition-colors">
                            <span className="material-symbols-outlined text-5xl text-gray-400 group-hover:text-[#137fec]">verified</span>
                        </div>
                        <span className="font-bold text-gray-700 uppercase tracking-tighter">FIFA Standards</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-full flex items-center justify-center p-4 border border-gray-100 group-hover:border-[#137fec] transition-colors">
                            <span className="material-symbols-outlined text-5xl text-gray-400 group-hover:text-[#137fec]">directions_run</span>
                        </div>
                        <span className="font-bold text-gray-700 uppercase tracking-tighter">IAAF Certified</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-full flex items-center justify-center p-4 border border-gray-100 group-hover:border-[#137fec] transition-colors">
                            <span className="material-symbols-outlined text-5xl text-gray-400 group-hover:text-[#137fec]">sports_basketball</span>
                        </div>
                        <span className="font-bold text-gray-700 uppercase tracking-tighter">FIBA Approved</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-full flex items-center justify-center p-4 border border-gray-100 group-hover:border-[#137fec] transition-colors">
                            <span className="material-symbols-outlined text-5xl text-gray-400 group-hover:text-[#137fec]">sports_tennis</span>
                        </div>
                        <span className="font-bold text-gray-700 uppercase tracking-tighter">BWF Standards</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
