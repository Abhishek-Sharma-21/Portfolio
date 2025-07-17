import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects"; // If you centralize projects data later

function Projects() {
  return (
    <div className="w-full flex flex-col items-center px-4 py-12">
      <h2 className="text-2xl font-bold mb-10 text-start w-full max-w-5xl text-gray-900 dark:text-gray-100">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="w-full aspect-[16/9] mb-4 rounded-lg border overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:underline text-start"
            >
              {project.title}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;