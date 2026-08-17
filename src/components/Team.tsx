import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MessageCircle, UserCheck, X, ZoomIn, ArrowLeft, ExternalLink } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  bio: string;
  expertise: string[];
  email: string;
  phone?: string;
  whatsapp?: string;
  externalLink?: { label: string; url: string };
  imageFileName: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "tonny",
    name: "Tonny Chibambo",
    role: "CEO & Managing Director",
    category: "Executive Leadership",
    bio: "Visionary technology leader with extensive experience driving software engineering, IoT initiatives, and digital transformation strategy across enterprise domains.",
    expertise: ["Business Strategy", "Systems Architecture", "IT Consulting"],
    email: "tonnychibambo@gmail.com",
    imageFileName: "tonny.png",
    initials: "TC"
  },
  {
    id: "sam",
    name: "Sam Chibambo",
    role: "CEO at Funsa Suppliers & Marketing Officer at Prop Industries",
    category: "Executive & Marketing",
    bio: "Strategic business executive serving as CEO at Funsa Suppliers and Marketing Officer at Prop Industries, leading corporate growth, marketing campaigns, and commercial partnerships.",
    expertise: ["Marketing Strategy", "Executive Leadership", "Brand Elevation"],
    email: "Funsasuppliers125@gmail.com",
    imageFileName: "sam.png",
    initials: "SC"
  },
  {
    id: "francis",
    name: "Francis Manjomo",
    role: "CEO at Epic Inc., Graphic Designer, ICT Trainer & Community Lead",
    category: "Creative & ICT Lead",
    bio: "CEO at Epic Inc., creative graphic designer, ICT trainer, and community lead driving brand design, digital media, workforce training, and youth community development.",
    expertise: ["Graphic Design", "ICT Training", "Community Leadership", "Brand Identity"],
    email: "designwithepic@gmail.com",
    phone: "+265 888 04 04 53",
    externalLink: {
      label: "Visit Site (EPIC INC)",
      url: "https://francis-manjomo-portfolio.vercel.app/"
    },
    imageFileName: "francis.png",
    initials: "FM"
  },
  {
    id: "kondwani",
    name: "Kondwani Luhana",
    role: "Business Solution Lead",
    category: "Solutions Architecture",
    bio: "Business solution specialist analyzing corporate workflows, optimizing enterprise technology systems, and delivering tailored digital software solutions for operational efficiency.",
    expertise: ["Business Solutions", "Workflow Audits", "Systems Design"],
    email: "kluhana@propindustries.com",
    imageFileName: "kondwani.png",
    initials: "KL"
  },
  {
    id: "tendai",
    name: "Tendai Tchovan",
    role: "CEO at Tchovolts Electrical Services & Lead Software Engineer at Prop Industries",
    category: "Executive & Engineering",
    bio: "CEO at Tchovolts Electrical Services and Lead Software Engineer at Prop Industries, leading electrical engineering & power installation solutions alongside enterprise full-stack web and database architecture.",
    expertise: ["Tchovolts CEO", "Electrical Engineering", "Full-Stack Web", "Database Architecture"],
    email: "ttchovan@propindustries.com",
    externalLink: {
      label: "Tchovolts Electrical Services",
      url: "https://www.facebook.com/profile.php?id=61592083242843"
    },
    imageFileName: "tendai.png",
    initials: "TT"
  },
  {
    id: "tiyamike",
    name: "Tiyamike Chanonga",
    role: "CEO at Tiya's Beauty & ICT Training Lead at Prop Industries",
    category: "Executive & ICT Training",
    bio: "CEO at Tiya's Beauty and ICT Training Lead at Prop Industries, driving beauty industry entrepreneurship while directing practical computer bootcamps, digital skills mentorship, and corporate workforce technology training.",
    expertise: ["Tiya's Beauty CEO", "ICT Training", "Digital Literacy", "Workforce Upskilling"],
    email: "tchanonga@propindustries.com",
    whatsapp: "+265 882 30 44 93",
    imageFileName: "tiyamike.png",
    initials: "TC"
  }
];

const getCandidateImages = (fileName: string) => {
  const firstName = fileName.split('.')[0].toLowerCase();
  return [
    `/images/gallery/${firstName}.png`,
    `/gallery/${firstName}.png`,
    `/${firstName}.png`,
    `/images/${firstName}.png`,
    `/images/gallery/${firstName}.PNG`,
    `/images/gallery/${firstName}.jpg`,
    `/images/gallery/${firstName}.jpeg`,
    `/images/gallery/${firstName}.webp`,
    `/images/gallery/${fileName}`,
  ];
};

const Team = () => {
  const [candidateIndices, setCandidateIndices] = useState<Record<string, number>>({});
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMember]);

  const handleImgError = (id: string, fileName: string) => {
    const candidates = getCandidateImages(fileName);
    const currentIndex = candidateIndices[id] || 0;

    if (currentIndex < candidates.length - 1) {
      setCandidateIndices(prev => ({ ...prev, [id]: currentIndex + 1 }));
    } else {
      setImgErrors(prev => ({ ...prev, [id]: true }));
    }
  };

  const getMemberImgSrc = (id: string, fileName: string) => {
    const candidates = getCandidateImages(fileName);
    const index = candidateIndices[id] || 0;
    return candidates[index];
  };

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#4A0A10]/5 -skew-x-12 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#A71920]/10 border border-[#A71920]/20 text-[#A71920] px-4 py-1.5 rounded-full font-bold tracking-widest uppercase text-xs mb-4"
          >
            Leadership & Expertise
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A0A10] mb-6"
          >
            Meet the <span className="text-[#A71920]">Prop Industries Team</span>
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            Our multidisciplinary team unites visionary executives, software architects, hardware engineers, and marketing specialists committed to technical excellence. Click any profile photo to expand.
          </motion.p>
        </div>

        {/* Team Grid (Grid view on mobile and desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const hasError = imgErrors[member.id];
            const imgSrc = getMemberImgSrc(member.id, member.imageFileName);

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setSelectedMember(member)}
                className="bg-gray-50 border border-gray-200/80 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl hover:border-[#A71920]/40 transition-all duration-300 group flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                <div>
                  {/* Image Container - Cover Fit */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-[#2D060A] via-[#4A0A10] to-[#1E0407]">
                    {!hasError ? (
                      <img 
                        src={imgSrc} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-500 ease-out"
                        onError={() => handleImgError(member.id, member.imageFileName)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-3 sm:p-6 text-white text-center relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none" />
                        <span className="text-3xl sm:text-6xl font-black tracking-wider text-white/90 drop-shadow-md mb-1 sm:mb-2">
                          {member.initials}
                        </span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70 font-semibold max-w-[90%] line-clamp-1">
                          {member.name}
                        </span>
                      </div>
                    )}
                    
                    <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-white/95 backdrop-blur-md text-[#4A0A10] text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border border-gray-200/50 shadow-md max-w-[90%] truncate">
                      {member.category}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <span className="bg-white/90 text-[#4A0A10] font-bold text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1 sm:gap-1.5">
                        <ZoomIn size={12} className="text-[#A71920] shrink-0" /> View Photo
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3 sm:p-6 pb-2">
                    <h4 className="text-base sm:text-xl font-bold text-[#4A0A10] mb-0.5 sm:mb-1 group-hover:text-[#A71920] transition-colors leading-tight">
                      {member.name}
                    </h4>
                    <div className="text-[10px] sm:text-xs font-bold text-[#A71920] uppercase tracking-wider mb-2 sm:mb-3 leading-snug">
                      {member.role}
                    </div>

                    <p className="text-gray-600 text-[11px] sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-6 pt-0">
                  {/* Expertise Badges */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-5 pt-2 sm:pt-4 border-t border-gray-200/60">
                    {member.expertise.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-[9px] sm:text-[10px] font-bold bg-white text-gray-700 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-gray-200 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact Action */}
                  <div className="flex items-center justify-between pt-1 gap-2">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <a 
                        href={`mailto:${member.email}`} 
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-[#4A0A10] hover:text-[#A71920] transition-colors"
                      >
                        <Mail size={12} className="text-[#A71920] shrink-0" /> <span className="hidden xs:inline">Direct</span> Contact
                      </a>

                      {member.externalLink && (
                        <a
                          href={member.externalLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#A71920] hover:text-[#4A0A10] underline transition-colors"
                        >
                          <ExternalLink size={11} className="shrink-0" /> {member.externalLink.label}
                        </a>
                      )}
                    </div>
                    <div className="p-1 sm:p-1.5 rounded-md bg-white border border-gray-200 text-gray-400 group-hover:text-[#A71920] group-hover:border-[#A71920]/30 transition-colors shrink-0">
                      <UserCheck size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full-Page Selected Member Profile View Overlay */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 z-50 bg-[#120204]/90 backdrop-blur-xl overflow-y-auto p-3 sm:p-6 md:p-10 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 30 }}
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl relative border border-white/20 my-auto flex flex-col lg:flex-row min-h-[520px]"
              >
                {/* Top Action / Close Controls */}
                <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="bg-[#4A0A10] hover:bg-[#A71920] text-white p-2.5 rounded-full transition-colors backdrop-blur-md shadow-xl flex items-center justify-center cursor-pointer"
                    title="Close Full Profile"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Left Side: Full Picture Stage */}
                <div className="w-full lg:w-5/12 xl:w-1/2 bg-gradient-to-br from-[#2D060A] via-[#4A0A10] to-[#150204] relative flex flex-col items-center justify-center min-h-[350px] lg:min-h-full overflow-hidden">
                  <div className="relative w-full h-full min-h-[350px] lg:min-h-[500px]">
                    {!imgErrors[selectedMember.id] ? (
                      <img 
                        src={getMemberImgSrc(selectedMember.id, selectedMember.imageFileName)} 
                        alt={selectedMember.name}
                        className="w-full h-full object-cover object-top filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 ease-out"
                        onError={() => handleImgError(selectedMember.id, selectedMember.imageFileName)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-white text-center">
                        <span className="text-8xl font-black text-white/90 mb-3">{selectedMember.initials}</span>
                        <span className="text-base font-bold uppercase tracking-widest text-white/70">{selectedMember.name}</span>
                      </div>
                    )}
                  </div>

                  <span className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#A71920] text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg border border-white/20">
                    {selectedMember.category}
                  </span>
                </div>

                {/* Right Side: Detailed Profile Information */}
                <div className="w-full lg:w-7/12 xl:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white text-gray-900">
                  <div>
                    {/* Header Tag */}
                    <div className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#A71920] bg-[#A71920]/10 px-3 py-1 rounded-full mb-3">
                      Executive Team Profile
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4A0A10] tracking-tight mb-2">
                      {selectedMember.name}
                    </h2>

                    <div className="text-xs sm:text-sm font-bold text-[#A71920] uppercase tracking-wider mb-6 pb-4 border-b border-gray-100">
                      <span>{selectedMember.role}</span>
                    </div>

                    {/* Executive Biography */}
                    <div className="mb-6">
                      <h4 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">
                        Biography & Profile
                      </h4>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    </div>

                    {/* Core Expertise & Competencies */}
                    <div className="mb-8">
                      <h4 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-3">
                        CORE EXPERTISE AND LEADERSHIP
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.expertise.map(skill => (
                          <span key={skill} className="text-xs font-bold bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg border border-gray-200/80 shadow-2xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap">
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="inline-flex items-center justify-center gap-2 bg-[#4A0A10] hover:bg-[#A71920] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg flex-1 min-w-[180px]"
                      >
                        <Mail size={16} /> Direct Email ({selectedMember.email})
                      </a>

                      {selectedMember.whatsapp && (
                        <a
                          href={`https://wa.me/${selectedMember.whatsapp.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg flex-1 min-w-[180px]"
                        >
                          <MessageCircle size={16} /> WhatsApp ({selectedMember.whatsapp})
                        </a>
                      )}

                      {selectedMember.phone && !selectedMember.whatsapp && (
                        <a
                          href={`tel:${selectedMember.phone.replace(/\s+/g, '')}`}
                          className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg flex-1 min-w-[180px]"
                        >
                          <Phone size={16} /> Call: {selectedMember.phone}
                        </a>
                      )}

                      {selectedMember.externalLink && (
                        <a
                          href={selectedMember.externalLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg flex-1 min-w-[180px]"
                        >
                          <ExternalLink size={16} /> {selectedMember.externalLink.label}
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedMember(null)}
                      className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer w-full mt-1"
                    >
                      <ArrowLeft size={16} /> Return to Team
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Culture & Hiring Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-gradient-to-r from-[#4A0A10] to-[#A71920] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-start gap-4 z-10">
            <div className="p-3 bg-white/10 rounded-xl border border-white/20 shrink-0 hidden sm:block">
              <Mail className="text-white" size={28} />
            </div>
            <div>
              <div className="inline-block bg-white/20 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white mb-2">
                Join Our Network
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Passionate About Digital Innovation & ICT?
              </h4>
              <p className="text-xs sm:text-sm text-white/80 max-w-2xl">
                We are always looking for talented software developers, IoT engineers, graphic designers, and technical interns to join our growing innovation team. Send your resume directly to our CEO.
              </p>
            </div>
          </div>

          <a 
            href={`mailto:tonnychibambo@gmail.com?subject=${encodeURIComponent('Application: Join Prop Industries Team')}&body=${encodeURIComponent('Hello Tonny Chibambo,\n\nI am interested in joining the Prop Industries team.\n\nFull Name:\nArea of Expertise / Skills:\nPhone / Contact Number:\n\nThank you!')}`}
            className="whitespace-nowrap bg-white hover:bg-gray-100 text-[#4A0A10] px-6 py-3.5 rounded-lg font-bold text-sm transition-all shadow-lg hover:scale-105 z-10 inline-flex items-center gap-2"
          >
            <Mail size={16} /> Join the Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
