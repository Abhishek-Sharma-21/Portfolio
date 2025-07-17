import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { education } from "../data/education";
import { motion } from "framer-motion";

function Education() {
  return (
    <div className="w-full flex flex-col items-center px-4 py-12">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white">Education</h2>
      </div>
      <div className="relative w-full max-w-3xl">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-yellow-400 bg-opacity-40 -translate-x-1/2 z-0 rounded"></div>
        <div className="flex flex-col gap-24 relative z-10">
          {education.map((edu, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={edu.degree + idx}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex w-full justify-between items-center relative"
              >
                {/* Left side */}
                <div className={`w-5/12 ${isLeft ? "flex flex-col items-end" : ""}`}>
                  {isLeft && (
                    <div className="text-right">
                      <h3 className="text-xl font-extrabold text-white mb-1">{edu.degree}</h3>
                      <div className="text-gray-400 text-lg mb-2">{edu.institution}</div>
                      <div className="flex items-center justify-end gap-2 text-gray-300 text-md">
                        <FaRegCalendarAlt className="text-yellow-400" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  )}
                </div>
                {/* Timeline dot */}
                <div className="w-1/12 flex flex-col items-center relative z-20">
                  <span className="w-5 h-5 bg-yellow-400 rounded-full border-4 border-[#232526] shadow-lg"></span>
                </div>
                {/* Right side */}
                <div className={`w-5/12 ${!isLeft ? "flex flex-col items-start" : ""}`}>
                  {!isLeft && (
                    <div className="text-left">
                      <h3 className="text-xl font-extrabold text-white mb-1">{edu.degree}</h3>
                      <div className="text-gray-400 text-lg mb-2">{edu.institution}</div>
                      <div className="flex items-center gap-2 text-gray-300 text-md">
                        <FaRegCalendarAlt className="text-yellow-400" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Education; 