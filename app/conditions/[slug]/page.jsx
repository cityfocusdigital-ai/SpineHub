"use client";

import React, { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  AlertTriangle, CheckCircle2, Activity, ArrowRight, 
  Target, Phone, MessageCircle, ShieldCheck, Clock,
  MapPin, Star, BrainCircuit, Bone, Move, HeartPulse, Stethoscope, FileText
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- COMPREHENSIVE CLINICAL DATA CONFIGURATION ---
const conditionData = {
  // === 1. SPINE & NERVE ===
  "lower-back-pain": {
    title: "Lower Back Pain",
    subtitle: "Biomechanically Targeted Lumbar Rehabilitation",
    category: "Spine & Nerve",
    heroImage: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=1920&q=80",
    description: "Lower back pain affects movement, sitting tolerance, and sleep. Rather than relying solely on passive pain relief, our clinical team performs a structured physical examination to identify mechanical strain, muscle imbalances, and joint stiffness.",
    symptoms: ["Persistent dull ache in lower lumbar area", "Sharp pain with forward bending or lifting", "Morning stiffness lasting >20 minutes", "Gluteal strain or localized tightness"],
    causes: ["Postural strain and desk ergonomics", "Lumbar disc bulge or facet stiffness", "Core muscle weakness", "Sudden lifting or twist injury"],
    redFlags: ["Sudden bladder or bowel incontinence", "Progressive foot drop or leg weakness", "Unexplained fever or night sweats", "Severe unremitting pain despite rest"],
    approach: "Functional movement screening combined with manual therapy for acute relief, followed by deep core stabilization and progressive loading.",
    treatments: [
      { name: "McKenzie MDT Assessment", desc: "Directional preference exercises to reduce peripheral pain." },
      { name: "Spinal Decompression Support", desc: "Non-invasive traction for suitable disc-related stiffness." },
      { name: "Core & Pelvic Stabilization", desc: "Strengthening deep abdominals and multifidus muscles." },
      { name: "Ergonomic & Lifting Retraining", desc: "Practical guidance for daily activities and desk setup." }
    ],
    goals: "Restore full lumbar range of motion, build core resilience, eliminate daily pain triggers, and prevent recurrence."
  },
  "neck-pain": {
    title: "Neck Pain & Cervical Strain",
    subtitle: "Relieve Upper Spine Stiffness & Postural Tension",
    category: "Spine & Nerve",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
    description: "Cervical pain and upper back stiffness frequently result from prolonged screen exposure ('tech neck'), nerve root compression, or joint degeneration.",
    symptoms: ["Stiffness turning head side to side", "Aching in upper trap muscles and shoulders", "Headaches originating from neck base", "Pain worsening after long sitting"],
    causes: ["Forward head posture", "Cervical disc bulge", "Upper back stiffness", "Repetitive overhead strain"],
    redFlags: ["Loss of hand coordination or clumsiness", "Unsteady walking balance", "Severe dizziness or fainting", "Shooting arm pain with numbness"],
    approach: "Cervical postural alignment, gentle mobilization of restricted upper thoracic segments, and deep neck flexor re-education.",
    treatments: [
      { name: "Deep Flexor Strengthening", desc: "Restoring postural endurance of deep neck muscles." },
      { name: "Thoracic Mobilization", desc: "Unlocking upper back stiffness to relieve neck stress." },
      { name: "Ergonomic Assessment", desc: "Customizing screen height, chair posture, and pillow support." },
      { name: "Soft Tissue Release", desc: "Relieving chronic upper trapezius and levator muscle spasm." }
    ],
    goals: "Achieve comfortable cervical mobility, eliminate tension headaches, and build upright postural stamina."
  },
  "sciatica": {
    title: "Sciatica & Nerve Compression",
    subtitle: "Targeted Sciatic Nerve Decompression & Gliding",
    category: "Spine & Nerve",
    heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1920&q=80",
    description: "Sciatica involves irritation of the sciatic nerve, causing sharp, shooting, or burning pain that travels from the lumbar spine through the buttock down the leg.",
    symptoms: ["Shooting or electric-shock pain down one leg", "Tingling or numbness in calf or foot", "Pain worsening with prolonged sitting", "Leg heaviness during walking"],
    causes: ["Herniated or bulging disc", "Piriformis muscle tightness", "Spinal canal stenosis", "Spondylolisthesis"],
    redFlags: ["Loss of bowel or bladder control", "Groin or saddle numbness", "Progressive leg buckling"],
    approach: "Neural mobilization glides, specific extension-based disc centralizing movements, and piriformis myofascial release.",
    treatments: [
      { name: "Neural Flossing Exercises", desc: "Restoring smooth gliding of nerve roots." },
      { name: "Extension Centralization", desc: "McKenzie techniques to pull pain out of the leg." },
      { name: "Piriformis Release", desc: "Decompressing the nerve where it passes gluteal muscles." },
      { name: "Spinal Traction Option", desc: "Controlled decompression for disc space restoration." }
    ],
    goals: "Centralize radiating pain back to the spine, reduce leg nerve irritation, and restore normal walking distance."
  },
  "slipped-disc": {
    title: "Slipped Disc & Herniation",
    subtitle: "Non-Surgical Disc Rehabilitation & Spine Protection",
    category: "Spine & Nerve",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80",
    description: "A herniated or bulging disc can cause intense spinal localized pain or radiculopathy. Conservative rehabilitation focuses on directional movement preferences to reduce disc bulge pressure.",
    symptoms: ["Sharp back pain when bending forward", "Increased pain with coughing or sneezing", "Radicular leg tingling or numbness", "Inability to sit for extended periods"],
    causes: ["Repetitive heavy lifting", "Degenerative disc changes", "Sudden twisting injury", "Weak abdominal stabilization"],
    redFlags: ["Progressive weakness lifting toes/foot", "Numbness in private parts", "Incontinence"],
    approach: "Immediate directional preference therapy to reduce bulge pressure, supported by gentle manual decompression and core bracing.",
    treatments: [
      { name: "MDT Extension Therapy", desc: "Moving disc material away from sensitive nerve roots." },
      { name: "Decompression Traction", desc: "Decreasing intra-discal pressure gently." },
      { name: "Core Muscular Splinting", desc: "Building a natural muscular corset around the spine." },
      { name: "Activity Modification", desc: "Safe bending, sitting, and lifting rules." }
    ],
    goals: "Reduce disc bulge protrusion, eliminate nerve pain, and return to safe lifting and working."
  },

  // === 2. KNEE & LOWER LIMB ===
  "knee-osteoarthritis": {
    title: "Knee Osteoarthritis",
    subtitle: "Joint Protection, Pain Management & Strength",
    category: "Knee & Lower Limb",
    heroImage: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1920&q=80",
    description: "Knee osteoarthritis involves progressive cartilage changes leading to pain, stiffness, and joint noise. Targeted strengthening of quadriceps and glutes reduces mechanical load on the joint.",
    symptoms: ["Stiffness after sitting or upon waking", "Grinding or crepitus sensation", "Pain with stair climbing or squatting", "Joint swelling after activity"],
    causes: ["Age-related cartilage changes", "Previous ligament/meniscus injury", "Altered knee biomechanics", "Quadriceps weakness"],
    redFlags: ["Hot, intensely red, swollen knee", "Complete inability to bear weight", "Fever accompanying joint pain"],
    approach: "Unloading joint stress through muscular strengthening, gait adjustment, and range of motion preservation.",
    treatments: [
      { name: "Quadriceps & Glute Building", desc: "Creating shock-absorbing muscle support around the knee." },
      { name: "Gait & Walking Retraining", desc: "Distributing load evenly across inner and outer joint compartments." },
      { name: "Patellar Mobilization", desc: "Restoring knee cap gliding for smoother flexion." },
      { name: "Low-Impact Endurance", desc: "Cycling and guided aquatic-style exercise routines." }
    ],
    goals: "Decrease daily knee pain, climb stairs comfortably, increase walking distance, and delay or avoid surgery."
  },
  "joint-replacement-rehab": {
    title: "Post-Replacement Rehabilitation",
    subtitle: "Structured Post-Operative Recovery for Total Knee & Hip Implants",
    category: "Post-Operative Care",
    heroImage: "/4.jpeg",
    description: "Following total knee (TKR) or total hip (THR) replacement, progressive rehabilitation is crucial to achieve surgeon-specified range of motion, control post-operative swelling, rebuild quadriceps and glute strength, and eliminate gait limping.",
    symptoms: ["Post-surgical joint stiffness and swelling", "Quadriceps and gluteal muscular weakness", "Swelling and tightness around incision site", "Difficulty climbing stairs or standing from chair", "Altered walking pattern or reliance on walking aid"],
    causes: ["Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "Joint Arthroplasty intervention", "Post-operative muscular inhibition"],
    redFlags: ["Sudden calf swelling, warmth, or severe pain (DVT warning)", "Surgical wound redness, pus, or persistent fever", "Sudden inability to bear weight or joint instability"],
    approach: "Strict adherence to surgeon protocols, early range-of-motion work, lymphatic massage, and progressive weight-bearing balance.",
    treatments: [
      { name: "Flexion & Extension Restoration", desc: "Targeted active and passive exercises to achieve full range of motion." },
      { name: "Body-Weight Supported Gait Retraining", desc: "Transitioning smoothly from walker/crutches to independent walking without a limp." },
      { name: "Scar & Swelling Management", desc: "Targeted gentle manual release and edema reduction protocols." },
      { name: "Functional Retraining", desc: "Practicing safe chair transfers, stair climbing, and daily activity movement." }
    ],
    goals: "Achieve optimal implant movement range, walk independently without limp, and return to active daily living safely."
  },
  "post-replacement-rehab": {
    title: "Post-Replacement Rehabilitation",
    subtitle: "Structured Post-Operative Recovery for Total Knee & Hip Implants",
    category: "Post-Operative Care",
    heroImage: "/4.jpeg",
    description: "Following total knee (TKR) or total hip (THR) replacement, progressive rehabilitation is crucial to achieve surgeon-specified range of motion, control post-operative swelling, rebuild quadriceps and glute strength, and eliminate gait limping.",
    symptoms: ["Post-surgical joint stiffness and swelling", "Quadriceps and gluteal muscular weakness", "Swelling and tightness around incision site", "Difficulty climbing stairs or standing from chair", "Altered walking pattern or reliance on walking aid"],
    causes: ["Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "Joint Arthroplasty intervention", "Post-operative muscular inhibition"],
    redFlags: ["Sudden calf swelling, warmth, or severe pain (DVT warning)", "Surgical wound redness, pus, or persistent fever", "Sudden inability to bear weight or joint instability"],
    approach: "Strict adherence to surgeon protocols, early range-of-motion work, lymphatic massage, and progressive weight-bearing balance.",
    treatments: [
      { name: "Flexion & Extension Restoration", desc: "Targeted active and passive exercises to achieve full range of motion." },
      { name: "Body-Weight Supported Gait Retraining", desc: "Transitioning smoothly from walker/crutches to independent walking without a limp." },
      { name: "Scar & Swelling Management", desc: "Targeted gentle manual release and edema reduction protocols." },
      { name: "Functional Retraining", desc: "Practicing safe chair transfers, stair climbing, and daily activity movement." }
    ],
    goals: "Achieve optimal implant movement range, walk independently without limp, and return to active daily living safely."
  },
  "posh-replacement-rehab": {
    title: "Post-Replacement Rehabilitation",
    subtitle: "Structured Post-Operative Recovery for Total Knee & Hip Implants",
    category: "Post-Operative Care",
    heroImage: "/4.jpeg",
    description: "Following total knee (TKR) or total hip (THR) replacement, progressive rehabilitation is crucial to achieve surgeon-specified range of motion, control post-operative swelling, rebuild quadriceps and glute strength, and eliminate gait limping.",
    symptoms: ["Post-surgical joint stiffness and swelling", "Quadriceps and gluteal muscular weakness", "Swelling and tightness around incision site", "Difficulty climbing stairs or standing from chair", "Altered walking pattern or reliance on walking aid"],
    causes: ["Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "Joint Arthroplasty intervention", "Post-operative muscular inhibition"],
    redFlags: ["Sudden calf swelling, warmth, or severe pain (DVT warning)", "Surgical wound redness, pus, or persistent fever", "Sudden inability to bear weight or joint instability"],
    approach: "Strict adherence to surgeon protocols, early range-of-motion work, lymphatic massage, and progressive weight-bearing balance.",
    treatments: [
      { name: "Flexion & Extension Restoration", desc: "Targeted active and passive exercises to achieve full range of motion." },
      { name: "Body-Weight Supported Gait Retraining", desc: "Transitioning smoothly from walker/crutches to independent walking without a limp." },
      { name: "Scar & Swelling Management", desc: "Targeted gentle manual release and edema reduction protocols." },
      { name: "Functional Retraining", desc: "Practicing safe chair transfers, stair climbing, and daily activity movement." }
    ],
    goals: "Achieve optimal implant movement range, walk independently without limp, and return to active daily living safely."
  },

  // === 3. SHOULDER & UPPER LIMB ===
  "frozen-shoulder": {
    title: "Frozen Shoulder (Adhesive Capsulitis)",
    subtitle: "Progressive Capsular Mobilization & Pain Control",
    category: "Shoulder & Upper Limb",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
    description: "Frozen shoulder leads to severe restriction of shoulder movement in all directions accompanied by deep aching pain, especially at night.",
    symptoms: ["Inability to reach behind back or overhead", "Deep night ache disturbing sleep", "Sharp pain with sudden arm movement", "Progressive stiffness over weeks"],
    causes: ["Shoulder capsule inflammation & thickening", "Post-injury immobilization", "Diabetes-associated joint stiffness"],
    redFlags: ["Unexplained shoulder deformity", "Loss of sensation in arm/hand", "Systemic fever with joint swelling"],
    approach: "Stage-appropriate care: pain relief modalities during the freezing phase, followed by gentle joint glides and stretching during thawing phase.",
    treatments: [
      { name: "Glenohumeral Joint Glides", desc: "Hands-on mobilization to stretch tight capsule fibers." },
      { name: "Scapular Rhythm Training", desc: "Preventing compensatory neck strain." },
      { name: "Laser / Modality Pain Relief", desc: "Non-invasive therapy to calm active inflammatory pain." },
      { name: "Home Mobility Program", desc: "Pendulum and pulley exercises for daily practice." }
    ],
    goals: "Restore full overhead arm reach, eliminate sleep-disrupting pain, and regain functional shoulder strength."
  },

  // === 4. NEUROLOGICAL ===
  "stroke-rehab": {
    title: "Stroke Rehabilitation",
    subtitle: "Neuroplasticity, Motor Control & Gait Training",
    category: "Neurological Rehab",
    heroImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1920&q=80",
    description: "Post-stroke rehabilitation utilizes neuroplasticity—the brain's ability to reorganize—to help patients relearn lost movements, balance, and daily self-care tasks.",
    symptoms: ["One-sided weakness or paralysis (Hemiparesis)", "Difficulty walking or balance instability", "Reduced arm or hand control", "Fatigue and movement slowness"],
    causes: ["Ischemic stroke", "Hemorrhagic stroke", "Transient Ischemic Attack (TIA)"],
    redFlags: ["Sudden new facial drooping or speech slurring", "Severe sudden headache", "Blood pressure emergency spikes"],
    approach: "Task-specific repetitive training, body-weight supported gait retraining, and upper limb constraint-induced therapy.",
    treatments: [
      { name: "Neuro Gait & Harness Training", desc: "Safe upright walking practice without fall risk." },
      { name: "Repetitive Task Practice", desc: "Re-learning reaching, grasping, and standing." },
      { name: "Tone & Spasticity Management", desc: "Gentle stretching and position splinting." },
      { name: "Balance & Sensory Training", desc: "Proprioceptive exercises to improve standing stability." }
    ],
    goals: "Maximize functional independence, improve walking speed and safety, and enhance arm and hand usability."
  },

  // === 5. INTEGRATIVE PAIN & SPECIALIZED CARE ===
  "integrative-pain-care": {
    title: "Integrative Pain Care",
    subtitle: "Multimodal Relief: Physiotherapy, Manual Therapy & Holistic Recovery",
    category: "Integrative Pain Care",
    heroImage: "/cer.png",
    description: "An evidence-based multimodal approach combining clinical physiotherapy, gentle joint mobilization, chiropractic alignment, osteopathy, and supportive naturopathy techniques tailored to your individual tolerance.",
    symptoms: [
      "Chronic full-body stiffness and muscular soreness",
      "Persistent neck, shoulder, and lower back fatigue",
      "Stress-related tension headaches and muscle spasm",
      "Stiffness not responding adequately to single-modality care"
    ],
    causes: [
      "Prolonged sedentary posture and biomechanical strain",
      "Myofascial trigger points and soft-tissue restrictions",
      "Chronic neuromuscular tension patterns",
      "Spinal segmental hypo-mobility and alignment stress"
    ],
    redFlags: [
      "Unexplained fever or significant unintended weight loss",
      "Progressive neurological numbness or limb weakness",
      "Sudden severe pain following acute physical trauma"
    ],
    approach: "Whole-person clinical assessment combining gentle manual releases, postural corrections, advanced modalities (TECAR/Laser), and restorative movement therapy.",
    treatments: [
      { name: "Manual & Osteopathic Therapy", desc: "Myofascial release, trigger point deactivation, and gentle joint unwinding." },
      { name: "Chiropractic Mobilization", desc: "Restoring segmental spinal biomechanics and joint play." },
      { name: "Advanced Modality Therapy", desc: "Non-invasive TECAR, shockwave, or laser for deep cellular recovery." },
      { name: "Ergonomic & Lifestyle Guidance", desc: "Workstation setup, sleep ergonomics, and stress-calming movements." }
    ],
    goals: "Relieve chronic tension, restore comfortable movement mechanics, and build long-term musculoskeletal wellness."
  },
  "posture-pain": {
    title: "Posture-Related Pain & Strain",
    subtitle: "Ergonomic Alignment & Core Postural Endurance",
    category: "Spine & Nerve",
    heroImage: "/cer.png",
    description: "Prolonged desk work, screen posture, and forward-head tilt overload the cervical and thoracic spine, causing persistent upper back aching, neck tension, and lumbar fatigue.",
    symptoms: [
      "Aching between shoulder blades after prolonged sitting",
      "Neck tension that worsens toward the end of the day",
      "Lower back tiredness and inability to sit upright comfortably",
      "Shallow breathing and rounded shoulders"
    ],
    causes: [
      "Sustained desk and computer workstation posture",
      "Weak deep neck flexors and middle trapezius muscles",
      "Tight pectoral and hip flexor muscle groups",
      "Improper monitor height or chair lumbar support"
    ],
    redFlags: [
      "Shooting electrical sensations radiating into hands or legs",
      "Sudden loss of hand dexterity or grip strength",
      "Severe night pain unaffected by rest"
    ],
    approach: "Ergonomic workstation correction, thoracic spine extension mobilization, pectoral stretching, and scapular stabilizer strengthening.",
    treatments: [
      { name: "Thoracic & Ribcage Mobilization", desc: "Unlocking mid-back stiffness to relieve compensatory neck strain." },
      { name: "Postural Chain Strengthening", desc: "Activating rhomboids, lower traps, and deep cervical flexors." },
      { name: "Ergonomic Desk Consultation", desc: "Practical adjustments to chair, desk, monitor, and keyboard setup." },
      { name: "Micro-Break Movement Protocols", desc: "Desk-side mobility exercises to prevent posture fatigue." }
    ],
    goals: "Eradicate end-of-day postural aching, restore upright alignment, and build fatigue-resistant postural endurance."
  },
  "spine-rehabilitation": {
    title: "Spine Rehabilitation",
    subtitle: "Targeted Spine, Disc & Postural Recovery",
    category: "Spine & Nerve",
    heroImage: "/aman.png",
    description: "Specialized clinical rehabilitation for lumbar and cervical spine pain, slipped discs, sciatica, degenerative changes, and postural strain.",
    symptoms: [
      "Persistent lower back or neck aching",
      "Sharp pain with bending, lifting, or prolonged sitting",
      "Radiating leg or arm numbness and tingling",
      "Morning stiffness and limited spinal mobility"
    ],
    causes: [
      "Disc herniation or bulge pressing on nerve roots",
      "Cervical or lumbar spondylosis and facet stiffness",
      "Prolonged desk sitting and postural imbalances",
      "Core muscular weakness and improper lifting biomechanics"
    ],
    redFlags: [
      "Sudden loss of bowel or bladder control",
      "Progressive foot drop or leg weakness",
      "Unremitting severe pain at rest or night fever"
    ],
    approach: "Directional preference exercises (McKenzie MDT), gentle non-surgical decompression, manual therapy, and deep core strengthening.",
    treatments: [
      { name: "Spine Assessment & Directional Therapy", desc: "Identifying movements that centralize and reduce pain." },
      { name: "Spinal Decompression Support", desc: "Relieving pressure on pinched nerves and discs." },
      { name: "Core & Pelvic Stabilization", desc: "Strengthening deep postural muscles for spinal protection." },
      { name: "Postural & Ergonomic Coaching", desc: "Daily activity and work-station modifications." }
    ],
    goals: "Eliminate nerve and back pain, restore full spinal flexibility, and prevent recurrent flare-ups."
  },
  "joint-rehab": {
    title: "Joint & Musculoskeletal Rehabilitation",
    subtitle: "Knee, Shoulder, Hip & Orthopaedic Recovery",
    category: "Joint & Sports Rehab",
    heroImage: "/sp.png",
    description: "Structured recovery programmes for knee osteoarthritis, rotator cuff tears, hip bursitis, ligament sprains, and post-surgical rehabilitation.",
    symptoms: [
      "Joint stiffness after sitting or upon waking",
      "Pain when climbing stairs, squatting, or lifting overhead",
      "Crepitus, grinding, or popping sensations",
      "Joint instability and reduced muscular strength"
    ],
    causes: [
      "Age-related cartilage wear or osteoarthritis",
      "Sports injuries, ligament sprains, or meniscus tears",
      "Post-operative joint replacement or arthroscopy recovery",
      "Tendon overload and muscular imbalances"
    ],
    redFlags: [
      "Hot, severely red and swollen joint with fever",
      "Complete inability to bear weight",
      "Sudden calf pain or swelling (DVT warning)"
    ],
    approach: "Targeted joint unloading, muscular kinetic chain strengthening, joint mobilization, and functional movement retraining.",
    treatments: [
      { name: "Kinetic Chain Strengthening", desc: "Building shock-absorbing muscle support around joints." },
      { name: "Joint Mobilization & Glides", desc: "Restoring capsular mobility and range of motion." },
      { name: "Gait & Functional Training", desc: "Optimizing walking symmetry and stair climbing." },
      { name: "Sports Recovery & Conditioning", desc: "Safe progressive return to physical activity." }
    ],
    goals: "Relieve joint pain, restore comfortable full range of motion, and rebuild joint stability."
  },
  "neuro-rehabilitation": {
    title: "Neuro Rehabilitation",
    subtitle: "Neuroplasticity, Functional Mobility & Gait Training",
    category: "Neurological Rehab",
    heroImage: "/ner.png",
    description: "Goal-directed rehabilitation harnessing neuroplasticity for patients recovering from stroke, paralysis, neuropathy, or balance impairments.",
    symptoms: [
      "One-sided weakness, paralysis, or hemiparesis",
      "Unsteady walking gait and loss of balance",
      "Reduced upper limb coordination and hand grip",
      "Post-stroke muscle stiffness or spasticity"
    ],
    causes: [
      "Ischemic or hemorrhagic stroke",
      "Transient ischemic attacks (TIA)",
      "Peripheral neuropathy and sensory deficits",
      "Spinal cord or nerve conduction disorders"
    ],
    redFlags: [
      "Sudden new facial drooping or slurred speech",
      "Severe acute headache or loss of consciousness",
      "Uncontrolled blood pressure spikes"
    ],
    approach: "Repetitive task-oriented motor retraining, balance and sensory integration, gait retraining, and adaptive daily living training.",
    treatments: [
      { name: "Neuro Gait & Mobility Retraining", desc: "Practicing upright safe walking and transfers." },
      { name: "Motor Control & Task Practice", desc: "Re-educating arm reaching, grasp, and coordination." },
      { name: "Spasticity & Tone Management", desc: "Gentle sustained stretching and functional splinting." },
      { name: "Balance & Proprioceptive Work", desc: "Fall prevention and equilibrium stability exercises." }
    ],
    goals: "Maximize functional independence, improve walking safety, and enhance quality of life."
  },

  // === DEFAULT FALLBACK FOR ALL OTHER CONDITIONS ===
  "default": {
    title: "Specialized Rehabilitation",
    subtitle: "Structured Assessment & Evidence-Informed Care",
    category: "Clinical Rehabilitation",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
    description: "Our comprehensive rehabilitation programs begin with a detailed physical evaluation of your symptoms, mobility, strength, and biomechanics to design a personalized treatment plan.",
    symptoms: ["Persistent localized pain or stiffness", "Reduced range of motion during daily activity", "Muscular weakness or instability", "Functional difficulty in walking or lifting"],
    causes: ["Mechanical joint strain or postural overload", "Soft tissue injury or repetitive micro-trauma", "Post-operative stiffness or immobilization"],
    redFlags: ["Unexplained weight loss or fever", "Sudden progressive neurological deficits", "Inability to bear weight with severe pain"],
    approach: "Structured physical assessment, manual therapy, targeted therapeutic exercise, patient education, and suitable technology integration.",
    treatments: [
      { name: "Clinical Assessment", desc: "Evaluating movement patterns, joint play, and muscle strength." },
      { name: "Hands-On Manual Therapy", desc: "Mobilization techniques to restore movement and reduce pain." },
      { name: "Targeted Exercise Therapy", desc: "Progressive strengthening and endurance training." },
      { name: "Ergonomic & Lifestyle Advice", desc: "Guidance on posture, lifting, and activity modification." }
    ],
    goals: "Reduce pain, restore functional mobility, build physical resilience, and empower long-term recovery."
  }
};

export default function ConditionPage() {
  const params = useParams();
  const slug = params?.slug || "default";
  
  // Smart Lookup: Checks for exact match, otherwise formats slug title and uses fallback template
  const rawData = conditionData[slug];
  
  const data = rawData || {
    ...conditionData["default"],
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    subtitle: "Structured Clinical Assessment & Rehabilitation Plan"
  };
  
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text-elem", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });

      gsap.utils.toArray(".section-reveal").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, [slug]);

  return (
    <div ref={pageRef} className="bg-slate-50 min-h-screen font-sans text-slate-800 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[500px] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-[#0a1e3f] pt-24 pb-16">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transform scale-105 opacity-30"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e3f] via-[#0a1e3f]/90 to-[#0a1e3f]/70 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            
            <div className="hero-text-elem inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C69A3C]"></span>
              <span className="text-white text-xs font-bold tracking-widest uppercase">{data.category}</span>
            </div>
            
            <h1 className="hero-text-elem text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-serif">
              {data.title}
            </h1>
            
            <p className="hero-text-elem text-lg sm:text-xl text-blue-100 font-light max-w-2xl leading-relaxed">
              {data.subtitle}
            </p>

            <div className="hero-text-elem flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="px-8 py-4 bg-[#C69A3C] hover:bg-[#b08535] text-white font-bold rounded-xl shadow-lg shadow-[#C69A3C]/30 transition-all flex items-center gap-2 text-sm sm:text-base">
                <span>Book Clinical Assessment</span>
                <ArrowRight size={18} />
              </Link>
              <a href="tel:7447755533" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl transition-all flex items-center gap-2 text-sm sm:text-base">
                <Phone size={18} /> Call +91 74477 55533
              </a>
            </div>

          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl text-white space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <ShieldCheck size={28} className="text-[#C69A3C]" />
                <div>
                  <h3 className="font-bold text-sm">Assessment-Led Protocol</h3>
                  <p className="text-xs text-blue-200">Personalized Care Blueprint</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-blue-100">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#C69A3C]" /> Physical examination &amp; movement screening</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#C69A3C]" /> Red-flag safety screening</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#C69A3C]" /> Active exercise + hands-on therapy</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#C69A3C]" /> Tracked functional goals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- RESPONSIBLE CLINICAL DISCLAIMER BANNER --- */}
      <div className="bg-blue-900 text-blue-100 py-3 px-6 text-xs text-center border-b border-blue-800 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Stethoscope size={16} className="text-[#C69A3C] shrink-0" />
          <span><strong>Notice:</strong> Information provided is for educational awareness. Treatment plans require in-person physical assessment and screening.</span>
        </div>
      </div>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-20 space-y-20">
        
        {/* INTRO & SYMPTOMS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start section-reveal">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[#0071bd] font-bold uppercase tracking-wider text-xs">Clinical Context</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1e3f] font-serif">Understanding the Problem</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {data.description}
              </p>
            </div>
            
            {/* Symptoms Box */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80">
              <h3 className="text-xl font-bold text-[#0a1e3f] mb-4 flex items-center gap-3">
                <Activity className="text-[#0071bd]" /> Common Symptoms Observed
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {data.symptoms.map((sym, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 size={18} className="text-[#C69A3C] mt-0.5 shrink-0" />
                    <span className="text-slate-800 text-xs sm:text-sm font-medium">{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Possible Causes */}
            <div className="bg-slate-100/80 p-6 sm:p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-[#0a1e3f] mb-3 flex items-center gap-3">
                <BrainCircuit className="text-[#0071bd]" /> Common Biomechanical &amp; Clinical Causes
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-slate-700 text-sm">
                {data.causes.map((cause, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0071bd] shrink-0" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Red Flags & Medical Screening Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0a1e3f] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden border border-blue-900 space-y-6">
              <div className="flex items-center gap-3 text-red-400">
                <AlertTriangle size={28} />
                <h3 className="text-2xl font-bold font-serif">Red Flags &amp; Referral</h3>
              </div>
              <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
                If you experience any of the following symptoms, immediate medical or surgical evaluation is recommended before physical rehabilitation:
              </p>
              <ul className="space-y-3">
                {data.redFlags.map((flag, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-medium border-b border-white/10 pb-3 last:border-0 text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0 shadow-[0_0_8px_red]"></span>
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <a 
                  href="tel:7447755533" 
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors border border-white/20"
                >
                  <Phone size={14} /> Contact Clinic for Safety Advice
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TREATMENT APPROACH & PROTOCOLS */}
        <div className="space-y-10 section-reveal">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#0071bd] font-bold tracking-widest uppercase text-xs">Evidence-Informed Care</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1e3f] font-serif">Our Rehabilitation Approach</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{data.approach}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.treatments.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-[#0071bd] font-bold text-lg">
                    {i + 1}
                  </div>
                  <h4 className="text-lg font-bold text-[#0a1e3f]">{t.name}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GOALS SECTION */}
        <div className="section-reveal bg-gradient-to-r from-[#C69A3C] to-[#C69A3C] rounded-3xl p-8 sm:p-12 text-[rgb(20,42,98)] shadow-lg flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0">
            <Target size={36} className="text-[rgb(20,42,98)]" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serif">Expected Functional Rehabilitation Goals</h3>
            <p className="text-slate-900 font-medium text-sm sm:text-base">{data.goals}</p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="section-reveal bg-[#0071bd] rounded-3xl p-8 sm:p-14 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif">Schedule Your Physical Assessment</h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto">
            Book a structured clinical examination with our rehabilitation team at Sushila Mayekar Shopping Centre, LT Road, Borivali West.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-[#0071bd] font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-colors text-sm sm:text-base">
              Book Appointment Slot
            </Link>
            <a href="https://wa.me/917447755533" className="w-full sm:w-auto px-8 py-4 bg-[#0a1e3f] text-white font-bold rounded-xl shadow-lg hover:bg-[#0f2b55] transition-colors text-sm sm:text-base flex items-center justify-center gap-2">
              <MessageCircle size={18} /> WhatsApp Consultation
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}