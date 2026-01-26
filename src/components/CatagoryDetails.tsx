export default function CatagoryDetails() {
    return (
        <main className="flex flex-col w-full max-w-7xl mx-auto">
            <section className="scroll-mt-32 px-4 md:px-10 py-16 md:py-20 border-b border-gray-200" id="football">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur rounded-lg px-3 py-1">
                            <span className="material-symbols-outlined text-green-600">verified</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-900">FIFA Quality Pro</span>
                        </div>
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up of artificial green football turf texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPtbRHmCYmHC84wjNb8xehvqWVgQRTIrcahtUUznlJyKdGR_n7PqE4qS42YcmfnHhRon_nlUhRRadFSHYB8w4NQdbyLtpKuUTZ-WFC_GbUocP0ZW_ALqTg3kh4fNNz-2dbT1VZTfxUvDsMN9Nv0-QEOnSTA-ZVCHjFjFBaHReLKO7-dI6mPsCzxV9iZ1PXM74izr9nWZKiXLaHgCNrqX6wqb1RSVfgQKkrKEvzjep4omsLGcrmu8EpxUjg1ZrgCQtiJCHrnP7km8TR" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#137fec] font-bold tracking-wider text-sm uppercase">Football Infrastructure</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b]">Next-Gen Artificial Turf</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our football turf systems are engineered for the modern game. Featuring advanced monofilament fibers and eco-friendly infill, we deliver pitch surfaces that mimic natural grass while offering 24/7 durability.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="material-symbols-outlined text-[#137fec] mt-1">security</span>
                                <div>
                                    <h4 className="font-bold text-[#0d141b]">Player Safety</h4>
                                    <p className="text-sm text-gray-500">Optimized shock absorption reduces injury risk.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="material-symbols-outlined text-[#137fec] mt-1">wb_sunny</span>
                                <div>
                                    <h4 className="font-bold text-[#0d141b]">All-Weather</h4>
                                    <p className="text-sm text-gray-500">Superior drainage and UV resistance.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="material-symbols-outlined text-[#137fec] mt-1">verified_user</span>
                                <div>
                                    <h4 className="font-bold text-[#0d141b]">Warranty</h4>
                                    <p className="text-sm text-gray-500">Up to 8 years warranty on fiber degradation.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="material-symbols-outlined text-[#137fec] mt-1">settings_suggest</span>
                                <div>
                                    <h4 className="font-bold text-[#0d141b]">Custom Pile</h4>
                                    <p className="text-sm text-gray-500">Available from 40mm to 60mm pile height.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-mt-32 px-4 md:px-10 py-16 md:py-20 border-b border-gray-200 bg-gray-50" id="badminton">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#137fec] font-bold tracking-wider text-sm uppercase">Indoor Courts</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b]">Professional Badminton Flooring</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                From BWF-certified synthetic mats to premium wooden sub-flooring systems, our badminton courts ensure excellent grip, optimal energy return, and long-term joint protection for players.
                            </p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-[#137fec]">
                                    <span className="material-symbols-outlined text-sm">check</span>
                                </div>
                                <span className="font-medium text-gray-800">BWF (Badminton World Federation) Approved PVC Mats</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-[#137fec]">
                                    <span className="material-symbols-outlined text-sm">check</span>
                                </div>
                                <span className="font-medium text-gray-800">Anti-slip surface with "Sand" or "Gem" patterns</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-[#137fec]">
                                    <span className="material-symbols-outlined text-sm">check</span>
                                </div>
                                <span className="font-medium text-gray-800">Multi-layer shock absorption foam backing</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl order-1 lg:order-2">
                        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-[#137fec]/90 backdrop-blur rounded-lg px-3 py-1 text-white">
                            <span className="material-symbols-outlined">star</span>
                            <span className="text-xs font-bold uppercase tracking-wider">BWF Certified</span>
                        </div>
                        <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="Professional indoor badminton court with green synthetic flooring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB3tjNkDn4dR60CkxobKYlASjpoirVVtc9VQiAuX95yL7mbav42nSCQHxpRdKPiLAUIdEOtMIoRek3VeOlBdlT3Wjneb7Fzdj4ZtIkv-lu0FkxGPZwXYL3AoURZh-uVCsULww7nfOGnZpnT3uJyxX571rMhTIaYtIxn943F-E8qJYvJhnoVLfiiYOhrTtbD2CcWPhUe1Mh0JO4TmCND0d4bdG0gWsdLqXf-O8s3UfpY-zJQD-jApFYVFDL6CXhMdGTCCWOHgE3Yw5a" />
                    </div>
                </div>
            </section>
            <section className="scroll-mt-32 px-4 md:px-10 py-16 md:py-20 border-b border-gray-200" id="cricket">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl">
                        <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="Cricket player batting on a pitch with nets in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy6nnkz06PDtli5xXe5gF1Y8UySr7-UI22Uban6m2HmYvycOz0Q6rafQ0xjMCS8g8YpRu62lYkuHp8II5g112wxX6tjo4gOOQf5ndIU_BiabvULFL4iYWFUY3XMR17QeE0KN9FwG5O-fNlC4nW-4QiLt407m-mI1vuHECX8uTBivZeic-_f1CfixEsOjUqPq9ZVd1JzWOl-mGPRfylxrYHWfmVVI0-8J2mY8BadsUIA8vOzZvvX5K_CnJKibsfNHE_2b7SWU33oG_Q" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#137fec] font-bold tracking-wider text-sm uppercase">Cricket Solutions</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b]">Premium Cricket Turf &amp; Nets</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We specialize in high-density artificial grass for pitches that offer consistent bounce and spin. Our complete solution includes heavy-duty cage netting and pole installation.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6 mt-2">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <span className="material-symbols-outlined text-[#137fec] mb-2 text-3xl">sports_cricket</span>
                                <h3 className="font-bold text-lg mb-1 ">Match Pitches</h3>
                                <p className="text-sm text-gray-500 ">9mm-13mm high-density turf for realistic ball behavior.</p>
                            </div>
                            <div className="bg-gray-50  p-4 rounded-xl border border-gray-100 ">
                                <span className="material-symbols-outlined text-[#137fec] mb-2 text-3xl">grid_4x4</span>
                                <h3 className="font-bold text-lg mb-1 ">Safety Nets</h3>
                                <p className="text-sm text-gray-500 ">UV-stabilized HDPE nets for indoor and outdoor cages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-mt-32 px-4 md:px-10 py-16 md:py-20 border-b border-gray-200  bg-gray-50 " id="tennis">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#137fec] font-bold tracking-wider text-sm uppercase">Racquet Sports</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b] ">Acrylic Hard Courts</h2>
                            <p className="text-gray-600  text-lg leading-relaxed">
                                Our ITF-classified acrylic surfaces provide the perfect balance of pace and comfort. Available in 5-layer to 9-layer cushion systems designed to reduce fatigue on player joints.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center border-b border-gray-200  pb-3">
                                <span className="font-semibold ">Surface Speed</span>
                                <span className="text-gray-500 text-sm">Medium-Slow to Fast</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200  pb-3">
                                <span className="font-semibold ">Layers</span>
                                <span className="text-gray-500 text-sm">5, 7, or 9 Layer Cushion System</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200  pb-3">
                                <span className="font-semibold ">Durability</span>
                                <span className="text-gray-500 text-sm">10+ Years (Outdoor UV Resistant)</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl order-1 lg:order-2">
                        <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="Blue acrylic tennis hard court with white boundary lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ-_P4hWwhPCQfb-K8B0CT2xfh7X-8otz4oqQ2TLaToS4uunuyd2_gaRK1ZPXlmE4kqKEYn6nTGTjrT2_ia6tTkhlIUVvSsjlZhouybvpZ9dziW4X8xKk7zttXE1Tra28knqfSeiIXt2L1baTTNAMak8vv3zS53hMjNYtFEWtJLs0wi5Kbq9WscjKNo7NvCtO23FQpNcgHbuD_C4IoOSpRbV8kQZhRImMPf2OMoSHtXF8KoGPwqgtoEIOYX5Oa2Jt1yObYbWb4LLt3" />
                    </div>
                </div>
            </section>
            <section className="scroll-mt-32 px-4 md:px-10 py-16 md:py-20 border-b border-gray-200 " id="basketball">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl">
                        <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="Indoor basketball court with polished wooden flooring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdaa8i-5PvXuTDv1XjUYyafLJjW1K7Fjk6QFuD7ReMvFt_sVceQNB0lyCMPm_YpXVibyQGk8MVhWi5YxL7c5g0tGJ0aaHTolJtT5BbKT7Y9PFfdzlAW05I2fKWN2t_giKMyJW3evoCZqvONULxDx2uNGS7PR5t4-FxYA7lAdfaz6N7OysnJZnbaNGsjafQBQYl98r3MDliCc3_lc_Bd-0ysxyx7C16yGeuSVo2-8kfnPuK1D9qwCgMCGJvwKkUJ1BYa65Uot7ipUIA" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#137fec] font-bold tracking-wider text-sm uppercase">FIBA Standards</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b] ">Basketball Courts</h2>
                            <p className="text-gray-600  text-lg leading-relaxed">
                                Whether you need Maple Wood flooring for an indoor stadium or durable Polypropylene (PP) Tiles for an outdoor community court, we deliver FIBA-compliant surfaces.
                            </p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <div className="flex-1 min-w-[140px] p-4 bg-orange-50 rounded-xl border border-orange-100 ">
                                <h4 className="font-bold text-[#0d141b]  mb-1">Maple Wood</h4>
                                <p className="text-xs text-gray-600 ">Traditional, high shock absorption, professional grade.</p>
                            </div>
                            <div className="flex-1 min-w-[140px] p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <h4 className="font-bold text-[#0d141b]  mb-1">PP Tiles</h4>
                                <p className="text-xs text-gray-600 ">Interlocking, all-weather, low maintenance outdoor solution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-mt-32 px-4 md:px-10 py-16 md:py-20 border-b border-gray-200  bg-gray-50 " id="pickleball">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#137fec] font-bold tracking-wider text-sm uppercase">Trending Sports</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b] ">Pickleball &amp; Padel Courts</h2>
                            <p className="text-gray-600  text-lg leading-relaxed">
                                Join the fastest growing sports movement. We construct turnkey Pickleball and Padel courts with specialized acoustical treatments to minimize noise and maximize playability.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 mt-2">
                            <div className="flex items-start gap-4">
                                <div className="size-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-[#137fec]">
                                    <span className="material-symbols-outlined">straighten</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#0d141b] ">Precision Dimensions</h5>
                                    <p className="text-sm text-gray-500 ">Laser-leveled surfacing ensuring perfect ball bounce consistency.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="size-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-[#137fec]">
                                    <span className="material-symbols-outlined">volume_off</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#0d141b] ">Acoustic Control</h5>
                                    <p className="text-sm text-gray-500 ">Specialized fencing and surfacing materials to dampen impact noise.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl order-1 lg:order-2">
                        <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="Outdoor Padel court with glass walls and blue turf" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4sXpr19kITakiKYKZX5VrCU6hBumhfhlz9ImrHCk_Z0le7E2n5--nkyhqLH8cDVCKFD0efVZhuK6wnlzIjCjA3xUoUR5_gC72nfJ717ljo-uctt-ytkvBOOrxdOcWxcCQXCMrtcBb1pDJsTdu7BFSLHW8w2grWefL1YHX_W7z-5bA7bTn2qlzi2YDHAhIg3rCIqo451lI1fmJUWSdpo43kz8Q1-KNUVQ5RTd24Cu3ZNY8B8OXDpbWgkESXOZDQ-nWqoLkYpj0ZUCj" />
                    </div>
                </div>
            </section>
            <section className="scroll-mt-32 px-4 md:px-10 py-16 md:py-20" id="runningtrack">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/30 to-transparent z-10"></div>
                        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur rounded-lg px-3 py-1">
                            <span className="material-symbols-outlined text-[#137fec]">verified</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-900">IAAF Certified</span>
                        </div>
                        <div className="w-full h-full bg-red-800 flex items-center justify-center text-white/50 text-xl font-bold">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Red synthetic running track lanes with white numbers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe9IDeluFNHQOv-StZxhs6QevPS9Juk4mW2qy-6jITmFbyXffO4m63BdZFACufOWUv0itn1IerR3Nc8UZLr_2MaF5VOu4hrv2nCGVG1pzNm2CcgBpdDf0HyB_VzJMTPvx_QYb0o1xu0R2qlWV-iHVlgOJ7sPBrNpRo1CzHWkxtPylBRJXETRMY89WWy8a9_Bb0tcwM59S_Doh-KQvbSIDmxE113Hc2m3M_7MWI0eEuXZyBAVJfUSE6sGQ2kElT1KJ2x0BAunxsyNod" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#137fec] font-bold tracking-wider text-sm uppercase">Athletics Solutions</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b] ">Synthetic Running Track</h2>
                            <p className="text-gray-600  text-lg leading-relaxed">
                                Experience professional-grade athletic performance with our IAAF-certified synthetic running tracks. Utilizing premium EPDM rubber granules and advanced polyurethane binders, our tracks offer superior biomechanical response and safety.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex gap-4 items-center p-4 bg-red-50  rounded-xl border border-red-100 ">
                                <div className="size-12 rounded-full bg-white flex items-center justify-center text-red-600 shrink-0">
                                    <span className="material-symbols-outlined">sprint</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0d141b] ">Sandwich System</h4>
                                    <p className="text-sm text-gray-600 ">Impermeable system with EPDM granules for high-level competitions.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center p-4 bg-red-50  rounded-xl border border-red-100 ">
                                <div className="size-12 rounded-full bg-white flex items-center justify-center text-red-600 shrink-0">
                                    <span className="material-symbols-outlined">water_drop</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0d141b] ">Spray Coat System</h4>
                                    <p className="text-sm text-gray-600 ">Permeable structural spray coating, ideal for training and schools.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center p-4 bg-red-50  rounded-xl border border-red-100 ">
                                <div className="size-12 rounded-full bg-white flex items-center justify-center text-red-600 shrink-0">
                                    <span className="material-symbols-outlined">health_and_safety</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0d141b] ">Shock Absorption</h4>
                                    <p className="text-sm text-gray-600 ">Designed to reduce fatigue and impact injuries for athletes.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center p-4 bg-red-50  rounded-xl border border-red-100 ">
                                <div className="size-12 rounded-full bg-white flex items-center justify-center text-red-600 shrink-0">
                                    <span className="material-symbols-outlined">build</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0d141b] ">Low Maintenance</h4>
                                    <p className="text-sm text-gray-600 ">Weather-resistant polyurethane layers for all-season performance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4 p-4 bg-gray-50  rounded-xl border border-gray-100 /20">
                            <div className="w-full mb-1"><span className="text-xs font-bold uppercase tracking-wider text-gray-500">Key Benefits</span></div>
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 ">
                                <span className="material-symbols-outlined text-green-600 text-base">check_circle</span> Spike Resistant
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 ">
                                <span className="material-symbols-outlined text-green-600 text-base">check_circle</span> UV Stable
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 ">
                                <span className="material-symbols-outlined text-green-600 text-base">check_circle</span> Anti-Slip Surface
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 ">
                                <span className="material-symbols-outlined text-green-600 text-base">check_circle</span> Eco-Friendly Materials
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
