'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Activity, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SmoothDoctorProfile = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Smooth Parallax Background
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        yPercent: 20,
        ease: "none"
      });

      // 2. Image Entrance with Soft Scale
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        x: -50,
        opacity: 0,
        scale: 0.95,
        duration: 1.4,
        ease: "power3.out"
      });

      // 3. Badge Pop with Elastic Feel
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scale: 0,
        rotation: -15,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "elastic.out(1, 0.5)"
      });

      // 4. Staggered Content Reveal
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power2.out"
      });

      // 5. Magnetic Hover Effect for Cards
      cardsRef.current.forEach((card) => {
        if (!card) return;
        
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(card, {
            x: x * 0.1,
            y: y * 0.1,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-slate-50 text-slate-800">
      {/* Smooth Parallax BG */}
      <div 
        ref={bgRef}
        className="absolute inset-0 opacity-10 pointer-events-none will-change-transform"
        style={{
          backgroundImage: "url('/3.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Ambient Glows with Subtle Pulse */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#142A62]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C69A3C]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-[rgb(20,42,98)] mb-4 tracking-tight">
            Clinical <span className="text-[#C69A3C]">Leadership</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#C69A3C] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div ref={imageRef} className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/5] md:aspect-[3/4] bg-white">
              <img 
                src="/santosh_prajapati.jpeg" 
                alt="Dr. Santosh Prajapati" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content Column */}
          <div ref={contentRef} className="lg:col-span-7 space-y-8">
            
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-[rgb(20,42,98)] mb-3 leading-tight">
                Dr. Santosh Prajapati <span className="text-slate-500 text-2xl md:text-3xl font-normal">(PT)</span>
              </h3>
              <p className="text-slate-600 font-medium text-base md:text-lg flex flex-wrap gap-x-3 gap-y-1">
                <span>Senior Physiotherapist</span> • 
                <span>Chiropractor</span> • 
                <span>Osteopath</span> • 
                <span>Naturopath</span>
              </p>
            </div>

            {/* Clean White Qualifications Card */}
            <div 
              ref={(el) => (cardsRef.current[0] = el)}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="text-[rgb(20,42,98)] font-bold mb-5 flex items-center gap-3 text-lg sm:text-xl">
                <Award className="w-6 h-6 text-[#C69A3C]" />
                Verified Clinical Qualifications
              </h4>
              <ul className="space-y-4 text-slate-700">
                {[
                  "MPT (Orthopaedics)",
                  "MCSC Chiropractic (Japan)",
                  "PhD (Hons) Naturopathy"
                ].map((qual, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#C69A3C]" />
                    </div>
                    <span className="text-base md:text-lg font-medium text-slate-800">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg">
              <p>
                Dr. Santosh leads the clinical vision of <span className="text-[rgb(20,42,98)] font-semibold">Aditya Spine &amp; Joint Rehab LLP</span>. 
                His approach combines detailed physical examination, imaging review, biomechanical assessment, and individualized rehabilitation planning.
              </p>
              <p>
                His practice integrates advanced physiotherapy, chiropractic adjustments, and osteopathic principles with targeted therapeutic exercises and suitable supportive modalities.
              </p>
            </div>

            {/* Interactive Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {[
                { icon: Activity, title: "Years of Experience", desc: "Extensive clinical track record in managing complex spinal and joint conditions" },
                { icon: HeartPulse, title: "Patient-Centric Care", desc: "Targeted focus on restoring functional mobility and long-term self-management" }
              ].map((item, i) => (
                <div 
                  key={i}
                  ref={(el) => (cardsRef.current[i + 1] = el)}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#C69A3C]/50 transition-all duration-300"
                >
                  <item.icon className="w-7 h-7 text-[#C69A3C] mb-3" />
                  <h5 className="text-[rgb(20,42,98)] font-bold text-lg mb-2">{item.title}</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Signature Quote */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <ArrowRight className="w-6 h-6 text-[#C69A3C] mt-1 shrink-0" />
              <p className="text-slate-700 italic text-base md:text-lg leading-relaxed">
                "Known for explaining complex spine and joint problems in simple, transparent language, guiding patients safely from acute pain toward lasting functional freedom."
              </p>
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SmoothDoctorProfile;
