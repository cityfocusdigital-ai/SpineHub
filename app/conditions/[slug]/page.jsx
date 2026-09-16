"use client";

import React, { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  AlertTriangle, CheckCircle2, Activity, ArrowRight, 
  Target, Phone, MessageCircle, ShieldCheck, Clock,
  MapPin, Star, BrainCircuit, Bone, Move, HeartPulse
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- COMPREHENSIVE DATA CONFIGURATION ---
const conditionData = {
  // SPINE & NERVE
  "lower-back-pain": {
    title: "Lower Back Pain",
    subtitle: "Restore Mobility & Eliminate Chronic Discomfort",
    category: "Spine Health",
    heroImage: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=1920&q=80",
    description: "Lower back pain is more than just an ache; it’s a disruption to your life. At Aditya Spine & Joint Rehab, we don't just treat the symptom—we decode the biomechanical failure causing your pain.",
    symptoms: ["Persistent dull ache in lumbar region", "Sharp stabbing pain during movement", "Morning stiffness lasting >30 mins", "Radiating discomfort to glutes"],
    causes: ["Poor posture & desk ergonomics", "Muscle strain or ligament sprain", "Disc degeneration", "Sedentary lifestyle"],
    redFlags: ["Loss of bladder/bowel control", "Progressive leg weakness", "Night pain preventing sleep", "History of cancer with new pain"],
    approach: "We utilize a hybrid model of Manual Therapy to reduce acute pain and Functional Movement Screening to correct root postural imbalance.",
    treatments: [
      { name: "McKenzie Method (MDT)", desc: "Centralizing radiating pain through specific movements." },
      { name: "Core Stabilization", desc: "Deep abdominal strengthening to support the spine." },
      { name: "Manual Therapy", desc: "Hands-on mobilization to relieve joint stiffness." },
      { name: "Ergonomic Correction", desc: "Workstation setup to prevent recurrence." }
    ],
    goals: "Eliminate pain triggers, restore full range of motion, and return to pain-free daily activities."
  },
  "sciatica": {
    title: "Sciatica & Radiating Pain",
    subtitle: "Relieve Nerve Compression & Restore Function",
    category: "Spine Health",
    heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1920&q=80",
    description: "Sciatica occurs when the sciatic nerve is compressed, causing pain that radiates from the lower back down the leg. Our therapy focuses on decompressing the nerve.",
    symptoms: ["Shooting pain down one leg", "Numbness or tingling in foot/toes", "Weakness in affected leg", "Pain worsening with sitting"],
    causes: ["Slipped disc (Herniation)", "Spinal stenosis", "Piriformis syndrome", "Bone spurs"],
    redFlags: ["Sudden severe weakness in leg", "Loss of bowel/bladder control", "Numbness in groin area"],
    approach: "Neural flossing techniques and specific directional preferences to move the disc material away from the nerve root.",
    treatments: [
      { name: "Neural Mobilization", desc: "Gliding exercises to free the trapped nerve." },
      { name: "McKenzie Extension", desc: "Specific movements to centralize pain." },
      { name: "Soft Tissue Release", desc: "Releasing tight piriformis and hamstrings." },
      { name: "Postural Re-education", desc: "Correcting sitting and standing habits." }
    ],
    goals: "Reduce nerve irritation, improve leg strength, and prevent future flare-ups."
  },
  
  // KNEE & LOWER LIMB
  "knee-osteoarthritis": {
    title: "Knee Osteoarthritis",
    subtitle: "Manage Pain & Improve Joint Longevity",
    category: "Joint Health",
    heroImage: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1920&q=80",
    description: "Osteoarthritis involves the wearing down of cartilage. While we can't regrow cartilage, we can significantly reduce pain and improve function through targeted rehab.",
    symptoms: ["Grinding sensation (Crepitus)", "Stiffness after rest", "Swelling after activity", "Difficulty climbing stairs"],
    causes: ["Age-related wear and tear", "Previous injuries", "Obesity", "Muscle weakness"],
    redFlags: ["Hot, red, swollen joint (Infection)", "Inability to bear weight", "Severe night pain"],
    approach: "Unloading the joint through muscle strengthening and improving gait mechanics to reduce stress on the knee.",
    treatments: [
      { name: "Quadriceps Strengthening", desc: "Building shock absorbers for the knee." },
      { name: "Gait Training", desc: "Correcting walking patterns to reduce load." },
      { name: "Manual Therapy", desc: "Improving patellar mobility and joint glide." },
      { name: "Weight Management Advice", desc: "Lifestyle tips to reduce joint stress." }
    ],
    goals: "Walk longer distances without pain, climb stairs confidently, and delay surgical intervention."
  },

  // NEURO
  "stroke-rehab": {
    title: "Stroke Rehabilitation",
    subtitle: "Regain Independence & Motor Control",
    category: "Neurological Rehab",
    heroImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1920&q=80",
    description: "Post-stroke recovery is a journey of neuroplasticity. We help rewire the brain to regain movement, balance, and independence in daily tasks.",
    symptoms: ["One-sided weakness (Hemiparesis)", "Balance issues", "Speech difficulties", "Coordination problems"],
    causes: ["Ischemic stroke", "Hemorrhagic stroke", "TIA (Mini-stroke)"],
    redFlags: ["Sudden return of symptoms", "Severe headache", "Seizures", "High blood pressure spikes"],
    approach: "Task-specific training and repetitive practice to encourage neuroplasticity and functional recovery.",
    treatments: [
      { name: "Gait Training", desc: "Re-learning to walk safely with aids if needed." },
      { name: "Constraint-Induced Therapy", desc: "Forcing use of the affected limb." },
      { name: "Balance & Coordination", desc: "Preventing falls and improving stability." },
      { name: "ADL Training", desc: "Practice with dressing, eating, and hygiene." }
    ],
    goals: "Maximize independence in daily living, improve walking speed, and prevent falls."
  },

  // DEFAULT FALLBACK FOR ANY OTHER SLUG
  "default": {
    title: "Specialized Rehabilitation",
    subtitle: "Evidence-Based Recovery Protocols",
    category: "General Care",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
    description: "Our comprehensive rehabilitation programs are designed to restore function, reduce pain, and improve your quality of life through scientifically proven methods.",
    symptoms: ["Chronic Pain", "Limited Range of Motion", "Muscle Weakness", "Post-Surgical Stiffness"],
    causes: ["Acute Injury", "Chronic Overuse", "Post-surgical Status", "Age-related Changes"],
    redFlags: ["Severe Swelling", "Unexplained Fever", "Sudden Loss of Function"],
    approach: "A holistic assessment covering physical, functional, and lifestyle factors to create a bespoke recovery roadmap.",
    treatments: [
      { name: "Manual Therapy", desc: "Hands-on techniques to mobilize joints and soft tissues." },
      { name: "Therapeutic Exercise", desc: "Targeted strengthening and flexibility routines." },
      { name: "Modalities", desc: "Ultrasound, TENS, and Laser therapy for pain management." },
      { name: "Patient Education", desc: "Empowering you with knowledge about your condition." }
    ],
    goals: "Restore optimal function, prevent recurrence, and achieve measurable functional outcomes."
  }
};

export default function ConditionPage() {
  const params = useParams();
  const slug = params.slug;
  
  // Smart Lookup: Checks for exact match, otherwise uses default
  const data = conditionData[slug] || conditionData["default"];
  
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Animation
      gsap.from(".hero-text-elem", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Stats Counter Animation
      gsap.from(".stat-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.8,
        ease: "back.out(1.7)"
      });

      // Content Sections Fade Up
      gsap.utils.toArray(".section-reveal").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

    }, pageRef);

    return () => ctx.revert();
  }, [slug]);

  return (
    <div ref={pageRef} className="bg-slate-50 min-h-screen font-sans text-slate-800 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transform scale-110"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e3f] via-[#0a1e3f]/80 to-transparent z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          <div className="space-y-8">
            <div className="hero-text-elem inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c5973e]"></span>
              <span className="text-white text-xs font-bold tracking-widest uppercase">{data.category}</span>
            </div>
            
            <h1 className="hero-text-elem text-5xl md:text-7xl font-extrabold text-white leading-[1.1]">
              {data.title}
            </h1>
            
            <p className="hero-text-elem text-xl text-blue-100 font-light max-w-lg leading-relaxed">
              {data.subtitle}
            </p>

            <div className="hero-text-elem flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="px-8 py-4 bg-[#c5973e] hover:bg-[#b08535] text-white font-bold rounded-xl shadow-lg shadow-[#c5973e]/30 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                Start Recovery <ArrowRight size={20} />
              </Link>
              <a href="tel:7447755533" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl transition-all flex items-center gap-2">
                <Phone size={20} /> Call Now
              </a>
            </div>
          </div>

          {/* Floating Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="stat-card bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl col-span-2">
              <div className="text-3xl font-bold text-[#c5973e] mb-1">Expert Care</div>
              <div className="text-sm text-blue-100 font-medium uppercase tracking-wide">Personalized for You</div>
            </div>
            <div className="stat-card bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-[#c5973e] mb-1">10+ Years</div>
              <div className="text-sm text-blue-100 font-medium uppercase tracking-wide">Experience</div>
            </div>
            <div className="stat-card bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-[#c5973e] mb-1">5000+</div>
              <div className="text-sm text-blue-100 font-medium uppercase tracking-wide">Patients Helped</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-20">
        
        {/* INTRO & SYMPTOMS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 section-reveal">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl font-bold text-[#0a1e3f]">Understanding the Condition</h2>
            <p className="text-lg text-slate-600 leading-loose">
              {data.description}
            </p>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#0a1e3f] mb-6 flex items-center gap-3">
                <Activity className="text-[#0071bd]" /> Key Symptoms to Watch
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.symptoms.map((sym, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <CheckCircle2 size={20} className="text-[#c5973e] mt-1 shrink-0" />
                    <span className="text-slate-700 font-medium">{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Causes Section */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
               <h3 className="text-xl font-bold text-[#0a1e3f] mb-4 flex items-center gap-3">
                <BrainCircuit className="text-[#0071bd]" /> Possible Causes
              </h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
                {data.causes.map((cause, i) => (
                  <li key={i}>{cause}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#0a1e3f] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0071bd] rounded-full blur-[60px] opacity-20 -mr-10 -mt-10"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#c5973e]">
                <AlertTriangle /> Red Flags
              </h3>
              <p className="text-blue-100 text-sm mb-6 italic">Immediate medical attention required if:</p>
              <ul className="space-y-4">
                {data.redFlags.map((flag, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium border-b border-white/10 pb-3 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0 shadow-[0_0_10px_red]"></span>
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* TREATMENT APPROACH */}
        <div className="mb-24 section-reveal">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0071bd] font-bold tracking-widest uppercase text-sm">Our Protocol</span>
            <h2 className="text-4xl font-bold text-[#0a1e3f] mt-2">How We Treat You</h2>
            <p className="text-slate-600 mt-4">{data.approach}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.treatments.map((t, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0071bd] mb-6 group-hover:bg-[#0071bd] group-hover:text-white transition-colors">
                  <ShieldCheck size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#0a1e3f] mb-3">{t.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GOALS SECTION */}
        <div className="section-reveal bg-gradient-to-r from-[#c5973e] to-[#e8c678] rounded-3xl p-12 text-white shadow-lg mb-24 flex flex-col md:flex-row items-center gap-8">
           <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shrink-0">
              <Target size={40} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#0a1e3f]">Expected Rehabilitation Goals</h3>
              <p className="text-[#0a1e3f]/90 font-medium text-lg">{data.goals}</p>
            </div>
        </div>

        {/* CTA SECTION */}
        <div className="section-reveal relative bg-[#0071bd] rounded-[3rem] p-12 md:p-20 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Live Pain-Free?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Book your comprehensive assessment at our Borivali West clinic today. Let's build your personalized recovery plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-10 py-5 bg-white text-[#0071bd] font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors text-lg">
                Book Appointment
              </Link>
              <a href="https://wa.me/917447755533" className="px-10 py-5 bg-[#0a1e3f] text-white font-bold rounded-xl shadow-lg hover:bg-[#0f2b55] transition-colors text-lg flex items-center gap-2">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="text-xs text-slate-400 max-w-4xl mx-auto leading-relaxed">
            <strong>Medical Disclaimer:</strong> The content on this page is for educational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
          </p>
        </div>

      </div>
    </div>
  );
}