// app/contact/page.jsx
import Link from 'next/link';
import { 
  MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, 
  CalendarDays, User, Activity, Send 
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-950">
      
      {/* --- Premium Navy Hero Section --- */}
      <section className="relative min-h-[380px] pt-32 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-blue-950">
        {/* Background Image with Dark Navy Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-950/95 via-blue-950/90 to-blue-950" />
        
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 w-full text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700/50 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-4 sm:mb-6 shadow-lg backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <p className="text-blue-100 text-[11px] sm:text-xs font-bold tracking-widest uppercase">Now Accepting New Patients</p>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-tight text-white drop-shadow-md">
            Start Your Recovery At <br />
            <span className="text-[#D4AF37]">Aditya Spine &amp; Joint Rehab</span>
          </h1>
          
          <p className="text-blue-100/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Expert physical therapy and non-surgical rehabilitation in Borivali West. 
            Conveniently located near the station for patients across Mumbai.
          </p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 pt-8 md:pt-0 md:-mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Deep Navy Contact Card (lg:sticky to avoid mobile scroll overlap) */}
          <div className="lg:col-span-5 bg-blue-950 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-blue-900 text-white lg:sticky lg:top-24">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-blue-900">
              <div className="w-12 h-12 rounded-2xl bg-blue-900/60 flex items-center justify-center text-[#D4AF37] border border-blue-800 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Visit Our Clinic</h2>
                <p className="text-blue-300 text-xs sm:text-sm">Borivali West, Mumbai</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { 
                  icon: MapPin, 
                  title: "Address", 
                  content: ["3rd Floor, Sushila Mayekar Shopping Centre", "L.T. Road, beside Radha Krishna Hotel", "near Borivali Station, Mumbai – 400092"],
                  isLink: true,
                  customHref: "https://maps.app.goo.gl/3yBJLrYM5BcRdoX87"
                },
                { icon: Phone, title: "Call / WhatsApp", content: ["+91 7447755533", "+91 9090293232"], isLink: true, hrefPrefix: "tel:" },
                { icon: Mail, title: "Email Us", content: ["adityaspinerehab@gmail.com"], isLink: true, hrefPrefix: "mailto:" },
                { icon: Clock, title: "Working Hours", content: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: By Appointment Only"] }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/50 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-blue-950 transition-all duration-300 shrink-0 border border-blue-800">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#D4AF37] text-xs uppercase tracking-widest mb-1">{item.title}</h3>
                    <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-0.5">
                      {item.content.map((line, i) => (
                        item.isLink ? (
                          <a 
                            key={i} 
                            href={item.customHref ? item.customHref : `${item.hrefPrefix}${line.replace(/\s/g, '')}`} 
                            target={item.customHref ? "_blank" : undefined}
                            rel={item.customHref ? "noopener noreferrer" : undefined}
                            className="block hover:text-white transition-colors font-medium"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={i}>{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-blue-900">
              <a 
                href="https://maps.app.goo.gl/3yBJLrYM5BcRdoX87" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full bg-[#D4AF37] hover:bg-white text-blue-950 px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg text-xs sm:text-sm text-center"
              >
                <span>Get Directions on Google Maps</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl shadow-blue-950/5 overflow-hidden border border-slate-200/80">
            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-col gap-1 mb-6">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-blue-950">Book Your Appointment</h2>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Please fill in your details below. We will confirm your slot via your preferred contact method.
                </p>
              </div>

              {/* Security Notice */}
              <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-4 mb-6 flex gap-3 items-start">
                <ShieldCheck size={20} className="text-blue-950 mt-0.5 shrink-0" />
                <p className="text-xs text-blue-950 leading-relaxed">
                  <span className="font-bold">Privacy First:</span> Do not upload sensitive medical reports here. Please bring physical copies during your visit.
                </p>
              </div>

              <form className="space-y-5">
                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center gap-2 pl-1">
                      <User size={14} className="text-blue-950" /> Full Name
                    </label>
                    <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900 text-xs sm:text-sm" placeholder="Enter patient name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mobile" className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center gap-2 pl-1">
                      <Phone size={14} className="text-blue-950" /> Mobile Number
                    </label>
                    <input type="tel" id="mobile" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900 text-xs sm:text-sm" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                {/* Clinical Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label htmlFor="ageRange" className="text-xs font-bold text-blue-950 uppercase tracking-wider pl-1">Age Group</label>
                    <select id="ageRange" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all font-medium text-slate-700 cursor-pointer text-xs sm:text-sm">
                      <option value="">Select Age</option>
                      <option value="child">Child (&lt;12)</option>
                      <option value="teen">Teen (13-19)</option>
                      <option value="adult">Adult (20-50)</option>
                      <option value="senior">Senior (50+)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="duration" className="text-xs font-bold text-blue-950 uppercase tracking-wider pl-1">Duration</label>
                    <select id="duration" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all font-medium text-slate-700 cursor-pointer text-xs sm:text-sm">
                      <option value="">How long?</option>
                      <option value="recent">&lt; 1 Week</option>
                      <option value="short">1-4 Weeks</option>
                      <option value="medium">1-6 Months</option>
                      <option value="chronic">&gt; 6 Months</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contactMethod" className="text-xs font-bold text-blue-950 uppercase tracking-wider pl-1">Contact Via</label>
                    <select id="contactMethod" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all font-medium text-slate-700 cursor-pointer text-xs sm:text-sm">
                      <option value="call">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                </div>

                {/* Problem Description */}
                <div className="space-y-2">
                  <label htmlFor="problem" className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center gap-2 pl-1">
                    <Activity size={14} className="text-blue-950" /> Main Problem / Symptoms
                  </label>
                  <textarea id="problem" rows={4} required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all resize-none placeholder:text-slate-400 font-medium text-slate-900 text-xs sm:text-sm" placeholder="Describe your pain, stiffness, or injury briefly..."></textarea>
                </div>

                {/* Preferred Date Time */}
                <div className="space-y-2">
                  <label htmlFor="prefDate" className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center gap-2 pl-1">
                    <CalendarDays size={14} className="text-blue-950" /> Preferred Date &amp; Time
                  </label>
                  <input type="datetime-local" id="prefDate" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all font-medium text-slate-700 text-xs sm:text-sm" />
                </div>

                {/* Consent & Submit */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group mb-6">
                    <div className="relative flex items-center mt-0.5">
                      <input type="checkbox" id="consent" required className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-slate-300 rounded-md bg-white peer-checked:bg-blue-950 peer-checked:border-blue-950 transition-all"></div>
                      <svg className="absolute w-3.5 h-3.5 text-white left-[3px] top-[3px] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                      I consent to Aditya Spine &amp; Joint Rehab storing my contact information for appointment scheduling.
                    </span>
                  </label>

                  <button type="submit" className="group w-full bg-[rgb(20,42,98)] hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-950/20 hover:-translate-y-0.5 flex items-center justify-center gap-3 text-xs sm:text-sm">
                    <span>Request Appointment Slot</span>
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
