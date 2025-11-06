"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import heroBg from "../public/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* 🔹 Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Background"
          fill
          className="object-cover scale-105 blur-[1px] brightness-50"
          priority
        />
        {/* 🔹 Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
      </div>

      {/* 🔹 Text Content with Animation */}
      <motion.div
        initial={{ y: 60, opacity: 0 }} // 👇 Start below
        animate={{ y: 0, opacity: 1 }} // 👆 Move to normal position
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10 max-w-3xl px-4 sm:px-6"
      >
        <p className="text-indigo-400 font-medium mb-2 text-sm sm:text-base md:text-lg">
          Hi, I’m Saddam Hussain
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
          A Passionate Front-End Web Developer
        </h1>
        <p className="text-gray-300 mb-8 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          I build visually appealing, responsive, and user-friendly web experiences.
          Turning creative ideas into modern, interactive websites that perform seamlessly.
        </p>
 <Link href="/My Resume.pdf" target="_blank" rel="noopener noreferrer">
  <motion.button
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.97 }}
    className="bg-customPurple text-[#0f0f11] font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition"
  >
    View Resume
  </motion.button>
  </Link>
      </motion.div>
    </section>
  );
}
