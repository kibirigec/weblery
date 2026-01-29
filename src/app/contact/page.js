"use client";

import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { useState } from "react";

// Input Component
function InputField({ label, type = "text", placeholder, id }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[var(--text-secondary)] text-sm font-medium uppercase tracking-wider">
        {label}
      </label>
      <div className={`relative border-b transition-colors duration-300 ${focused ? "border-[var(--brand-black)]" : "border-[var(--border-subtle)]"}`}>
        <input 
          type={type} 
          id={id}
          placeholder={placeholder}
          className="w-full py-4 bg-transparent text-xl md:text-2xl outline-none text-[var(--text-main)] placeholder-gray-300"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-[var(--text-main)] selection:bg-black selection:text-white">
      <Navigation />

      <main className="w-full global-padding pt-32 md:pt-48 pb-40">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32">
            
            {/* Left: Heading & Info */}
            <div>
                 <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[3rem] md:text-[5rem] leading-[0.95] tracking-tight font-semibold mb-12"
                >
                    Let's start a conversation.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8 text-[var(--text-secondary)]"
                >
                    <p className="text-xl md:text-2xl leading-relaxed max-w-lg">
                        We help ambitious brands define their digital presence. Whether you have a clear vision or just a spark of an idea, we're here to help you build it.
                    </p>

                    <div className="pt-8 space-y-2">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--brand-black)]">Email</h4>
                        <a href="mailto:hello@weblery.com" className="text-xl block hover:text-[var(--brand-blue)] transition-colors">hello@weblery.com</a>
                    </div>
                    
                    <div className="space-y-2">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--brand-black)]">Phone</h4>
                         <a href="tel:+256775910888" className="text-xl block hover:text-[var(--brand-blue)] transition-colors">+256 775 910 888</a>
                    </div>
                </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-4"
            >
                <form className="space-y-12">
                    <InputField id="name" label="What's your name?" placeholder="John Doe" />
                    <InputField id="email" label="Your email address" type="email" placeholder="john@example.com" />
                    <InputField id="company" label="Company / Organization" placeholder="Acme Inc." />
                    
                    <div className="flex flex-col gap-2">
                         <label htmlFor="message" className="text-[var(--text-secondary)] text-sm font-medium uppercase tracking-wider">
                            Tell us about your project
                        </label>
                        <div className="relative border-b border-[var(--border-subtle)] focus-within:border-[var(--brand-black)] transition-colors duration-300">
                             <textarea 
                                id="message" 
                                rows={4} 
                                className="w-full py-4 bg-transparent text-xl md:text-2xl outline-none text-[var(--text-main)] placeholder-gray-300 resize-none"
                                placeholder="I need a new website that..."
                            />
                        </div>
                    </div>

                    <div className="pt-8">
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[var(--brand-black)] text-white px-10 py-5 rounded-full text-lg font-medium w-full md:w-auto"
                        >
                            Send Message
                        </motion.button>
                    </div>
                </form>
            </motion.div>

        </div>
      </main>
    </div>
  );
}
