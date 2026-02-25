"use client";

import Navigation from "../components/Navigation";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
                            Terms of Service
                        </h1>
                        <p className="text-body-m text-neutral-500 mb-12">
                            Effective Date: {new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}
                        </p>

                        <div className="space-y-8 text-neutral-800 leading-relaxed text-[17px]">
                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">1. Acceptance of Terms</h2>
                                <p>
                                    By accessing or using the website and services provided by Weblery (the "Company," "we," "us," or "our"), you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services or website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">2. Services Provided</h2>
                                <p>
                                    Weblery is a digital agency specializing in website design, web development, 3D modeling, AI integration, and social media marketing. The specific scope, timelines, deliverables, and fees for any project will be outlined in a separate, written proposal or statement of work signed by both parties.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">3. Client Responsibilities</h2>
                                <p>
                                    To ensure the timely and successful delivery of our services, you agree to:
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-2">
                                    <li>Provide necessary assets, logins, and information promptly.</li>
                                    <li>Review deliverables and provide feedback within the agreed-upon timeframe.</li>
                                    <li>Ensure that any materials (text, images, branding) you provide do not infringe on the intellectual property rights of third parties.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">4. Intellectual Property</h2>
                                <p>
                                    Upon final payment, the client owns the copyright to the final deliverable (e.g., website, custom application, or 3D asset). However, Weblery reserves the right to display the completed work in our portfolio, website, and marketing materials unless a specific Non-Disclosure Agreement (NDA) is signed prior to the commencement of the project.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">5. Payment Terms</h2>
                                <p>
                                    Payments for services must be made in accordance with the schedule specified in the project proposal. A non-refundable deposit may be required before work begins. We reserve the right to suspend or terminate services if invoices remain unpaid past the due date.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">6. Limitation of Liability</h2>
                                <p>
                                    To the fullest extent permitted by law, Weblery shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising out of or related to our services or your use of our website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">7. Termination</h2>
                                <p>
                                    Either party may terminate a service agreement with written notice if the other party breaches a material term of the agreement. Upon termination, the client is responsible for paying for all work completed up to the date of termination.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">8. Governing Law</h2>
                                <p>
                                    These Terms of Service are governed by and construed in accordance with the laws of Uganda. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts located in Kampala, Uganda.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-[#020f24]">9. Contact Details</h2>
                                <p>
                                    For any questions regarding these Terms of Service, please contact us at:
                                </p>
                                <div className="mt-4 p-6 bg-neutral-100 rounded-none">
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
