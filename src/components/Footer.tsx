import React from 'react';
import { Mail, Phone, MapPin, ChevronRight, ArrowUp } from 'lucide-react';

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
    <footer className="bg-[#4A0A10] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="/" className="flex items-center shrink-0 group">
              {!hasLogoError ? (
                <img 
                  src={LOGO_CANDIDATES[logoIndex]} 
                  alt="Prop Industries Logo" 
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                  onError={handleLogoError}
                />
              ) : (
                <div>
                  <span className="text-xl font-extrabold tracking-wider text-white block leading-none">
                    PROP INDUSTRIES
                  </span>
                  <span className="text-[10px] text-red-200/80 font-bold uppercase tracking-widest block mt-0.5">
                    Success Through Insight
                  </span>
                </div>
              )}
            </a>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Technology & innovation firm offering software development, web engineering, IoT systems, graphic design, IT consulting, and ICT training.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-red-200 mb-4 pb-2 border-b border-white/10">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-[#A71920]" /> Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-[#A71920]" /> Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-[#A71920]" /> IoT Solutions & Embedded
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-[#A71920]" /> Data Analytics & BI
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-[#A71920]" /> Graphic Design & Branding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-[#A71920]" /> Computer Training & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-red-200 mb-4 pb-2 border-b border-white/10">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <a href="#home" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-[#A71920]" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-[#A71920]" /> About Us & Mission
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-[#A71920]" /> Innovation Framework
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-[#A71920]" /> Leadership & Team
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-[#A71920]" /> Featured Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-[#A71920]" /> Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-red-200 mb-4 pb-2 border-b border-white/10">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#A71920] shrink-0 mt-0.5" />
                <a href="tel:+2656464291" className="hover:text-white transition-colors">
                  +265 646 4291
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#A71920] shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@propindustries.com" className="block hover:text-white transition-colors">
                    info@propindustries.com
                  </a>
                  <a href="mailto:tonnychibambo@gmail.com" className="text-xs text-white/60 hover:text-white transition-colors">
                    tonnychibambo@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#A71920] shrink-0 mt-0.5" />
                <span>Lilongwe, Malawi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-bold">Prop Industries</span>. All rights reserved. Success Through Insight.
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-200 hover:text-white transition-colors group"
          >
            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
