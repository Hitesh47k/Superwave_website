/**
 * File: LatestNews.tsx
 * Purpose: Home section component: LatestNews. Specific section used on the landing page.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Newspaper, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type NewsCategory = "All" | "Company News" | "Events" | "Technology" | "AI" | "Infrastructure";

interface NewsItem {
  id: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const NEWS_DATA: NewsItem[] = [
  {
    id: "1",
    category: "Company News",
    title: "SCAIL Secures Major ATMS Contract for New Expressway",
    excerpt: "Superwave awarded a multi-million contract to deploy cutting-edge Advanced Traffic Management Systems across a critical 300km national corridor.",
    date: "July 12, 2026",
    image: "../images/news/Scail.jfif"
  },
  {
    id: "2",
    category: "AI",
    title: "Launch of Next-Gen Predictive Maintenance AI Engine",
    excerpt: "Introducing our new AI-powered platform designed to predict equipment failures before they happen, saving millions in downtime costs.",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    category: "Events",
    title: "Scail Showcases Smart Infrastructure at Global Tech Summit",
    excerpt: "Our leadership team presented innovative digital tolling solutions and AI analytics at the International Infrastructure Technology Summit 2026.",
    date: "June 15, 2026",
    image: "../images/news/newsone.jfif"
  }
];

const CATEGORIES: NewsCategory[] = ["All", "Company News", "Events", "Technology", "AI", "Infrastructure"];

/**
 * Component: LatestNews
 * 
 * Defines the LatestNews component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function LatestNews() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("All");

  const filteredNews = useMemo(() => {
    if (activeCategory === "All") return NEWS_DATA;
    return NEWS_DATA.filter(news => news.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-24 glass-section">
      <div className="container-custom">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3 flex items-center gap-2">
              <Newspaper className="w-4 h-4" /> Updates
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Latest News & Insights
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Stay informed with our latest announcements, industry insights, and technological advancements.
            </p>
          </div>
          
          {/* Scrollable Filters */}
          <div className="flex overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-2 min-w-max">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "text-white shadow-md shadow-brand-500/25"
                      : "glass-card text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border-transparent"
                  }`}
                >
                  {activeCategory === category && (
                    <motion.div 
                      layoutId="newsActiveTab"
                      className="absolute inset-0 bg-brand-600 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="min-h-[400px]">
          {filteredNews.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl"
            >
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <Newspaper className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No news in this category</h3>
              <p className="text-slate-500 dark:text-slate-400">Check back later for updates.</p>
            </motion.div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredNews.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group flex flex-col glass-section rounded-2xl overflow-hidden border-transparent hover:shadow-xl dark:hover:shadow-brand-500/10 transition-all duration-300"
                  >
                    <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                      
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                        {item.excerpt}
                      </p>
                      
                      <div className="mt-auto">
                        <Link to="#" className="inline-flex items-center text-sm font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors group/link">
                          Read Full Article 
                          <ArrowUpRight className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
