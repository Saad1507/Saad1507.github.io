"use client";
import { motion } from "framer-motion";

interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all"
    >
      <h3 className="text-lg font-bold text-slateDark border-b border-gray-100 pb-3 mb-4">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-grayLight text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
