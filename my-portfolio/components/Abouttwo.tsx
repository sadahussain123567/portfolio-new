"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import aboutBg from "../public/image5.jpeg";

export default function AboutSection() {
  return (
    <section className="bg-[#1a1a1a] text-white overflow-hidden">
      {/* 🔹 About Heading with Fullscreen Background */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
  repeating-linear-gradient(
    10deg,
    rgba(15, 15, 23, 1) 0px,
    rgba(15, 15, 23, 1) 40px,
    rgba(25, 25, 40, 1) 80px
  )
`


          }}
        />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative text-5xl md:text-6xl font-bold z-10 text-center"
        >
          About Me
        </motion.h2>
      </div>

      {/* 🔹 About Content Section */}
      <div className="relative w-full bg-gray-900 py-20">
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-16 text-gray-300 flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src={aboutBg}
              alt="About Image"
              width={500}
              height={500}
              className="rounded-2xl object-cover shadow-lg relative z-10"
            />
          </motion.div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 text-left flex flex-col gap-4 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="text-customPurple text-lg font-semibold"
            >
              Hey, I'm Saddam Hussain
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold leading-snug"
            >
              Passionate Frontend Developer & UI Enthusiast
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed"
            >
              I’m a dedicated Frontend Developer skilled in building responsive, user-friendly
              web applications using{" "}
              <span className="text-white font-medium">Next.js</span>,{" "}
              <span className="text-white font-medium">TypeScript</span>, and{" "}
              <span className="text-white font-medium">Tailwind CSS</span>. I enjoy creating modern,
              performant websites with clean UI and smooth user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed"
            >
              Currently exploring advanced animations and performance optimization to build
              next-level digital experiences.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
