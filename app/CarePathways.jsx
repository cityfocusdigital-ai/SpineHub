"use client";

import React from "react";
import Link from "next/link";
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
      href: "/conditions/lower-back-pain",
      icon: <Activity className="w-6 h-6" />, // Smaller icon for inside the glass card
      desc: "Personalized care for back pain, neck pain, sciatica, slipped disc, stiffness, postural strain and degenerative spine conditions.",
      // Image of someone doing yoga/stretching (Spine focus)
      image: "/aman.png"
    },
    {
      id: 2,
      title: "Joint & spine Rehab",
      href: "/conditions/knee-osteoarthritis",
      icon: <Bone className="w-6 h-6" />,
      desc: "Programmes for knee, shoulder, hip and other joint problems, sports injuries and recovery after orthopaedic surgery.",
      image: "/sp.png"
    },
    {
      id: 3,
      title: "Neuro Rehabilitation",
      href: "/conditions/stroke-rehab",
      icon: <BrainCircuit className="w-6 h-6" />,
      desc: "Goal-based rehabilitation for stroke, paralysis, walking difficulty, balance problems and reduced strength or coordination.",
      // Image of medical/therapy setting
      image: "/ner.png"
    },
    {
      id: 4,
      title: "Integrative Pain Care",
      href: "/conditions/integrative-pain-care",
      icon: <HeartPulse className="w-6 h-6" />,
      desc: "Physiotherapy, manual therapy, chiropractic, osteopathy and supportive naturopathy approaches used responsibly within an individualized plan.",
      // Image of calm/nature/hands
      image: "/cer.png"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements (Subtle & Elegant) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#142A62]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C69A3C]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Introduction Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#C69A3C] font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
            Our Care Pathways
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(20,42,98)] mb-6 leading-tight">
            Recovery Begins with <span className="text-[#C69A3C]">Understanding</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At <strong className="text-[rgb(20,42,98)]">Aditya Spine &amp; Joint Rehab LLP</strong>, we assess your symptoms, posture, mobility, and strength before planning care. 
            Your programme combines guided exercise, hands-on therapy, and suitable rehabilitation technologies.
          </p>
        </div>

        {/* 4 Main Care Pathways Grid - Clean White Medical Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pathways.map((item) => (
            <Link
              key={item.id} 
              href={item.href}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/80 hover:border-[#C69A3C]/50 flex flex-col justify-between cursor-pointer"
            >
              
              {/* 1. Top Image Container */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />

                {/* Floating Icon Box */}
                <div className="absolute top-4 left-4 z-20 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-[rgb(20,42,98)] border border-slate-100">
                  {item.icon}
                </div>
              </div>

              {/* 2. Card Content in Crisp White Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <h3 className="text-xl font-bold text-[rgb(20,42,98)] mb-3 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[#C69A3C] group-hover:text-[#a07a2a] font-bold text-sm transition-colors">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* Bottom CTA Strip - Deep Royal Blue Banner */}
        <div className="mt-16 bg-[rgb(20,42,98)] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden border border-[#C69A3C]/30">
          {/* Subtle glow in CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C69A3C]/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="text-white relative z-10 text-center md:text-left space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Not sure which pathway is right for you?</h3>
            <p className="text-blue-100 text-sm sm:text-base">Book a comprehensive physical assessment with our clinical team today.</p>
          </div>
          <Link 
            href="/contact"
            className="relative z-10 px-8 py-4 bg-[#C69A3C] hover:bg-white text-[rgb(20,42,98)] font-bold rounded-xl transition-all shadow-lg shadow-black/20 flex items-center gap-2 whitespace-nowrap group shrink-0"
          >
            <span>Book Assessment</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
