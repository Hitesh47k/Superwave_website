/**
 * File: Projects.tsx
 * Purpose: Page component for Projects. Handles the UI and routing for this specific route.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Tag, ArrowRight, Layers, Lightbulb, Car, Sun, Zap, RadioTower, Construction } from 'lucide-react';
import { projectsData, ProjectCategory } from '../data/projectsData';
import { Link } from 'react-router-dom';

const categories: ProjectCategory[] = [
  "All",
  "Highway Lighting",
  "Toll Plaza",
  "Smart Traffic",
  "Solar Lighting",
  "Street Lighting",
  "High Mast",
  "Infrastructure"
];

const categoryIcons: Record<string, React.ReactNode> = {
  "All": <Layers className="w-4 h-4" />,
  "Highway Lighting": <Lightbulb className="w-4 h-4" />,
  "Toll Plaza": <Car className="w-4 h-4" />,
  "Smart Traffic": <Zap className="w-4 h-4" />,
  "Solar Lighting": <Sun className="w-4 h-4" />,
  "Street Lighting": <Lightbulb className="w-4 h-4" />,
  "High Mast": <RadioTower className="w-4 h-4" />,
  "Infrastructure": <Construction className="w-4 h-4" />
};

/**
 * Component: Projects
 * 
 * Defines the Projects component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Projects() {
  // Local state to manage activeCategory
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  // Local state to manage searchQuery
  const [searchQuery, setSearchQuery] = useState("");
  // Local state to manage visibleCount
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch = 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[80%] rounded-full bg-brand-500/10 dark:bg-brand-500/5 blur-[120px]"></div>
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[60%] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-[100px]"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">Our Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">Infrastructure</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Explore our extensive portfolio of successful projects across the nation, showcasing our expertise in highway illumination, toll management, and smart city infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="w-full pl-12 pr-4 py-4 glass-card text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all rounded-2xl"
              placeholder="Search projects by name, location, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>

          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(9); // Reset visible count on category change
                }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 border shadow-sm ${
                  activeCategory === category
                    ? 'bg-brand-600 text-white border-brand-500 shadow-brand-500/25 shadow-lg'
                    : 'glass hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                {categoryIcons[category]}
                <span>{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-3xl">
            <Layers className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-6 px-6 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/25"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.id}
                    className="glass-card overflow-hidden group flex flex-col h-full card-hover"
                  >
                    {/* Image Section */}
                    <div className="relative h-60 overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                      <img 
                        src={project.imageUrl} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-slate-200 dark:border-white/10 flex items-center space-x-1">
                          {categoryIcons[project.category]}
                          <span>{project.category}</span>
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center text-brand-600 dark:text-brand-400 text-sm font-medium mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {project.name}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-slate-200 dark:border-white/10 mt-auto">
                        <button className="flex items-center text-brand-600 dark:text-brand-400 font-semibold text-sm group/btn w-full justify-between hover:text-brand-700 dark:hover:text-brand-300 transition-colors">
                          <span>View Project Details</span>
                          <span className="w-8 h-8 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center group-hover/btn:bg-brand-600 group-hover/btn:text-white transition-colors">
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Load More Button */}
            {hasMore && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-12 flex justify-center"
              >
                <button 
                  onClick={loadMore}
                  className="px-8 py-3 glass-card hover:bg-slate-50 dark:hover:bg-white/5 text-slate-900 dark:text-white font-semibold rounded-xl transition-all flex items-center space-x-2 card-hover"
                >
                  <span>Load More Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
