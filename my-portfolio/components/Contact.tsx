"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // Handle form submission here
    console.log("Form submitted:", formData);
    
    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-[#1a1a1a] text-white">
      {/* Gradient Header */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#0f0f17]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
            linear-gradient(
                  135deg,
                  rgba(255, 255, 255, 0.08) 0%,
                  rgba(255, 255, 255, 0.02) 35%,
                  rgba(0, 0, 0, 0.4) 100%
                ),
                linear-gradient(
                  45deg,
                  rgba(125, 82, 253, 1) 0%,
                  rgba(125, 82, 253, 0.05) 70%
                )
              `,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold z-10 text-center px-4 sm:px-6 leading-tight"
        >
          Contact
        </motion.h1>
      </div>

      {/* Form Section */}
      <div className="py-14 sm:py-18 md:py-20 px-3 sm:px-5"/>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h3 className="text-[#a7a6ff] text-sm sm:text-base font-medium mb-3 sm:mb-4">
              Get In Touch
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Are you looking for a new<br />website? I can help you
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              I'm always open to new opportunities, collaborations, and
              connections. Whether you have a project you'd like to discuss,
              want to share your work, or say hi! Feel free to contact me.
            </p>
          </motion.div>

            {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Mike James"
                className={`w-full px-4 py-3 bg-[#2a2a2a] border ${
                  errors.name ? "border-red-500" : "border-gray-700"
                } rounded-lg focus:outline-none focus:border-[#a7a6ff] transition-colors text-white placeholder-gray-500`}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="info@example.com"
                className={`w-full px-4 py-3 bg-[#2a2a2a] border ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } rounded-lg focus:outline-none focus:border-[#a7a6ff] transition-colors text-white placeholder-gray-500`}
              />
            </div>
          </div>

          {/* Subject & Services Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Website Design"
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#a7a6ff] transition-colors text-white placeholder-gray-500"
              />
            </div>

            {/* Services Dropdown */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                Services <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#a7a6ff] transition-colors text-gray-400 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a7a6ff' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                }}
              >
                <option value="">Select Service</option>
                <option value="web-design">Web Design</option>
                <option value="web-development">Web Development</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="e-commerce">E-Commerce Solutions</option>
                <option value="seo">SEO Optimization</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Hey! I need your help for my business website."
              className={`w-full px-4 py-3 bg-[#2a2a2a] border ${
                errors.message ? "border-red-500" : "border-gray-700"
              } rounded-lg focus:outline-none focus:border-[#a7a6ff] transition-colors text-white placeholder-gray-500 resize-none`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4 pb-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#a7a6ff] text-[#0f0f11] font-semibold px-8 sm:px-12 py-3 sm:py-3.5 rounded-lg transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}