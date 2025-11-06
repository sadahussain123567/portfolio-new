"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import image from "../public/imagenano.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}
export default function AboutSection() {
  return (
    <section className="bg-[#1a1a1a] text-white py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">

        {/* TEXT SECTION */}
        <motion.div
          className="flex-1 w-full"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#a7a6ff] text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-3">
            About Me
          </h3>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Creative Frontend <br /> Developer
          </motion.h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-loose mb-3 sm:mb-4">
            Hi, I'm a passionate <strong>Frontend Developer</strong> who loves building
            modern and responsive web experiences. I specialize in
            <strong> HTML, CSS, Tailwind CSS, TypeScript, and Next.js</strong> with a
            focus on clean UI and smooth interactions.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-loose mb-6 sm:mb-7 md:mb-8">
            I believe in attention to detail, improving performance, and crafting
            visually appealing user interfaces that deliver great user experience.
          </p>

          {/* ✅ HYDRATION FIX → motion.button used instead of motion.a */}
          <Link href="/about/details">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#a7a6ff] text-[#0f0f11] font-semibold px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto cursor-pointer text-sm sm:text-base"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          className="flex-1 flex justify-center w-full"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] shadow-2xl"
          >
            <Image
              src={image}
              alt="About Me"
              width={400}
              height={400}
              className="object-cover w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

