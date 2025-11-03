"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Linkedin, Github, Instagram } from "lucide-react";

export default function ContactSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const socialIcons = [
    { href: "https://www.facebook.com/sadam.jatoi.16503", icon: Facebook },
    { href: "https://www.linkedin.com/in/saddam-hussain-baa6982b9/", icon: Linkedin },
    { href: "https://github.com/sadahussain123567", icon: Github },
    { href: "#", icon: Instagram },
  ];

  return (
    <div className="bg-[#1a1a1a] w-full">
      {/* Contact Section */}
      <section className="bg-gray-800 text-white py-16 px-8 flex flex-col items-center justify-center w-full">
        {/* Heading */}
        <div className="text-center max-w-2xl">
          <h3 className="text-customPurple text-lg font-semibold mb-4">Get In Touch</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Let&apos;s build a successful website together
          </h1>

          {/* Button */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.97 }}
              className="bg-customPurple text-[#0f0f11] px-6 py-3 rounded-lg font-semibold transition-all shadow-sm cursor-pointer"
            >
              Let's Talk
            </motion.button>
          </Link>
        </div>

        {/* Social Icons */}
        {isClient && (
          <ul className="flex items-center gap-6 sm:gap-8 mt-12">
            {socialIcons.map((item, index) => (
              <li key={index}>
                <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.85 }}>
                  <Link href={item.href} target="_blank">
                    <item.icon className="text-white hover:text-customPurple w-6 h-6 sm:w-7 sm:h-7" />
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Divider & Footer - FULL WIDTH */}
      <div className="w-screen bg-gray-800 flex flex-col items-center">
        <div className="w-full h-[1px] bg-gray-600" />
        <footer className="text-xl text-gray-400 text-sm text-center py-6">
          © 2025 Saddam. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
