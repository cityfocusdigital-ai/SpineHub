'use client';

import React from 'react';

const services = [
  {
    title: "Spine Rehabilitation",
    description: "For people experiencing back pain, neck pain, sciatica, stiffness, disc-related symptoms, postural strain or reduced spinal movement. Care begins with assessment and may include education, mobility work, graded strengthening, neural mobility, hands-on therapy and suitable technology.",
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=800" // Spine/Yoga
  },
  {
    title: "Joint & Sports Rehabilitation",
    description: "Personalized rehabilitation for knee, shoulder, hip, ankle, elbow and other musculoskeletal problems. Programmes may support osteoarthritis management, sports injury recovery, muscle and tendon rehabilitation, joint mobility, strength, balance and safe return to activity.",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=800" // Sports/Joints
  },
  {
    title: "Neuro Rehabilitation",
    description: "Structured, task-oriented rehabilitation for people affected by stroke, paralysis, weakness, walking difficulty, reduced coordination or balance limitations. Goals may include safer transfers, standing, walking, upper-limb use, endurance and independence.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" // Neuro/Medical
  },
  {
    title: "Post-operative Rehabilitation",
    description: "Progressive rehabilitation after spine or joint surgery, fracture fixation, joint replacement or other orthopaedic procedures, subject to the surgeon’s precautions. Treatment focuses on pain and swelling management, mobility, muscle activation, strength, balance and return to daily activities.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800" // Post-op/Recovery
  },
  {
    title: "Chiropractic & Manual Therapy",
    description: "Hands-on techniques may be used to improve joint mobility, reduce stiffness and support movement when clinically appropriate. Every patient must be screened before manipulation or mobilization to ensure safety and effectiveness.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" // Manual Therapy
  },
  {
    title: "Advanced Physiotherapy & Pain",
    description: "The centre uses modern rehabilitation technologies alongside exercise and hands-on care. Modalities are selected after screening and are not automatically suitable for every patient. The plan may include decompression, electrotherapy, high-intensity laser, shockwave, TECAR.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800" // Tech/Laser
  },
  {
    title: "Naturopathy & Integrative Care",
    description: "Supportive naturopathy approaches may be included for relaxation, lifestyle improvement and general well-being. These services should complement—not replace—appropriate medical diagnosis, prescribed medication or urgent medical care.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800" // Nature/Calm
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-yellow-200 selection:text-blue-900">
      
      {/* Hero Section - Matching About Us Style */}
      <section className="relative h-[50vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920"
            alt="Clinic Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 to-[#0f172a]/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-wide drop-shadow-md">
            Our Services
          </h1>
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-blue-200 text-sm md:text-base font-medium">
            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white font-bold">Services</span>
          </div>
        </div>

        {/* Curved Bottom Edge (White Wave) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.25)] transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full transform hover:-translate-y-2"
              >
                {/* Card Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating Icon/Badge (Optional Modern Touch) */}
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-8 flex-grow flex flex-col relative">
                  {/* Gold Accent Line Top */}
                  <div className="absolute top-0 left-8 w-12 h-1 bg-yellow-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <h3 className="text-2xl font-bold text-[#0f172a] mb-4 group-hover:text-blue-900 transition-colors duration-300 mt-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed mb-8 flex-grow text-sm md:text-base line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                    {service.description}
                  </p>
                  
                  <button className="w-full mt-auto bg-slate-50 text-[#0f172a] border border-slate-200 py-3.5 px-6 rounded-xl font-semibold text-sm uppercase tracking-wider hover:bg-[#0f172a] hover:text-white hover:border-[#0f172a] transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                    Check Suitability
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
                
                {/* Subtle Glow Effect on Hover */}
                <div className="absolute inset-0 border-2 border-yellow-500/0 group-hover:border-yellow-500/20 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="bg-[#0f172a] py-20 px-4 relative overflow-hidden mt-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-blue-200 mb-10 text-lg max-w-2xl mx-auto">
            Our team of specialists is here to guide you through every step of your rehabilitation journey with personalized care plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-500 text-[#0f172a] py-4 px-10 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transform hover:-translate-y-1">
              Book Free Assessment
            </button>
            <button className="bg-transparent border-2 border-blue-400 text-blue-100 py-4 px-10 rounded-full font-bold text-lg hover:bg-blue-900 hover:border-blue-300 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}