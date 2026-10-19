import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import aboutImg from '../assets/about.png';
import { PORTFOLIO } from '../data/portfolioData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // Motion Values for 3D Tilt Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  // Springs for smooth physics
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { damping: 18, stiffness: 220 });

  // Top-Level Unconditional Transform for Spotlight Background
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 240px at ${x}px ${y}px, rgba(6,182,212,0.3), rgba(0,120,212,0.15), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsCardHovered(true);

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      className="relative w-screen min-h-screen bg-background text-[#E8DFD8] font-sans selection:bg-accent-blue selection:text-white py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center"
    >
      {/* Background Glows & Floating Atmosphere */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-accent-blue/15 rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.14, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/6 right-1/4 w-[28rem] h-[28rem] bg-accent-cyan/15 rounded-full blur-[170px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-8"
        >
          <span
            className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent-cyan"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / ENGINEERING PROFILE
          </span>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-accent-cyan via-accent-blue to-transparent" />
        </motion.div>

        {/* Main Grid: Content + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT (7 COLS) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Cinematic Headline with Glow Flare */}
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#64748B] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  I DON&apos;T JUST WRITE CODE.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#67E8F9] via-[#06B6D4] to-[#0078D4] drop-shadow-[0_8px_25px_rgba(6,182,212,0.35)]">
                  I ARCHITECT SYSTEMS THAT SCALE.
                </span>
              </h2>
            </motion.div>

            {/* Concise Bio Paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-slate-300 leading-[1.85] tracking-wide mb-8 max-w-2xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              I&apos;m <span className="text-white font-semibold">Tanshul Sharma</span>, an Integrated M.Tech Software Engineering student at <span className="text-accent-cyan font-medium">Vellore Institute of Technology (VIT)</span> maintaining a <span className="text-accent-blue font-bold">9.44 CGPA</span>. My engineering discipline centers on building robust, modular microservices backends with FastAPI and Python, performant React/TypeScript frontends, and production-grade Generative AI / RAG workflows.
              With strong grounding in Clean OOP, GoF Design Patterns, and containerized CI/CD pipelines, I bridge high-level system architecture with low-level execution precision.
            </motion.p>

            {/* Metrics Grid */}
            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 pb-2 border-t border-slate-800"
            >
              {PORTFOLIO.personal.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col p-3 rounded-lg bg-surface/60 border border-slate-800/80">
                  <span
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono text-accent-cyan"
                  >
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 mt-1">
                    {metric.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Core Competencies Line */}
            <motion.div variants={fadeUpVariants} className="mt-8 flex flex-wrap gap-2">
              {['VIT Vellore 9.44 CGPA', 'DPS Faridabad 95.4% / 92%', 'FastAPI & Microservices', 'RAG & GenAI', 'GoF Design Patterns', 'Docker & Jenkins CI/CD'].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 text-[11px] font-mono font-medium rounded-full border border-accent-cyan/30 bg-accent-blue/10 text-cyan-200"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT PORTRAIT FRAME (PERFECT LOCKED GEOMETRY) */}
          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px]">
            {/* Ambient Animated Glow Ring Behind Frame */}
            <motion.div
              animate={{
                scale: isCardHovered ? 1.12 : 1,
                opacity: isCardHovered ? 0.35 : 0.15,
                rotate: isCardHovered ? 180 : 0,
              }}
              transition={{ duration: 3, ease: 'easeOut' }}
              className="absolute -inset-6 bg-[conic-gradient(from_0deg,#0078D4_0%,#06B6D4_35%,transparent_65%,#0078D4_100%)] blur-2xl rounded-3xl pointer-events-none"
            />

            {/* 3D Holographic Main Card Container */}
            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-3.5 border border-slate-700/80 rounded-2xl bg-surface/90 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] cursor-pointer group transition-colors duration-500 hover:border-accent-cyan/80"
            >
              {/* Dynamic Laser Border Pulse on Card Perimeter */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                <motion.div
                  animate={{ x: isCardHovered ? ['-100%', '200%'] : '-100%' }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent skew-x-12"
                />
              </div>

              {/* Locked Corner Accent Brackets */}
              <div className="pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent-cyan rounded-tl-xl transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent-cyan rounded-tr-xl transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent-cyan rounded-bl-xl transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent-cyan rounded-br-xl transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              </div>

              {/* Portrait Image Canvas */}
              <div className="relative overflow-hidden w-full max-w-[390px] aspect-[4/5] bg-[#07090e] rounded-xl">
                <img
                  src={aboutImg}
                  alt="Tanshul Sharma"
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03] group-hover:brightness-105 group-hover:contrast-[1.08] transition-all duration-700 ease-out"
                />

                {/* Mouse-Tracked Holographic Glass Spotlight Sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
                  style={{
                    background: spotlightBg,
                    opacity: isCardHovered ? 1 : 0,
                  }}
                />

                {/* Bottom Film Noir Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent pointer-events-none" />

                {/* Monoline Signature & Designation */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between select-none">
                  <div>
                    <span className="block text-[11px] font-mono tracking-widest text-accent-cyan uppercase">
                      SOFTWARE ENGINEER
                    </span>
                    <span className="text-sm font-semibold text-white tracking-wide">
                      Tanshul Sharma
                    </span>
                  </div>
                  <span
                    className="text-3xl text-accent-cyan drop-shadow-[0_0_12px_rgba(6,182,212,0.5)] transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "'Herr Von Muellerhoff', cursive" }}
                  >
                    Tanshul
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
