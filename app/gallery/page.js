"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// Tumhare rehab center ke liye sample data
const galleryData = [
  { id: 1, src: '/1.jpeg', alt: 'Spine Rehabilitation Session', category: 'treatment' },
  { id: 2, src: '/2.jpeg', alt: 'Joint Therapy', category: 'therapy' },
  { id: 3, src: '/3.jpeg', alt: 'Therapeutic Exercises', category: 'exercise' },
  { id: 4, src: '/4.jpeg', alt: 'Modern Clinic Facility', category: 'facility' },
  { id: 5, src: '/5.jpeg', alt: 'Personalized Patient Care', category: 'treatment' },
  { id: 6, src: '/6.jpeg', alt: 'Advanced Equipment', category: 'facility' },
 
  { id: 12, src: '/12.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 13, src: '/13.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 14, src: '/14.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 15, src: '/15.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 16, src: '/16.jpeg', alt: 'Recovery Progress', category: 'therapy' },
  { id: 17, src: '/17.jpeg', alt: 'Recovery Progress', category: 'therapy' },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'treatment', label: 'Treatment' },
  { id: 'therapy', label: 'Therapy' },
  { id: 'exercise', label: 'Exercise' },
  { id: 'facility', label: 'Facility' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  // 1. Smooth Parallax Effect for Hero Section
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

  // 2. Keyboard Navigation (Escape key to close modal)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50">
      
      {/* Enhanced Parallax Background Section */}
      <section className="relative h-[50vh] min-h-[450px] overflow-hidden">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0">
          <Image
            src="/spine-banner.avif" 
            alt="Gallery Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Navy Blue Gradient Overlay as per your preference */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-95/80 via-blue-900/60 to-slate-50" />
        </motion.div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center px-4 max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-blue-200 uppercase bg-blue-900/40 backdrop-blur-sm rounded-full border border-blue-700/30"
            >
              Aditya Spine & Joint Rehab
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Our Gallery
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Explore our state-of-the-art facilities and witness the transformative journey of healing and personalized care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Horizontal Filter Navigation with Sliding Pill Animation */}
      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
            {categories.map((category) => {
              const isActive = selectedCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative px-6 py-2.5 rounded-full font-medium whitespace-nowrap transition-colors duration-300 snap-start ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-blue-900 hover:bg-blue-50'
                  }`}
                >
                  {/* Animated Sliding Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-blue-900 rounded-full shadow-lg shadow-blue-900/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">
                    {category.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid with Staggered Animation */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl hover:shadow-blue-900/10 cursor-pointer bg-white border border-slate-100"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white font-semibold text-lg mb-1 leading-tight">{image.alt}</h3>
                    <p className="text-blue-200 text-sm capitalize">{image.category}</p>
                  </div>

                  {/* Subtle Zoom Indicator */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    <ZoomIn className="text-white" size={20} strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
              <ZoomIn className="text-slate-400" size={32} />
            </div>
            <p className="text-slate-500 text-lg font-medium">No images found in this category</p>
            <p className="text-slate-400 text-sm mt-1">Try selecting a different filter</p>
          </motion.div>
        )}
      </main>

      {/* Premium Lightbox Modal (Full Size & Centered) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-blue-950/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery"
            >
              <X size={28} strokeWidth={2.5} />
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Full Size Centered Image */}
              <div className="relative w-full max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain" 
                  priority
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{selectedImage.alt}</h2>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <span className="px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-200 text-sm font-medium capitalize">
                    {selectedImage.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}