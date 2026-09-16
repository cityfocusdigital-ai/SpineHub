This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.








"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, MessageCircle, Menu, X, ArrowRight, ShieldCheck, 
  Activity, MapPin, Star, Users, Zap, CheckCircle2, ChevronDown
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarePathways from './CarePathways';
import WhyChooseus from './WhyChooseus';
import Footer from './Footer';
import ConditionDropdown from './ConditionDropdown'; 

// Register GSAP Plugin safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const pathname = usePathname();
  
  // Refs
  const heroRef = useRef(null);
  const dropdownRef = useRef(null);

  // Navigation Items
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Initial check & event listener
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // GSAP Animations
    let ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
    }, heroRef);

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      ctx.revert(); // Cleanup GSAP
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <div className="relative min-h-screen font-sans selection:bg-[#c5973e] selection:text-white bg-slate-50">
      
      {/* 1. STICKY NAVIGATION BAR */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-md border-slate-200 py-3" 
            : "bg-transparent py-5 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-3 md:gap-4 group cursor-pointer z-50">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0a1e3f] text-white rounded-xl shadow-md transition-transform group-hover:scale-105">
              <Activity size={24} className="text-[#c5973e] w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg md:text-2xl font-extrabold tracking-tight leading-none transition-colors ${
                isScrolled || mobileMenuOpen ? "text-[#0a1e3f]" : "text-white"
              }`}>
                ADITYA
              </span>
              <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors ${
                isScrolled || mobileMenuOpen ? "text-[#0071bd]" : "text-[#c5973e]"
              }`}>
                Spine & Joint Rehab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`text-sm font-bold tracking-wide transition-colors relative py-2 group ${
                    isScrolled 
                      ? (isActive ? "text-[#0071bd]" : "text-slate-700 hover:text-[#0071bd]")
                      : (isActive ? "text-[#c5973e]" : "text-white/90 hover:text-[#c5973e]")
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                    isScrolled ? "bg-[#0071bd]" : "bg-[#c5973e]"
                  } ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
            })}

            {/* CONDITIONS DROPDOWN TRIGGER */}
            <div ref={dropdownRef} className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 text-sm font-bold tracking-wide transition-colors relative py-2 group ${
                  isScrolled 
                    ? (dropdownOpen ? "text-[#0071bd]" : "text-slate-700 hover:text-[#0071bd]")
                    : (dropdownOpen ? "text-[#c5973e]" : "text-white/90 hover:text-[#c5973e]")
                }`}
              >
                Conditions We Treat
                <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 bg-[#c5973e] ${dropdownOpen ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </button>

              {/* DROPDOWN COMPONENT */}
              <div className={`absolute top-full left-0 pt-4 w-max transition-all duration-300 origin-top-left ${dropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}> 
                 <ConditionDropdown />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:7447755533" className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 transition-all font-bold text-sm ${
              isScrolled 
                ? "border-[#0071bd] text-[#0071bd] hover:bg-[#0071bd] hover:text-white" 
                : "border-white/30 text-white hover:bg-white hover:text-[#0a1e3f]"
            }`}>
              <Phone size={16} className={isScrolled ? "" : "text-[#c5973e]"} />
              +91 74477 55533
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors z-50 ${
              isScrolled || mobileMenuOpen ? "text-[#0a1e3f]" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out border-t border-slate-100 overflow-y-auto ${
            mobileMenuOpen ? "max-h-[calc(100vh-80px)] opacity-100 visible" : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col px-6 py-8 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`font-semibold text-lg py-3 border-b border-slate-100 transition-colors ${
                    isActive ? "text-[#0071bd]" : "text-slate-700 hover:text-[#0071bd]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link 
              href="/conditions"
              className="font-semibold text-lg py-3 border-b border-slate-100 text-slate-700 hover:text-[#0071bd]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Conditions We Treat
            </Link>
            
            <div className="pt-6">
              <a 
                href="tel:7447755533" 
                className="w-full flex items-center justify-center gap-2 bg-[#0a1e3f] text-white py-4 rounded-xl font-bold"
              >
                <Phone size={20} className="text-[#c5973e]" />
                Call +91 74477 55533
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section ref={heroRef} className="relative w-full h-screen min-h-[600px] md:min-h-[750px] flex items-center justify-center pt-20 overflow-hidden">
        {/* Replaced generic image with high-quality physiotherapy clinic visual */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ 
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQu1DY6SBdmDHzD3kNi91SIzyq6uz5nvlcl-GTgMkTt0eOG2SvbqKFMqEBwLA5t7Y1GrRYQTnkjAF7HQXQ')"
          }}
        ></div>
        
        {/* Improved Overlay Gradient for better text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0a1e3f]/95 via-[#0a1e3f]/80 to-[#0071bd]/60"></div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center hero-content w-full">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#c5973e] animate-ping"></span>
            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase ml-1 md:ml-2">
              Premium Healthcare Facility
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 md:mb-8 drop-shadow-xl">
            Advanced Spine, Joint & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5973e] to-[#fce3a3]">
              Neuro Rehabilitation
            </span>
          </h1>

          <div className="flex items-center gap-3 md:gap-6 w-full justify-center mb-6 md:mb-8 opacity-90">
            <div className="h-[1px] w-12 sm:w-16 md:w-32 bg-gradient-to-r from-transparent to-[#c5973e]"></div>
            <p className="flex items-center gap-1.5 md:gap-2 text-white tracking-widest text-xs md:text-base font-bold uppercase whitespace-nowrap">
              <MapPin size={16} className="text-[#c5973e]" />
              Borivali West, Mumbai
            </p>
            <div className="h-[1px] w-12 sm:w-16 md:w-32 bg-gradient-to-l from-transparent to-[#c5973e]"></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-50 max-w-4xl mx-auto mb-10 md:mb-12 leading-relaxed drop-shadow-md font-light px-4">
            Move better, reduce pain and rebuild confidence with a <strong className="font-semibold text-white">structured rehabilitation programme</strong> designed around your diagnosis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
            <button className="group w-full sm:w-auto px-8 py-4 bg-[#0071bd] hover:bg-[#085a91] text-white text-base md:text-lg font-bold rounded-xl shadow-lg shadow-[#0071bd]/30 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1">
              Book an Assessment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://wa.me/917447755533"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-[#c5973e]/20 border-2 border-[#c5973e] text-white text-base md:text-lg font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <MessageCircle size={20} className="text-[#c5973e]" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Placeholders for the rest of your components */}
      <CarePathways />
      <WhyChooseus />
      <Footer />
    </div>
  );
}#   S p i n e H u b  
 