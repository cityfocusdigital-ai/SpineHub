"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare, Phone, MessageCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      question: "Do I need an MRI or X-ray before visiting?",
      answer: "Not always. Bring any existing reports and prescriptions. The clinician will assess you and advise whether further medical evaluation or imaging may be needed."
    },
    {
      question: "How is my treatment plan decided?",
      answer: "Your plan is based on symptoms, medical history, functional assessment, diagnosis, safety screening, goals and response to treatment."
    },
    {
      question: "Will I receive only machine-based treatment?",
      answer: "No. Rehabilitation should combine appropriate hands-on care, guided exercise, education and selected technology according to clinical need."
    },
    {
      question: "Can physiotherapy help sciatica or slipped disc?",
      answer: "Many patients with disc-related or sciatic symptoms may benefit from conservative rehabilitation, but suitability and expected progress depend on clinical assessment and red-flag screening."
    },
    {
      question: "Do you treat knee osteoarthritis?",
      answer: "The centre provides rehabilitation focused on pain management, joint mobility, strength, balance, walking and daily function. Medical or surgical referral may still be needed in some cases."
    },
    {
      question: "Is neuro rehabilitation available after stroke or paralysis?",
      answer: "Yes, goal-based programmes may include mobility, balance, gait, strength and task practice. Medical stability and coordination with the treating physician are important."
    },
    {
      question: "Are chiropractic adjustments suitable for everyone?",
      answer: "No. Hands-on techniques require assessment and screening. Some medical conditions, fractures, severe osteoporosis, neurological warning signs or other risks may require modification or referral."
    },
    {
      question: "How many sessions will I need?",
      answer: "The number and frequency vary with the condition, duration, severity, goals and response. A plan should be recommended after assessment and reviewed during care."
    },
    {
      question: "What should I bring to the first appointment?",
      answer: "Bring previous MRI/X-ray/CT reports, prescriptions, surgery details, implant information, current medicines and comfortable clothing."
    },
    {
      question: "How do I book?",
      answer: "Call or WhatsApp 7447755533 or 9090293232. The clinic is on the 3rd floor of Sushila Mayekar Shopping Centre near Borivali Station, Borivali West."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema.org FAQPage JSON-LD structure for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142A62]/10 text-[#142A62] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle size={14} className="text-[#C69A3C]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142A62] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Find clear answers regarding treatments, assessments, imaging requirements, and appointment bookings.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#142A62]/20"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full shrink-0 transition-transform duration-300 ${isOpen ? "bg-[#142A62] text-white rotate-180" : "bg-slate-100 text-slate-600"}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="px-5 sm:px-8 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box inside FAQ */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-xl font-bold text-[rgb(20,42,98)]">Have more questions or need clinical guidance?</h3>
            <p className="text-slate-600 text-sm">Reach out to our clinical team directly via Call or WhatsApp.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:7447755533"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[rgb(20,42,98)] hover:bg-[#1e3c8a] text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors shadow-sm"
            >
              <Phone size={16} />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/917447755533"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#C69A3C] hover:bg-[#b08535] text-[rgb(20,42,98)] font-bold px-5 py-3 rounded-xl text-sm transition-colors shadow-sm"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

