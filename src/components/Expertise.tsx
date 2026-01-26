export default function Expertise() {
    return (
        <section className="py-24 bg-[#FFFFFF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-[#137fec] uppercase tracking-widest mb-2">Our Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#0d141b]  mb-4">Premium Sports Surfaces</h3>
                    <p className="text-[#4c739a]  text-lg">
                        We specialize in high-performance surfaces tailored for every sport, ensuring safety, durability, and peak player performance.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group relative overflow-hidden rounded-2xl bg-[#f8f9fa]  border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="h-56 overflow-hidden">
                            <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-[#137fec] shadow-sm">FIFA Quality</div>
                            <img alt="Green artificial turf football field" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Green artificial turf football field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQlkTN-lF6T-8Pa5EHAyYbd-QbOgbxaq-DAecxNAkXkc6VBSYhXSbKCiZYjHY0Y_G36YjfcvZ2TZZqgeRyTxhGVmPzNATp1C-uNR93aYeRr4u7dXSkwyXd5PX4PpGgrt54Yss5km888jFgsd2lemU4I14GH8ktstsVNs8ztg8l0jU2T9kk5tE-soW49mYIASrKW6iDOzgqqDgrfZAoXho9lHuXZJcnltZeCCPh_bzVx5Aon1yTBXf6snBuzVQmsqtOSYtPUMGTKrk3" />
                        </div>
                        <div className="p-6">
                            <div className="size-10 bg-[#137fec]/10 rounded-lg flex items-center justify-center text-[#137fec] mb-4">
                                <span className="material-symbols-outlined">sports_soccer</span>
                            </div>
                            <h4 className="text-xl font-bold text-[#0d141b]  mb-2">Football Turf</h4>
                            <p className="text-[#4c739a]  mb-4 text-sm leading-relaxed">
                                Premium artificial grass systems with superior shock absorption and ball roll characteristics tailored for professional play.
                            </p>
                            {/* <a className="inline-flex items-center text-[#137fec] font-bold text-sm hover:underline" href="#">
                                Learn more <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                            </a> */}
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-[#f8f9fa]  border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="h-56 overflow-hidden">
                            <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-[#137fec] shadow-sm">BWF Standard</div>
                            <img alt="Professional indoor badminton court" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Professional indoor badminton court" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAFtD0_JRxnqlrnj5DbWWH7LRy5SMCwCpsiIs0vH0RLYyRHCEH7i64NUVIAeCSPokMa_x03Ev8SaPvwgYVFiUU2aGWzRzeyWK0quYXSnusqwClVGrRMq6O9hTzOiMlI5FWNUVGV4qd3fIz1_19OQCksTRgELU4_4JyFHKpNHtSTWnGI2o7daOsDzhDUc4n8ADsgzg-9491W5VC3Y_WJICtT_fHoQbjtk0f5ah6rGEMZ3BNbpEmF1PMz7cK0GY_rXf32zljTMUY7BM4" />
                        </div>
                        <div className="p-6">
                            <div className="size-10 bg-[#137fec]/10 rounded-lg flex items-center justify-center text-[#137fec] mb-4">
                                <span className="material-symbols-outlined">sports_tennis</span>
                            </div>
                            <h4 className="text-xl font-bold text-[#0d141b]  mb-2">Badminton Courts</h4>
                            <p className="text-[#4c739a]  mb-4 text-sm leading-relaxed">
                                Professional wooden flooring and synthetic mats providing optimal grip and cushioning to prevent injuries.
                            </p>
                            {/* <a className="inline-flex items-center text-[#137fec] font-bold text-sm hover:underline" href="#">
                                Learn more <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                            </a> */}
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-[#f8f9fa]  border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="h-56 overflow-hidden">
                            <img alt="Cricket pitch with nets" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Cricket pitch with nets" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWG57780mO4dYCRPhmDJiZPAlFPOIZka7PFYN2I69u6y8mFLt7YtKkunrSkymhZAUBkXPnSdNytbGENHPStIW-jW-_KMVdLA4J3uHu0tI3ZquFjNEwzZ7G8tNMJWrWgs5JI0qfc9NhyJKhhwrI59xOWIQ1ZcAe6gLZdr6GffeCK4L4p-Z99pV1mFZuABN9NBBMfPrp9spJqalTadH1jXx5Q5cOvDZqi5IPF82Mc61Dh83yvG0Zv6VM_lB0rtNYR9kme2P3G8Z1uBAt" />
                        </div>
                        <div className="p-6">
                            <div className="size-10 bg-[#137fec]/10 rounded-lg flex items-center justify-center text-[#137fec] mb-4">
                                <span className="material-symbols-outlined">sports_cricket</span>
                            </div>
                            <h4 className="text-xl font-bold text-[#0d141b]  mb-2">Cricket Nets &amp; Turf</h4>
                            <p className="text-[#4c739a]  mb-4 text-sm leading-relaxed">
                                High-quality AstroTurf pitches and enclosed net practice areas designed for intensive coaching and training.
                            </p>
                            {/* <a className="inline-flex items-center text-[#137fec] font-bold text-sm hover:underline" href="#">
                                Learn more <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                            </a> */}
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-[#f8f9fa]  border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="h-56 overflow-hidden">
                            <img alt="Outdoor basketball court with orange rim" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Outdoor basketball court with orange rim" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3nTdNfUkl3d45f_aqq7BT_cgXQrCMyRG-TRB0Y4qc1APxkjvyLbvLObA2m6FMD2wOdEDayHXp6ZHbRg616H4W2xU-K-Fr_fJW9ar1jM_e1gdDdkp1Nss9MCqmJnbB4JmO7KSopvo3oYXCYIEEHiP4drWCwSgpIGQF6c2T3lD5k9seHzuD8qgEDs3rlY5RYmKWRtGQg98T4XpXR4jOa0hzajAI1mg3UxqN-bVZVtZPtxICRyHH2EkDqz3eQhEO2fUtJS-09BSQeGv7" />
                        </div>
                        <div className="p-6">
                            <div className="size-10 bg-[#137fec]/10 rounded-lg flex items-center justify-center text-[#137fec] mb-4">
                                <span className="material-symbols-outlined">sports_basketball</span>
                            </div>
                            <h4 className="text-xl font-bold text-[#0d141b]  mb-2">Basketball Courts</h4>
                            <p className="text-[#4c739a]  mb-4 text-sm leading-relaxed">
                                Acrylic and PU flooring options for both indoor and outdoor courts, offering excellent bounce and traction.
                            </p>
                            {/* <a className="inline-flex items-center text-[#137fec] font-bold text-sm hover:underline" href="#">
                                Learn more <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                            </a> */}
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-[#f8f9fa]  border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="h-56 overflow-hidden">
                            <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-[#137fec] shadow-sm">ITF Certified</div>
                            <img alt="Blue hard court tennis surface" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Blue hard court tennis surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsgI7m0jD8urD7eRqnxOY28luhvTAzg5gCuRyjn4jnDGEql1Y-ANY_m44_cTs2U3PdP2H0zCvszICtN9to9PIHhm6uVzK2g_op0FbFgddEytEl2RxLnvvL514jSuh7y3dmQC9nht2SrECAL-UYPCcNGw8ku68eeMNkpfBokyLivKyxEasOXKyF44G_eAnTTymEBSvY5RkgioOpEGlk6Rvse-XkwAqvXBg5PbwCkOF9uR0q1tZi5GcQhwxpMIynzOfOonv4N2aNbnzX" />
                        </div>
                        <div className="p-6">
                            <div className="size-10 bg-[#137fec]/10 rounded-lg flex items-center justify-center text-[#137fec] mb-4">
                                <span className="material-symbols-outlined">sports_tennis</span>
                            </div>
                            <h4 className="text-xl font-bold text-[#0d141b]  mb-2">Tennis Courts</h4>
                            <p className="text-[#4c739a]  mb-4 text-sm leading-relaxed">
                                Professional hard courts with multi-layer acrylic systems or traditional clay court construction.
                            </p>
                            {/* <a className="inline-flex items-center text-[#137fec] font-bold text-sm hover:underline" href="#">
                                Learn more <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                            </a> */}
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-[#f8f9fa]  border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="h-56 overflow-hidden">
                            <img alt="Red synthetic running track lanes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Red synthetic running track lanes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7-XVm5nKDMzlnTB01-7aAghIdzgjqrNil-dm7VdlxqGHB6ZjvXLSKeySysT3DUwNnk9fu34un9D-cu_NQ_f2r0q_z4BG0dC8frny0JG-F2ANqDW7sUqER6s_8oesXaywoEKNPB4n5Yd_kCXZEB0_f7bHVY6xIfMxLfWpmg9URmpbZi2hV_whKVfgEiY3_zMC-3PpFD6bi7evEWnbmvlqjZSpuFIiTOsOUQt4a-ofgLTXfFDXRzeJefSMzfCbIjbMl2bWErj1D0emt" />
                        </div>
                        <div className="p-6">
                            <div className="size-10 bg-[#137fec]/10 rounded-lg flex items-center justify-center text-[#137fec] mb-4">
                                <span className="material-symbols-outlined">sprint</span>
                            </div>
                            <h4 className="text-xl font-bold text-[#0d141b]  mb-2">Synthetic Running Tracks</h4>
                            <p className="text-[#4c739a]  mb-4 text-sm leading-relaxed">
                                EPDM and PU athletic tracks designed for schools and stadiums, providing all-weather performance.
                            </p>
                            {/* <a className="inline-flex items-center text-[#137fec] font-bold text-sm hover:underline" href="#">
                                Learn more <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                            </a> */}
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-[#f8f9fa]  border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-3">
                        <div className="grid md:grid-cols-2 h-full">
                            <div className="h-64 md:h-full overflow-hidden">
                                <img alt="Modern Padel court with glass walls" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern Padel court with glass walls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBakpCV7YWkpdwfqBGnTDqI_JLThVdqXQVHY3sC8afI5zAWZ6aOcioB8sVlawK9YPlytaEBYKggPOcjIEJG4l2X1fbmdI5MIOzFmHlQfWQgFkXfmmG7HDoN31ctl8rJLt1G6xcF7iJUdYBE_TQkU8usOAyCM_76DXcqctNn4dUzp2jcdGwnya3GvV1J7LXLJGdbCtPP_XsyxEIoUfjbmEP9J8vFqXZw6WyPt5x7WT7QbDC-3MhspZTCNKUxprGhkESIlfV0rErCTOr4" />
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <div className="size-10 bg-[#137fec]/10 rounded-lg flex items-center justify-center text-[#137fec] mb-4">
                                    <span className="material-symbols-outlined">sports_handball</span>
                                </div>
                                <h4 className="text-xl font-bold text-[#0d141b]  mb-2">Pickleball &amp; Padel Courts</h4>
                                <p className="text-[#4c739a]  mb-6 text-base leading-relaxed max-w-lg">
                                    Join the fastest growing sports trend. We install modern glass-walled Padel courts and professional Pickleball surfaces specifically designed for clubs and residential communities.
                                </p>
                                {/* <a className="inline-flex items-center text-[#137fec] font-bold text-sm hover:underline" href="#">
                                    Learn more about Padel <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
