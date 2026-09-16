"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Detailed Categories based on your input
const conditionCategories = [
  {
    title: "Spine & Nerve",
    items: [
      { name: "Lower Back Pain", slug: "lower-back-pain" },
      { name: "Neck Pain", slug: "neck-pain" },
      { name: "Sciatica", slug: "sciatica" },
      { name: "Slipped Disc / Disc Bulge", slug: "slipped-disc" },
      { name: "Spondylosis (Lumbar/Cervical)", slug: "spondylosis" },
      { name: "Spinal Stenosis", slug: "spinal-stenosis" },
      { name: "Posture-Related Pain", slug: "posture-pain" },
    ],
  },
  {
    title: "Knee & Lower Limb",
    items: [
      { name: "Knee Osteoarthritis", slug: "knee-osteoarthritis" },
      { name: "Hip Pain", slug: "hip-pain" },
      { name: "Ankle Pain", slug: "ankle-pain" },
      { name: "Plantar Fasciitis", slug: "plantar-fasciitis" },
      { name: "Balance Problems", slug: "balance-problems" },
      { name: "Post-Replacement Rehab", slug: "joint-replacement-rehab" },
    ],
  },
  {
    title: "Shoulder & Upper Limb",
    items: [
      { name: "Frozen Shoulder", slug: "frozen-shoulder" },
      { name: "Rotator Cuff Pain", slug: "rotator-cuff-pain" },
      { name: "Tennis Elbow", slug: "tennis-elbow" },
      { name: "Wrist/Hand Weakness", slug: "wrist-hand-weakness" },
      { name: "Post-Fracture Rehab", slug: "post-fracture-rehab" },
    ],
  },
  {
    title: "Sports & Neuro",
    items: [
      { name: "Sports Sprains & Strains", slug: "sports-injury" },
      { name: "Return-to-Sport Conditioning", slug: "return-to-sport" },
      { name: "Stroke Rehabilitation", slug: "stroke-rehab" },
      { name: "Paralysis Rehab", slug: "paralysis-rehab" },
      { name: "Neuropathy", slug: "neuropathy" },
      { name: "Post-Operative Care", slug: "post-operative-care" },
    ],
  },
];

export default function ConditionDropdown() {
  return (
    /* Changed left-2 to left-1/2 -translate-x-1/2 and w-200 to w-[850px] max-w-[95vw] */
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] max-w-[95vw] mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="p-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {conditionCategories.map((category, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-[#0a1e3f] font-bold text-sm uppercase tracking-wider border-b-2 border-[#c5973e] inline-block pb-1">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item.slug}>
                  <Link 
                    href={`/conditions/${item.slug}`}
                    className="group flex items-center justify-between text-slate-600 hover:text-[#0071bd] transition-all text-xs font-medium py-1"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 text-[#c5973e] transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Footer of Dropdown */}
      <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">Not sure about your diagnosis?</span>
        <Link 
          href="/contact"
          className="text-xs font-bold text-[#0071bd] hover:text-[#0a1e3f] flex items-center gap-1 transition-colors"
        >
          Book Free Assessment <ChevronRight size={12} />
        </Link>
      </div>
    </div>
  );
}