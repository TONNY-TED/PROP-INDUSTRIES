import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, Cpu, Palette, Globe, GraduationCap, Code, X, ZoomIn } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 'carequeue',
    title: 'CareQueue',
    category: 'Web Applications',
    description: 'Hospital Queue & Patient Flow Management System streamlining medical clinic visits and digital appointments.',
    image: '/images/gallery/carequeue.jpg',
    tags: ['Healthcare Tech', 'Queue Management', 'Web App']
  },
  {
    title: 'Prop Industries Website',
    id: 'prop-website',
    category: 'Web Applications',
    description: 'Modern corporate website for Prop Industries showcasing digital solutions, IoT systems, and technology consulting.',
    image: '/images/gallery/prop-website.jpg',
    tags: ['Corporate Web', 'React', 'Tailwind CSS']
  },
  {
    id: 'health-watch',
    title: 'Smart Health Watch',
    category: 'IoT Projects',
    description: 'IoT-based health monitoring system tracking vital statistics and transmitting telemetry to clinical dashboards in real-time.',
    image: '/images/gallery/smart-watch.jpg',
    tags: ['IoT', 'Embedded Sensors', 'Real-Time Telemetry']
  },
  {
    id: 'business-branding',
    title: 'Business Branding Package',
    category: 'Branding & Design',
    description: 'Comprehensive brand identity, logo, typography system, posters, flyers, and digital marketing assets for corporate clients.',
    image: '/images/gallery/branding.jpg',
    tags: ['Logo Design', 'Brand Identity', 'Marketing Collateral']
  },
  {
    id: 'ict-bootcamp',
    title: 'Practical ICT & Code Bootcamp',
    category: 'Training Programs',
    description: 'Hands-on computer training, digital literacy, and modern web application programming courses for students and corporate teams.',
    image: '/images/gallery/training.jpg',
    tags: ['ICT Training', 'Mentorship', 'Digital Skills']
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise ERP & Inventory',
    category: 'Business Solutions',
    description: 'Custom internal software designed to manage inventory, business operations, sales records, and financial analytics.',
    image: '/images/gallery/erp.jpg',
    tags: ['Business Software', 'Analytics', 'Custom ERP']
  }
];

const categories = [
  'All Categories',
  'Web Applications',
  'IoT Projects',
  'Branding & Design',
  'Business Solutions',
  'Training Programs'
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All Categories'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#A71920]/10 border border-[#A71920]/20 text-[#A71920] px-4 py-1.5 rounded-full font-bold tracking-widest uppercase text-xs mb-4"
          >
            Portfolio & Showcase
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A0A10] mb-6"
          >
            Featured <span className="text-[#A71920]">Projects & Solutions</span>
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            Explore how Prop Industries delivers value through custom software, IoT automation, brand identity, and technical education. Click any project to view.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#A71920] text-white shadow-lg shadow-[#A71920]/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200/80 group flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                <div>
                  {/* Image Container with Fallback Gradient & Zoom Hint */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-[#4A0A10] to-[#A71920] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/30 transition-all" />
                    
                    <span className="absolute top-4 left-4 bg-[#A71920] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md z-10">
                      {project.category}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <span className="bg-white text-[#4A0A10] font-bold text-xs px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
                        <ZoomIn size={14} className="text-[#A71920]" /> Click to View
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#4A0A10] mb-2 group-hover:text-[#A71920] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Tags */}
                <div className="px-6 pb-6 pt-0 border-t border-gray-100 mt-auto">
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Image Preview Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-white/20 max-h-[90vh] flex flex-col"
              >
                {/* Modal Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-[#A71920] text-white p-2 rounded-full transition-colors backdrop-blur-md shadow-lg"
                >
                  <X size={20} />
                </button>

                {/* Modal Image */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[#4A0A10] to-[#A71920] overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-[#A71920] text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-md">
                    {selectedProject.category}
                  </span>
                </div>

                {/* Modal Info */}
                <div className="p-6 sm:p-8 overflow-y-auto">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4A0A10] mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold bg-[#4A0A10]/10 text-[#4A0A10] px-3 py-1 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center gap-2 bg-[#A71920] hover:bg-[#8F131A] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-md"
                    >
                      Inquire About This Solution
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
