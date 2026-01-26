export default function ProjectHeroSection() {
    return (
        <div className="relative flex h-auto w-full flex-col group/design-root">
            <div className="w-full  px-4 md:px-6 py-6 md:py-10">
                <div className="relative w-full rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px] bg-cover bg-center flex flex-col justify-end p-8 md:p-12 shadow-xl shadow-gray-200/50" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPVu1zoKeq7MLOti372Kx0I5D6Tt_jV0nHp73uPHxPmdd1WkMembNBoWW2EVvxp8qokmV4RHqBveM7Oi4Y4nl_RyGlYwx_GH93MS-G6HMfJcK_WToJfQte-3ZWGLWiUexPqH2KXf67ltxUeaiSnoROrhPh5yggrAdAuZoZGEsNoa3tR7ByrH1ipX1y3KOZyTH6eq-P_n_U-Lhy6fCkBNMLb2nNsTfoayTvU0f8daq8aYAaivZHNSzduay1ERSEM1P2_18QxtVKW4tR")` }}>
                    <div className="max-w-2xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-[#137fec]/90 text-white text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm">Our Portfolio</span>
                        <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-2">Building the Future of Sports</h1>
                        <p className="text-gray-200 text-base md:text-lg max-w-lg leading-relaxed">BalinSportz specializes in constructing world-className sports infrastructure designed for peak performance.</p>
                    </div>
                </div>
            </div>
            <div className="w-full  px-4 md:px-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200  pb-6">
                    <div>
                        <h2 className="text-[#0d141b] text-2xl md:text-3xl font-bold leading-tight mb-2">Completed Projects</h2>
                        <p className="text-gray-500 text-sm">Explore our portfolio across Bengaluru and beyond.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
