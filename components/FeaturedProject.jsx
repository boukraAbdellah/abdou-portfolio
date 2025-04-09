"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../constants/data"; // Import the projects array from data.js

export default function FeaturedProjects() {
  // Filter featured projects if needed (e.g., based on a "featured" property)
  const featuredProjects = projects; // Use the entire array or filter if necessary

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-background to-background/80 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl title lg:text-5xl font-bold tracking-tight mb-4"
          >
            Projects I'm Proud Of
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl text-gray-500 dark:text-gray-400 text-lg"
          >
            A curated selection of my most impactful and innovative projects,
            showcasing my skills and passion for creating exceptional digital
            experiences.
          </motion.p>
        </div>

        <div className="mt-16 space-y-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`group relative rounded-xl overflow-hidden ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <div className="aspect-video relative overflow-hidden rounded-xl group-hover:shadow-xl transition-all duration-300">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Project links that appear on hover */}
                    <div className="absolute bottom-4 right-4 flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 transition-colors"
                        >
                          <FaGithub className="h-5 w-5" />
                          <span className="sr-only">GitHub Repository</span>
                        </Link>
                      )}
                      <Link
                        href={project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 transition-colors"
                      >
                        <FaExternalLinkAlt className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-secondary dark:group-hover:text-secondary transition-colors">
                        {project.name}
                      </h3>
                      <GoArrowUpRight className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-secondary dark:group-hover:text-secondary transition-colors" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary dark:text-secondary hover:text-secondary dark:hover:text-purple-300 font-medium transition-colors"
                    >
                      View Project
                      <GoArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
