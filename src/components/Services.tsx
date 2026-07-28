import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Laptop, 
  Radio, 
  BarChart3, 
  Palette, 
  Wrench, 
  GraduationCap, 
  Network,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites and web applications designed for maximum performance, SEO, and engagement.",
    icon: Globe,
    badge: "Digital Web"
  },
  {
    title: "Software Development",
    description: "Custom software applications tailored specifically to your business workflows and operational goals.",
    icon: Laptop,
    badge: "Custom Apps"
  },
  {
    title: "IoT Solutions",
    description: "Smart automation, sensor integration, and embedded systems connecting hardware to real-time software.",
    icon: Radio,
    badge: "Smart Automation"
  },
  {
    title: "Data Analytics",
    description: "Data visualization, reporting dashboards, and actionable intelligence to back strategic decisions.",
    icon: BarChart3,
    badge: "Insights"
  },
  {
    title: "Graphic Design & Branding",
    description: "Eye-catching logos, marketing collateral, posters, flyers, and unified brand identity packages.",
    icon: Palette,
    badge: "Creative"
  },
  {
    title: "IT Consulting",
    description: "Professional technology strategy, systems auditing, cybersecurity guidance, and ongoing support.",
    icon: Wrench,
    badge: "Strategy"
  },
  {
    title: "Computer Training",
    description: "Practical ICT, digital literacy, and hands-on programming bootcamps for individuals and enterprise staff.",
    icon: GraduationCap,
    badge: "Skills & Ed"
  },
  {
    title: "Networking & Hardware",
    description: "Enterprise network design, server deployment, hardware maintenance, and troubleshooting.",
    icon: Network,
    badge: "Infrastructure"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#4A0A10] text-white relative overflow-hidden">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4A0A10] via-[#A71920]/40 to-[#4A0A10]" />
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1.5px, transparent 1.5px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-[#FFFFFF] font-bold tracking-widest uppercase text-xs mb-4"
          >
            Services & Solutions
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Empowering Business Through <span className="text-[#A71920] bg-white px-2 py-0.5 rounded-md">Smart Solutions</span>
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-base sm:text-lg leading-relaxed"
          >
            We deliver comprehensive technology services designed to scale your operational capabilities and establish a distinct market presence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-white/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#A71920] text-white flex items-center justify-center rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon size={24} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-white/10 text-white rounded-full border border-white/10">
                    {service.badge}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors">
                  {service.title}
                </h4>

                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <a 
                href={`mailto:tonnychibambo@gmail.com?subject=${encodeURIComponent(`Service Request: ${service.title}`)}&body=${encodeURIComponent(`Hello Prop Industries,\n\nI would like to request the ${service.title} service.\n\nPlease contact me regarding project details and timeline.\n\nThank you!`)}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-red-200 transition-colors pt-4 border-t border-white/10"
              >
                Request Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-white via-gray-100 to-white text-[#4A0A10] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div>
            <h4 className="text-2xl sm:text-3xl font-extrabold mb-2 text-[#4A0A10]">Have a Custom Project in Mind?</h4>
            <p className="text-sm sm:text-base text-gray-700 max-w-2xl">
              Talk to our technical team today to discuss custom software development, IoT automation, or enterprise branding packages.
            </p>
          </div>

          <a 
            href={`mailto:tonnychibambo@gmail.com?subject=${encodeURIComponent('Quote Request: Custom Project')}&body=${encodeURIComponent('Hello Prop Industries,\n\nI would like to request a quote for a custom project.\n\nProject details:\n\nThank you!')}`}
            className="whitespace-nowrap bg-[#A71920] hover:bg-[#8F131A] text-white px-8 py-4 rounded-lg font-bold text-base transition-all shadow-xl hover:scale-105"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
