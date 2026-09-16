"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fraunces, Manrope } from "next/font/google";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Phone, MessageCircle, Menu, X, MapPin, ChevronDown, ChevronDown as ScrollChevron
} from "lucide-react";
import CarePathways from './CarePathways';
import WhyChooseus from './WhyChooseus';
import Footer from './Footer';
import ConditionDropdown from './ConditionDropdown';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const dropdownRef = useRef(null);
  const photoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const trustItems = [
    "Experienced clinical leadership",
    "Personalized programmes",
    "Advanced rehabilitation technology",
    "Close to Borivali Station",
  ];

  // Click Outside Handler for Dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

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

      {/* 1. STICKY NAVIGATION BAR - ALWAYS WHITE & BLACK TEXT */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-3 md:py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50 shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
              <img 
                src="/aditya-logo.jpg" 
                alt="Aditya Spine & Joint Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[16px] sm:text-lg font-medium tracking-tight text-[#004899]" style={{ fontFamily: 'var(--font-display)' }}>
                Aditya Spine &amp; Joint
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-[#D6C299]">
                Rehabilitation Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links - BLACK TEXT */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[15px] font-medium relative py-1 transition-colors ${
                    isActive ? "text-[#004899]" : "text-gray-700 hover:text-[#004899]"
                  }`}
                >
                  {item.name}
                  {isActive && <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D6C299]" />}
                </Link>
              );
            })}

            {/* Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1.5 text-[15px] font-medium py-1 transition-colors ${
                  dropdownOpen ? "text-[#004899]" : "text-gray-700 hover:text-[#004899]"
                }`}
              >
                Conditions we treat
                <ChevronDown size={15} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute top-full left-0 pt-4 w-max transition-all duration-300 origin-top-left ${dropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                <ConditionDropdown />
              </div>
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:7447755533"
              className="flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full bg-[#004899] hover:bg-[#003bfe] text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-900/20"
            >
              <Phone size={15} />
              +91 74477 55533
            </a>
          </div>

          {/* Mobile Menu Toggle - BLACK ICON */}
          <button
            className="lg:hidden p-2 rounded-md text-[#004899] z-50 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-y-auto ${
            mobileMenuOpen ? "max-h-[calc(100vh-72px)] opacity-100 visible" : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col px-6 py-8 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium text-lg py-3 border-b border-gray-100 transition-colors ${
                    isActive ? "text-[#004899]" : "text-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/conditions"
              className="font-medium text-lg py-3 border-b border-gray-100 text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Conditions we treat
            </Link>
            <div className="pt-6">
              <a
                href="tel:7447755533"
                className="w-full flex items-center justify-center gap-2 bg-[#004899] text-white py-4 rounded-full font-semibold shadow-lg"
              >
                <Phone size={18} />
                Call +91 74477 55533
              </a>
            </div>
          </div>
        </div>
      </nav>

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
     
    </div>
  );
}