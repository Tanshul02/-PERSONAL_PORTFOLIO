import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';
import heroImg from '../assets/hero.png';
import { PORTFOLIO } from '../data/portfolioData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.18,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroMetrics = [
    { label: 'Academic Standing', value: '9.44 / 10 CGPA' },
    { label: 'Stack Architecture', value: 'FastAPI + React' },
    { label: 'AI Specialization', value: 'LLM & RAG Systems' },
    { label: 'DevOps & Cloud', value: 'Docker + CI/CD' },
  ];

  return (
    <section className="relative w-screen min-h-screen overflow-hidden bg-background text-[#E8DFD8] font-sans selection:bg-accent-blue selection:text-white cursor-none">
      {/* ================= 1. MINIMAL CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-accent-cyan/60 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.15)' : 'rgba(0, 120, 212, 0.9)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. AMBIENT GLOW BACKDROP ================= */}
      <div className="absolute top-1/4 left-1/4 w-[36rem] h-[36rem] bg-accent-blue/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-accent-cyan/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[26rem] h-[26rem] bg-accent-purple/10 rounded-full blur-[180px] pointer-events-none" />

      {/* ================= 3. FIXED HERO BACKGROUND LAYER ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-background flex items-center justify-end">
        {/* Render hero image instead of missing video */}
        <img
          src={heroImg}
          alt="Hero visual"
          className="h-screen w-auto max-w-none object-contain object-right origin-right opacity-45 mix-blend-screen scale-95 md:scale-[0.98] lg:scale-100"
        />

        {/* Seamless Soft Left Edge Blend */}
        <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70 pointer-events-none" />

        {/* Animated Watermark Emblem */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-none flex items-center justify-center z-10 opacity-70">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-surface/85 rounded-full blur-xl" />
            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src={watermarkImg}
                alt="Insignia"
                className="w-24 h-24 lg:w-28 lg:h-28 object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.35)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-white hover:text-accent-cyan transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            TANSHUL SHARMA<span className="text-accent-cyan">.</span>
          </a>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#B2C0D2] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-white"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-accent-blue to-accent-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-medium uppercase py-2 px-4 border border-accent-cyan/40 hover:border-accent-cyan text-white hover:text-accent-cyan transition-all duration-300 backdrop-blur-md bg-surface/50 ml-auto md:ml-0 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-10 pb-6 my-auto">
          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl lg:max-w-2xl xl:max-w-3xl pointer-events-auto z-20"
          >
            {/* Status indicator */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono tracking-wider font-medium text-emerald-300 uppercase">
                  Available for SWE Roles / Internships
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={fadeUpVariants} className="relative mb-3 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] tracking-tight uppercase leading-[0.85]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#94A3B8] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                  TANSHUL
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#67E8F9] via-[#06B6D4] to-[#0078D4] drop-shadow-[0_8px_30px_rgba(6,182,212,0.35)]">
                  SHARMA
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-accent-cyan flex items-center flex-wrap gap-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>Full-Stack Software Engineer &amp; AI Systems Developer</span>
                <span className="text-slate-600">•</span>
                <span className="text-accent-blue">VIT Vellore &apos;29</span>
              </p>
            </motion.div>

            {/* Short Bio */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14px] font-light text-slate-300 leading-[1.8] tracking-wide max-w-xl mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <p>
                Integrated M.Tech Software Engineering candidate at <span className="text-white font-medium">VIT Vellore (9.44 CGPA)</span>.
                Architecting high-scale full-stack microservices, resilient FastAPI backends, and production-grade Generative AI / RAG workflows with clean GoF design patterns.
              </p>
            </motion.div>

            {/* Metrics Badges */}
            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 mb-8 rounded-xl border border-white/10 bg-surface/70 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
            >
              {heroMetrics.map((metric) => (
                <div key={metric.value} className="flex flex-col p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                    {metric.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white mt-0.5 tracking-tight font-mono">
                    {metric.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <motion.a
                href="#projects"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-accent-cyan bg-accent-blue/20 hover:bg-accent-blue/30 text-white text-[11px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.25)] rounded-sm"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent pointer-events-none" />
                <span>EXPLORE SYSTEM ARCHITECTURES</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↓
                </span>
              </motion.a>

              <motion.a
                href={PORTFOLIO.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-slate-700 hover:border-accent-cyan/80 bg-surface/80 hover:bg-surface text-slate-200 hover:text-white text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 rounded-sm"
              >
                <span>VIEW GITHUB (@Tanshul02)</span>
                <span className="text-xs">↗</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Architectural Focus Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-10 xl:pr-16 z-20 select-none max-w-xs"
          >
            {/* Squircle Glassmorphic Profile Frame */}
            <div className="relative w-24 h-28 rounded-2xl p-1 border border-accent-cyan/40 bg-surface/90 backdrop-blur-md shadow-[0_12px_30px_rgba(6,182,212,0.25)] mb-4 overflow-hidden group">
              <img
                src={heroImg}
                alt="Tanshul Sharma"
                className="w-full h-full object-cover object-top rounded-xl"
              />
            </div>

            {/* Quote Mark */}
            <span className="text-3xl text-accent-cyan leading-none font-serif mb-2">
              “
            </span>

            {/* Compact Statement */}
            <div
              className="text-[10px] font-medium tracking-[0.22em] uppercase text-slate-200 space-y-1.5 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p className="text-white font-bold">CLEAN ABSTRACTIONS.</p>
              <p className="text-accent-cyan">ROBUST CONCURRENCY.</p>
              <p className="text-slate-400">MEASURABLE ENGINEERING VALUE.</p>
            </div>

            {/* Cyan Accent Line */}
            <div className="w-32 h-[1.5px] bg-gradient-to-r from-accent-cyan via-accent-blue to-transparent shadow-[0_0_10px_rgba(6,182,212,0.5)] mb-3" />

            {/* Credentials Pill */}
            <div className="text-[11px] font-mono text-slate-400">
              <span className="text-accent-cyan font-bold">VIT Vellore</span> • CGPA 9.44/10
            </div>
            <div className="text-[10px] font-mono text-slate-500 mt-1">
              Open to Software Engineering Opportunities
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar indicator */}
        <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-500 pt-2 border-t border-white/5 pointer-events-auto">
          <span>LATITUDE: 12.9692° N, 79.1559° E [VELLORE]</span>
          <span className="hidden sm:inline">STATUS: COMPILING PRODUCTION ASSETS</span>
          <span>SYSTEM: FASTAPI + REACT + GENAI</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;