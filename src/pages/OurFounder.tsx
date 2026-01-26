import vadiveluImg from "../assets/VadiVelu.jpg";

export default function OurFounder() {
    return (
        <main className="flex-1 flex flex-col items-center py-10 px-4 md:px-10 lg:px-40 w-full">
            <div className="flex flex-col max-w-[1024px] w-full">
                <div className="mb-6">
                    <p className="text-[#137fec] text-sm font-semibold tracking-wider uppercase mb-1">Our Team</p>
                    <h2 className="text-[#0d141b] text-3xl font-bold leading-tight tracking-[-0.015em]">Leadership Profile</h2>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-[#e7edf3] overflow-hidden mb-8">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 min-h-[300px] md:min-h-auto relative bg-gray-200">
                            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" data-alt="Professional portrait of Vadivel Elumalai in business attire with a subtle sports facility background" style={{ backgroundImage: `url(${vadiveluImg})` }}>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"></div>
                        </div>
                        <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h1 className="text-[#0d141b]  text-3xl md:text-4xl font-bold leading-tight mb-2">Vadivel Elumalai</h1>
                                    <p className="text-[#137fec] text-lg font-medium leading-normal mb-1">Founder &amp; CEO – First Goal FC Club</p>
                                    <p className="text-[#4c739a]  text-base font-normal">Sports Entrepreneur | Infrastructure Specialist</p>
                                </div>
                                <div className="h-px w-full bg-[#e7edf3]  my-2"></div>
                                <div className="flex flex-wrap gap-4 text-sm text-[#4c739a] ">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#137fec] text-[20px]">school</span>
                                        <span>B.E Civil Engineering</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#137fec] text-[20px]">school</span>
                                        <span>MBA – Sports Management</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#137fec] text-[20px]">location_on</span>
                                        <span>Tamil Nadu, India</span>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                    <a
                                        href="https://www.linkedin.com/in/vadivel-elumalai-ab12b3144/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 rounded-lg h-11 px-6 bg-[#e7edf3] hover:bg-[#dbe4eb] text-[#0d141b] font-bold transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">share</span>
                                        Connect on LinkedIn
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="flex flex-col gap-1 rounded-xl p-6 bg-white  border border-[#e7edf3]  shadow-sm">
                        <div className="size-10 rounded-full bg-[#137fec]/10 flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined text-[#137fec]">history</span>
                        </div>
                        <p className="text-[#4c739a]  text-sm font-medium uppercase tracking-wide">Experience</p>
                        <p className="text-[#0d141b]  text-3xl font-bold">6+ Years</p>
                        <p className="text-xs text-gray-500 ">In Sports Infrastructure</p>
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl p-6 bg-white  border border-[#e7edf3]  shadow-sm">
                        <div className="size-10 rounded-full bg-[#137fec]/10 flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined text-[#137fec]">stadium</span>
                        </div>
                        <p className="text-[#4c739a]  text-sm font-medium uppercase tracking-wide">Projects</p>
                        <p className="text-[#0d141b]  text-3xl font-bold">50+</p>
                        <p className="text-xs text-gray-500 ">Executed across the region</p>
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl p-6 bg-white  border border-[#e7edf3]  shadow-sm">
                        <div className="size-10 rounded-full bg-[#137fec]/10 flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined text-[#137fec]">verified</span>
                        </div>
                        <p className="text-[#4c739a]  text-sm font-medium uppercase tracking-wide">Specialties</p>
                        <p className="text-[#0d141b]  text-xl font-bold leading-tight mt-1">Turfs, Tracks &amp; Courts</p>
                        <p className="text-xs text-gray-500 ">Turnkey Solutions</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div className="bg-white  p-8 rounded-xl border border-[#e7edf3]  shadow-sm">
                            <h3 className="text-xl font-bold text-[#0d141b]  mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#137fec]">person</span>
                                Professional Biography
                            </h3>
                            <div className="space-y-4 text-[#4c739a]  leading-relaxed text-base">
                                <p>
                                    Vadivel Elumalai is a visionary Sports Entrepreneur combining technical engineering precision with sports management acumen. With a strong educational foundation in Civil Engineering and an MBA in Sports Management, he bridges the gap between construction quality and athletic performance needs.
                                </p>
                                <p>
                                    His professional journey includes significant tenures with industry leaders such as <strong className="text-[#0d141b] ">Ebaco</strong> and <strong className="text-[#0d141b] ">Gallant Sports Infrastructure</strong>, where he honed his expertise in delivering world-className sports facilities. Over the past 6+ years, he has successfully managed and executed over 50 projects, ranging from synthetic turfs and athletic tracks to multi-purpose acrylic courts.
                                </p>
                                <p>
                                    Currently, as the founder of <strong className="text-[#0d141b] ">Balinsportz Sports Pvt Ltd</strong> and First Goal FC Club, Vadivel is driving innovation in sports infrastructure across Tamil Nadu. He specializes in providing end-to-end consultation for schools, colleges, real estate developers, and government institutions, ensuring every project meets international standards for safety and durability.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white  p-8 rounded-xl border border-[#e7edf3]  shadow-sm">
                            <h3 className="text-xl font-bold text-[#0d141b]  mb-6">Core Competencies</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">Sports Infrastructure Consultation</span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">Synthetic Turf Installation</span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">Athletic Tracks</span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">Project Management</span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">Civil Engineering</span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">Vendor Management</span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">Acrylic Courts</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="bg-gradient-to-br from-[#1a2632] to-[#0d141b] p-6 rounded-xl shadow-lg text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#137fec]/20 rounded-full blur-2xl group-hover:bg-[#137fec]/30 transition-all"></div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Current Venture</h3>
                            <h4 className="text-2xl font-bold mb-1">Balinsportz</h4>
                            <p className="text-sm text-gray-300 mb-4">Sports Pvt Ltd</p>
                            <div className="h-px bg-white/10 w-full mb-4"></div>
                            <p className="text-sm text-gray-300 mb-6">Executing premier sports projects and facility consultation across Tamil Nadu.</p>
                        </div>
                        <div className="bg-white  p-6 rounded-xl border border-[#e7edf3]  shadow-sm">
                            <h3 className="text-lg font-bold text-[#0d141b]  mb-4">Career Journey</h3>
                            <div className="relative pl-4 border-l-2 border-[#e7edf3] space-y-6">
                                <div className="relative">
                                    <div className="absolute -left-[21px] top-1.5 size-3 rounded-full bg-[#137fec] border-2 border-white "></div>
                                    <p className="text-xs text-[#137fec] font-bold uppercase mb-0.5">Present</p>
                                    <p className="text-sm font-bold text-[#0d141b] ">Founder &amp; CEO</p>
                                    <p className="text-sm text-[#4c739a] ">Balinsportz Sports Pvt Ltd</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[21px] top-1.5 size-3 rounded-full bg-gray-300  border-2 border-white "></div>
                                    <p className="text-xs text-gray-500 font-medium uppercase mb-0.5">Past</p>
                                    <p className="text-sm font-bold text-[#0d141b] ">Project Lead</p>
                                    <p className="text-sm text-[#4c739a] ">Gallant Sports Infrastructure</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[21px] top-1.5 size-3 rounded-full bg-gray-300  border-2 border-white "></div>
                                    <p className="text-xs text-gray-500 font-medium uppercase mb-0.5">Past</p>
                                    <p className="text-sm font-bold text-[#0d141b] ">Civil Engineer</p>
                                    <p className="text-sm text-[#4c739a] ">Ebaco</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white  p-6 rounded-xl border border-[#e7edf3]  shadow-sm">
                            <h3 className="text-lg font-bold text-[#0d141b]  mb-4">Education</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 min-w-[32px] size-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-600 ">
                                        <span className="material-symbols-outlined text-[18px]">engineering</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#0d141b] ">B.E Civil Engineering</p>
                                        <p className="text-xs text-[#4c739a] ">Technical Foundation</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 min-w-[32px] size-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-600 ">
                                        <span className="material-symbols-outlined text-[18px]">business_center</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#0d141b] ">MBA Sports Management</p>
                                        <p className="text-xs text-[#4c739a] ">Business Strategy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
