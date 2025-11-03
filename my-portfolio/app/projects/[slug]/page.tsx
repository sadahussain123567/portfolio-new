"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// ✅ ICONS IMPORT
import { RiNextjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { FaWordpress, FaShopify, FaFigma } from "react-icons/fa";
import { SiElementor, SiAdobexd, SiLucid } from "react-icons/si";

// ✅ Icon Mapping
const icons: Record<string, JSX.Element> = {
  wordpress: <FaWordpress size={20} />,
  elementor: <SiElementor size={20} />,
  figma: <FaFigma size={20} />,
  shopify: <FaShopify size={20} />,
  liquid: <SiLucid size={20} />,
  nextjs: <RiNextjsLine size={20} />,
  python:<FaPython size={20}/>,
  "adobe xd": <SiAdobexd size={20} />,
};

// ✅ Type define once so TypeScript will stop errors
interface ProjectInfo {
  title: string;
  image: string;
  liveLink: string;
  projectType: string;
  tools: string[];
  description: string;
}

// ✅ Project Data
const projectDetails: Record<string, ProjectInfo> = {
  "e-commerce-website": {
    title: "E-Commerce Website ",
    image: "/Project_2.jpeg",
    liveLink: "https://template6-2p5y.vercel.app/",
    description:
      "This is a modern and fully responsive Furniture E-Commerce Website template designed for showcasing and selling home decor and furniture products. The website features product listing sections with pricing, discount labels, and product detail pages. It includes a clean and minimal user interface focused on improving user experience and visual appeal. The navigation bar, product categories, blog section, and footer contribute to a complete store layout structure.",
    projectType: "Furniture Store UI Template",
    tools: ["nextjs", "Figma"],
  },

  "weather-checker-web-app": {
    title: "Weather Checker Web App",
    image: "/Project_5.jpeg",
    liveLink: "https://weather-checker-98.streamlit.app/",
    description:"This web application allows users to input a city name (or location) and receive current weather conditions and forecast data. Built using Streamlit, it fetches weather data from a public API and displays it in a simple, intuitive UI. Ideal for demonstrating API integration, responsive UI, and data-driven web apps.",
    projectType: "Real-time Weather Information Web Application",
    tools: ["python"],
  },
};

// ✅ Component
export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug];

  if (!project) {
    return (
      <div className="text-white p-10 text-center text-4xl">
        Project Not Found
      </div>
    );
  }

  return (
    <section className="bg-[#1a1a1a] text-white overflow-hidden">
      {/* 🔥 Header - Improved mobile responsiveness */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] flex items-center justify-center">
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

        {/* Title - Responsive text sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold z-10 text-center px-4 sm:px-6 leading-tight"
        >
          {project.title}
        </motion.h1>
      </div>

      {/* ✅ Content Section - Improved mobile spacing */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">

        {/* Image Container - Better mobile rounding */}
        <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={700}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Description - Mobile-optimized spacing and typography */}
        <div className="mt-8 sm:mt-10 md:mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            Project Details
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed sm:leading-loose">
            {project.description}
          </p>
        </div>

        {/* ✅ Project Info - Stacked on mobile, grid on larger screens */}
        <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto">

          {/* Project Type */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
              Project Type
            </h3>
            <p className="text-white text-base sm:text-lg font-semibold">
              {project.projectType}
            </p>
          </div>

          {/* Software - Improved icon sizing for mobile */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
              Technologies
            </h3>
            <div className="flex gap-2.5 sm:gap-3 flex-wrap">
              {project.tools.map((tool, index) => (
                <div
                  key={index}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-customPurple flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                  title={tool}
                >
                  {icons[tool.toLowerCase()] || tool.charAt(0)}
                </div>
              ))}
            </div>
          </div>

          {/* Website Link - Full width button on mobile */}
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <h3 className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
              Website Link
            </h3>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-customPurple text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-opacity-90 transition-all w-full sm:w-auto text-sm sm:text-base shadow-lg hover:shadow-xl"
            >
              Visit Site
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}