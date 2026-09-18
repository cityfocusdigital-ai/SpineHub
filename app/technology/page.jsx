"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Play, Sparkles, Activity, ShieldCheck, CheckCircle2, 
  HelpCircle, ArrowRight, X, Phone, MessageCircle, AlertCircle, Dumbbell
} from "lucide-react";

const techList = [
  {
    id: "decompression",
    name: "Spinal Decompression & Traction Systems",
    desc: "Controlled, non-invasive traction-based support that may be considered for selected spine-related conditions after assessment.",
    videoUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    badge: "Spine Care",
    problemAssessed: "Disc bulge compression, nerve root pinch, lumbar/cervical spinal tightness.",
    whyChosen: "Gently decreases intra-discal pressure to create space around sensitive spinal nerve roots.",
    fitsWithExercise: "Followed immediately by deep abdominal core stabilization and directional preference exercises to maintain space."
  },
  {
    id: "class4-laser",
    name: "Class 4 Laser Therapy",
    desc: "A non-invasive modality used by trained clinicians for selected pain and tissue-healing goals, subject to contraindication screening.",
    videoUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    badge: "Pain & Healing",
    problemAssessed: "Acute tissue inflammation, deep muscle spasms, and localized tendon pain.",
    whyChosen: "Delivers therapeutic light energy (photobiomodulation) to support cellular recovery and soothe pain without heat or pain.",
    fitsWithExercise: "Calms high-grade resting pain so patients can comfortably participate in active joint mobilization and strengthening."
  },
  {
    id: "pemf",
    name: "PEMF / High-Intensity Electromagnetic Therapy",
    desc: "Electromagnetic modalities used for selected pain, muscle activation or rehabilitation goals after screening for implants and other contraindications.",
    videoUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    badge: "Muscle Activation",
    problemAssessed: "Inhibited muscle firing, chronic bone/joint aching, and post-injury sluggish recovery.",
    whyChosen: "Pulsed electromagnetic fields stimulate deep neuromuscular tissue and support cellular metabolic exchange.",
    fitsWithExercise: "Acts as a primer to awaken dormant muscle motor units before active resistance training."
  },
  {
    id: "shockwave",
    name: "Shockwave Therapy",
    desc: "A focused mechanical-wave treatment that may be considered for certain chronic tendon and soft-tissue conditions—not for every pain condition.",
    videoUrl: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    badge: "Tendon Care",
    problemAssessed: "Recalcitrant plantar fasciitis, chronic tennis elbow, and calcific shoulder tendinopathy.",
    whyChosen: "Delivers acoustic energy waves to break down chronic micro-scar tissue and stimulate localized blood circulation.",
    fitsWithExercise: "Combined with progressive eccentric tendon loading protocols for long-term structural remodeling."
  },
  {
    id: "tecar",
    name: "TECAR Therapy",
    desc: "Radiofrequency-based therapy used as part of selected rehabilitation plans for tissue heating, mobility and symptom management.",
    videoUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    badge: "Deep Tissue",
    problemAssessed: "Deep joint capsule stiffness, muscle contractures, and chronic soft tissue restriction.",
    whyChosen: "Uses capacitive/resistive electrical energy to safely warm deep joint structures from within.",
    fitsWithExercise: "Applied alongside manual stretching to immediately gain and retain new range of movement."
  },
  {
    id: "neuro-gait",
    name: "Neuro Gait & Body-Weight Support Systems",
    desc: "Supported practice for standing, gait, balance and task-specific rehabilitation in suitable neurological or mobility-limited patients.",
    videoUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    badge: "Neuro & Gait",
    problemAssessed: "Post-stroke walking difficulty, balance deficits, and post-surgical leg weight-bearing hesitation.",
    whyChosen: "Unloads body weight safely using an overhead harness system, eliminating fear of falling.",
    fitsWithExercise: "Enables early, high-repetition upright walking practice to stimulate neural pathway plasticity."
  },
  {
    id: "movement-assessment",
    name: "Pressure Walkway & Movement Assessment",
    desc: "Technology that can support observation of gait, loading and functional movement patterns where available.",
    videoUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    badge: "Biometrics",
    problemAssessed: "Uneven foot pressure distribution, limping, and subtle gait asymmetry.",
    whyChosen: "Provides objective digital feedback on foot contact time, weight distribution, and stride balance.",
    fitsWithExercise: "Informs orthotic adjustments and customized calf/glute balance exercises to fix gait defects."
  },
  {
    id: "manual-exercise",
    name: "Manual Therapy & Supervised Exercise Areas",
    desc: "Dedicated space for supervised mobility, strengthening, balance, coordination and functional retraining.",
    videoUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    badge: "Active Rehab Space",
    problemAssessed: "Overall functional movement restriction, muscle weakness, and loss of physical endurance.",
    whyChosen: "Spacious 2,500 sq. ft. clinic floor equipped with therapeutic resistance, posture mirrors, and agility gear.",
    fitsWithExercise: "This is the core of every patient's recovery—where clinical gains translate into daily function."
  },
  {
    id: "wellness",
    name: "Supportive Wellness Therapies",
    desc: "Selected heat, relaxation and naturopathy-based services offered within an appropriate care plan.",
    videoUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    badge: "Holistic Care",
    problemAssessed: "Systemic stress, chronic muscular fatigue, and sluggish circulation.",
    whyChosen: "Complements physical exercise with relaxing thermal therapy and supportive natural recovery approaches.",
    fitsWithExercise: "Applied post-exercise to ease muscle soreness and promote overall physical recovery."
  }
];

export default function TechnologyPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- HERO BANNER --- */}
      <section className="relative pt-32 pb-20 bg-[rgb(20,42,98)] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-[#E5C158] uppercase tracking-widest">
            <Sparkles size={14} className="text-[#E5C158]" />
            <span>Clinical Equipment &amp; Facility</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Technology That Supports a Structured Rehabilitation Plan
          </h1>

          <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Aditya Spine &amp; Joint Rehab combines clinical examination, hands-on care, exercise and modern rehabilitation technology. Equipment is selected according to the patient’s condition and safety screening; technology supports the programme but does not replace clinical judgment or active rehabilitation.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-bold text-blue-200">
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 size={14} className="text-[#D4AF37]" /> Assessment-Led Selection
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 size={14} className="text-[#D4AF37]" /> Integrated with Active Exercise
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 size={14} className="text-[#D4AF37]" /> Contraindication Screened
            </span>
          </div>
        </div>
      </section>

      {/* --- RESPONSIBLE CLINICAL STATEMENT BANNER --- */}
      <div className="bg-slate-900 text-slate-200 py-3 px-6 text-xs text-center border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <AlertCircle size={16} className="text-[#D4AF37] shrink-0" />
          <span><strong>Clinical Standard:</strong> We do not operate a "machine catalogue". All equipment modalities are applied only after physical clinical examination and safety screening.</span>
        </div>
      </div>

      {/* --- EQUIPMENT & FACILITIES DEMONSTRATION CARDS --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#D4AF37] font-bold uppercase tracking-wider text-xs">Guided Demonstration</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[rgb(20,42,98)] font-bold">
            How Technology Fits Into Your Recovery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Click on any demonstration card below to see how our clinical team integrates technology with hands-on therapy and active movement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techList.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Image / Demonstration Thumbnail */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img 
                  src={item.videoUrl} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(20,42,98)]/90 via-transparent to-black/20" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[rgb(20,42,98)] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {item.badge}
                </span>

                {/* Demonstration Play Trigger Button */}
                <button
                  onClick={() => setActiveVideo(item)}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#D4AF37] text-[rgb(20,42,98)] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group-hover:bg-white"
                  aria-label={`View clinical explanation for ${item.name}`}
                >
                  <Play size={24} className="fill-current ml-1" />
                </button>
              </div>

              {/* Card Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-[rgb(20,42,98)] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* 3 Clinical Questions Quick Snippet */}
                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[rgb(20,42,98)] shrink-0">Problem:</span>
                    <span className="text-slate-600 line-clamp-1">{item.problemAssessed}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[rgb(20,42,98)] shrink-0">Why Chosen:</span>
                    <span className="text-slate-600 line-clamp-1">{item.whyChosen}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[rgb(20,42,98)] shrink-0">With Exercise:</span>
                    <span className="text-slate-600 line-clamp-1">{item.fitsWithExercise}</span>
                  </div>
                </div>

                {/* View Breakdown Action Button */}
                <button
                  onClick={() => setActiveVideo(item)}
                  className="w-full mt-2 py-3 rounded-xl bg-slate-100 group-hover:bg-[rgb(20,42,98)] group-hover:text-white text-[rgb(20,42,98)] font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>View Clinical Breakdown</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- DEMONSTRATION POPUP MODAL --- */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative space-y-0">
              
              {/* Modal Header */}
              <div className="bg-[rgb(20,42,98)] text-white p-6 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">{activeVideo.badge}</span>
                  <h3 className="text-xl font-bold font-serif">{activeVideo.name}</h3>
                </div>
                <button 
                  onClick={() => setActiveVideo(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 h-56">
                  <img 
                    src={activeVideo.videoUrl} 
                    alt={activeVideo.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-xs font-bold bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                    <span>10–20 Second Clinical Demonstration Video Preview</span>
                    <span className="text-slate-300 font-normal">Featuring clinician and patient model</span>
                  </div>
                </div>

                {/* 3 Core Clinical Answers */}
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[rgb(20,42,98)]">1. What Problem Is Assessed?</span>
                    <p className="text-slate-800 text-sm">{activeVideo.problemAssessed}</p>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900">2. Why This Tool May Be Chosen?</span>
                    <p className="text-slate-800 text-sm">{activeVideo.whyChosen}</p>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">3. How It Fits With Active Exercise?</span>
                    <p className="text-slate-800 text-sm">{activeVideo.fitsWithExercise}</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setActiveVideo(null)}
                    className="flex-1 bg-[rgb(20,42,98)] hover:bg-blue-900 text-white font-bold py-3.5 rounded-xl text-center text-xs transition-colors"
                  >
                    Book Clinical Evaluation
                  </Link>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl text-center text-xs transition-colors"
                  >
                    Close Breakdown
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- BOOKING CTA --- */}
        <div className="bg-gradient-to-r from-[rgb(20,42,98)] via-blue-950 to-[rgb(20,42,98)] text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#D4AF37]/30">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">Interested in our specialized rehabilitation equipment?</h3>
            <p className="text-blue-100 text-sm sm:text-base">Consult with our lead physical therapy team in Borivali West.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[rgb(20,42,98)] font-bold rounded-xl text-sm hover:bg-white transition-colors shadow-lg text-center"
            >
              Book Assessment
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
