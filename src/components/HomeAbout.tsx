export default function HomeAbout() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#137fec]/10 rounded-full blur-2xl"></div>
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-sm font-bold text-[#137fec] uppercase tracking-widest">About Balinsportz</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0d141b] leading-tight">
                                Engineering Excellence in <br /><span className="text-[#137fec]">Sports Infrastructure</span>
                            </h3>
                            <p className="text-[#4c739a] text-lg leading-relaxed">
                                Balinsportz is a premier sports infrastructure company dedicated to building world-className facilities. From initial concept to final handover, we ensure international standards, durability, and performance for schools, colleges, and private institutions.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex gap-4">
                                    <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-[#137fec] shrink-0">
                                        <span className="material-symbols-outlined text-2xl">engineering</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0d141b]">Turnkey Solutions</h4>
                                        <p className="text-sm text-[#4c739a] mt-1">End-to-end execution from design to installation.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-[#137fec] shrink-0">
                                        <span className="material-symbols-outlined text-2xl">trophy</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0d141b]">Global Standards</h4>
                                        <p className="text-sm text-[#4c739a] mt-1">Built to FIFA, BWF, and ITF specifications.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#137fec] rounded-2xl rotate-3 transform transition-transform group-hover:rotate-6 opacity-20"></div>
                        <img alt="Construction workers installing a synthetic running track" className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]" data-alt="Construction workers installing a synthetic running track" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjp3cazS1WkFSQklZI8g-5SCU1xB022sqSq1wzqhAtjuVoHcjUZC2-sRZlfh5SjSNnVEaAs3QOWraFpW3e8L7VKd0RA_wFsb61uwWCfgS6JGwi9DQCZFMZ797bifC_fuBWU0zWo5MYZOA_MQqc7qFnp4H3md69u3wHvDVjdNIQxpzGdK_-tEpOus6bsxiXuwFMXysu2t2sSDDG-DymTe8zxAaHYtVFDQtbA862T93qD2b_pZAWapGiB7LR7WMMq96I6eA9cxjyDyJT" />
                        <div className="absolute bottom-6 left-6 right-6 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-[#fff] uppercase font-bold">Latest Project</p>
                                    <p className="font-bold text-[#fff]">Playspot Multisports Arena, Chennai ,TN</p>
                                </div>
                                <a
                                    href="https://www.google.com/search?client=ms-android-samsung-gj-rev1&hs=keTU&sca_esv=1c9ddcd99aa53bbd&sxsrf=ANbL-n5dxiD7wTI6CffkddtedmKGwr8MyA:1768122380137&kgmid=/g/11xmk7rwxt&q=Playspot+Multisports+Arena&shem=ptotplc,shrtsdl&shndl=30&source=sh/x/loc/act/m1/2&kgs=fd1274fb282ea5a6&utm_source=ptotplc,shrtsdl,sh/x/loc/act/m1/2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="size-10 rounded-full bg-[#137fec] flex items-center justify-center text-white cursor-pointer">
                                        <span className="material-symbols-outlined">arrow_outward</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
