import React from 'react';
import { Mail, Phone, MapPin, ChevronRight, ArrowUp, MessageCircle } from 'lucide-react';

const LOGO_CANDIDATES = [
  '/images/gallery/logo.png',
  '/gallery/logo.png',
  '/images/gallery/logo.PNG',
  '/gallery/logo.PNG',
  '/images/gallery/logo.jpg',
  '/images/gallery/prop.png',
  '/prop.png',
  '/logo.png',
  '/images/prop.png',
  '/images/logo.png',
  '/prop.jpg',
  '/logo.jpg',
  '/prop.jpeg',
  '/logo.jpeg',
  '/prop.svg',
  '/logo.svg',
  '/prop.PNG',
  '/logo.PNG',
  '/images/prop.PNG',
  '/images/logo.PNG',
  '/images/prop-industries-logo.png',
];

const Footer = () => {
  const [logoIndex, setLogoIndex] = React.useState(0);
  const [hasLogoError, setHasLogoError] = React.useState(false);

  const handleLogoError = () => {
    if (logoIndex < LOGO_CANDIDATES.length - 1) {
      setLogoIndex((prev) => prev + 1);
    } else {
      setHasLogoError(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#2D060A] via-[#1A0306] to-[#0D0204] text-white pt-16 pb-10 relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#A71920] via-red-500 to-[#A71920]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="/" className="flex items-center shrink-0 group">
              {!hasLogoError ? (
                <img 
                  src={LOGO_CANDIDATES[logoIndex]} 
                  alt="Prop Industries Logo" 
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-md"
                  onError={handleLogoError}
                />
              ) : (
                <div>
                  <span className="text-xl font-extrabold tracking-wider text-white block leading-none">
                    PROP INDUSTRIES
                  </span>
                  <span className="text-[10px] text-red-300 font-bold uppercase tracking-widest block mt-0.5">
                    Success Through Insight
                  </span>
                </div>
              )}
            </a>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Premier technology & innovation firm offering enterprise software development, web engineering, IoT systems, brand design, IT consulting, and workforce ICT training.
            </p>

            <div className="pt-2">
              <a 
                href="https://wa.me/265996464291"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-all shadow-md hover:shadow-emerald-900/30 border border-emerald-500/30"
              >
                <MessageCircle size={15} /> Quick WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-red-300 mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A71920]" /> Core Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={14} className="text-[#A71920] group-hover:translate-x-1 transition-transform" /> Web Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={14} className="text-[#A71920] group-hover:translate-x-1 transition-transform" /> Software Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={14} className="text-[#A71920] group-hover:translate-x-1 transition-transform" /> IoT & Embedded Hardware
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={14} className="text-[#A71920] group-hover:translate-x-1 transition-transform" /> Data Analytics & Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={14} className="text-[#A71920] group-hover:translate-x-1 transition-transform" /> Graphic Design & Branding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={14} className="text-[#A71920] group-hover:translate-x-1 transition-transform" /> ICT Training & Mentorship
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-red-300 mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A71920]" /> Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <a href="#home" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={14} className="text-[#A71920] group-hover:translate-x-1 transition-transform" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={14} className="text-[#A71920] group-hover:translate-x-1 transition-transform" /> About Us & Mission
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={14} className="text-[#A71920] group-hover:translate-x-1 transition-transform" /> Innovation Framework
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={14} className="text-[#A71920] group-hover:translate-x-1 transition-transform" /> Executive Team
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={14} className="text-[#A71920] group-hover:translate-x-1 transition-transform" /> Featured Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={14} className="text-[#A71920] group-hover:translate-x-1 transition-transform" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Card */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-red-300 mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A71920]" /> Direct Contact
            </h4>
            
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-3.5 shadow-inner">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#A71920]/20 rounded-lg text-red-300 shrink-0 mt-0.5 border border-[#A71920]/30">
                  <Phone size={15} />
                </div>
                <div className="flex flex-col text-xs gap-1">
                  <a href="tel:+265996464291" className="font-bold text-gray-200 hover:text-white transition-colors">
                    +265 996 464 291
                  </a>
                  <a href="tel:+265888081368" className="font-bold text-gray-200 hover:text-white transition-colors">
                    +265 888 081 368
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#A71920]/20 rounded-lg text-red-300 shrink-0 mt-0.5 border border-[#A71920]/30">
                  <Mail size={15} />
                </div>
                <div className="flex flex-col text-xs gap-0.5">
                  <a href="mailto:tonnychibambo@gmail.com" className="font-bold text-gray-200 hover:text-white transition-colors break-all">
                    tonnychibambo@gmail.com
                  </a>
                  <a href="mailto:info@propindustries.com" className="text-[11px] text-gray-400 hover:text-white transition-colors">
                    info@propindustries.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#A71920]/20 rounded-lg text-red-300 shrink-0 mt-0.5 border border-[#A71920]/30">
                  <MapPin size={15} />
                </div>
                <div className="text-xs font-semibold text-gray-200 pt-1">
                  Blantyre, Malawi
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-bold">Prop Industries</span>. All rights reserved. <span className="hidden sm:inline">| Success Through Insight.</span>
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-300 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 shadow-sm cursor-pointer"
          >
            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-[#A71920]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
