import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Terminal, Server, Layout, BrainCircuit, Cloud } from 'lucide-react';
import { PORTFOLIO } from '../data/portfolioData';

const categoryMeta: Record<string, { badge: string; icon: React.ElementType; description: string; colSpan: string }> = {
  'Programming & Core CS': {
    badge: 'CORE FOUNDATION',
    icon: Terminal,
    description: 'Strong algorithmic problem solving in Java, Python, and C++. Deep theoretical grounding in Data Structures, OS, and Object-Oriented design.',
    colSpan: 'lg:col-span-7',
  },
  'Backend & Systems': {
    badge: 'MICROSERVICES & APIS',
    icon: Server,
    description: 'High-throughput RESTful services with FastAPI and Python. Strict GoF design patterns (Singleton, Factory, Observer, Adapter) and resilient persistence.',
    colSpan: 'lg:col-span-5',
  },
  'Frontend & UI Engineering': {
    badge: 'CLIENT SYSTEMS',
    icon: Layout,
    description: 'Modern type-safe web applications using React, TypeScript, and Tailwind CSS with modular component hierarchies and smooth UX.',
    colSpan: 'lg:col-span-5',
  },
  'AI & Generative Systems': {
    badge: 'GENAI & LLMS',
    icon: BrainCircuit,
    description: 'Production-ready Generative AI architectures, Context-aware RAG pipelines, LLM chatbot stylists, and vector retrieval workflows.',
    colSpan: 'lg:col-span-7',
  },
  'Cloud, DevOps & Tools': {
    badge: 'DEVOPS & PIPELINES',
    icon: Cloud,
    description: 'Multi-stage Docker containerization, Jenkins CI/CD automation, Kubernetes manifest orchestration, and Linux systems administration.',
    colSpan: 'lg:col-span-12',
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);
  const { skills } = PORTFOLIO;

  return (
    <section
      id="skills"
      className="relative w-screen bg-background text-[#E8DFD8] font-sans selection:bg-accent-blue selection:text-white pt-10 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-accent-blue/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-accent-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent-cyan"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / TECHNICAL COMPETENCIES
          </span>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-accent-cyan via-accent-blue to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#64748B] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              TECHNICAL MATRIX.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#67E8F9] via-[#06B6D4] to-[#0078D4] drop-shadow-[0_8px_25px_rgba(6,182,212,0.35)]">
              ENGINEERED DEPTH.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {skills.map((category, idx) => {
            const meta = categoryMeta[category.category] || {
              badge: 'COMPETENCY',
              icon: Terminal,
              description: 'Technical proficiency and systems engineering capabilities.',
              colSpan: 'lg:col-span-6',
            };
            const Icon = meta.icon;

            return (
              <motion.div
                key={category.category}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className={`${meta.colSpan} relative p-8 sm:p-9 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-accent-cyan/80 hover:shadow-[0_16px_45px_rgba(6,182,212,0.15)] group cursor-default`}
              >
                {/* Top Subtle Border Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent-cyan/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner Minimal Pins */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent-cyan/40 group-hover:border-accent-cyan transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent-cyan/40 group-hover:border-accent-cyan transition-colors duration-300" />

                {/* Card Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2.5">
                    <Icon className="w-4 h-4 text-accent-cyan" />
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-accent-cyan font-bold">
                      {meta.badge}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded border border-white/10 text-slate-400 bg-surface/50 group-hover:border-accent-cyan/40 group-hover:text-cyan-200 transition-all">
                    {category.items.length} TECHNOLOGIES
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-2 group-hover:text-cyan-100 transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {category.category}
                </h3>

                {/* Description */}
                <p
                  className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6 group-hover:text-slate-200 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {meta.description}
                </p>

                {/* Interactive Tag Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {category.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-[11px] font-mono font-medium tracking-wide uppercase rounded border border-white/10 bg-surface/80 text-slate-200 group-hover:border-accent-cyan/40 group-hover:bg-accent-blue/10 group-hover:text-cyan-200 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
