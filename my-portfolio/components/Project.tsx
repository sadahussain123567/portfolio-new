"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center justify-center p-8">
      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(128, 128, 128, 0.3)", // gray glow
          }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-xl p-6 shadow-lg transition-transform"
        >
          <div className="bg-customPurple rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <span className="text-white text-xl">📄</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Website Creation</h2>
          <p className="text-gray-300 mb-4">
            I&apos;ll collaborate with you to make sure your website delivers your goals.
          </p>
          <ul className="text-gray-300 list-disc pl-5 space-y-1">
            <li>Provide Solutions Advice</li>
            <li>Create the Website</li>
            <li>Tablet & Mobile Responsiveness</li>
            <li>Add Content/Branding</li>
            <li>E-Commerce</li>
          </ul>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(128, 128, 128, 0.3)",
          }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-xl p-6 shadow-lg transition-transform"
        >
          <div className="bg-customPurple rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <span className="text-white text-xl">🛠️</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Website Redesign</h2>
          <p className="text-gray-300 mb-4">
            Does your website seem outdated or is it failing to generate leads or sales?
          </p>
          <ul className="text-gray-300 list-disc pl-5 space-y-1">
            <li>Provide Solutions Advice</li>
            <li>Rebuild the Website/Pages</li>
            <li>Reviews of Performance</li>
            <li>Tablet & Mobile Responsiveness</li>
            <li>Content Enhancements</li>
          </ul>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(128, 128, 128, 0.3)",
          }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-xl p-6 shadow-lg transition-transform"
        >
          <div className="bg-customPurple rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <span className="text-white text-xl">📈</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">SEO & Marketing</h2>
          <p className="text-gray-300 mb-4">
            I&apos;ll provide top-notch marketing support and ensure your company benefits greatly to enhance its performance in the industry.
          </p>
          <ul className="text-gray-300 list-disc pl-5 space-y-1">
            <li>Campaign Setup & Analytics</li>
            <li>Audience Research</li>
            <li>Campaign Optimization</li>
            <li>24/7 Support</li>
          </ul>
        </motion.div>
      </div>

      {/* Portfolio Section */}
      <div className="mt-12 text-center max-w-6xl w-full">
        <h3 className="text-customPurple text-lg font-semibold mb-2">Projects</h3>
        <h1 className="text-4xl font-bold">
          Projects that helped me launch my career are listed below.
        </h1>


      </div>
    </div>
  );
};

export default ProjectsPage;
