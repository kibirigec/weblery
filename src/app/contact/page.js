"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AnimatedLogo from "../components/AnimatedLogo";
import { Menu, X } from "lucide-react";

function ContactFormContent() {
    const searchParams = useSearchParams();
    const interest = searchParams.get("interest");

    const serviceMessages = {
        "Website Design": "Hi! I'm interested in a new website design. I'd love to discuss my project with your team.",
        "Social Media Marketing": "Hi! I'd like to elevate my brand's social media presence. Can we discuss your strategies?",
        "Automation Systems": "Hi! I want to automate my workflows and integrate AI into my business. Could we chat?",
        "3D Modelling": "Hi! I need high-quality 3D modelling services. Could we chat?."
    };

    // Dropdown State
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const servicesList = [
        "Website Design",
        "Social Media Marketing",
        "Automation Systems",
        "3D Modelling"
    ];

    // Form State
    const [formData, setFormData] = useState({
        firstName: "",
        phone: "",
        service: "Website Design",
        email: "",
        newsletter: false,
        message: serviceMessages["Website Design"]
    });

    const isFormValid = formData.firstName.trim() !== "" && formData.phone.trim() !== ""; // interest param
    useEffect(() => {
        if (interest) {
            let srv = "Website Design";
            // Map exact values from services pages
            if (interest === "starter" || interest === "professional" || interest === "website") srv = "Website Design";
            if (interest === "custom") srv = "Automation Systems";
            if (interest === "social-media") srv = "Social Media Marketing";
            if (interest === "automation") srv = "Automation Systems"; // Close match
            if (interest === "3d") srv = "3D Modelling";

            setFormData(prev => ({
                ...prev,
                service: srv,
                message: prev.message === serviceMessages[prev.service] || prev.message.trim() === "" ? serviceMessages[srv] : prev.message
            }));
        }
    }, [interest]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        // Generic submit logic here (e.g., API call)
        console.log("Form Submitted", formData);
        alert("Thank you for reaching out! We will get back to you shortly.");
    };

    const handleWhatsApp = (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        const text = encodeURIComponent(
            `Name: ${formData.firstName}\nPhone: ${formData.phone}\nService: ${formData.service}\nEmail: ${formData.email}\n\nProject Description:\n${formData.message}`
        );
        window.open(`https://wa.me/256746642075?text=${text}`, "_blank");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-0 md:gap-4 mt-0 md:mt-0">
            {/* Row 1: First / Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-12">
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-black">Name</label>
                    <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-sm sm:text-base placeholder:text-gray-400 font-medium text-black"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-black">Phone Number</label>
                    <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0772456789"
                        className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-sm sm:text-base placeholder:text-gray-400 font-medium text-black"
                    />
                </div>
            </div>

            {/* Row 2: Email / Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-12">
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-black">Email (Optional)</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-sm sm:text-base placeholder:text-gray-400 font-medium text-black"
                    />
                </div>

                {/* Custom Service Dropdown */}
                <div className="flex flex-col gap-2 relative z-20">
                    <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-black">Service</label>
                    <div className="relative">
                        <div
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`w-full bg-transparent border rounded-md px-4 py-3 outline-none cursor-pointer flex justify-between items-center transition-all text-sm sm:text-base font-medium text-black ${isDropdownOpen ? 'border-blue-600 1 ring-blue-600' : 'border-gray-400 hover:border-black'}`}
                        >
                            <span>{formData.service}</span>
                            <motion.svg
                                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                className="w-4 h-4 text-gray-500"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </motion.svg>
                        </div>

                        {isDropdownOpen && (
                            <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                        )}

                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : -10 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 shadow-xl z-20 overflow-hidden ${isDropdownOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                        >
                            {servicesList.map(item => (
                                <div
                                    key={item}
                                    onClick={() => {
                                        setFormData(prev => ({
                                            ...prev,
                                            service: item,
                                            message: prev.message === serviceMessages[prev.service] || prev.message.trim() === "" ? serviceMessages[item] : prev.message
                                        }));
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`px-4 py-3 text-sm cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${formData.service === item ? 'font-bold bg-gray-50 text-black' : 'text-gray-600'}`}
                                >
                                    {item}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
                <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-black">Message (Optional)</label>
                <textarea
                    rows={1}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your message"
                    className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-800 transition-all resize-none h-[120px] text-sm sm:text-base placeholder:text-gray-400 font-medium text-black"
                />
            </div>

            {/* Newsletter (Visually subtle) */}
            {/* <div className="flex items-center gap-3 pt-2">
                <div className="relative flex items-center justify-center">
                    <input
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                        className="peer appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-black checked:border-black cursor-pointer transition-colors"
                    />
                </div>
                <label className="text-xs text-gray-600 font-medium cursor-pointer" onClick={() => setFormData({ ...formData, newsletter: !formData.newsletter })}>
                    Sign up for news and updates
                </label>
            </div> */}

            {/* Submit Buttons aligned like reference */}
            <div className="pt-8 flex flex-col items-center gap-4">



                <motion.button
                    type="button"
                    onClick={(e) => isFormValid && handleWhatsApp(e)}
                    whileTap={isFormValid ? { scale: 0.95 } : {}}
                    disabled={!isFormValid}
                    className={`w-full flex items-center justify-center text-[#25d366] md:text-black gap-2 md:bg-transparent bg-[#000] border border-black! md:border-[#000] py-3.5 rounded-md text-sm sm:text-base font-medium tracking-wide transition-all ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#000] hover:text-[#25d366] '}`}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.997.551 2.051.841 3.23.841 3.183 0 5.768-2.586 5.768-5.766.001-3.182-2.585-5.768-5.766-5.766zm-7.971 5.766c0-4.407 3.584-7.99 7.994-7.99 4.41 0 7.996 3.585 7.996 7.99 0 4.406-3.584 7.99-7.996 7.99-1.928 0-3.69-.645-5.113-1.727l-4.941 1.296 1.319-4.814c-1.258-1.577-2.019-3.566-2.019-5.707zm3.848 11.233c.967.876 2.379 1.488 4.123 1.488 3.016 0 5.46-2.444 5.46-5.459 0-3.015-2.444-5.46-5.46-5.46-3.016 0-5.46 2.445-5.46 5.46 0 1.246.402 2.399 1.096 3.326l-.423 1.545 1.55-.406zM13.684 4.091c4.469 0 8.1 3.633 8.1 8.102 0 4.47-3.631 8.102-8.1 8.102-1.959 0-3.768-.696-5.203-1.859l-5.898 1.547 1.57-5.75C3.336 12.915 2.766 11.22 2.766 9.394c0-4.469 3.631-8.102 8.1-8.102" fillRule="evenodd" clipRule="evenodd" fill="transparent" />
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.212 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send on WhatsApp <span className="text-xl font-light leading-none">→</span>
                </motion.button>
                <span className="text-xs text-[#00000070] font-bold uppercase tracking-widest">--or--</span>

                <motion.button
                    whileTap={isFormValid ? { scale: 0.95 } : {}}
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-md text-sm sm:text-base font-medium tracking-wide transition-all ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
                >
                    Direct Submit <span className="text-xl font-light leading-none">→</span>
                </motion.button>
            </div>
        </form>
    );
}

export default function ContactPage() {

    return (
        <div className="bg-[#EAEAEA] h-screen w-full text-black flex flex-col md:flex-row font-sans overflow-hidden">
            {/* Global Navigation (Mobile Only) */}
            <div className="block md:hidden">
                <Navigation />
            </div>

            {/* LEFT SIDE: Dark Background */}
            <div className="w-full min-h-[35vh] md:w-1/2 md:h-full bg-[#121212] flex flex-col justify-center items-center text-center p-8 md:p-16 lg:px-24 relative overflow-hidden shrink-0">

                {/* DESKTOP: Decorative Dashed Circles */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none items-center justify-center opacity-60 select-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                        className="w-[600px] h-[600px] border-2 border-dotted border-[#1E4ED8] rounded-full shrink-0 flex items-center justify-center absolute -translate-x-[50%]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                        className="w-[600px] h-[600px] border-2 border-dotted border-[#1E4ED8] rounded-full shrink-0 flex items-center justify-center absolute z-10"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                        className="w-[600px] h-[600px] border-2 border-dotted border-[#1E4ED8] rounded-full shrink-0 flex items-center justify-center absolute translate-x-[50%]"
                    />
                </div>

                {/* MOBILE: Random Dots Spread */}
                <div className="flex md:hidden absolute inset-0 pointer-events-none opacity-40 select-none overflow-hidden pb-4">
                    {/* Fixed pseudo-random positions using percentages for responsive bounds */}
                    {[
                        { top: '8%', left: '12%', delay: 0.1 }, { top: '15%', left: '85%', delay: 0.7 },
                        { top: '22%', left: '35%', delay: 0.5 }, { top: '30%', left: '70%', delay: 0.4 },
                        { top: '38%', left: '15%', delay: 0.6 }, { top: '45%', left: '90%', delay: 0.5 },
                        { top: '52%', left: '45%', delay: 0.8 }, { top: '60%', left: '8%', delay: 0.2 },
                        { top: '68%', left: '80%', delay: 0.7 }, { top: '75%', left: '25%', delay: 0.4 },
                        { top: '82%', left: '60%', delay: 0.5 }, { top: '90%', left: '92%', delay: 0.3 },
                        { top: '12%', left: '48%', delay: 0.9 }, { top: '28%', left: '18%', delay: 0.5 },
                        { top: '42%', left: '62%', delay: 0.7 }, { top: '58%', left: '30%', delay: 0.3 },
                        { top: '72%', left: '95%', delay: 0.6 }, { top: '88%', left: '10%', delay: 0.9 },
                        { top: '5%', left: '65%', delay: 0.3 }, { top: '20%', left: '5%', delay: 0.6 },
                        { top: '35%', left: '50%', delay: 0.9 }, { top: '50%', left: '85%', delay: 0.5 },
                        { top: '65%', left: '15%', delay: 0.7 }, { top: '85%', left: '42%', delay: 0.2 },
                    ].map((dot, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 1.5 + (dot.delay * 2), // random durations between 1.5s - 3.3s
                                delay: dot.delay,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute w-1 h-1 rounded-full bg-[#1E4ED8]"
                            style={{ top: dot.top, left: dot.left }}
                        />
                    ))}
                </div>

                {/* Centered Content Wrapper */}
                <div className="z-20 flex flex-col items-center justify-center w-full h-full relative">

                    {/* Logo SVG (Mobile & Desktop) */}
                    <div className="mb-4 md:mb-12">
                        <a href="/" className="block opacity-100 transition-opacity hover:opacity-80">
                            <AnimatedLogo className="w-32 md:w-56 h-auto inline-block relative z-50 text-white opacity-100" />
                        </a>
                    </div>

                    {/* We'd love to hear from you */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="text-white text-3xl md:text-5xl lg:text-[5rem] leading-[1.1] font-medium tracking-tight font-serif"
                        >
                            We'd love to <br className="hidden md:block" /> hear from you
                        </motion.h1>
                    </div>

                    {/* Mobile Contact Info (Hidden on Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="flex md:hidden flex-row w-full justify-between px-8 absolute bottom-0 left-0 text-sm font-medium tracking-wide z-30"
                    >
                        <div className="flex flex-col text-left">
                            <p className="text-white mb-1 uppercase tracking-widest text-[10px]">Call : </p>
                            <a href="tel:0746642075" className="text-[#1E4ED8] hover:text-blue-500 transition-colors">
                                <span className="border-b border-dotted border-[#1E4ED8] text-[16px]">0746642075</span>
                            </a>
                        </div>
                        <div className="flex flex-col text-right">
                            <p className="text-white mb-1 uppercase tracking-widest text-[10px]">Email : </p>
                            <a href="mailto:hello@weblery.com" className="text-[#1E4ED8] hover:text-blue-500 transition-colors">
                                <span className="border-b border-dotted border-[#1E4ED8] text-[16px]">hello@weblery.com</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Config Text (Desktop Only) */}
                <div className="z-10 hidden md:flex flex-row gap-32 text-sm font-medium tracking-wide text-gray-400 mt-auto pt-12 w-full justify-center text-start ">
                    <div className="flex flex-col text-left">
                        <p className="text-white mb-1 uppercase tracking-widest text-[10px]">Call : </p>
                        <a href="tel:0746642075" className="text-[#1E4ED8] hover:text-blue-500 transition-colors">
                            <span className="border-b border-dotted border-[#1E4ED8] text-[20px]">0746642075</span>
                        </a>
                    </div>
                    <div className="flex flex-col text-left">
                        <p className="text-white mb-1 uppercase tracking-widest text-[10px]">Email : </p>
                        <a href="mailto:hello@weblery.com" className="text-[#1E4ED8] hover:text-blue-500 transition-colors">
                            <span className="border-b border-dotted border-[#1E4ED8] text-[20px]">hello@weblery.com</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Light Form Background */}
            <div className="w-full md:w-1/2 bg-[#EAEAEA] flex flex-col justify-between p-8 pt-6 md:p-16 lg:px-24 lg:py-10 h-full overflow-y-auto hidden-scrollbar">

                {/* Local Header (Desktop Only) */}
                <header className="hidden md:flex justify-center items-center w-full mb-8 relative z-50">
                    <div className="flex gap-12 font-medium text-sm">
                        <a href="/" className="hover:text-gray-500 transition-colors">Home</a>
                        <a href="/work" className="hover:text-gray-500 transition-colors">Work</a>
                        <a href="/about" className="hover:text-gray-500 transition-colors">About</a>
                    </div>
                </header>

                <div className="w-full max-w-xl mx-auto flex-1 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 md:mb-10 font-serif hidden md:block text-center">
                        Contact us
                    </h2>

                    <Suspense fallback={<div className="animate-pulse h-96 w-full bg-gray-200 rounded-sm"></div>}>
                        <ContactFormContent />
                    </Suspense>
                </div>

                {/* Bottom Contacts Row */}
                <div className="mt-12 w-full flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-semibold tracking-wide text-gray-600">
                    <div className="flex gap-6 items-center flex-wrap justify-center">
                        {/* <a href="mailto:hello@weblery.com" className="hover:text-black transition-colors underline underline-offset-4">hello@weblery.com</a> */}
                        {/* Instagram Icon */}
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        {/* TikTok Icon */}
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" aria-label="TikTok">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
