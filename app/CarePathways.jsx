"use client";

import React from "react";
import { 
  Activity, 
  Bone, 
  BrainCircuit, 
  HeartPulse, 
  ArrowRight 
} from "lucide-react";

export default function CarePathways() {
  const pathways = [
    {
      id: 1,
      title: "Spine Rehabilitation",
      icon: <Activity className="w-6 h-6" />, // Smaller icon for inside the glass card
      desc: "Personalized care for back pain, neck pain, sciatica, slipped disc, stiffness, postural strain and degenerative spine conditions.",
      // Image of someone doing yoga/stretching (Spine focus)
      image: "/aman.png"
    },
    {
      id: 2,
      title: "Joint & spine Rehab",
      icon: <Bone className="w-6 h-6" />,
      desc: "Programmes for knee, shoulder, hip and other joint problems, sports injuries and recovery after orthopaedic surgery.",
      image: "sp.png"
    },
    {
      id: 3,
      title: "Neuro Rehabilitation",
      icon: <BrainCircuit className="w-6 h-6" />,
      desc: "Goal-based rehabilitation for stroke, paralysis, walking difficulty, balance problems and reduced strength or coordination.",
      // Image of medical/therapy setting
      image: "/ner.png"
    },
    {
      id: 4,
      title: "Integrative Pain Care",
      icon: <HeartPulse className="w-6 h-6" />,
      desc: "Physiotherapy, manual therapy, chiropractic, osteopathy and supportive naturopathy approaches used responsibly within an individualized plan.",
      // Image of calm/nature/hands
      image: "cer.png"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements (Subtle) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0071bd]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5973e]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Introduction Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[#0071bd] font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1e3f] mb-6 leading-tight">
            Recovery Begins with <span className="text-[#c5973e]">Understanding</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <strong className="text-[#0a1e3f]">Aditya Spine & Joint Rehab LLP</strong>, we assess your symptoms, posture, mobility, and strength before planning care. 
            Your programme combines guided exercise, hands-on therapy, and suitable rehabilitation technologies.
          </p>
        </div>

        {/* 4 Main Care Pathways Grid - WITH IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-[420px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100"
            >
              
              {/* 1. Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* 2. Dark Overlay (Gradient) - Makes text readable */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e3f]/10 via-[#0a1e3f]/40 to-[#0a1e3f]/90 group-hover:to-[#0a1e3f]/95 transition-colors duration-300"></div>

              {/* 3. Content Container (Glass Effect) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                
                {/* Icon Box - Floating at top or middle? Let's put it near top for style, or keep standard layout */}
                {/* Based on Image 1, icon is at top. Let's position it absolute top or just flex start */}
                <div className="absolute top-6 left-6">
                   <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#0071bd]">
                    {item.icon}
                  </div>
                </div>

                {/* Text Content - Bottom Aligned */}
                <div className="mt-auto space-y-4">
                  <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-200 text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                    {item.desc}
                  </p>

                  {/* Learn More Link */}
                  <div className="pt-2 flex items-center gap-2 text-[#c5973e] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-16 bg-[#0a1e3f] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
           {/* Subtle glow in CTA */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5973e]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

          <div className="text-white relative z-10">
            <h3 className="text-2xl font-bold mb-2">Not sure which pathway is right for you?</h3>
            <p className="text-gray-300">Book a comprehensive assessment with our clinical team today.</p>
          </div>
          <button className="relative z-10 px-8 py-4 bg-[#c5973e] hover:bg-[#b08535] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#c5973e]/20 flex items-center gap-2 whitespace-nowrap group">
            Book Assessment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}