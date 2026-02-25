'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    question: "What separates Weblery from other branding and web design agencies?",
    answer: "We don't just design; we build digital ecosystems. Our approach blends aesthetic perfection with technical robusticity, ensuring your brand not only looks good but works flawlessly at scale."
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. We love partnering with ambitious founders. We have specific 'Growth' packages tailored for startups that need to move fast and make a big impact."
  },
  {
    question: "How long does a typical project take?",
    answer: "A standard branding and web project usually ranges from 1 to 3 weeks, depending on complexity. We work in agile sprints to ensure constant progress and transparency."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both project-based pricing and monthly retainers. Our services however depend on how the complexity of your project."
  }
];

export default function ClayFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="home-faq" className="bg-[#020f24] py-32 global-padding">
      <div className="container mx-auto max-w-[90%] md:max-w-[70%]">
        <h2 className="faq-title text-display-m md:text-display font-semibold mb-20 text-[var(--text-light)]">FAQ</h2>
        
        <div className="faq-accordion flex flex-col">
          {FAQS.map((faq, index) => (
            <div 
                key={index} 
                className="faq-item border-b border-[#333] py-8 cursor-pointer"
                onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center group">
                <h3 className="faq-question text-subtitle-m md:text-subtitle font-light text-[var(--text-light)] group-hover:text-white transition-colors pr-8">
                  {faq.question}
                </h3>
                <span className={`faq-icon text-2xl text-[var(--text-light)] transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                    +
                </span>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="faq-answer pt-6 text-body-m md:text-body text-[var(--text-light-secondary)] leading-relaxed max-w-2xl">
                        {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
