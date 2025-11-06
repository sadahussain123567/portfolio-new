"use client";
import { Link as ScrollLink } from "react-scroll";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Detect scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`absolute top-0 left-0 w-full z-50 py-3 sm:py-4 transition-all duration-500 ${scrolled
        ? "bg-[#0f0f11]/90 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-3 sm:px-4 md:px-6">
        {/* Logo - Responsive sizing */}
        <Link href="/" className="flex-shrink-0 -ml-1 sm:ml-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center space-x-1 text-white cursor-pointer">
            <span className="text-customPurple text-base sm:text-xl">✦</span>
            <span>Saddam.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex bg-[#1b1b1d]/70 backdrop-blur-xl px-6 lg:px-8 py-2 rounded-full space-x-5 lg:space-x-8 shadow-sm border border-white/10">
          <Link href="/" className="text-customPurple font-semibold text-sm lg:text-base">
            Home
          </Link>
          <ScrollLink
            to="about"
            smooth={true}
            duration={800}
            className="cursor-pointer text-gray-300 hover:text-customPurple font-medium text-sm lg:text-base transition-colors"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="project"
            smooth={true}
            duration={800}
            className="cursor-pointer text-gray-300 hover:text-customPurple font-medium text-sm lg:text-base transition-colors"
          >
            Projects
          </ScrollLink>
        </nav>

        {/* Hire Me Button (Desktop) */}
        <motion.div className="hidden md:block">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-customPurple text-[#0f0f11] font-semibold py-2 px-4 lg:px-5 rounded-lg transition-all shadow-lg hover:shadow-xl inline-block text-sm lg:text-base cursor-pointer"
            >
              Hire Me
            </motion.button>
          </Link>

        </motion.div>

        {/* Mobile Menu Toggle - Improved tap target */}
        <button
          className="md:hidden focus:outline-none text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0 -mr-1 sm:mr-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Animated with better UX */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0f0f11]/98 backdrop-blur-xl border-t border-gray-800 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col items-center space-y-1 py-6 text-white px-3 sm:px-4">
              {/* Home Link */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 * 0.1 }}
                className="w-full"
              >
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block text-center py-3 px-4 rounded-lg transition-all w-full text-sm sm:text-base text-customPurple font-semibold bg-customPurple/10"
                >
                  Home
                </Link>
              </motion.div>

              {/* About Scroll Link */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 * 0.1 }}
                className="w-full"
              >
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={800}
                  onClick={() => setIsOpen(false)}
                  className="block text-center py-3 px-4 rounded-lg transition-all w-full text-sm sm:text-base text-gray-300 hover:text-customPurple hover:bg-white/5 cursor-pointer"
                >
                  About
                </ScrollLink>
              </motion.div>

              {/* Projects Scroll Link */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 * 0.1 }}
                className="w-full"
              >
                <ScrollLink
                  to="project"
                  smooth={true}
                  duration={800}
                  onClick={() => setIsOpen(false)}
                  className="block text-center py-3 px-4 rounded-lg transition-all w-full text-sm sm:text-base text-gray-300 hover:text-customPurple hover:bg-white/5 cursor-pointer"
                >
                  Projects
                </ScrollLink>
              </motion.div>

              {/* Mobile Hire Me Button with Scroll */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full pt-4"
              >


                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  <button className="block text-center bg-customPurple text-[#0f0f11] font-semibold py-3 px-5 rounded-lg transition-all shadow-lg hover:shadow-xl w-full text-sm sm:text-base cursor-pointer">
                    Hire Me
                  </button>
                </Link>

              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}