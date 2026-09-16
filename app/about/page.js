'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Users, 
  HeartHandshake, 
  Lock, 
  MessageSquare, 
  TrendingUp, 
  CheckCircle2,
  ChevronRight,
  Award,
  Sparkles,
  ArrowUpRight,
  CalendarCheck
} from 'lucide-react';

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(null);

  const brandPromises = [
    'Patient Safety',
    'Ethical Care',
    'Structured Rehabilitation',
    'Measurable Outcomes'
  ];

  const coreValues = [
    {
      id: '01',
      title: 'Patient-First Decisions',
      desc: 'Every treatment choice is guided entirely by what is best for the individual patient.',
      icon: Users,
      tag: 'Ethical Ethos',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '02',
      title: 'Safety Before Modality',
      desc: 'We prioritize patient wellbeing and clinical safety over any treatment tool or machine.',
      icon: ShieldCheck,
      tag: 'Clinical Safety',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '03',
      title: 'Clear Explanation',
      desc: 'Transparent communication ensures patients thoroughly understand their recovery plan.',
      icon: MessageSquare,
      tag: 'Transparency',
      image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '04',
      title: 'Respect & Privacy',
      desc: 'We maintain absolute confidentiality, personal dignity, and utmost respect for every individual.',
      icon: Lock,
      tag: 'Patient Rights',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '05',
      title: 'Teamwork & Continuity',
      desc: 'Seamless collaboration across clinical specialists guarantees smooth, uninterrupted care.',
      icon: HeartHandshake,
      tag: 'Collaboration',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '06',
      title: 'Outcome-Focused',
      desc: 'We evaluate success through real, measurable functional progress in your everyday life.',
      icon: TrendingUp,
      tag: 'Real Results',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-[#fcfdfd] min-h-screen text-slate-800 font-sans selection:bg-[#D4AF37]/30 selection:text-[rgb(20,42,98)]">
      
      {/* =========================================================================
          1. HERO BANNER WITH MOTION REVEAL
         ========================================================================= */}
      <section className="relative h-[420px] sm:h-[480px] w-full flex flex-col justify-center items-center text-white text-center px-4 overflow-hidden" style={{ backgroundColor: 'rgb(20, 42, 98)' }}>
        
        {/* Ambient Glowing Orbs (Framer Style Atmosphere) */}
    

        {/* Background Image with Parallax Vibe */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url('/office.jpeg')` }}
        />

        {/* Geometric Luxury Vector Lines */}
        <div className="absolute right-0 bottom-0 top-0 w-full sm:w-1/2 pointer-events-none opacity-40 flex items-center justify-end">
          <svg className="w-full h-full max-w-[600px]" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M 50 250 C 200 50, 350 350, 480 120" stroke="#D4AF37" strokeWidth="2.5" fill="none" 
            />
          </svg>
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-3xl mx-auto space-y-4"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E5C158] text-xs font-semibold uppercase tracking-widest shadow-lg"
          >
            <Sparkles size={13} className="text-[#E5C158]" />
            <span>Excellence in Rehabilitation</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-wide font-normal">
            About Us
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-sm text-[#E5C158] font-medium pt-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/60" />
            <span className="text-white font-semibold">About Us</span>
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          2. FLOATING WHITE CARD CONTAINER (Framer Overlap Card)
         ========================================================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative -mt-16 sm:-mt-20 z-20 max-w-7xl mx-auto bg-white rounded-t-[2.5rem] sm:rounded-t-[3.5rem] shadow-2xl px-6 sm:px-12 md:px-16 pt-14 sm:pt-20 pb-20 border border-slate-100"
      >
        
        {/* Main Title Head */}
        <div className="max-w-4xl mb-14 space-y-4">
          <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm tracking-wider uppercase" style={{ color: 'rgb(20, 42, 98)' }}>
            <span>/</span>
            <span>About Us</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif leading-[1.15] font-normal tracking-tight" style={{ color: 'rgb(20, 42, 98)' }}>
            We Care for Every Move You Make.
          </h2>
          
          <p className="text-slate-500 italic text-sm sm:text-base pt-2 border-l-2 border-[#D4AF37] pl-4">
            "To find health should be the object of the doctor. Understand the patient before selecting the treatment."
          </p>
        </div>

        {/* =========================================================================
            3. SPLIT SECTION - STORY CONTENT + BRAND PROMISE
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Narrative Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base"
          >
            <p className="font-medium text-lg sm:text-xl leading-snug" style={{ color: 'rgb(20, 42, 98)' }}>
              Aditya Spine & Joint Rehab LLP is a specialized rehabilitation centre in Borivali West, Mumbai, created to provide structured, personalized care for spine, joint, neurological, and movement-related conditions.
            </p>
            
            <p>
              The centre brings together clinical assessment, experienced hands-on care, guided therapeutic exercise, and advanced rehabilitation technology in a spacious, patient-focused setting.
            </p>

            <p>
              Our approach is centered on individual needs: <strong className="text-slate-900 font-semibold">understand the patient before selecting the treatment.</strong> Every person’s pain, diagnosis, lifestyle, strength, mobility, and recovery goals are unique. We avoid one-size-fits-all programs and build care around the patient’s current ability and functional needs.
            </p>

            <p>
              Our purpose is not only short-term pain relief. We work to help patients improve movement, strength, balance, confidence, and participation in everyday life—whether the goal is walking comfortably, returning to work, climbing stairs, recovering after surgery, or regaining independence.
            </p>
          </motion.div>

          {/* Right Visual & Brand Promise Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
              <img 
                src="/2.jpeg" 
                alt="Aditya Spine & Joint Rehab Facility" 
                className="w-full h-84 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(20,42,98)]/90 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-serif text-lg">Spacious & Modern Rehabilitation Centre</span>
              </div>
            </div>

            {/* Brand Promise Section */}
            
          </motion.div>

        </div>

        {/* =========================================================================
            4. MISSION & VISION (Interactive Cards with Motion)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-[#f8fafc] to-white p-8 rounded-3xl border border-slate-200/80 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all"
          >
            <div className="p-3 text-white rounded-2xl w-fit mb-4 shadow-md" style={{ backgroundColor: 'rgb(20, 42, 98)' }}>
              <Target size={26} />
            </div>
            <h3 className="text-2xl font-serif text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              To provide responsible, individualized, and goal-oriented rehabilitation that combines clinical skill, compassionate care, and appropriate technology.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-[#f8fafc] to-white p-8 rounded-3xl border border-slate-200/80 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all"
          >
            <div className="p-3 bg-[#D4AF37] text-[rgb(20,42,98)] rounded-2xl w-fit mb-4 font-bold shadow-md">
              <Eye size={26} />
            </div>
            <h3 className="text-2xl font-serif text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              To become a trusted destination in Mumbai for comprehensive spine, joint, and neuro rehabilitation, known for thoughtful assessment, transparent communication, and meaningful functional progress.
            </p>
          </motion.div>

        </div>

        {/* =========================================================================
            5. CORE VALUES GRID (High-End Framer Motion Interactive Cards)
           ========================================================================= */}
        <div className="relative pt-6 pb-4">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#B8860B] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30 shadow-sm">
              <Sparkles size={13} className="text-[#D4AF37]" />
              <span>Guiding Principles</span>
            </div>
            
            <h3 className="text-3xl sm:text-5xl font-serif tracking-tight" style={{ color: 'rgb(20, 42, 98)' }}>
              Core Values
            </h3>
            
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Fundamental principles driving our clinical care, treatment decisions, and patient relationships.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComp = value.icon;
              const isHovered = activeValue === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="relative rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-500 overflow-hidden group flex flex-col justify-between min-h-[340px]"
                >
                  
                  {/* Hover Image Reveal */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-0 group-hover:opacity-100"
                    style={{ backgroundImage: `url(${value.image})` }}
                  />

                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-95 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgb(20, 42, 98), rgba(20, 42, 98, 0.9), rgba(20, 42, 98, 0.75))' }} />

                  {/* Card Top Bar */}
                  <div className="relative z-10 p-7 flex items-center justify-between">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="p-3.5 rounded-2xl bg-slate-50 text-[rgb(20,42,98)] group-hover:bg-[#D4AF37] group-hover:text-[rgb(20,42,98)] transition-colors duration-500 shadow-sm"
                    >
                      <IconComp size={24} />
                    </motion.div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 group-hover:bg-white/10 group-hover:text-white/90 transition-colors">
                        {value.tag}
                      </span>
                      <span className="font-serif text-2xl font-bold text-slate-300 group-hover:text-[#D4AF37]/60 transition-colors">
                        {value.id}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-7 pt-0 space-y-3">
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300 leading-snug">
                      {value.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>

                  {/* Bottom Bar Accent */}
                  <div className="relative z-10 px-7 py-4 border-t border-slate-100 group-hover:border-white/10 flex items-center justify-between text-xs font-semibold text-[rgb(20,42,98)] group-hover:text-white transition-colors">
                    <span>Clinical Standard</span>
                    <motion.div
                      animate={{ x: isHovered ? 4 : 0, y: isHovered ? -4 : 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowUpRight size={18} className="text-[#D4AF37] transition-colors" />
                    </motion.div>
                  </div>

                  {/* Bottom Beam Glow (Gold) */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[rgb(20,42,98)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </motion.div>

      {/* =========================================================================
          6. CALL TO ACTION STRIP
         ========================================================================= */}
      <section className="relative z-10 bg-[#f8fafc] py-16 px-4 border-t border-slate-200/60">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto rounded-[2.5rem] p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#D4AF37]/30 relative overflow-hidden" 
          style={{ backgroundColor: 'rgb(20, 42, 98)' }}
        >
          {/* Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="text-center md:text-left space-y-3 max-w-xl relative z-10">
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Ready to start your recovery journey?
            </h3>
            <p className="text-[#E5C158] text-sm sm:text-base">
              Book a consultation with our specialists in Borivali West today.
            </p>
          </div>
          
          <div className="relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-[rgb(20,42,98)] font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[rgb(20,42,98)] transition-colors shadow-lg"
              >
                <CalendarCheck size={18} />
                <span>Book Appointment</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}