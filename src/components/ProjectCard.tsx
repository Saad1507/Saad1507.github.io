'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export default function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <motion.div 
        whileHover={{ y: -4 }}
        className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all h-full flex flex-col"
      >
        <h3 className="text-xl font-bold text-slateDark mb-3 group-hover:text-accentCobalt transition-colors">{title}</h3>
        <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-grayLight border border-gray-200 text-slate-500 rounded-full text-xs font-semibold tracking-wide">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center text-accentCobalt font-medium mt-auto group/arrow pt-2 border-t border-gray-50">
          <span className="text-sm">Explore Details</span>
          <ArrowRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </motion.div>
    </Link>
  );
}
