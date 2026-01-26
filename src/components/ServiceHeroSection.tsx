export default function ServiceHeroSection() {

    return (
        <section
            className="w-full bg-cover bg-center bg-no-repeat relative"
            aria-label="High quality aerial view of a multi-sport complex with tennis courts and football field"
            style={{
                backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.6) 100%
          ),
          url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNmbX2WZ3gxeYSxF7Rjz3I17L7nqBEnR9HZyD7wwraLRFc6eETpH-pCzhpzlMB2pRc3l8z-9frHVlixZnc8S8p_9VvJQ4-DSd7RbC77FnDcdRBy3ryoX9jSkTu14MuXYzVpxhfli4o3QOJN6nmzE3BE4aTnNk45CZ0alcxE3wqtqBT2mQYnmZFKzwttqkEq9QS_KG96u4niBCS13g-aFtJjvyYkefEm8KO-4rqS5KiuMrDPUwgUJtMmPEUjmhYqCTfKq1hsPa4PvHH")
        `,
            }}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-24 md:py-32 flex flex-col justify-end min-h-[500px]">
                <div className="flex flex-col gap-4 text-left max-w-[720px]">
                    <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                        Engineering Champions
                    </h1>

                    <p className="text-gray-200 text-lg md:text-xl font-normal leading-normal max-w-[600px]">
                        Federation-approved surfaces engineered for safety and performance.
                        The trusted choice for schools, academies, and professional clubs.
                    </p>
                </div>
            </div>
        </section>
    );
};
