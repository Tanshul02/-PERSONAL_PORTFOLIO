import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO } from '../data/portfolioData';

interface TimelineEntry {
  id: string;
  period: string;
  type: 'experience' | 'education';
  title: string;
  organization: string;
  location: string;
  badge?: string;
  bullets: string[];
}

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Combine experience and education into chronological timeline
  const timelineData: TimelineEntry[] = [
    {
      id: 'exp-nxtwave',
      period: 'JAN 2025 – MAR 2025',
      type: 'experience',
      title: PORTFOLIO.experience[0].role,
      organization: PORTFOLIO.experience[0].company,
      location: PORTFOLIO.experience[0].location,
      badge: 'TRAINEE',
      bullets: PORTFOLIO.experience[0].bullets,
    },
    {
      id: 'exp-codtech',
      period: 'OCT 2024 – NOV 2024',
      type: 'experience',
      title: PORTFOLIO.experience[1].role,
      organization: PORTFOLIO.experience[1].company,
      location: PORTFOLIO.experience[1].location,
      badge: 'INTERNSHIP',
      bullets: PORTFOLIO.experience[1].bullets,
    },
    {
      id: 'edu-vit',
      period: '2024 – 2029',
      type: 'education',
      title: PORTFOLIO.education[0].degree,
      organization: PORTFOLIO.education[0].institution,
      location: PORTFOLIO.education[0].location,
      badge: PORTFOLIO.education[0].grade,
      bullets: [
        PORTFOLIO.education[0].details,
        'Active academic focus on Clean OOP, Design Patterns (GoF), Microservices with FastAPI, and Generative AI workflows.',
      ],
    },
    {
      id: 'edu-dps-12',
      period: '2024',
      type: 'education',
      title: PORTFOLIO.education[1].degree,
      organization: PORTFOLIO.education[1].institution,
      location: PORTFOLIO.education[1].location,
      badge: `Distinction: ${PORTFOLIO.education[1].grade}`,
      bullets: [
        PORTFOLIO.education[1].details,
        'Advanced coursework in Mathematics and Computer Science.',
      ],
    },
    {
      id: 'edu-dps-10',
      period: '2022',
      type: 'education',
      title: PORTFOLIO.education[2].degree,
      organization: PORTFOLIO.education[2].institution,
      location: PORTFOLIO.education[2].location,
      badge: `Distinction: ${PORTFOLIO.education[2].grade}`,
      bullets: [
        PORTFOLIO.education[2].details,
        'Ranked at top percentile in Core Sciences and Mathematics.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-background text-[#E8DFD8] font-sans selection:bg-accent-blue selection:text-white pt-10 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-accent-blue/[0.04] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
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
            04 / TRAJECTORY &amp; EDUCATION
          </span>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-accent-cyan via-accent-blue to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#64748B] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EXPERIENCE &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#67E8F9] via-[#06B6D4] to-[#0078D4] drop-shadow-[0_8px_25px_rgba(6,182,212,0.35)]">
              ACADEMIC MERIT.
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full">
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[2px] bg-slate-800" />

          {/* Animated Cyan/Blue Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-cyan/20 shadow-[0_0_12px_rgba(6,182,212,0.8)] origin-top"
          />

          <div className="space-y-12">
            {timelineData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 group-hover:text-accent-cyan transition-colors">
                    {item.period}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-7 h-7 rounded-full border border-accent-cyan/0 group-hover:border-accent-cyan/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-3 h-3 rounded-full bg-surface border border-slate-600 group-hover:bg-accent-cyan group-hover:border-accent-cyan group-hover:shadow-[0_0_14px_#06b6d4] transition-colors duration-300" />
                </div>

                {/* Content (Right side of track) */}
                <div className="ml-14 md:ml-12 pl-2 w-full">
                  {/* Mobile Year */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-accent-cyan">
                      {item.period}
                    </span>
                  </div>

                  <div className="p-6 rounded-xl border border-white/10 bg-surface/80 group-hover:border-accent-cyan/60 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center space-x-2">
                        {item.type === 'experience' ? (
                          <Briefcase className="w-4 h-4 text-accent-cyan" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-accent-blue" />
                        )}
                        <h3
                          className="text-2xl sm:text-3xl tracking-wide text-white group-hover:text-cyan-100 transition-colors uppercase leading-none"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {item.title}
                        </h3>
                      </div>

                      {item.badge && (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-accent-blue/15 text-accent-cyan border border-accent-cyan/30">
                          <Award className="w-3 h-3 text-accent-cyan" />
                          <span>{item.badge}</span>
                        </span>
                      )}
                    </div>

                    {/* Organization & Location */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-4">
                      <span className="text-white font-medium">{item.organization}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2 text-xs sm:text-[13px] text-slate-300 leading-relaxed font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan/80 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
