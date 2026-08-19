import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LOGO_CANDIDATES = [
  '/images/gallery/logo.png',
  '/gallery/logo.png',
  '/images/gallery/prop.png',
  '/gallery/prop.png',
  '/images/gallery/logo.PNG',
  '/gallery/logo.PNG',
  '/images/gallery/logo.jpg',
  '/images/logo.png',
  '/logo.png',
  '/images/prop.png',
  '/prop.png',
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoError = () => {
    if (logoIndex < LOGO_CANDIDATES.length - 1) {
      setLogoIndex((prev) => prev + 1);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Team', href: '#team' },
    { name: 'Projects', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#4A0A10]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10'
          : 'bg-gradient-to-b from-[#4A0A10]/90 via-[#4A0A10]/50 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0 group">
          <img 
            src={LOGO_CANDIDATES[logoIndex]} 
            alt="Prop Industries Logo" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-sm"
            onError={handleLogoError}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-[#A71920] font-medium text-sm uppercase tracking-wider nav-link-underline transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#A71920] hover:bg-[#A71920]/90 text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-all shadow-lg shadow-[#A71920]/30 hover:scale-105 active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#4A0A10] border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-base font-medium hover:text-[#A71920] transition-colors py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#A71920] text-white text-center py-3 rounded-md font-semibold mt-2 text-sm shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
