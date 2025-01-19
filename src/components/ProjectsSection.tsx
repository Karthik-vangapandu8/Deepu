"use client";
import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  link: string;
  day: number;
}

const projects: Project[] = [
  {
    title: "Water Supply and Sewerage Board Dashboard",
    description: "A real-time dashboard tracking billing and collection trends for water supply and sewerage services, supporting data-driven decisions for better utility management and citizen satisfaction.",
    link: "https://lnkd.in/gtaSRRMq",
    day: 7
  },
  {
    title: "Drug Licenses Analysis Dashboard",
    description: "Analysis of drug licenses issued to hospitals and pharmacies, providing insights into distribution patterns and enhancing regulatory oversight in healthcare operations.",
    link: "https://lnkd.in/gXNgB_d6",
    day: 6
  },
  {
    title: "Industrial Incentives Dashboard",
    description: "Dashboard analyzing industrial incentives distribution, monitoring utilization patterns and enhancing accountability in resource allocation to industries.",
    link: "https://lnkd.in/gGUEztwA",
    day: 5
  },
  {
    title: "Rice Cards Transaction Analysis",
    description: "Shop-wise transaction analysis dashboard for rice card distribution, ensuring transparency and efficiency in welfare programs.",
    link: "https://lnkd.in/gHQgvpKU",
    day: 4
  },
  {
    title: "Streetlight Energy Consumption Dashboard",
    description: "Real-time analysis of streetlight energy consumption patterns, supporting sustainability initiatives and resource optimization.",
    link: "https://lnkd.in/eGGbsmGN",
    day: 3
  },
  {
    title: "Panchayat Building Permissions Dashboard",
    description: "Interactive dashboard providing insights into building permissions at the panchayat level, supporting transparent and efficient governance.",
    link: "https://lnkd.in/eQyryQAc",
    day: 2
  },
  {
    title: "Mother and Child Healthcare Kit Distribution",
    description: "Analysis of healthcare kit distribution under welfare schemes, providing insights into resource allocation and impact assessment.",
    link: "https://lnkd.in/gR2NWpCZ",
    day: 1
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative" id="projects">
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold gradient-text mb-4">Data Analysis Projects</h2>
        <p className="text-cream/80 text-lg max-w-2xl mx-auto">
          A showcase of real-time data analysis dashboards focused on governance and public welfare
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-deep-maroon rounded-xl transform transition-transform group-hover:scale-105"></div>
            <div className="relative bg-deep-maroon border border-gold/20 rounded-xl p-6 h-full flex flex-col hover:shadow-[0_0_15px_rgba(255,215,0,0.15)] transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gold">{project.title}</h3>
                <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm border border-gold/20">
                  Day {project.day}
                </span>
              </div>
              <p className="text-cream/70 mb-6 flex-grow">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-gold to-[#FFA500] text-deep-maroon font-semibold px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
