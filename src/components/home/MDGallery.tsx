/**
 * File: MDGallery.tsx
 * Purpose: Home section component: MDGallery. Specific section used on the landing page.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2, LayoutGrid } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Foundation Day Celebration",
    description: "Marking a decade of excellence and continuous innovation in the infrastructure sector.",
    date: "August 2025",
    image: "../images/MD/MD-two.jpg"
  },
  {
    id: 2,
    title: "National Smart City Summit",
    description: "Keynote presentation on the future of AI-driven urban mobility.",
    date: "October 2025",
    image: "../images/MD/MD-three.jpeg"
  },
  {
    id: 3,
    title: "Industry Excellence Award",
    description: "Receiving the top honor for technological contributions to the tolling sector.",
    date: "December 2025",
    image: "../images/MD/MD-five.jpeg"
  },
  {
    id: 4,
    title: "Strategic Partnership Signed",
    description: "Collaborating with international partners for advanced AI hardware implementation.",
    date: "February 2026",
    image: "../images/MD/MD-six.jpeg"
  },
  {
    id: 5,
    title: "New Operations Hub Inauguration",
    description: "Expanding our footprint with a state-of-the-art command center.",
    date: "May 2026",
    image: "../images/MD/MD-seven.jpeg"
  },
  {
    id: 6,
    title: "Global Tech Symposium",
    description: "Sharing insights on the evolution of smart infrastructure.",
    date: "July 2026",
    image: "../images/MD/MD-eleven.jpeg"
  }
];

/**
 * Component: MDGallery
 * 
 * Defines the MDGallery component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function MDGallery() {
  // Local state to manage isLightboxOpen
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  // Local state to manage lightboxIndex
  const [lightboxIndex, setLightboxIndex] = useState(0);
  // Local state to manage isViewAllOpen
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const nextLightboxSlide = () => {
    setLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const prevLightboxSlide = () => {
    setLightboxIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Managing Director Gallery
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            A glimpse of our Managing Director's leadership, achievements, industry events, inaugurations, meetings, awards, and special occasions.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative container-custom group"
        >
          <div className="overflow-hidden px-2 py-4">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={800}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="!pb-12"
            >
              {GALLERY_ITEMS.map((item, idx) => (
                <SwiperSlide key={item.id}>
                  <div 
                    className="group/card relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-transparent"
                    onClick={() => openLightbox(idx)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/card:scale-110"
                    />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-y-4 group-hover/card:translate-y-0">
                      <span className="inline-block px-3 py-1 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 shadow-lg">
                        {item.date}
                      </span>
                      <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-200 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 border border-white/20">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-4 md:-left-6 top-[40%] -translate-y-1/2 w-12 h-12 glass-card shadow-xl rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 border-transparent transition-all hover:scale-110 hover:text-brand-600 dark:hover:text-brand-400 z-10 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-4 md:-right-6 top-[40%] -translate-y-1/2 w-12 h-12 glass-card shadow-xl rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 border-transparent transition-all hover:scale-110 hover:text-brand-600 dark:hover:text-brand-400 z-10 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => setIsViewAllOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-4 glass-card hover:border-brand-500 dark:hover:border-brand-500 text-slate-900 dark:text-white rounded-xl font-bold shadow-sm transition-all hover:shadow-md group"
          >
            <LayoutGrid className="w-5 h-5 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform" />
            View All Photos
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div 
              className="relative w-full max-w-[1500px] max-h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={GALLERY_ITEMS[lightboxIndex].image} 
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center text-white max-w-2xl">
                <span className="text-brand-400 text-sm font-bold uppercase tracking-wider">{GALLERY_ITEMS[lightboxIndex].date}</span>
                <h3 className="text-2xl font-bold mt-1">{GALLERY_ITEMS[lightboxIndex].title}</h3>
                <p className="text-slate-300 mt-2">{GALLERY_ITEMS[lightboxIndex].description}</p>
                <div className="mt-4 text-sm text-slate-500">
                  {lightboxIndex + 1} / {GALLERY_ITEMS.length}
                </div>
              </div>

              {/* Lightbox Navigation */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevLightboxSlide(); }}
                className="absolute left-0 md:left-4 lg:-left-12 top-1/3 md:top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-black/50 hover:bg-brand-600 rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextLightboxSlide(); }}
                className="absolute right-0 md:right-4 lg:-right-12 top-1/3 md:top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-black/50 hover:bg-brand-600 rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View All Grid Modal */}
      <AnimatePresence>
        {isViewAllOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-slate-50 dark:bg-slate-950 overflow-y-auto"
          >
            <div className="sticky top-0 z-10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 px-4 md:px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Managing Director Gallery</h2>
                <p className="text-sm text-slate-500">{GALLERY_ITEMS.length} Photos</p>
              </div>
              <button 
                className="w-10 h-10 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors"
                onClick={() => setIsViewAllOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="container-custom py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {GALLERY_ITEMS.map((item, idx) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      setIsViewAllOpen(false);
                      openLightbox(idx);
                    }}
                  >
                    <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 mb-4 border-transparent bg-slate-200 dark:bg-slate-800">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">{item.date}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{item.title}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
