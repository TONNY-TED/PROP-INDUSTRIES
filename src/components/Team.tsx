import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Sparkles, UserCheck, X, ZoomIn } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  bio: string;
  expertise: string[];
  email: string;
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
    role: "Marketing Director",
    category: "Marketing & Growth",
    bio: "Strategic growth leader overseeing corporate communications, digital marketing campaigns, brand elevation, and strategic client partnerships.",
    expertise: ["Digital Marketing", "Brand Strategy", "Client Relations"],
    email: "schibambo@propindustries.com",
    imageFileName: "sam.png",
    initials: "SC"
  },
  {
    id: "sangwani",
    name: "Sangwani Chimpololo",
    role: "Lead IoT & Hardware Engineer",
    category: "Smart Systems & Hardware",
    bio: "Pioneer in embedded systems and microcontrollers, bridging hardware sensor arrays with real-time software dashboards for industrial and health automation.",
    expertise: ["Embedded Hardware", "Microcontrollers", "Telemetry Systems"],
    email: "schimpololo@propindustries.com",
    imageFileName: "sangwani.png",
    initials: "SC"
  },
  {
    id: "sphiwe",
    name: "Sphiwe Chibwana",
    role: "Business Solution Lead",
    category: "Solutions Architecture",
    bio: "Business systems specialist analyzing corporate workflows, optimizing ERP implementations, and delivering tailored software solutions for operational efficiency.",
    expertise: ["ERP Solutions", "Workflow Audits", "Systems Design"],
    email: "schibwana@propindustries.com",
    imageFileName: "sphiwe.png",
    initials: "SC"
  },
  {
    id: "michael",
    name: "Michael Chimp",
    role: "Lead Software Engineer",
    category: "Engineering & Web",
    bio: "Full-stack software architect developing high-performance web applications, scalable database systems, and secure API integrations for enterprise web platforms.",
    expertise: ["Full-Stack Web", "Database Architecture", "Cloud APIs"],
    email: "mchimp@propindustries.com",
    imageFileName: "michael.png",
    initials: "MC"
  },
  {
    id: "tiyamike",
    name: "Tiyamike Chanonga",
    role: "ICT Training & Community Lead",
    category: "Education & Capacity",
    bio: "Digital skills mentor leading practical computer bootcamps, community outreach programs, and corporate workforce technology training initiatives.",
    expertise: ["ICT Training", "Digital Literacy", "Workforce Upskilling"],
    email: "tchanonga@propindustries.com",
    imageFileName: "tiyamike.png",
    initials: "TC"
  }
];

const Team = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleImgError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const hasError = imgErrors[member.id];
            const primaryImgPath = `/images/gallery/${member.imageFileName}`;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setSelectedMember(member)}
                className="bg-gray-50 border border-gray-200/80 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-[#A71920]/40 transition-all duration-300 group flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                <div>
                  {/* Large Square Image Container */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-[#4A0A10] via-[#8F131A] to-[#A71920]">
                    {!hasError ? (
                      <img 
                        src={primaryImgPath} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImgError(member.id)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-white text-center relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none" />
                        <span className="text-6xl font-black tracking-wider text-white/90 drop-shadow-md mb-2">
                          {member.initials}
                        </span>
                        <span className="text-xs uppercase tracking-widest text-white/70 font-semibold max-w-[80%]">
                          {member.name}
                        </span>
                      </div>
                    )}
                    
                    <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-[#4A0A10] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md border border-gray-200/50 shadow-md">
                      {member.category}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-xs">
                      <span className="bg-white/90 text-[#4A0A10] font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                        <ZoomIn size={14} className="text-[#A71920]" /> View Photo
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 pb-2">
                    <h4 className="text-xl font-bold text-[#4A0A10] mb-1 group-hover:text-[#A71920] transition-colors">
                      {member.name}
                    </h4>
                    <div className="text-xs font-bold text-[#A71920] uppercase tracking-wider mb-3">
                      {member.role}
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  {/* Expertise Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-gray-200/60">
                    {member.expertise.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-[10px] font-bold bg-white text-gray-700 px-2.5 py-1 rounded-md border border-gray-200 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact Action */}
                  <div className="flex items-center justify-between pt-1">
                    <a 
                      href={`mailto:${member.email}`} 
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A0A10] hover:text-[#A71920] transition-colors"
                    >
                      <Mail size={14} className="text-[#A71920]" /> Direct Contact
                    </a>
                    <div className="p-1.5 rounded-md bg-white border border-gray-200 text-gray-400 group-hover:text-[#A71920] group-hover:border-[#A71920]/30 transition-colors">
                      <UserCheck size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Member Lightbox Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl relative border border-white/20 max-h-[90vh] flex flex-col"
              >
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-[#A71920] text-white p-2 rounded-full transition-colors backdrop-blur-md shadow-lg"
                >
                  <X size={20} />
                </button>

                <div className="relative w-full aspect-square max-h-80 bg-gradient-to-br from-[#4A0A10] via-[#8F131A] to-[#A71920] overflow-hidden">
                  {!imgErrors[selectedMember.id] ? (
                    <img 
                      src={`/images/gallery/${selectedMember.imageFileName}`} 
                      alt={selectedMember.name}
                      className="w-full h-full object-cover object-top"
                      onError={() => handleImgError(selectedMember.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-white text-center">
                      <span className="text-7xl font-black text-white/90 mb-2">{selectedMember.initials}</span>
                      <span className="text-sm font-bold uppercase tracking-widest text-white/70">{selectedMember.name}</span>
                    </div>
                  )}
                  <span className="absolute bottom-4 left-4 bg-[#A71920] text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-md shadow-md">
                    {selectedMember.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto">
                  <h3 className="text-2xl font-extrabold text-[#4A0A10] mb-1">
                    {selectedMember.name}
                  </h3>
                  <div className="text-xs font-extrabold text-[#A71920] uppercase tracking-wider mb-4">
                    {selectedMember.role}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {selectedMember.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedMember.expertise.map(skill => (
                      <span key={skill} className="text-xs font-bold bg-gray-100 text-gray-800 px-3 py-1 rounded-md border border-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="inline-flex items-center gap-2 bg-[#4A0A10] hover:bg-[#A71920] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors shadow-md"
                    >
                      <Mail size={16} /> Contact {selectedMember.name.split(' ')[0]}
                    </a>
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
              <Sparkles className="text-white" size={28} />
            </div>
            <div>
              <div className="inline-block bg-white/20 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white mb-2">
                Join Our Network
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Passionate About Digital Innovation & ICT?
              </h4>
              <p className="text-xs sm:text-sm text-white/80 max-w-2xl">
                We are always looking for talented software developers, IoT engineers, graphic designers, and technical interns to join our growing innovation team.
              </p>
            </div>
          </div>

          <a 
            href="#contact" 
            className="whitespace-nowrap bg-white hover:bg-gray-100 text-[#4A0A10] px-6 py-3.5 rounded-lg font-bold text-sm transition-all shadow-lg hover:scale-105 z-10"
          >
            Join the Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
