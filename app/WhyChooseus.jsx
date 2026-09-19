"use client";

import React from "react";
import { CheckCircle2, Phone, ArrowRight, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Assessment Before Treatment",
      desc: "Symptoms and function are evaluated before a programme is recommended."
    },
    {
      title: "Structured Rehabilitation",
      desc: "Care is planned as a progression, not a random sequence of machines."
    },
    {
      title: "Personalized Treatment",
      desc: "Plan adjusted to patient’s condition, tolerance and personal goals."
    },
    {
      title: "Hands-on Plus Technology",
      desc: "Manual care and exercise supported by suitable rehab equipment when indicated."
    },
    {
      title: "Progress Monitoring",
      desc: "Pain, mobility, strength, walking, sleep and work tolerance reviewed regularly."
    },
    {
      title: "Patient Safety & Ethical Care",
      desc: "Contraindications, implants and medical history screened before treatment."
    }
  ];

  return (
    <section className="relative bg-white overflow-hidden py-20 lg:py-28">
      
      {/* WHY CHOOSE US SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Content - Sticky on Desktop */}
          <div className="lg:sticky lg:top-32 space-y-6">
            <span className="text-[#C69A3C] font-bold tracking-widest uppercase text-xs sm:text-sm block">
              Our Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(20,42,98)] leading-tight">
              Why Patients Trust <br />
              <span className="text-[#C69A3C]">
                Aditya Spine &amp; Joint
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              We don't just treat symptoms; we build a roadmap for your long-term recovery. Our evidence-based approach ensures every session counts towards your specific goals.
            </p>
            
            {/* Decorative Element */}
            <div className="flex items-center gap-4 pt-2">
              <div className="h-1 w-16 bg-[#C69A3C] rounded-full"></div>
              <span className="text-[rgb(20,42,98)] font-bold italic text-sm">Excellence in Advanced Care</span>
            </div>
          </div>

          {/* Right Content - Grid List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((item, index) => (
              <div 
                key={index} 
                className="group p-6 bg-slate-50/80 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:bg-white hover:border-[#C69A3C]/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-blue-100/60 flex items-center justify-center text-[rgb(20,42,98)] group-hover:bg-[#C69A3C] group-hover:text-[rgb(20,42,98)] transition-colors duration-300">
                    <CheckCircle2 size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-[rgb(20,42,98)] font-bold text-base sm:text-lg mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
