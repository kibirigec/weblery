"use client";

import Navigation from "../components/Navigation";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <div className="bg-white min-h-screen text-[var(--text-main)] selection:bg-black selection:text-white">
            <Navigation />

            <main className="w-full pt-32 md:pt-48 pb-24 md:pb-40 global-padding">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#020f24] mb-8">
                            Privacy Policy
                        </h1>
                        <p className="text-body-m text-neutral-500 mb-12">
                            Effective Date: {new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}
                        </p>

                        <div className="space-y-8 text-neutral-800 leading-relaxed text-[17px]">
                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">1. Introduction</h2>
                                <p>
                                    Welcome to Weblery. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services as a digital agency.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">2. Information We Collect</h2>
                                <p className="mb-2">We may collect non-personal and personal information, including but not limited to:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Personal Data:</strong> Name, email address, phone number, and any other details you choose to provide when inquiring about our services via contact forms or direct communication.</li>
                                    <li><strong>Usage Data:</strong> Information automatically collected about your interaction with our website, such as IP addresses, browser types, device information, and site navigation patterns.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">3. How We Use Your Information</h2>
                                <p className="mb-2">We process your data for the following purposes:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>To provide, maintain, and execute our design, development, and marketing services.</li>
                                    <li>To communicate with you regarding your inquiries, proposals, or ongoing projects.</li>
                                    <li>To understand and analyze how visitors interact with the website to optimize user experience and performance.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">4. Data Protection & Security</h2>
                                <p>
                                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no data transmission over the Internet can be guaranteed as entirely secure.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">5. Third-Party Services</h2>
                                <p>
                                    We may share your data with trusted third-party service providers who assist us in operating our website, managing analytics, and conducting our business. We ensure these partners adhere to strict confidentiality agreements and modern privacy standards.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">6. Your Rights</h2>
                                <p>
                                    Depending on your jurisdiction, you may have the right to request access to, correction of, or deletion of your personal data held by Weblery. If you wish to exercise any of these rights, please reach out to us using the contact information provided below.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">7. Updates to This Policy</h2>
                                <p>
                                    We reserve the right to modify this Privacy Policy at any time. The updated version will be indicated by a revised "Effective Date" at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">8. Contact Us</h2>
                                <p>
                                    If you have any questions or concerns about this Privacy Policy or our data processing practices, please contact us at:
                                </p>
                                <div className="mt-4 p-6 bg-neutral-100 rounded-lg">
                                    <p className="font-semibold text-[#020f24] mb-2">Weblery</p>
                                    <p>Kyanja, Kampala — Uganda</p>
                                    <p className="mt-2">Email: <a href="mailto:hello@weblery.com" className="text-blue-600 hover:text-blue-800 transition-colors">hello@weblery.com</a></p>
                                    <p>Phone: <a href="tel:+256746642075" className="text-blue-600 hover:text-blue-800 transition-colors">+256 746 642 075</a></p>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
