"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, UserCheck, Info } from "lucide-react";
import ConditionDropdown from "./ConditionDropdown";  

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);

  // Click Outside Handler for Dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-3 md:py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50 shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
            <img 
              src="/aditya-logo.jpg" 
              alt="Aditya Spine & Joint Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[16px] sm:text-lg font-medium tracking-tight text-[rgb(20,42,98)]">
              Aditya Spine &amp; Joint
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-[#D4AF37]">
              Rehabilitation Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8">
          
          <Link
            href="/"
            className={`text-[15px] font-medium relative py-1 transition-colors ${
              pathname === "/" ? "text-[rgb(20,42,98)]" : "text-gray-700 hover:text-[rgb(20,42,98)]"
            }`}
          >
            Home
            {pathname === "/" && <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D4AF37]" />}
          </Link>

          {/* About & Profile Dropdown */}
          <div ref={aboutDropdownRef} className="relative">
            <button
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className={`flex items-center gap-1.5 text-[15px] font-medium py-1 transition-colors ${
                pathname.startsWith('/about') || aboutDropdownOpen ? "text-[rgb(20,42,98)]" : "text-gray-700 hover:text-[rgb(20,42,98)]"
              }`}
            >
              About
              <ChevronDown size={15} className={`transition-transform duration-300 ${aboutDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* About Submenu Popup */}
            <div className={`absolute top-full left-0 pt-3 w-56 transition-all duration-300 origin-top-left ${aboutDropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 flex flex-col gap-1">
              
                <Link
                  href="/about/profile"
                  onClick={() => setAboutDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-[#D4AF37]/10 hover:text-[rgb(20,42,98)] transition-colors"
                >
                  <UserCheck size={16} className="text-[#D4AF37]" />
                  <span>Doctor Profile</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Rest of Nav Items */}
          {navItems.slice(1).map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[15px] font-medium relative py-1 transition-colors ${
                  isActive ? "text-[rgb(20,42,98)]" : "text-gray-700 hover:text-[rgb(20,42,98)]"
                }`}
              >
                {item.name}
                {isActive && <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D4AF37]" />}
              </Link>
            );
          })}

          {/* Conditions We Treat Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1.5 text-[15px] font-medium py-1 transition-colors ${
                dropdownOpen ? "text-[rgb(20,42,98)]" : "text-gray-700 hover:text-[rgb(20,42,98)]"
              }`}
            >
              Conditions we treat
              <ChevronDown size={15} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-full left-0 pt-4 w-max transition-all duration-300 origin-top-left ${dropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
              <ConditionDropdown />
            </div>
          </div>
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden lg:flex items-center">
          <a
            href="tel:7447755533"
            className="flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full text-white font-semibold text-sm transition-all shadow-lg shadow-blue-900/20 hover:opacity-95"
            style={{ backgroundColor: 'rgb(20, 42, 98)' }}
          >
            <Phone size={15} />
            +91 74477 55533
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-md text-[rgb(20,42,98)] z-50 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? "max-h-[calc(100vh-72px)] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col px-6 py-8 space-y-1">
          <Link
            href="/"
            className="font-medium text-lg py-3 border-b border-gray-100 text-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile About Submenu */}
          <div className="py-2 border-b border-gray-100 flex flex-col space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">About Section</span>
            <Link
              href="/about"
              className="font-medium text-base text-gray-800 pl-3 py-1 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Info size={15} className="text-[#D4AF37]" /> About Us
            </Link>
            <Link
              href="/about/profile"
              className="font-medium text-base text-gray-800 pl-3 py-1 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <UserCheck size={15} className="text-[#D4AF37]" /> Doctor Profile
            </Link>
          </div>

          {navItems.slice(1).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-lg py-3 border-b border-gray-100 text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/conditions"
            className="font-medium text-lg py-3 border-b border-gray-100 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Conditions we treat
          </Link>
          
          <div className="pt-6">
            <a
              href="tel:7447755533"
              className="w-full flex items-center justify-center gap-2 text-white py-4 rounded-full font-semibold shadow-lg"
              style={{ backgroundColor: 'rgb(20, 42, 98)' }}
            >
              <Phone size={18} />
              Call +91 74477 55533
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}