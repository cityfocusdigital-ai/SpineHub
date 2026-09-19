'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
  ChevronRight,
  CalendarCheck,
  ArrowRight,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function MedicalFooter() {
  const socialIcons = [
    { Icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/share/1EnqBWDVMq/' },
    { Icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/adityaspinerehab/' },
  ];

  const specialties = [
    { name: 'Spine & Disc Care', href: '/services' },
    { name: 'Neck, Back & Sciatica Pain', href: '/services' },
    { name: 'Joint & Sports Injury', href: '/services' },
    { name: 'Chiropractic & Osteopathy', href: '/services' },
    { name: 'Ozone (O₃) Therapy', href: '/services' },
    { name: 'Regenerative Therapy', href: '/services' },
    { name: 'Neurological Rehabilitation', href: '/services' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services & Therapies', href: '/services' },
    { name: 'Patient Recovery Journey', href: '/patient-journey' },
    { name: 'Conditions We Treat', href: '/conditions' },
    { name: 'Technology & Facilities', href: '/technology' },
    { name: 'Meet Doctor', href: '/about/profile' },
    { name: 'Patient Testimonials', href: '/testimonials' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <footer className="relative bg-[#0a1633] font-sans text-white overflow-hidden">

      {/* Background Decorative Radial Gradient with Deep Royal Blue Highlights */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,#142A62_0%,transparent_60%)] opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-8"
      >
        {/* Pre-Footer Banner styled in Classic Blue Gradient */}

        {/* --- 1. CTA BANNER (OUTSIDE FOOTER GRID) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20 overflow-hidden rounded-3xl border border-[#C69A3C]/30 shadow-2xl shadow-black/40"
        >
          {/* Gradient Background for CTA */}
          <div className="bg-[#142a62]" />

          {/* Decorative Glow inside CTA */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-12 bg-[#142a62]">

            <div className="max-w-2xl space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C69A3C]/15 border border-[#C69A3C]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C69A3C] backdrop-blur-md">
                <ShieldCheck size={14} />
                <span>Trusted Spine Care</span>
              </div>

              <h3 className="text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                Ready to Live a <span className="text-[#C69A3C]">Pain-Free Life?</span>
              </h3>

              <p className="text-blue-100/90 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                Schedule your comprehensive spinal evaluation today. Advanced non-surgical treatments customized for your recovery journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <motion.a
                href="tel:+917447755533"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-white/20 group"
              >
                <Phone size={18} className="text-[#C69A3C] group-hover:text-white transition-colors" />
                <span>Call Now</span>
              </motion.a>

              <Link
                href="/contact"
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-[#C69A3C] px-8 py-4 text-sm font-bold text-[rgb(20,42,98)] shadow-lg transition-all hover:bg-white flex items-center justify-center gap-2"
              >
                <CalendarCheck size={18} />
                <span>Book Appointment</span>
                <ArrowRight size={16} className="opacity-70" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-16">

          {/* Column 1: White Logo & Brand Info */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3.5">

                {<Image src="/aditya-logo.jpg" alt="Aditya Spine Logo" width={100} height={100} className=" w-auto  object-contain" />}

              </div>
            </Link>

            <p className="text-sm leading-relaxed text-white max-w-sm">
              Pioneering advanced, non-invasive spine and joint care through global treatment standards, precision osteopathy, and personalized rehabilitation protocols.
            </p>


            {/* Social Icons with Classic Blue hover */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialIcons.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-[#0f4c81] hover:border-[#0f4c81] hover:text-white hover:scale-110 shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Our Specialties */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="mb-6 text-base font-bold text-white tracking-wide flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#C69A3C]" />
              Our Specialties
            </h4>
            <ul className="space-y-3">
              {specialties.map((item) => (
                <li key={item.name}>
                  <Link href={item.href || '/services'} className="group flex items-center justify-between text-sm text-white transition-colors hover:text-[#C69A3C]">
                    <span className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-white transition-transform group-hover:translate-x-1 group-hover:text-[#C69A3C]" />
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="rounded-md bg-[#0f4c81] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white border border-white/20">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Navigation */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="mb-6 text-base font-bold text-white tracking-wide flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#C69A3C]" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group inline-flex items-center text-sm text-white transition-colors hover:text-white">
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[#C69A3C] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="mb-6 text-base font-bold text-white tracking-wide flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#C69A3C]" />
              Get In Touch
            </h4>
            <div className="space-y-5 rounded-2xl bg-white/5 p-6 border border-white/10 backdrop-blur-md shadow-lg">
              <a
                href="https://maps.app.goo.gl/3yBJLrYM5BcRdoX87"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 group transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#0f4c81] text-white shrink-0 group-hover:bg-[#C69A3C] transition-colors">
                  <MapPin size={16} />
                </div>
                <p className="text-xs leading-relaxed text-blue-100/80 group-hover:text-white transition-colors">
                  3rd Floor, Sushila Mayekar Shopping Centre, LT Road, Borivali (W), Mumbai – 400092
                </p>
              </a>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#0f4c81] text-white shrink-0">
                  <Phone size={16} />
                </div>
                <div className="text-xs space-y-1 text-blue-100/80">
                  <a href="tel:+917447755533" className="block hover:text-white transition-colors font-medium">+91 74477 55533</a>
                  <a href="tel:+919090293232" className="block hover:text-white transition-colors font-medium">+91 90902 93232</a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href="mailto:adityaspinerehab@gmail.com"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-white/10 border border-white/10 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#0f4c81] hover:border-[#0f4c81]"
                >
                  <Mail size={14} className="text-[#C69A3C]" /> Email
                </a>
                <a
                  href="https://www.adityaspinerehab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-white/10 border border-white/10 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#0f4c81] hover:border-[#0f4c81]"
                >
                  <Globe size={14} className="text-[#C69A3C]" /> Website
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-400 md:flex-row">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Aditya Spine & Joint Rehab LLP</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="#" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="#" className="transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>

      </motion.div>
    </footer>
  );
}
