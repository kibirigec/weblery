'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react';

// --- Reusable Input Field Component ---
const InputField = ({ label, name, type = 'text', value, onChange, placeholder, error }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1.5">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2 rounded-lg border bg-slate-50 transition-colors ${
        error 
        ? 'border-red-400 text-red-800 focus:ring-red-500' 
        : 'border-slate-300 focus:ring-black'
      } focus:outline-none focus:ring-2 focus:border-transparent`}
    />
    {error && (
      <p className="mt-1.5 flex items-center text-sm text-red-600">
        <AlertCircle className="w-4 h-4 mr-1.5" /> {error}
      </p>
    )}
  </div>
);

// --- Reusable Textarea Field Component ---
const TextareaField = ({ label, name, value, onChange, placeholder, error, rows = 4 }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1.5">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      placeholder={placeholder}
      className={`w-full px-4 py-2 rounded-lg border bg-slate-50 transition-colors ${
        error 
        ? 'border-red-400 text-red-800 focus:ring-red-500' 
        : 'border-slate-300 focus:ring-black'
      } focus:outline-none focus:ring-2 focus:border-transparent`}
    />
    {error && (
      <p className="mt-1.5 flex items-center text-sm text-red-600">
        <AlertCircle className="w-4 h-4 mr-1.5" /> {error}
      </p>
    )}
  </div>
);

// --- Main ContactInfo Component ---
export default function ContactInfo({ totalPrice, estimatedTimeline, onContinue, onBack }) {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', projectDescription: '', timeline: '', budget: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // --- Only Name and Phone are required ---
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onContinue(formData);
    }
  };

  const renderSummaryCard = () => (
    <div className="bg-[#f5f5f5] rounded-xl border border-[#e0e0e0] p-6">
      <h3 className="text-lg font-semibold text-[#6e6e73] mb-4">Your Plan</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center text-slate-600">
          <span>Total Price</span>
          <span className="font-medium text-slate-900">${totalPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center text-slate-600">
          <span>Timeline</span>
          <span className="font-medium text-slate-900">{estimatedTimeline}</span>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-0"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-grey-900">Contact Information</h1>
        <p className="mt-2 text-lg text-[#86868b]">One final step. Please tell us about yourself and your project.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 items-start">
        
        {/* --- Left Column: The Form --- */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-xl border border-[#e0e0e0] p-6 md:p-8">
          <fieldset className="space-y-6">
            <legend className="text-xl font-semibold text-slate-800 mb-4 border-b border-slate-200 w-full pb-3">
              About You
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Full Name *" name="name" value={formData.name} onChange={handleChange} error={errors.name} placeholder="John Doe" />
              <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="john@company.com" />
              <InputField label="Phone Number *" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} placeholder="0771234321" />
              <InputField label="Company Name" name="company" value={formData.company} onChange={handleChange} error={errors.company} placeholder="Acme Inc." />
            </div>
          </fieldset>
          
          <fieldset className="space-y-6 mt-10">
            <legend className="text-xl font-semibold text-slate-800 mb-4 border-b border-slate-200 w-full pb-3">
              About Your Project
            </legend>
            <TextareaField label="Project Description" name="projectDescription" value={formData.projectDescription} onChange={handleChange} error={errors.projectDescription} placeholder="Tell us about your project goals, key features, and target audience..." />
          </fieldset>
        </form>

        {/* --- Right Column: Sticky Summary & Desktop Actions --- */}
        <div className="lg:col-span-1 lg:sticky lg:top-40 mt-8 lg:mt-0 space-y-4">
          {renderSummaryCard()}
          <div className="hidden lg:flex flex-col space-y-3">
            <motion.button type="submit" onClick={handleSubmit} className="w-full px-6 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
              Submit Project Request <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
            <button onClick={onBack} className="w-full px-6 py-3 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition-colors">
              Back to Summary
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile-Only Fixed Footer --- */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 py-3 px-4 z-40">
        <div className="flex justify-between items-center gap-3">
          <button onClick={onBack} className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 transition-colors flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </button>
          <motion.button type="submit" onClick={handleSubmit} className="px-5 py-2.5 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors flex items-center">
            Submit <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </div>
      </div>
      
      <div className="h-24 lg:h-0"></div>
    </motion.div>
  );
}
