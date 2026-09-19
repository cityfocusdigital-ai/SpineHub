"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

const conditionCategories = [
  {
    title: "Spine & Nerve",
    items: [
      { name: "Lower Back Pain", slug: "lower-back-pain" },
      { name: "Neck Pain", slug: "neck-pain" },
      { name: "Sciatica", slug: "sciatica" },
      { name: "Slipped Disc / Bulge", slug: "slipped-disc" },
      { name: "Spondylosis", slug: "spondylosis" },
      { name: "Spinal Stenosis", slug: "spinal-stenosis" },
      { name: "Posture Pain", slug: "posture-pain" }
    ],
  },
  {
    title: "Knee & Lower Limb",
    items: [
      { name: "Knee Osteoarthritis", slug: "knee-osteoarthritis" },
      { name: "Knee Pain", slug: "knee-pain" },
      { name: "Post-Replacement Rehab", slug: "joint-replacement-rehab" },
      { name: "Hip Pain", slug: "hip-pain" },
      { name: "Ankle Pain", slug: "ankle-pain" },
      { name: "Plantar Fasciitis", slug: "plantar-fasciitis" },
      { name: "Balance & Gait", slug: "balance-problems" }
    ],
  },
  {
    title: "Shoulder & Upper Limb",
    items: [
      { name: "Frozen Shoulder", slug: "frozen-shoulder" },
      { name: "Rotator Cuff Pain", slug: "rotator-cuff-pain" },
      { name: "Shoulder Stiffness", slug: "shoulder-stiffness" },
      { name: "Tennis Elbow", slug: "tennis-elbow" },
      { name: "Wrist/Hand Weakness", slug: "wrist-hand-weakness" },
      { name: "Post-Fracture Rehab", slug: "post-fracture-rehab" }
    ],
  },
  {
    title: "Sports & Activity",
    items: [
      { name: "Sprains & Strains", slug: "sprains-strains" },
      { name: "Tendon Overload", slug: "tendon-overload" },
      { name: "Return-to-Sport", slug: "return-to-sport" },
      { name: "Reduced Flexibility", slug: "reduced-flexibility" },
      { name: "Injury Risk Assessment", slug: "recurrent-injury-risk" }
    ],
  },
  {
    title: "Neurological Rehab",
    items: [
      { name: "Stroke Rehabilitation", slug: "stroke-rehab" },
      { name: "Paralysis Rehab", slug: "paralysis-rehab" },
      { name: "Gait Training", slug: "gait-training" },
      { name: "Balance & Coordination", slug: "coordination-deficits" },
      { name: "Neuropathy Limitations", slug: "neuropathy-limitations" }
    ],
  },
  {
    title: "Post-Operative Care",
    items: [
      { name: "Spine Surgery Rehab", slug: "spine-surgery-rehab" },
      { name: "Joint Replacement", slug: "joint-replacement-rehab" },
      { name: "Arthroscopy Recovery", slug: "arthroscopy-recovery" },
      { name: "Fracture Rehabilitation", slug: "post-fracture-rehab" }
    ],
  }
];

export default function ConditionDropdown() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] max-w-[95vw] mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="p-6 grid grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto">
        {conditionCategories.map((category, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-[#0a1e3f] font-bold text-xs uppercase tracking-wider border-b-2 border-[#C69A3C] inline-block pb-1">
              {category.title}
            </h3>
            <ul className="space-y-1">
              {category.items.map((item) => (
                <li key={item.slug}>
                  <Link 
                    href={`/conditions/${item.slug}`}
                    className="group flex items-center justify-between text-slate-600 hover:text-[#0071bd] transition-all text-xs font-medium py-1"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 text-[#C69A3C] transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Footer of Dropdown */}
      <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-medium">Looking for a specific condition?</span>
        <Link 
          href="/conditions"
          className="font-bold text-[rgb(20,42,98)] hover:text-[#C69A3C] flex items-center gap-1.5 transition-colors"
        >
          <span>View Conditions Knowledge Hub</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
