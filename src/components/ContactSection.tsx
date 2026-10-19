import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const { personal } = PORTFOLIO;

  return (
    <footer
      id="contact"
      className="relative w-full bg-background text-[#E8DFD8] font-sans selection:bg-accent-blue selection:text-white pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
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
                  05 / CONTACT
                </span>
                <div className="w-16 h-[1.5px] bg-gradient-to-r from-accent-cyan via-accent-blue to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#64748B] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#67E8F9] via-[#06B6D4] to-[#0078D4] drop-shadow-[0_8px_25px_rgba(6,182,212,0.35)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[14px] font-light text-slate-300 leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Available for full-stack software engineering roles and internships. Open for technical discussions regarding system architecture, microservices engineering, and AI systems.
              </p>

              {/* Terminal-Inspired Contact Channels */}
              <div className="space-y-3.5 mb-8">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center space-x-3.5 p-3 rounded-lg border border-white/10 bg-surface/70 hover:border-accent-cyan/80 transition-all duration-300 group"
                >
                  <div className="p-2 rounded bg-accent-blue/10 text-accent-cyan group-hover:bg-accent-blue/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 block">
                      Direct Email
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">
                      {personal.email}
                    </span>
                  </div>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3 rounded-lg border border-white/10 bg-surface/70 hover:border-accent-cyan/80 transition-all duration-300 group"
                >
                  <div className="p-2 rounded bg-accent-blue/10 text-accent-cyan group-hover:bg-accent-blue/20">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 block">
                      GitHub Workspace
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">
                      github.com/Tanshul02
                    </span>
                  </div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3 rounded-lg border border-white/10 bg-surface/70 hover:border-accent-cyan/80 transition-all duration-300 group"
                >
                  <div className="p-2 rounded bg-accent-blue/10 text-accent-cyan group-hover:bg-accent-blue/20">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 block">
                      Professional Network
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">
                      linkedin.com/in/tanshul-sharma
                    </span>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 p-3 rounded-lg border border-white/5 bg-surface/40">
                  <div className="p-2 rounded bg-white/5 text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 block">
                      Base Location
                    </span>
                    <span className="text-xs font-mono text-slate-300">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-xl border border-slate-700/80 bg-surface/90 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Cyan Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent-cyan/80 to-transparent" />

            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent-cyan/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent-cyan/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent-cyan/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent-cyan/60" />

            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 text-slate-300 text-[11px]">tanshul@system:~$ ./dispatch_message.sh</span>
              </div>
              <span className="text-[10px] text-accent-cyan font-semibold">TLS SECURED</span>
            </div>

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-accent-cyan bg-accent-blue/20 text-accent-cyan text-base">
                  <CheckCircle2 className="w-6 h-6 text-accent-cyan" />
                </div>
                <h3
                  className="text-3xl text-white font-normal uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  PACKET DELIVERED
                </h3>
                <p
                  className="text-xs sm:text-sm text-slate-300 font-light max-w-sm mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Transmission registered successfully. I will inspect your payload and respond to your channel shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-mono text-accent-cyan border border-accent-cyan/40 rounded hover:bg-accent-cyan/10 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[10px] font-mono tracking-[0.2em] uppercase text-accent-cyan mb-2">
                      // SENDER NAME
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Satya Nadella"
                      className="w-full bg-background border border-slate-700 focus:border-accent-cyan text-xs text-white placeholder-slate-500 px-4 py-3 outline-none rounded transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[10px] font-mono tracking-[0.2em] uppercase text-accent-cyan mb-2">
                      // CHANNEL EMAIL
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-background border border-slate-700 focus:border-accent-cyan text-xs text-white placeholder-slate-500 px-4 py-3 outline-none rounded transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] font-mono tracking-[0.2em] uppercase text-accent-cyan mb-2">
                    // TRANSMISSION PAYLOAD
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter project inquiry, technical discussion, or opportunity details..."
                    className="w-full bg-background border border-slate-700 focus:border-accent-cyan text-xs text-white placeholder-slate-500 p-4 outline-none rounded transition-colors resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 border border-accent-cyan bg-accent-blue/20 hover:bg-accent-blue/30 text-white text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 rounded shadow-[0_4px_25px_rgba(6,182,212,0.25)] flex items-center justify-center space-x-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>EXECUTE DISPATCH</span>
                  <Send className="w-3.5 h-3.5 text-accent-cyan" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-slate-400 uppercase">
            <span className="text-accent-cyan font-bold">TANSHUL SHARMA</span>
            <span>//</span>
            <span>VIT VELLORE (9.44 CGPA)</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">
            © {new Date().getFullYear()} • ARCHITECTED WITH PRECISION &amp; SCALABILITY
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
