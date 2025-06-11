"use client";

import { useState } from 'react';
import { motion } from 'motion/react';

export default function ContactInfo({ totalPrice, onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
    timeframe: 'flexible',
    preferredContact: 'email'
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      // In a real implementation, you would send this data to your backend
      console.log('Form data:', formData);
      onSubmit();
    }
  };
  
  const timeframeOptions = [
    { value: 'asap', label: 'As soon as possible' },
    { value: 'one-month', label: 'Within 1 month' },
    { value: 'three-months', label: 'Within 3 months' },
    { value: 'six-months', label: 'Within 6 months' },
    { value: 'flexible', label: 'Flexible / Not sure yet' }
  ];
  
  const contactOptions = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone call' },
    { value: 'both', label: 'Both' }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold mb-3">Contact Information</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're excited to bring your project to life! Please provide your contact details so we can get started.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-10"
      >
        <div className="bg-black text-white p-6 flex justify-between items-center">
          <h3 className="text-xl font-bold">Project Request</h3>
          <div className="text-2xl font-bold">${totalPrice.toLocaleString()}</div>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your company name (if applicable)"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Project Details
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Tell us a bit more about your project goals, expectations, or any specific requirements..."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Timeline
                </label>
                <div className="space-y-2">
                  {timeframeOptions.map(option => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="timeframe"
                        value={option.value}
                        checked={formData.timeframe === option.value}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Contact Method
                </label>
                <div className="space-y-2">
                  {contactOptions.map(option => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={option.value}
                        checked={formData.preferredContact === option.value}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <motion.button
                type="button"
                onClick={onBack}
                className="px-6 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Back
              </motion.button>
              
              <motion.button
                type="submit"
                className="px-10 py-3 rounded-lg bg-black text-white font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Project Request
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
      
      <div className="text-center text-sm text-gray-500">
        <p>By submitting this form, you agree to be contacted about your project request.</p>
        <p>We typically respond within 1-2 business days.</p>
      </div>
    </div>
  );
} 