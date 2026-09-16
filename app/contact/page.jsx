// app/contact/page.tsx
import Link from 'next/link';
import { 
  MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, 
  CalendarDays, User, Activity, Send 
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-950">
      
      {/* --- Premium Navy Hero Section --- */}
      <section className="relative h-[420px] flex items-center justify-center overflow-hidden bg-blue-950">
        {/* Background Image with Dark Navy Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-950/90 via-blue-950/85 to-blue-950" />
        
        <div className="max-w-7xl mx-auto relative z-10 px-6 w-full text-center mt-6">
          <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700/50 rounded-full px-5 py-2 mb-6 shadow-lg backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <p className="text-blue-100 text-xs font-bold tracking-widest uppercase">Now Accepting New Patients</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight text-white drop-shadow-md">
            Start Your Recovery At <br />
            <span className="text-blue-400">Aditya Spine & Joint Rehab</span>
          </h1>
          
          <p className="text-blue-100/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Expert physiotherapy and rehabilitation in Borivali West. 
            Conveniently located near the station for patients across Mumbai.
          </p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <main className="max-w-7xl mx-auto px-6 py-12 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Deep Navy Contact Card */}
          <div className="lg:col-span-5 bg-blue-950 rounded-[2rem] shadow-2xl p-8 md:p-10 border border-blue-900 text-white sticky top-8">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-blue-900">
              <div className="w-12 h-12 rounded-2xl bg-blue-900/60 flex items-center justify-center text-blue-300 border border-blue-800">
                <MapPin size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Visit Our Clinic</h2>
                <p className="text-blue-300 text-sm">Borivali West, Mumbai</p>
              </div>
            </div>
            
            <div className="space-y-7">
              {[
                { icon: MapPin, title: "Address", content: ["3rd Floor, Sushila Mayekar Shopping Centre", "L.T. Road, beside Radha Krishna Hotel", "near Borivali Station, Mumbai – 400092"] },
                { icon: Phone, title: "Call / WhatsApp", content: ["+91 7447755533", "+91 9090293232"], isLink: true, hrefPrefix: "tel:" },
                { icon: Mail, title: "Email Us", content: ["adityaspinerehab@gmail.com"], isLink: true, hrefPrefix: "mailto:" },
                { icon: Clock, title: "Working Hours", content: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: By Appointment Only"] }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/50 flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 border border-blue-800">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-300 text-xs uppercase tracking-widest mb-1">{item.title}</h3>
                    <div className="text-slate-300 text-sm leading-relaxed space-y-0.5">
                      {item.content.map((line, i) => (
                        item.isLink ? (
                          <a key={i} href={`${item.hrefPrefix}${line.replace(/\s/g, '')}`} className="block hover:text-blue-200 transition-colors font-medium">
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

            <div className="mt-10 pt-6 border-t border-blue-900">
              <Link 
                href="https://maps.google.com/?q=Aditya+Spine+&+Joint+Rehab+Borivali+West" 
                target="_blank"
                className="group flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-950/50 hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                <span>Get Directions on Google Maps</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] shadow-xl shadow-blue-950/5 overflow-hidden border border-slate-200/80">
            <div className="p-8 md:p-10">
              <div className="flex flex-col gap-1 mb-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950">Book Your Appointment</h2>
                <p className="text-slate-500 text-sm">
                  Please fill in your details below. We will confirm your slot via your preferred contact method.
                </p>
              </div>

              {/* Security Notice */}
              <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-4 mb-6 flex gap-3 items-start">
                <ShieldCheck size={20} className="text-blue-950 mt-0.5 shrink-0" />
                <p className="text-xs text-blue-950 leading-relaxed">
                  <span className="font-bold">Privacy First:</span> Do not upload sensitive medical reports here. Please bring physical copies during your visit.
                </p>
              </div>

              <form className="space-y-5">
                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center gap-2 pl-1">
                      <User size={14} className="text-blue-950" /> Full Name
                    </label>
                    <input type="text" id="name" required className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900 text-sm" placeholder="Enter patient name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mobile" className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center gap-2 pl-1">
                      <Phone size={14} className="text-blue-950" /> Mobile Number
                    </label>
                    <input type="tel" id="mobile" required className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900 text-sm" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                {/* Clinical Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="ageRange" className="text-xs font-bold text-blue-950 uppercase tracking-wider pl-1">Age Group</label>
                    <select id="ageRange" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all font-medium text-slate-700 cursor-pointer text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23172554%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-4.9%200-9.3%202-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%204.9%202%209.3%205.4%2012.9l128%20127.9c3.6%203.6%208%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.9%205.4-12.8%200-4.9-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px] bg-[right_1rem_center] bg-no-repeat">
                      <option value="">Select Age</option>
                      <option value="child">Child (&lt;12)</option>
                      <option value="teen">Teen (13-19)</option>
                      <option value="adult">Adult (20-50)</option>
                      <option value="senior">Senior (50+)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="duration" className="text-xs font-bold text-blue-950 uppercase tracking-wider pl-1">Duration</label>
                    <select id="duration" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all font-medium text-slate-700 cursor-pointer text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23172554%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-4.9%200-9.3%202-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%204.9%202%209.3%205.4%2012.9l128%20127.9c3.6%203.6%208%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.9%205.4-12.8%200-4.9-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px] bg-[right_1rem_center] bg-no-repeat">
                      <option value="">How long?</option>
                      <option value="recent">&lt; 1 Week</option>
                      <option value="short">1-4 Weeks</option>
                      <option value="medium">1-6 Months</option>
                      <option value="chronic">&gt; 6 Months</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contactMethod" className="text-xs font-bold text-blue-950 uppercase tracking-wider pl-1">Contact Via</label>
                    <select id="contactMethod" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all font-medium text-slate-700 cursor-pointer text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23172554%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-4.9%200-9.3%202-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%204.9%202%209.3%205.4%2012.9l128%20127.9c3.6%203.6%208%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.9%205.4-12.8%200-4.9-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px] bg-[right_1rem_center] bg-no-repeat">
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
                  <textarea id="problem" rows={4} required className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all resize-none placeholder:text-slate-400 font-medium text-slate-900 text-sm" placeholder="Describe your pain, stiffness, or injury briefly..."></textarea>
                </div>

                {/* Preferred Date Time */}
                <div className="space-y-2">
                  <label htmlFor="prefDate" className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center gap-2 pl-1">
                    <CalendarDays size={14} className="text-blue-950" /> Preferred Date & Time
                  </label>
                  <input type="datetime-local" id="prefDate" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-950 focus:bg-white focus:ring-4 focus:ring-blue-950/10 outline-none transition-all font-medium text-slate-700 text-sm" />
                </div>

                {/* Consent & Submit */}
                <div className="pt-4">
                  <label className="flex items-start gap-3 cursor-pointer group mb-6">
                    <div className="relative flex items-center mt-0.5">
                      <input type="checkbox" id="consent" required className="peer sr-only" />
                      <div className="w-5 h-5 border-2 border-slate-300 rounded-md bg-white peer-checked:bg-blue-950 peer-checked:border-blue-950 transition-all"></div>
                      <svg className="absolute w-3.5 h-3.5 text-white left-[3px] top-[3px] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                      I consent to Aditya Spine & Joint Rehab storing my contact information for appointment scheduling.
                    </span>
                  </label>

                  <button type="submit" className="group w-full bg-blue-950 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-950/20 hover:shadow-blue-950/40 hover:-translate-y-0.5 flex items-center justify-center gap-3 text-base">
                    <span>Request Appointment Slot</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
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

