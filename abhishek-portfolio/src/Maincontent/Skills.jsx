import React from "react";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="w-full flex flex-col items-center px-4 py-12">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white">Skills</h2>
      </div>
      <div className="w-full max-w-4xl flex flex-col gap-12">
        {skills.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">{group.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {group.items.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                  className="flex flex-col items-center gap-2"
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                  <span className="text-white text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills; 