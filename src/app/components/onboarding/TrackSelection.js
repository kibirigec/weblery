"use client";

import { motion } from 'framer-motion';
import { Package, UserRoundCog } from 'lucide-react';
export default function TrackSelection({ onSelect }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-0">
      <h1 className="text-4xl font-bold text-center mb-8">Choose Your Path</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Select a pre-made package or build your own custom plan tailored to your needs
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-2xl border border-[#e0e0e0] p-8 cursor-pointer border-2 hover:border-black  transition-all"
          onClick={() => onSelect('package')}
        >
          <div className="text-6xl mb-4">
            <Package

           /></div>
            <h2 className="text-2xl font-bold mb-4">Choose a Pre-Made Package</h2>
          <p className="text-gray-600 mb-6">
            Select from our carefully curated packages that combine the most popular services at the best value
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Pre-optimized service combinations
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Special package discounts
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Clear timeline estimates
            </li>
          </ul>
        </motion.div>

        <motion.div
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-2xl  p-8 cursor-pointer border-2 border-[#e0e0e0]  hover:border-black transition-all"
          onClick={() => onSelect('custom')}
        >
          <div className="text-4xl mb-4"><UserRoundCog /></div>
          <h2 className="text-2xl font-bold mb-4">Build Your Own Plan</h2>
          <p className="text-gray-600 mb-6">
            Create a custom plan by selecting individual services and add-ons that match your specific requirements
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Full service customization
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Detailed service breakdown
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Flexible timeline options
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
} 