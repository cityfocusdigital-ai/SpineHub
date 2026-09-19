"use client";

import React from "react";
import Link from "next/link";
import { 
  FileText, Activity, Compass, Dumbbell, TrendingUp, ShieldCheck, 
  ArrowRight, Phone, MessageCircle, CalendarCheck, CheckCircle2, UserCheck
} from "lucide-react";

const journeyStages = [
  {
    step: "01",
    title: "Consultation & History",
    subtitle: "Understanding Your Health Profile & Safety Screening",
    icon: FileText,
    badgeBg: "bg-blue-50 text-[rgb(20,42,98)] border-blue-200",
    details: "Symptoms, past medical history, previous surgeries, metallic implants, current medications, personal goals, and red-flag safety information are thoroughly reviewed."
  },
  {
    step: "02",
    title: "Clinical & Functional Assessment",
    subtitle: "Objective Movement, Strength & Postural Evaluation",
    icon: Activity,
    badgeBg: "bg-amber-50 text-amber-900 border-amber-200",
    details: "Movement patterns, posture, muscle strength, joint mobility, standing balance, walking gait, and any relevant MRI or X-ray reports are evaluated by our clinicians."
  },
  {
    step: "03",
    title: "Personalized Rehabilitation Plan",
    subtitle: "Clear Recovery Blueprint & Realistic Goal Setting",
    icon: Compass,
    badgeBg: "bg-indigo-50 text-indigo-900 border-indigo-200",
    details: "The lead clinician explains treatment priorities, recommended session frequency, home activity guidance, and realistic functional milestones tailored to your lifestyle."
  },
  {
    step: "04",
    title: "Guided Treatment & Exercise",
    subtitle: "Integrating Hands-On Care, Modalities & Active Movement",
    icon: Dumbbell,
    badgeBg: "bg-emerald-50 text-emerald-900 border-emerald-200",
    details: "Hands-on manual therapy, targeted therapeutic exercise, and suitable rehabilitation technology are combined dynamically according to clinical need."
  },
  {
    step: "05",
    title: "Progress Review",
    subtitle: "Measuring Functional Gains & Adjusting Your Plan",
    icon: TrendingUp,
    badgeBg: "bg-purple-50 text-purple-900 border-purple-200",
    details: "Pain levels, daily function, joint range, strength, walking endurance, work tolerance, and day-to-day activities are reassessed periodically to adjust your care plan."
  },
  {
    step: "06",
    title: "Long-Term Self-Management",
    subtitle: "Empowerment, Education & Recurrence Prevention",
    icon: ShieldCheck,
    badgeBg: "bg-rose-50 text-rose-900 border-rose-200",
    details: "Patients receive tailored education, ergonomic advice, and home exercise routines intended to maintain clinical gains and significantly reduce recurrence risk."
  }
];

export default function PatientJourneyPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- HERO BANNER --- */}
      <section className="relative pt-32 pb-20 bg-[rgb(20,42,98)] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C69A3C]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-[#E5C158] uppercase tracking-widest">
            <UserCheck size={14} className="text-[#E5C158]" />
            <span>Structured Clinical Care Pathway</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Your Patient Recovery Journey
          </h1>

          <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            At Aditya Spine &amp; Joint Rehab, recovery is a guided, 6-stage process. From your initial clinical assessment through active rehabilitation and long-term self-management, every step is designed for safety, transparency, and lasting results.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-bold text-blue-200">
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 size={14} className="text-[#C69A3C]" /> Assessment-Led Care
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 size={14} className="text-[#C69A3C]" /> Periodically Reassessed
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 size={14} className="text-[#C69A3C]" /> Long-Term Recurrence Prevention
            </span>
          </div>
        </div>
      </section>

      {/* --- TIMELINE PROCESS STAGES --- */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-20 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#C69A3C] font-bold uppercase tracking-wider text-xs">Step-By-Step Overview</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[rgb(20,42,98)] font-bold">
            What You Can Expect At Every Stage
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Transparent clinical steps designed to give you clarity and confidence throughout your recovery.
          </p>
        </div>

        {/* Vertical Timeline Card Layout */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:-translate-x-1/2 before:w-1 before:bg-gradient-to-b before:from-[rgb(20,42,98)] before:via-[#C69A3C] before:to-[rgb(20,42,98)]">
          {journeyStages.map((stage, idx) => {
            const IconComp = stage.icon;
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={stage.step}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Center Node Badge */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[rgb(20,42,98)] text-[#C69A3C] border-4 border-white shadow-xl font-extrabold text-sm flex items-center justify-center z-20">
                  {stage.step}
                </div>

                {/* Timeline Content Card */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                  isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                }`}>
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 group hover:border-[#C69A3C]">
                    
                    <div className={`flex items-center gap-3 ${
                      isEven ? "md:justify-end" : "md:justify-start"
                    }`}>
                      <div className="w-10 h-10 rounded-xl bg-[rgb(20,42,98)] text-[#C69A3C] flex items-center justify-center shadow-md">
                        <IconComp size={20} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${stage.badgeBg}`}>
                        Stage {stage.step}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[rgb(20,42,98)] group-hover:text-[#C69A3C] transition-colors">
                        {stage.title}
                      </h3>
                      <p className="text-slate-500 font-medium text-xs sm:text-sm">
                        {stage.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2 border-t border-slate-100">
                      {stage.details}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* --- BOOKING CTA STRIP --- */}
        <div className="mt-20 bg-gradient-to-r from-[rgb(20,42,98)] via-blue-950 to-[rgb(20,42,98)] text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#C69A3C]/30">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">Ready to start Stage 1 of your recovery journey?</h3>
            <p className="text-blue-100 text-sm sm:text-base">Schedule your initial consultation with our clinical team in Borivali West.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#C69A3C] text-[rgb(20,42,98)] font-bold rounded-xl text-sm hover:bg-white transition-colors shadow-lg text-center"
            >
              Book Initial Consultation
            </Link>
            <a
              href="https://wa.me/917447755533"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}

