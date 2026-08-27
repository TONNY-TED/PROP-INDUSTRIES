import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Lightbulb, 
  Users, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  Cpu, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const stats = [
    { value: "2+", label: "Year of Innovation", desc: "Delivering continuous tech breakthroughs" },
    { value: "10+", label: "Projects Completed", desc: "Deployed software & IoT solutions" },
    { value: "10+", label: "Happy Clients", desc: "Corporate & enterprise partners" },
    { value: "100%", label: "Quality Commitment", desc: "Rigorous standards & uptime" }
  ];

  const pillars = [
    {
      icon: CheckCircle2,
      title: "Reliable & Scalable",
      desc: "Engineered for enterprise uptime, high security, and seamless expansion as your business grows."
    },
    {
      icon: Lightbulb,
      title: "Insight Driven",
      desc: "Transforming raw operational data into strategic, actionable business intelligence."
    },
    {
      icon: Users,
      title: "Client Focused",
      desc: "Custom-tailored technology solutions designed directly around your unique workflow needs."
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Support",
      desc: "Comprehensive service lifecycle from initial consulting and design to ongoing support."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Mesh Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-12 -left-20 w-96 h-96 bg-[#A71920]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-12 -right-20 w-96 h-96 bg-[#4A0A10]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-gray-200/80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#A71920]/10 border border-[#A71920]/20 px-3.5 py-1 rounded-full text-[#A71920] font-extrabold text-xs tracking-widest uppercase mb-4">
              <Sparkles size={14} /> About Prop Industries
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A0A10] leading-tight tracking-tight">
              Driving Growth Through <br className="hidden sm:block" />
              <span className="text-[#A71920]">Digital Innovation</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Prop Industries is a forward-thinking technology company delivering software development, web engineering, IoT systems, brand identity, and IT consulting to help businesses achieve sustainable digital transformation.
          </motion.p>
        </div>

        {/* 1. Metric Counter Banner (Top Highlight Bar) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#A71920]/30 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#A71920] group-hover:scale-105 transition-transform duration-300 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#4A0A10] uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-500 font-medium">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Mission Card (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-gradient-to-br from-[#4A0A10] via-[#751117] to-[#A71920] text-white p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Geometric Light Accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-black/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6 shadow-inner">
                <Target size={30} />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-white/70 block mb-2">
                Our Corporate Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-4">
                Empowering businesses through reliable, affordable & cutting-edge technology.
              </h3>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-xl">
                We bridge the gap between technical complexity and business growth. By offering end-to-end software engineering, smart hardware integration, and strategic digital consulting, we equip organizations with the tools needed to lead in their industry.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white/90 uppercase tracking-wider">
                  Success Through Insight
                </span>
              </div>
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 text-xs font-bold bg-white text-[#4A0A10] px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-colors shadow-md"
              >
                Explore Services <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Technology Suite Highlight Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white border border-gray-200/80 p-8 sm:p-10 rounded-3xl shadow-md flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#A71920]/10 border border-[#A71920]/20 flex items-center justify-center text-[#A71920]">
                  <Award size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-[#4A0A10]">
                    Prop Industries Suite
                  </h4>
                  <p className="text-xs font-semibold text-[#A71920]">
                    Integrated Tech Platform
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                From custom full-stack web architecture and cloud-hosted microservices to smart embedded IoT hardware dashboards, we build scalable platforms designed to streamline operations.
              </p>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs font-bold text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className="flex items-center gap-2">
                    <Cpu size={16} className="text-[#A71920]" /> Hardware & IoT
                  </span>
                  <span className="text-[#A71920]">Embedded Systems</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-[#A71920]" /> Data Analytics
                  </span>
                  <span className="text-[#A71920]">Actionable Insights</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-semibold">
                Blantyre, Malawi
              </span>
              <span className="text-xs font-extrabold text-[#A71920] uppercase tracking-wider">
                Built for Excellence
              </span>
            </div>
          </motion.div>
        </div>

        {/* 3. Four Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-[#A71920]/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-[#A71920] text-[#A71920] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-4 border border-gray-200 group-hover:border-[#A71920]">
                  <IconComponent size={20} />
                </div>
                <h4 className="text-base font-bold text-[#4A0A10] mb-2 group-hover:text-[#A71920] transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
