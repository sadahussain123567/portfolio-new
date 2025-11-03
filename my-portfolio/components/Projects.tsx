"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  buttonText: string;
  bgImage: string;
  bgGradient: string;
  slug: string; // ✅ NEW FIELD
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    buttonText: "Read More",
    bgImage: "/Project_2.jpeg",
    bgGradient: "from-amber-200 via-orange-100 to-amber-300",
    slug: "e-commerce-website" // ✅ IMPORTANT
  },
  {
    id: 2,
    title: "Weather Checker Web App",
    buttonText: "Read More",
    bgImage: "/Project_5.jpeg",
    bgGradient: "from-amber-100 via-stone-100 to-amber-200",
    slug: "weather-checker-web-app"
  }
];

export default function Projects() {
  return (
    <section className="bg-[#1a1a1a] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="text-white bg-gray-800 rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl group">
      <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-900 relative">

        <div className="relative aspect-[4/3]">
          <Image
            src={project.bgImage}
            alt={project.title}
            fill
            className="object-cover transition-all duration-500"
            priority
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="bg-customPurple text-black p-3 rounded-full shadow-lg">
              <ArrowRight size={28} />
            </div>
          </div>
        </div>

      </div>

      <div className="px-4 md:px-6 mt-6 md:mt-8">
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          {project.title}
        </h3>

        {/* ✅ BUTTON NOW OPENS DETAILS PAGE */}
        <Link href={`/projects/${project.slug}`}>
          <button className="bg-customPurple text-gray-900 font-semibold px-8 py-3 md:px-10 md:py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            {project.buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}
