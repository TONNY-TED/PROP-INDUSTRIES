import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  "/images/hero/slide-1.jpg",
  "/images/hero/slide-2.jpg",
  "/images/hero/slide-3.jpg",
  "/images/hero/slide-4.jpg",
  "/images/hero/slide-5.jpg"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative min-h-[70vh] lg:min-h-[80vh] w-full overflow-hidden bg-[#4A0A10] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with Crimson & Burgundy Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[4000ms] scale-105"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Network Dots Background Effect & Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#38070C]/90 via-[#A71920]/70 to-[#38070C]/90 opacity-75" />
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
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

      {/* Slide Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 hover:bg-white/20 text-white transition-colors hidden md:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 hover:bg-white/20 text-white transition-colors hidden md:block"
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              currentIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/40'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
