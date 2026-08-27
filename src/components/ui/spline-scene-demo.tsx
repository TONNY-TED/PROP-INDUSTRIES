'use client'

import React from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Sparkles, ArrowRight, Layers, Cpu, Compass } from "lucide-react";
import { motion } from "framer-motion";

export function SplineSceneBasic() {
  return (
    <section id="interactive-3d" className="w-full py-12 sm:py-16 px-4 bg-[#120204] relative overflow-hidden border-y border-[#A71920]/20">
      {/* Subtle ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 bg-[#A71920]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-[#4A0A10]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Card className="w-full min-h-[480px] lg:min-h-[520px] bg-gradient-to-br from-[#1c0307] via-[#140205] to-[#240408] border border-[#A71920]/30 relative overflow-hidden shadow-2xl shadow-black/80 rounded-3xl">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
          />
          
          <div className="flex flex-col lg:flex-row items-stretch h-full min-h-[480px] lg:min-h-[520px]">
            {/* Left Content Column */}
            <div className="flex-1 p-6 sm:p-10 lg:p-12 relative z-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A71920]/20 border border-[#A71920]/40 text-[#ff8088] text-xs font-bold uppercase tracking-widest w-fit mb-5 shadow-sm">
                  <Sparkles size={14} className="text-[#ff8088] animate-pulse" />
                  <span>3D Digital Innovation</span>
                </div>

                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                  Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-[#ff8088]">3D & Spatial</span> Systems
                </h3>
                
                <p className="mt-4 text-red-100/80 max-w-xl text-sm sm:text-base leading-relaxed">
                  Complementing our software and web solutions, Prop Industries develops real-time 3D web applications, interactive product models, and IoT robotic telemetry simulations engineered for high-performance interactivity.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#A71920] to-[#780e14] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#A71920]/40 hover:shadow-[#A71920]/70 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Launch Project</span>
                    <ArrowRight size={16} />
                  </a>

                  <div className="flex items-center gap-3 text-xs text-red-200/80 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Layers size={14} className="text-[#ff8088]" /> WebGL & Spline
                    </span>
                    <span className="text-red-800">•</span>
                    <span className="flex items-center gap-1.5">
                      <Cpu size={14} className="text-[#ff8088]" /> IoT Simulation
                    </span>
                    <span className="text-red-800 hidden sm:inline">•</span>
                    <span className="hidden sm:flex items-center gap-1.5">
                      <Compass size={14} className="text-[#ff8088]" /> 60fps Native
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right 3D Interactive Column */}
            <div className="flex-1 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[520px] w-full flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[#A71920]/20 bg-[#120204]/40">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default SplineSceneBasic;
