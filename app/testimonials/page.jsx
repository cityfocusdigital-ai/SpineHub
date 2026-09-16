"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, PlayCircle, ExternalLink, MapPin, ShieldCheck, CheckCircle, Activity } from 'lucide-react';

// --- DATA: Aligned with Specific Clinical Themes ---
const categories = [
  { id: "All", label: "All Stories" },
  { id: "Spine", label: "Spine Care" },
  { id: "Knee/Shoulder", label: "Knee & Shoulder" },
  { id: "Neuro", label: "Neuro Rehab" },
  { id: "Post-Op", label: "Post-Operative" }
];

const testimonials = [
  {
    id: 1,
    name: "Rajesh M.",
    category: "Spine",
    rating: 5,
    theme: "Severe lower-back pain & MRI review",
    text: "I had severe lower-back pain and difficulty sitting or performing daily activities. Dr. Aditya did a detailed examination and careful review of my MRI reports. The clear explanation gave me confidence in the treatment process. I am finally returning to my normal activities.",
    hasVideo: true,
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Sunita K.",
    category: "Spine",
    rating: 5,
    theme: "Sciatica & radiating leg pain",
    text: "Dealing with sciatica and radiating leg pain severely affected my walking and routine life. The team here is incredibly supportive. Through their guided, multi-step rehabilitation, I have seen a massive improvement in my movement and pain levels.",
    hasVideo: true,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Amit P.",
    category: "Post-Op",
    rating: 5,
    theme: "Reassurance & guided rehabilitation",
    text: "After my surgery, I had long-standing stiffness and reduced movement. The clinic provided immense reassurance. Their guided rehabilitation helped restore my mobility step-by-step. Genuine, ethical care that actually works.",
    hasVideo: false,
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Meena D.",
    category: "Knee/Shoulder",
    rating: 5,
    theme: "Long-standing pain & stiffness",
    text: "I suffered from long-standing shoulder pain with severe stiffness. The detailed physical examination helped pinpoint the issue. Thanks to the supportive team, my pain has significantly reduced, and I can move my arm freely again.",
    hasVideo: false,
    date: "2 months ago"
  }
];

const TestimonialsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredTestimonials = activeCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  return (
    <section className="relative py-20 bg-white overflow-hidden font-sans">
      {/* Background Navy Top Section (Matched to Image) */}
      <div className="absolute top-0 left-0 w-full h-[480px] bg-[#203157] z-0">
        {/* Subtle geometric overlay to match the right side slant in the image */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-14 max-w-4xl mx-auto pt-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
          >
            Real Stories of <span className="text-[#8bb4f7]">Recovery & Healing</span>
          </motion.h2>
          <p className="text-blue-100/90 text-lg max-w-2xl mx-auto">
            Explore genuine experiences from our patients. We focus on accurate diagnosis, 
            clear explanations, and guided rehabilitation to help you move pain-free.
          </p>
        </div>

        {/* LIVE GOOGLE WIDGET SECTION (Matched to reference image) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[1.5rem] shadow-[0_10px_40px_-10px_rgba(32,49,87,0.15)] border border-slate-100 p-8 md:p-10 mb-16 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden"
        >
          {/* Thick Navy Accent Line on Left Edge */}
          <div className="absolute left-0 top-0 bottom-0 w-[12px] bg-[#1a2b53]"></div>

          <div className="flex-1 text-center lg:text-left w-full pl-2">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              {/* Google G Logo */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-7 h-7">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <h3 className="text-[22px] font-bold text-[#1a2b53]">Verified Patient Reviews</h3>
            </div>
            <p className="text-slate-500 text-sm mb-6 max-w-md">
              See what our patients in Borivali West are saying about their guided multi-step rehabilitation.
            </p>
            
            {/* Live Widget Placeholder styled like image */}
            <div className="bg-white border-[1.5px] border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center min-h-[130px] text-slate-400 group hover:border-slate-400 transition-colors">
              <Activity className="w-7 h-7 text-slate-300 mb-3" />
              <span className="font-semibold text-[13px] text-blue-900/60">[ Embed Official Google Business Review Widget Here ]</span>
              <span className="text-[11px] text-slate-400 mt-1">Displays live rating and genuine reviews directly from Maps</span>
            </div>
          </div>

          {/* Rating Box matched to image */}
          <div className="flex flex-col items-center justify-center gap-4 bg-[#f8fafc] border border-[#e2e8f0] p-6 rounded-[1.2rem] w-full lg:w-[280px]">
            <div className="text-center w-full">
              <div className="flex justify-center gap-1.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-[#ffc107] fill-[#ffc107]" />
                ))}
              </div>
              <p className="text-[2.75rem] font-extrabold text-[#1a2b53] leading-none mb-2">4.9/5</p>
              <p className="text-[11px] font-bold text-[#1a2b53] uppercase tracking-widest mb-6">Average Rating</p>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-[#1a2b53] text-white rounded-xl font-semibold hover:bg-[#111e3d] transition-all text-[15px] group"
            >
              Read all Google reviews 
              <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Interactive Filtering System (Matched Pill Styles) */}
        <div className="flex justify-center mb-14 overflow-x-auto pb-4 scrollbar-hide snap-x">
          <div className="flex gap-4 px-4 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`snap-center whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat.id 
                    ? 'bg-[#1a2b53] text-white border-[#1a2b53] shadow-md' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#1a2b53] hover:text-[#1a2b53]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <motion.div layout className="min-h-[400px]">
          <AnimatePresence mode='popLayout'>
            <motion.div 
              key={activeCategory}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {filteredTestimonials.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  whileHover={{ y: -6 }}
                  className="bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative group flex flex-col h-full"
                >
                  <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-50 group-hover:text-blue-50 transition-colors" />
                  
                  {/* Theme Tag */}
                  <div className="mb-6 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6]" />
                    <span className="text-[11px] font-bold text-[#1a2b53] bg-blue-50/50 px-3 py-1.5 rounded-full border border-blue-100 tracking-wide uppercase">
                      {item.theme}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-8 leading-relaxed text-[15px] flex-grow relative z-10">
                    "{item.text}"
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-50">
                    <div>
                      <h4 className="font-bold text-[#1a2b53] text-base">{item.name}</h4>
                      <p className="text-[13px] text-slate-400">{item.date}</p>
                    </div>
                    {item.hasVideo && (
                      <button 
                        onClick={() => setSelectedVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full hover:bg-[#1a2b53] hover:text-white transition-all text-[#1a2b53] font-medium text-sm group/btn border border-slate-100 hover:border-[#1a2b53]"
                      >
                        <PlayCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        Watch Story
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Ethical Consent & Location Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-center items-center gap-8 text-slate-500 text-[13px]"
        >
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>All testimonials are genuine. Media used with explicit patient consent.</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-slate-300"></div>
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#1a2b53]" />
            <span>Aditya Spine & Joint Rehab, Borivali West</span>
          </div>
        </motion.div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#101b33]/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                src={selectedVideo} 
                className="w-full h-full" 
                title="Patient Testimonial Video" 
                allowFullScreen
              ></iframe>
              <button 
                onClick={() => setSelectedVideo(null)} 
                className="absolute top-4 right-4 bg-black/50 hover:bg-white hover:text-[#1a2b53] text-white p-2.5 rounded-full transition-colors backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialsPage;