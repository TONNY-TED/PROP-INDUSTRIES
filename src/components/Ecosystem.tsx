import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Code2, Cpu, BarChart2, GraduationCap, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    title: "Insight-Driven Approach",
    description: "Every solution we develop starts with deep business analysis, ensuring strategic value and measurable outcomes.",
    icon: Lightbulb,
  },
  {
    title: "Agile Development",
    description: "Rapid, iterative software engineering ensuring high performance, responsive UI, and continuous deployment.",
    icon: Code2,
  },
  {
    title: "Smart Hardware & IoT",
    description: "Bridging physical sensors and embedded microcontrollers directly into real-time cloud analytics dashboards.",
    icon: Cpu,
  },
  {
    title: "Data Visualization",
    description: "Transforming raw data streams into intuitive executive reporting dashboards and actionable metrics.",
    icon: BarChart2,
  },
  {
    title: "Digital Capability Building",
    description: "Equipping teams and individuals with practical ICT skills and modern engineering mindsets.",
    icon: GraduationCap,
  },
  {
    title: "Uncompromising Quality",
    description: "Dedicated testing, robust security practices, and reliable long-term support for all deployments.",
    icon: ShieldCheck,
  }
];

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#A71920]/10 border border-[#A71920]/20 text-[#A71920] px-4 py-1.5 rounded-full font-bold tracking-widest uppercase text-xs mb-4"
            >
              Innovation Principles
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A0A10]"
            >
              The Prop Industries <span className="text-[#A71920]">Advantage</span>
            </motion.h3>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-md text-base sm:text-lg leading-relaxed"
          >
            Our core operating framework blends strategic business insight with modern engineering standards to ensure project success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200/80 hover:border-[#A71920]/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="p-3.5 bg-gray-100 rounded-lg group-hover:bg-[#A71920] text-[#4A0A10] group-hover:text-white transition-colors duration-300">
                  <item.icon size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#4A0A10] mb-2 group-hover:text-[#A71920] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
