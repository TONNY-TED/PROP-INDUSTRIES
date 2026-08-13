import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-[65vh] lg:min-h-[75vh] w-full overflow-hidden bg-gradient-to-br from-[#4A0A10] via-[#38070C] to-[#280407] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* Subtle Network Pattern & Brand Accent Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#A71920]/20 via-transparent to-[#A71920]/10 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 sm:py-6 w-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 mb-4 shadow-inner"
        >
          <Zap size={14} className="text-[#FFFFFF] animate-pulse" />
          <span className="text-white font-bold text-xs tracking-widest uppercase">
            Prop Industries • Success Through Insight
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight max-w-5xl leading-[1.15]"
        >
          Innovative Technology Solutions for a <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-red-100 to-white">Smarter Future</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm sm:text-lg md:text-xl text-white/90 mb-6 max-w-3xl font-light leading-relaxed text-center"
        >
          We help businesses and individuals grow through software development, web design, IoT solutions, branding, and digital innovation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#4A0A10] px-7 py-3 rounded-md font-bold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 shadow-2xl flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto bg-[#A71920] hover:bg-[#8F131A] text-white border border-white/20 px-7 py-3 rounded-md font-bold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center justify-center"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-7 py-3 rounded-md font-bold text-sm sm:text-base transition-all backdrop-blur-sm flex items-center justify-center"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-6 sm:gap-8 text-white/80 text-xs sm:text-sm font-medium border-t border-white/10 pt-5 max-w-2xl w-full"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-white" />
            <span>Reliable IT Systems</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-white" />
            <span>Custom Software</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-white" />
            <span>IoT Automation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

