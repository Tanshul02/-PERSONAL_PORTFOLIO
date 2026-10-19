import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, Cpu, Layers } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { PORTFOLIO } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO;

  return (
    <section
      id="projects"
      className="relative w-full bg-background text-[#E8DFD8] font-sans selection:bg-accent-blue selection:text-white pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-accent-blue/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent-cyan/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent-cyan"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / SYSTEM ARCHITECTURES
          </span>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-accent-cyan via-accent-blue to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#64748B] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              FEATURED SYSTEMS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#67E8F9] via-[#06B6D4] to-[#0078D4] drop-shadow-[0_8px_25px_rgba(6,182,212,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-slate-300 max-w-md mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Scroll to stack the architectural blueprint cards. Each platform demonstrates decoupled service decomposition, clean OOP patterns, and production engineering.
          </p>
        </motion.div>

        {/* Card Stacking Deck */}
        <ScrollStack>
          {projects.map((project, idx) => {
            const projectNumber = `0${idx + 1}`;

            return (
              <ScrollStackItem
                key={project.id}
                index={idx}
                totalItems={projects.length}
              >
                <div className="relative w-full rounded-2xl border border-slate-700/80 bg-surface/95 p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-accent-cyan/80">
                  {/* Top Cyan Border Light Flare */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent" />

                  {/* Corner Minimal L-Brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent-cyan/60 group-hover:border-accent-cyan transition-colors" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent-cyan/60 group-hover:border-accent-cyan transition-colors" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent-cyan/60 group-hover:border-accent-cyan transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent-cyan/60 group-hover:border-accent-cyan transition-colors" />

                  {/* Big Background Watermark Number */}
                  <span
                    className="absolute -bottom-8 -right-3 text-8xl sm:text-9xl font-bold text-white/[0.03] select-none pointer-events-none leading-none font-mono"
                  >
                    {projectNumber}
                  </span>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                    {/* Left Column (7 Cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        {/* Category & Status Indicator Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="text-xs font-mono font-bold text-accent-cyan">
                            {projectNumber} //
                          </span>
                          <span className="px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase rounded bg-white/[0.04] text-slate-300 border border-white/10">
                            {project.category}
                          </span>

                          {/* Amber pulse for maintenance notice or green pulse for active live */}
                          {project.maintenanceNotice ? (
                            <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full border border-amber-500/40 bg-amber-950/30">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                              </span>
                              <span className="text-[10px] font-mono font-medium text-amber-300">
                                {project.maintenanceNotice}
                              </span>
                            </div>
                          ) : project.isLive ? (
                            <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-950/30">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                              </span>
                              <span className="text-[10px] font-mono font-medium text-emerald-300">
                                Live Deployment
                              </span>
                            </div>
                          ) : (
                            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full border border-slate-700 bg-slate-900/50">
                              <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                              <span className="text-[10px] font-mono text-slate-400">
                                Architecture Spec
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Project Title & Tagline */}
                        <h3
                          className="text-4xl sm:text-5xl font-normal tracking-tight text-white mb-2 group-hover:text-cyan-100 transition-colors uppercase leading-[0.95]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-accent-cyan tracking-wide mb-4">
                          {project.tagline}
                        </p>

                        {/* Detailed Description */}
                        <p
                          className="text-xs sm:text-sm md:text-[14px] font-light text-slate-300 leading-[1.8] tracking-wide mb-6"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {project.description}
                        </p>

                        {/* 3 Architectural Highlights */}
                        <div className="space-y-2.5 mb-6">
                          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-accent-cyan" />
                            Architectural Highlights:
                          </span>
                          <ul className="space-y-2">
                            {project.architectureHighlights.map((highlight, hIdx) => (
                              <li key={hIdx} className="flex items-start space-x-2.5 text-xs text-slate-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                                <span className="leading-relaxed font-light">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Design Pattern & Technology tag pills */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-[10px] font-mono font-medium uppercase rounded border border-slate-700 bg-background/80 text-cyan-200 group-hover:border-accent-cyan/40 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column (5 Cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-slate-800">
                      <div className="space-y-4">
                        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-accent-cyan block">
                          // ARCHITECTURE METRICS
                        </span>
                        <div className="p-4 rounded-xl border border-slate-700/80 bg-background/90 flex items-start space-x-3">
                          <Cpu className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] font-mono uppercase text-slate-400 block">
                              Performance & Reliability
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-white mt-1 block">
                              {project.metrics}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center space-x-2.5 px-5 py-3 border border-accent-cyan bg-accent-blue/20 hover:bg-accent-blue/30 text-white text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 rounded shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            <span>LIVE DEMO PREVIEW</span>
                            <ExternalLink className="w-3.5 h-3.5 text-accent-cyan" />
                          </a>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center space-x-2.5 px-5 py-3 border border-slate-700 bg-background/90 hover:border-accent-cyan hover:bg-surface text-slate-200 hover:text-white text-[11px] font-medium tracking-wider uppercase transition-all duration-300 rounded"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <Github className="w-3.5 h-3.5 text-slate-300" />
                          <span>SOURCE CODE REPO</span>
                          <span className="text-xs">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ProjectsSection;
