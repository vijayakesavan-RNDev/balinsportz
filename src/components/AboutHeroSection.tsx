export default function AboutHeroSection() {
    return (
        <section className="p-4 md:p-10">
            <div className="relative min-h-[520px] flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-cover bg-center p-6 text-center shadow-2xl" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-K0Kn0m8LfHQ0XfvAqPEwig_zhsxcIKxKg7isv4Jrp13r6m0WaNaUidqGAS_VAmAbz0PvDNEZ-jS9_SMIvZ1JQWx40_9e-BRnTYAYfbowQQzXrMNOafomzPBWQQEd_uORRLHQCiN5s1qJ8m_c04Qr1yaebhhqVtE7v-O8C3xV4g7tX9Mm_WyNeiiM7n7jmpfWn8m_iwoVcu0PGEabb70cKTQHzcIFdn1AFsXFClE5rF0y49l5VLe7cgxqDIJAZTjhjRU1VxM4ZeCj")'}}>
                <div className="max-w-[800px] flex flex-col gap-6">
                    <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                        Creating World-Class Sports Spaces
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-normal max-w-[600px] mx-auto">
                        We deliver high-quality sports facilities designed with precision engineering, global safety standards, and a passion for excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                        <button className="bg-[#137fec] hover:bg-[#137fec]/90 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                            View Our Vision <span className="material-symbols-outlined">arrow_downward</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
