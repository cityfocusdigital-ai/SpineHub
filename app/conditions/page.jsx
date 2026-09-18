"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Activity, Bone, BrainCircuit, HeartPulse, Search, 
  ArrowRight, ShieldCheck, ChevronRight, Stethoscope, Dumbbell, Sparkles
} from "lucide-react";

const conditionCategories = [
  {
    id: "spine-nerve",
    title: "Spine & Nerve",
    icon: Activity,
    color: "from-blue-600 to-indigo-700",
    badgeBg: "bg-blue-50 text-blue-800 border-blue-200",
    description: "Care for lumbar and cervical spine pain, disc problems, sciatica, nerve root irritation, and posture-related strain.",
    items: [
      { name: "Lower Back Pain", slug: "lower-back-pain", desc: "Lumbar pain, muscle spasm, and postural strain management." },
      { name: "Neck Pain", slug: "neck-pain", desc: "Cervical stiffness, upper back strain, and posture correction." },
      { name: "Sciatica & Radiating Pain", slug: "sciatica", desc: "Sciatic nerve decompression and leg nerve pain protocols." },
      { name: "Slipped Disc / Disc Bulge", slug: "slipped-disc", desc: "Disc herniation assessment, traction, and core stabilization." },
      { name: "Spondylosis (Lumbar / Cervical)", slug: "spondylosis", desc: "Degenerative disc and facet joint stiffness management." },
      { name: "Spinal Stenosis", slug: "spinal-stenosis", desc: "Spinal canal narrowing relief and walking endurance rehab." },
      { name: "Tingling & Radiating Pain", slug: "tingling-radiating-pain", desc: "Neural mobilization for numbness or shooting nerve sensations." },
      { name: "Posture-Related Pain", slug: "posture-pain", desc: "Ergonomic alignment, desk postural strain, and core endurance." },
      { name: "Spine Stiffness", slug: "spine-stiffness", desc: "Restoring joint play and spinal segmental mobility." }
    ]
  },
  {
    id: "knee-lower-limb",
    title: "Knee & Lower Limb",
    icon: Bone,
    color: "from-emerald-600 to-teal-700",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    description: "Rehabilitation focused on joint cartilage wear, ligament injuries, walking gait, strength, and lower limb stability.",
    items: [
      { name: "Knee Osteoarthritis", slug: "knee-osteoarthritis", desc: "Unloading joint load, quadriceps strengthening, and mobility." },
      { name: "Knee Pain & Patellar Strain", slug: "knee-pain", desc: "Tracking issues, tendinopathy, and patellofemoral pain." },
      { name: "Post-Replacement Rehab", slug: "joint-replacement-rehab", desc: "Total knee/hip replacement range of motion and gait retraining." },
      { name: "Hip Pain & Bursitis", slug: "hip-pain", desc: "Gluteal strengthening, hip impingement, and joint mobility." },
      { name: "Ankle Pain & Instability", slug: "ankle-pain", desc: "Proprioception, ligament sprains, and arch support." },
      { name: "Plantar Fasciitis", slug: "plantar-fasciitis", desc: "Heel pain, calf flexibility, and foot biomechanics support." },
      { name: "Muscle Weakness & Atrophy", slug: "muscle-weakness", desc: "Targeted resistance training and neuromuscular re-education." },
      { name: "Balance & Gait Problems", slug: "balance-problems", desc: "Fall prevention, stability training, and walking symmetry." }
    ]
  },
  {
    id: "shoulder-upper-limb",
    title: "Shoulder & Upper Limb",
    icon: Dumbbell,
    color: "from-cyan-600 to-blue-700",
    badgeBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
    description: "Restoring overhead reach, rotator cuff function, elbow mobility, and post-fracture arm rehabilitation.",
    items: [
      { name: "Frozen Shoulder (Adhesive Capsulitis)", slug: "frozen-shoulder", desc: "Capsular stretching, gentle joint glide, and pain control." },
      { name: "Rotator Cuff Pain & Impingement", slug: "rotator-cuff-pain", desc: "Scapular dyskinesis correction and cuff muscle strengthening." },
      { name: "Shoulder Stiffness", slug: "shoulder-stiffness", desc: "Post-injury elevation and rotation restoration." },
      { name: "Tennis & Golfer's Elbow", slug: "tennis-elbow", desc: "Forearm extensor/flexor tendon overload rehab." },
      { name: "Wrist & Hand Weakness", slug: "wrist-hand-weakness", desc: "Grip strength, carpal tunnel strain, and fine motor control." },
      { name: "Post-Fracture Arm Rehab", slug: "post-fracture-rehab", desc: "Post-cast joint mobilization, edema control, and strength." }
    ]
  },
  {
    id: "sports-activity",
    title: "Sports & Activity",
    icon: Sparkles,
    color: "from-amber-600 to-orange-700",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
    description: "Active recovery for ligament sprains, muscle strains, tendon overload, and safe return-to-sport conditioning.",
    items: [
      { name: "Sprains & Ligament Tears", slug: "sprains-strains", desc: "Acute inflammation control, scar tissue work, and agility." },
      { name: "Tendon Overload & Tendinopathy", slug: "tendon-overload", desc: "Eccentric loading protocols and tissue recovery." },
      { name: "Return-to-Sport Conditioning", slug: "return-to-sport", desc: "Sport-specific drills, power, and movement retraining." },
      { name: "Reduced Flexibility & Tightness", slug: "reduced-flexibility", desc: "Dynamic stretching, myofascial release, and mobility." },
      { name: "Recurrent Injury Prevention", slug: "recurrent-injury-risk", desc: "Biomechanical screening and movement efficiency work." }
    ]
  },
  {
    id: "neurological",
    title: "Neurological Rehabilitation",
    icon: BrainCircuit,
    color: "from-purple-600 to-indigo-800",
    badgeBg: "bg-purple-50 text-purple-800 border-purple-200",
    description: "Goal-based neuroplasticity training for stroke, paralysis, gait impairment, and balance deficits.",
    items: [
      { name: "Stroke Rehabilitation", slug: "stroke-rehab", desc: "Neuroplasticity, task-specific practice, and motor control." },
      { name: "Paralysis & Hemiparesis Rehab", slug: "paralysis-rehab", desc: "Limb activation, muscle tone management, and ADL practice." },
      { name: "Gait & Walking Training", slug: "gait-training", desc: "Body-weight supported walking, stride symmetry, and safety." },
      { name: "Balance & Coordination Deficits", slug: "coordination-deficits", desc: "Cerebellar & vestibular stabilization exercises." },
      { name: "Neuropathy Functional Support", slug: "neuropathy-limitations", desc: "Sensory re-education, foot drop support, and mobility safety." }
    ]
  },
  {
    id: "post-operative",
    title: "Post-Operative Care",
    icon: HeartPulse,
    color: "from-rose-600 to-red-700",
    badgeBg: "bg-rose-50 text-rose-800 border-rose-200",
    description: "Surgeon-guided post-surgical recovery following spine surgery, joint replacements, arthroscopy, or fracture fixation.",
    items: [
      { name: "Spine Surgery Rehabilitation", slug: "spine-surgery-rehab", desc: "Post-discectomy or fusion scar care, stabilization, and walking." },
      { name: "Joint Replacement Rehab", slug: "joint-replacement-rehab", desc: "Knee/hip implant protocols, swelling control, and flexion restoration." },
      { name: "Arthroscopy Recovery", slug: "arthroscopy-recovery", desc: "ACL/Meniscus repair rehab and progressive loading." },
      { name: "Post-Operative Care General", slug: "post-operative-care", desc: "Comprehensive surgeon protocol alignment and safe transition." }
    ]
  }
];

export default function ConditionsHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCategories = conditionCategories.map(cat => {
    const matchingItems = cat.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, items: matchingItems };
  }).filter(cat => selectedCategory === "all" || cat.id === selectedCategory ? cat.items.length > 0 : false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- HERO BANNER --- */}
      <section className="relative pt-32 pb-20 bg-[rgb(20,42,98)] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-[#E5C158] uppercase tracking-widest">
            <Stethoscope size={14} className="text-[#E5C158]" />
            <span>Clinical Knowledge Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
            Conditions We Assess &amp; Treat
          </h1>

          <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Specialized rehabilitation programs for spine, joint, neurological, sports, and post-operative conditions. Our assessment-led approach creates a clear recovery roadmap for your unique needs.
          </p>

          {/* Search Input Bar */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by condition or symptom (e.g., lower back, sciatica, knee, stroke)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/40 shadow-xl font-medium text-sm sm:text-base transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-900 bg-slate-100 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-[#D4AF37] text-[rgb(20,42,98)] shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              All Categories
            </button>
            {conditionCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#D4AF37] text-[rgb(20,42,98)] shadow-md"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* --- MAIN CONTENT HUB --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        
        {/* Responsible Online Policy Notice */}
        <div className="mb-12 bg-blue-50 border border-blue-200/80 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
          <ShieldCheck size={24} className="text-[rgb(20,42,98)] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-[rgb(20,42,98)]">Responsible Information Policy:</strong> The contents on these condition pages are for patient education and awareness only. They do not constitute an online diagnosis. Every condition requires physical clinical evaluation, safety screening, and personalized care planning before starting rehabilitation.
          </p>
        </div>

        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <Search size={48} className="mx-auto text-slate-300" />
            <h3 className="text-xl font-bold text-slate-800">No matching conditions found</h3>
            <p className="text-slate-500 text-sm">Try searching with a different term or clear your search input.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
              className="inline-flex items-center gap-2 bg-[rgb(20,42,98)] text-white px-6 py-3 rounded-xl font-bold text-sm"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <section key={cat.id} className="space-y-6">
                  
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[rgb(20,42,98)] text-white flex items-center justify-center shadow-md shrink-0">
                        <IconComp size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-serif text-[rgb(20,42,98)] font-bold">
                          {cat.title}
                        </h2>
                        <p className="text-slate-600 text-xs sm:text-sm">{cat.description}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border self-start sm:self-auto ${cat.badgeBg}`}>
                      {cat.items.length} Condition{cat.items.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Conditions Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/conditions/${item.slug}`}
                        className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-slate-900 text-lg group-hover:text-[rgb(20,42,98)] transition-colors">
                              {item.name}
                            </h3>
                            <ChevronRight size={18} className="text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                          </div>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[rgb(20,42,98)] group-hover:text-[#D4AF37] transition-colors">
                          <span>View Symptoms &amp; Protocol</span>
                          <ArrowRight size={14} />
                        </div>
                      </Link>
                    ))}
                  </div>

                </section>
              );
            })}
          </div>
        )}

        {/* Floating Booking Banner */}
        <div className="mt-20 bg-gradient-to-r from-[rgb(20,42,98)] to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">Not sure which category fits your pain?</h3>
            <p className="text-blue-100 text-sm sm:text-base">Speak directly with our rehabilitation clinicians in Borivali West.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[rgb(20,42,98)] font-bold px-8 py-4 rounded-xl text-base hover:bg-white transition-colors shadow-lg shrink-0 relative z-10"
          >
            <span>Book Clinical Assessment</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </main>
    </div>
  );
}
