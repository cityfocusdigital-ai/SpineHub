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
    <section className="relative bg-slate-50 overflow-hidden">
      
      {/* WHY CHOOSE US SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content - Sticky on Desktop */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <span className="text-[#0071bd] font-bold tracking-widest uppercase text-sm">
              Our Commitment
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1e3f] leading-tight">
              Why Patients Trust <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5973e] to-[#e8c678]">
                Aditya Spine & Joint
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              We don't just treat symptoms; we build a roadmap for your long-term recovery. Our evidence-based approach ensures every session counts towards your specific goals.
            </p>
            
            {/* Decorative Element */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-1 w-20 bg-[#c5973e]"></div>
              <span className="text-[#0a1e3f] font-bold italic">Excellence in Advanced Care</span>
            </div>
          </div>

          {/* Right Content - Grid List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#c5973e]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#0071bd]/10 flex items-center justify-center text-[#0071bd] group-hover:bg-[#c5973e] group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 size={18} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-[#0a1e3f] font-bold text-lg mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
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