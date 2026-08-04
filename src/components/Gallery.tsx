import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, Cpu, Palette, Globe, GraduationCap, Code, X, ZoomIn } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageFileName: string;
  altNames?: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    id: 'carequeue',
    title: 'CareQueue',
    category: 'Web Applications',
    description: 'Hospital Queue & Patient Flow Management System streamlining medical clinic visits, patient triage, and digital appointments.',
    imageFileName: 'care.png',
    altNames: ['carequeue.png', 'carequeue.jpg', 'care.jpg', 'care.jpeg'],
    tags: ['Healthcare Tech', 'Queue Management', 'Web App']
  },
  {
    id: 'funsa-website',
    title: 'Funsa Suppliers Website',
    category: 'Web Applications',
    description: 'Modern corporate & e-commerce supply chain platform for Funsa Suppliers, showcasing products, wholesale hardware, and commercial operations.',
    imageFileName: 'funsa.png',
    altNames: ['funsasuppliers.png', 'funsa-website.png', 'funsa.jpg', 'funsa.jpeg', 'prop-website.jpg'],
    tags: ['Corporate Web', 'E-Commerce', 'Supply Chain']
  },
  {
    id: 'health-watch',
    title: 'Smart Health Watch',
    category: 'IoT Projects',
    description: 'IoT-based health monitoring system tracking vital statistics and transmitting telemetry to clinical dashboards in real-time.',
    imageFileName: 'watch.png',
    altNames: ['smart-watch.png', 'smartwatch.png', 'watch.jpg', 'smart-watch.jpg'],
    tags: ['IoT', 'Embedded Sensors', 'Real-Time Telemetry']
  },
  {
    id: 'business-branding',
    title: 'Business Branding Package',
    category: 'Branding & Design',
    description: 'Comprehensive brand identity, logo, typography system, posters, flyers, and digital marketing assets for corporate clients.',
    imageFileName: 'branding.png',
    altNames: ['branding.jpg', 'brand.png', 'brand.jpg', 'logo-design.png'],
    tags: ['Logo Design', 'Brand Identity', 'Marketing Collateral']
  },
  {
    id: 'ict-bootcamp',
    title: 'Practical ICT & Code Bootcamp',
    category: 'Training Programs',
    description: 'Hands-on computer training, digital literacy, and modern web application programming courses for students and corporate teams.',
    imageFileName: 'training.png',
    altNames: ['bootcamp.png', 'training.jpg', 'ict.png', 'bootcamp.jpg'],
    tags: ['ICT Training', 'Mentorship', 'Digital Skills']
  },
  {
    id: 'data-science-analytics',
    title: 'Smart Data Science & Business Insights',
    category: 'Business Solutions',
    description: 'Turn business data into actionable growth with sales analysis, profit & loss reports, stock forecasting, sales predictions, customer behavior insights, and clean dashboards led by Certified Data Analyst Tonny Chibambo.',
    imageFileName: 'data.png',
    altNames: ['datascience.png', 'analytics.png', 'data.jpg', 'datascience.jpg', 'analytics.jpg', 'data-science.png', 'erp.png'],
    tags: ['Data Science', 'Sales Analysis', 'Stock Forecasting', 'Business Insights']
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

const getProjectImageCandidates = (project: Project): string[] => {
  const primaryName = project.imageFileName;
  const baseName = primaryName.split('.')[0];
  const altNames = project.altNames || [];

  const rawNames = Array.from(new Set([
    primaryName,
    `${baseName}.png`,
    `${baseName}.PNG`,
    `${baseName}.jpg`,
    `${baseName}.jpeg`,
    `${baseName}.webp`,
    ...altNames
  ]));

  const candidates: string[] = [];
  rawNames.forEach(file => {
    candidates.push(`/images/gallery/${file}`);
    candidates.push(`/gallery/${file}`);
    candidates.push(`/${file}`);
    candidates.push(`/images/${file}`);
  });

  return candidates;
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imgCandidateIndices, setImgCandidateIndices] = useState<Record<string, number>>({});
  const [imgFailed, setImgFailed] = useState<Record<string, boolean>>({});

  const handleImageError = (projectId: string, project: Project) => {
    const candidates = getProjectImageCandidates(project);
    const currentIndex = imgCandidateIndices[projectId] || 0;

    if (currentIndex < candidates.length - 1) {
      setImgCandidateIndices(prev => ({ ...prev, [projectId]: currentIndex + 1 }));
    } else {
      setImgFailed(prev => ({ ...prev, [projectId]: true }));
    }
  };

  const getProjectSrc = (project: Project) => {
    const candidates = getProjectImageCandidates(project);
    const index = imgCandidateIndices[project.id] || 0;
    return candidates[index];
  };

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

        {/* Projects Grid (3x2 Grid for 6 Featured Projects) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const hasError = imgFailed[project.id];
              const imgSrc = getProjectSrc(project);

              return (
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
                    {/* Image Container with Grayscale-to-Color Transition & Fallback */}
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-[#4A0A10] via-[#8F131A] to-[#A71920] overflow-hidden">
                      {!hasError ? (
                        <img 
                          src={imgSrc} 
                          alt={project.title}
                          className="w-full h-full object-cover filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out opacity-90 group-hover:opacity-100"
                          onError={() => handleImageError(project.id, project)}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-white text-center relative bg-gradient-to-br from-[#4A0A10] via-[#8F131A] to-[#A71920]">
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-2 border border-white/20 shadow-md">
                            <Layers className="text-white" size={24} />
                          </div>
                          <span className="text-base font-extrabold tracking-wide uppercase">{project.title}</span>
                          <span className="text-[10px] text-white/70 mt-1 font-mono">{project.imageFileName}</span>
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/30 transition-all pointer-events-none" />
                      
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
              );
            })}
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
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[#4A0A10] via-[#8F131A] to-[#A71920] overflow-hidden">
                  {!imgFailed[selectedProject.id] ? (
                    <img
                      src={getProjectSrc(selectedProject)}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 ease-out"
                      onError={() => handleImageError(selectedProject.id, selectedProject)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-white text-center relative bg-gradient-to-br from-[#4A0A10] via-[#8F131A] to-[#A71920]">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-3 border border-white/20 shadow-md">
                        <Layers className="text-white" size={32} />
                      </div>
                      <span className="text-xl font-extrabold tracking-wide uppercase">{selectedProject.title}</span>
                      <span className="text-xs text-white/70 mt-1 font-mono">{selectedProject.imageFileName}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
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
