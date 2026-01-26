import { useState } from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        project: "",
        message: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.phone ||
            !formData.email ||
            !formData.project ||
            !formData.message
        ) {
            setError("All fields are required");
            return;
        }

        setError("");
        setSuccess("");

        emailjs
            .send(
                "service_aa2xmwg",
                "template_szko79m",
                {
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    project: formData.project,
                    message: formData.message,
                    from:"Balinsportz"
                },
                "vvnuJTchn7M77W_h_"
            )
            .then(() => {
                setSuccess("Message sent successfully. We will contact you shortly.");
                setTimeout(() => {
                    setSuccess("");
                }, 10000);
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    project: "",
                    message: "",
                });
            })
            .catch(() => {
                setError("Failed to send message. Please try again later.");
            });
    };

    return (
        <main className="flex-grow flex flex-col items-center w-full">
            <div className="w-full bg-white  border-b border-slate-200 ">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12 md:py-16">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                        <div className="max-w-2xl">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900  mb-4">
                                Build Your Sporting Vision
                            </h1>
                            <p className="text-lg text-slate-500  font-normal leading-relaxed">
                                Whether you need a new turf, court maintenance, or a complete sports infrastructure overhaul, we are here to help. Reach out to our team in Bengaluru.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1280px] px-4 md:px-10 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="bg-white  rounded-xl shadow-sm border border-slate-200  overflow-hidden">
                            <div className="p-6 border-b border-slate-100 ">
                                <h3 className="text-xl font-bold text-slate-900  flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#137fec]">contact_support</span>
                                    Contact Information
                                </h3>
                            </div>
                            <div className="p-6 flex flex-col gap-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50  flex items-center justify-center shrink-0 text-[#137fec]">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900  mb-1">Our Office</p>
                                        <p className="text-sm text-slate-600  leading-relaxed">
                                            5/109,<br />
                                            Iyyappa Nagar Srinivasapuram,<br />
                                            Paraniputhur,Iyyappanthangal, Tamil Nadu 600122
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50  flex items-center justify-center shrink-0 text-[#137fec]">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900  mb-1">Phone</p>
                                            <a className="text-sm text-slate-600  hover:text-[#137fec] transition-colors" href="tel:9710660603">9710660603</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50  flex items-center justify-center shrink-0 text-[#137fec]">
                                            <span className="material-symbols-outlined">language</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900  mb-1">Website</p>
                                            <a className="text-sm text-slate-600  hover:text-[#137fec] transition-colors" href="https://balinsportz.in" target="_blank">balinsportz.in</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50  flex items-center justify-center shrink-0 text-[#137fec]">
                                        <span className="material-symbols-outlined">schedule</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900  mb-1">Business Hours</p>
                                        <p className="text-sm text-slate-600 ">Open – Closes at 5:30 PM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-6 border-t border-slate-100">
                                <button
                                    onClick={() => {
                                        const phoneNumber = "919710660603";
                                        const message = "Hi 👋 I would like to know more about your services.";
                                        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                                            message
                                        )}`;
                                        window.open(url, "_blank");
                                    }}
                                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg h-12 px-6 font-bold shadow-sm transition-all transform active:scale-[0.98]"
                                >
                                    <span className="material-symbols-outlined">chat</span>
                                    <span>Chat on WhatsApp</span>
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-[300px] relative">
                            <iframe
                                className="w-full h-full border-0"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps?q=13.0292432,80.1278661&z=18&output=embed"
                            />
                            <div className="sr-only">
                                Map showing location of BALINSPORTZ PVT LTD at Iyyappanthangal, Tamil Nadu
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 h-full">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                                    Send us a message
                                </h2>
                                <p className="text-slate-500 text-sm">
                                    Fill out the form below with your project details and we will get back to you shortly.
                                </p>
                            </div>

                            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700" htmlFor="name">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-slate-300 bg-white text-slate-900 h-12 px-4 shadow-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700" htmlFor="phone">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="+91 638025 73XXX"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-slate-300 bg-white text-slate-900 h-12 px-4 shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-slate-300 bg-white text-slate-900 h-12 px-4 shadow-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700" htmlFor="project">
                                            Project Type
                                        </label>
                                        <select
                                            id="project"
                                            value={formData.project}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-slate-300 bg-white text-slate-900 h-12 px-4 shadow-sm"
                                        >
                                            <option value="" disabled>
                                                Select a project type
                                            </option>
                                            <option value="Turf Construction">Turf Construction</option>
                                            <option value="Court Construction">Court Construction</option>
                                            <option value="Sports Lighting">Sports Lighting</option>
                                            <option value="Civil Work">Civil Work</option>
                                            <option value="Maintenance">Maintenance</option>
                                            <option value="Other Inquiry">Other Inquiry</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-slate-700" htmlFor="message">
                                        Message / Project Details
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        placeholder="Tell us about your requirements..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border-slate-300 bg-white text-slate-900 p-4 shadow-sm resize-y"
                                    />
                                </div>

                                {error && (
                                    <p className="text-red-600 text-sm font-semibold">
                                        {error}
                                    </p>
                                )}
                                {success && (
                                    <p className="text-green-600 text-sm font-semibold">
                                        {success}
                                    </p>
                                )}


                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto min-w-[200px] bg-[#137fec] hover:bg-blue-600 text-white font-bold h-12 px-8 rounded-lg shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
                                    >
                                        <span>Send Message</span>
                                        <span className="material-symbols-outlined text-sm">
                                            send
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
