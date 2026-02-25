"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { SERVICES, PACKAGES } from "../../../../config/services";

export default function ConfirmationPage() {
  const [summary, setSummary] = useState(null);
  const [estimatedTimeline, setEstimatedTimeline] = useState("");
  const [nextSteps, setNextSteps] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedProgress = localStorage.getItem("onboardingProgress");
      if (savedProgress) {
        try {
          const parsedProgress = JSON.parse(savedProgress);
          setSummary(parsedProgress);

          // Estimated timeline
          if (parsedProgress.selectedPackage) {
            setEstimatedTimeline(PACKAGES[parsedProgress.selectedPackage].timeline);
          } else {
            const count = parsedProgress.selectedServices.length;
            setEstimatedTimeline(
              count <= 2 ? "4 days" : count <= 4 ? "6 days" : "10 days"
            );
          }

          // Next steps
          setNextSteps([
            { title: "Project Review", description: "We’ll review your requirements",  },
            { title: "Consultation", description: "Call to discuss your project",  },
            { title: "Proposal", description: "Detailed proposal with milestones", },
            { title: "Kickoff", description: "Begin development after approval" }
          ]);
        } catch (e) {
          console.error("Error parsing progress:", e);
        }
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full bg-white p-6 md:p-8 rounded-xl shadow-md"
      >
        {/* Success icon */}
        <div className="flex justify-center mb-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center"
          >
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center mb-2">
          Project Request Received!
        </h1>
        <p className="text-gray-600 text-center text-sm md:text-base mb-6">
          Thank you for reaching out. Our team will contact you within 24 hours to discuss your project.
        </p>

        {/* Summary + Steps */}
        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Project Summary */}
            <div className="p-5 bg-[#86868b]/5 rounded-lg border border">
              <h2 className="text-lg font-medium mb-3">Summary</h2>

              {summary.selectedPackage ? (
                <>
                  <p className="text-sm text-gray-700 mb-2">Package: <span className="font-medium">{summary.selectedPackage}</span></p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {PACKAGES[summary.selectedPackage].features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </>
              ) : (
                <>
                  <p className="text-sm font-medium mb-2">Selected Services:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {Object.keys(summary.selectedServices).map((id) => (
                      <li key={id}>{SERVICES[id]?.name || id}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-4">
                <p className="text-sm text-gray-600">Timeline: <span className="font-medium">{estimatedTimeline}</span></p>
                <p className="text-sm text-gray-600">
                  Price: <span className="font-semibold">UGX{summary.totalPrice?.toLocaleString()}</span>
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="p-5 bg-[#86868b]/5 rounded-lg border ">
              <h2 className="text-lg font-medium mb-3">Next Steps</h2>
              <div className="space-y-1">
                {nextSteps.map((step, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-7 h-7 bg-black rounded-full flex items-center justify-center text-white text-xs font-medium">
                      {i + 1}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                      {/* <p className="text-sm text-gray-400">Timeline: {step.timeline}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <div className="bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium text-center hover:bg-gray-900 transition">
              Return to Home
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
