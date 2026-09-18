"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Fraunces, Manrope } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import {
  Phone, MessageCircle, MapPin, ChevronDown as ScrollChevron
} from "lucide-react";
import CarePathways from './CarePathways';
import WhyChooseus from './WhyChooseus';
import FAQ from './FAQ';

// Fonts setup
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const photoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const trustItems = [
    "Experienced clinical leadership",
    "Personalized programmes",
    "Advanced rehabilitation technology",
    "Close to Borivali Station",
  ];

  // 3D Tilt Effect for Image
  const handlePhotoMove = (e) => {
    if (shouldReduceMotion || !photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const scrollToNext = () => {
    document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation Variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.13, delayChildren: 0.15 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div
      className={`${fraunces.variable} ${manrope.variable} relative min-h-screen bg-[#bac1c8] selection:bg-[#D6C299] selection:text-white`}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      {/* Global Styles for Smooth Scroll */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
        }
      `}</style>

      {/* 2. HERO SECTION - Deep Blue & Gold Theme */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#142A62] pt-28 pb-20 md:pt-32">
        
        {/* Background Gradient #01309c */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 15% 20%, #142A62  45%, #142A62  100%)",
          }}
        />
        
        {/* Subtle Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-center w-full">

          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-7">
              <span className="w-8 h-[1.5px] bg-[#D6C299]" />
              <p className="flex items-center gap-1.5 text-white/90 text-sm font-medium">
                <MapPin size={14} className="text-[#D6C299]" />
                Borivali West, Mumbai
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[2.1rem] leading-[1.18] sm:text-[2.75rem] lg:text-[3.15rem] lg:leading-[1.15] text-white mb-6 font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Advanced Spine, Joint &amp;{" "}
              <span className="bold text-[#ffaa00]">Neuro Rehabilitation</span>{" "}
              in Borivali West
            </motion.h1>

            <motion.p variants={itemVariants} className="text-white/80 text-base md:text-[17px] max-w-lg mb-9 leading-relaxed">
              Move better, reduce pain and rebuild confidence with a structured
              rehabilitation programme designed around your diagnosis, movement
              limitations and personal goals.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-start gap-4 mb-10">
              <button className="px-7 py-3.5 bg-[#f5a70b] hover:bg-[#ffa600] text-[#ffffff] font-semibold rounded-full transition-colors shadow-lg shadow-[#D6C299]/20">
                Book an Assessment
              </button>

              <div>
                <div className="flex rounded-full border border-white/30 overflow-hidden bg-white/5 backdrop-blur-sm">
                  <a
                    href="tel:7447755533"
                    className="flex items-center gap-2 pl-6 pr-5 py-3.5 text-white font-medium hover:bg-white/10 transition-colors border-r border-white/20"
                  >
                    <Phone size={16} />
                    Call
                  </a>
                  <a
                    href="https://wa.me/917447755533"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 pl-5 pr-6 py-3.5 text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
     
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-3 gap-y-2 max-w-lg">
              {trustItems.map((item, i) => (
                <span key={item} className="flex items-center gap-3 text-white text-[13px] sm:text-sm">
                  {i >= 0 && <span className="text-[#e8a318]" aria-hidden="true">•</span>}
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="relative hidden sm:block"
          >
            {/* Decorative rotating gold ring */}
            <motion.svg
              viewBox="0 0 400 400"
              className="absolute -top-10 -right-10 w-[340px] h-[340px] lg:w-[420px] lg:h-[420px] opacity-30 pointer-events-none -z-0"
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              <circle cx="200" cy="200" r="180" fill="none" stroke="#D6C299" strokeWidth="1.5" strokeDasharray="2 14" strokeLinecap="round" />
            </motion.svg>

            <div
              ref={photoRef}
              onMouseMove={handlePhotoMove}
              onMouseLeave={resetTilt}
              style={{ perspective: 1000 }}
              className="relative w-full max-w-[700px] aspect-[17/20]"
            >
              <motion.div
                animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="relative aspect-[15/19] rounded-2xl overflow-hidden border-2 border-[#D6C299]/40 shadow-2xl shadow-black/30"
              >
                <img
                  src="/office.jpeg"
                  alt="Clinic Interior"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004899]/80 via-transparent to-transparent" />
                
                {/* Gold accent corners */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D6C299]/60 rounded-tr-xl" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D6C299]/60 rounded-bl-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Cue */}
        <motion.button
          onClick={scrollToNext}
          aria-label="Scroll to explore"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ScrollChevron size={26} />
        </motion.button>
      </section>



      {/* Rest of the page sections */}
      <div id="explore" className="bg-[#004899]">
        <CarePathways />
      </div>
      <WhyChooseus />
      <FAQ />
    </div>
  );
}