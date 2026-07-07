const fs = require('fs');

const content = `import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Maximize2, X, ChevronLeft, ChevronRight, ImageIcon, Search, Filter, SortDesc, Calendar, MapPin, Users } from 'lucide-react';

type MediaType = 'image' | 'video';

interface GalleryItem {
  id: string;
  type: MediaType;
  src: string;
  thumbnail?: string;
  title: string;
  categories: string[];
  department?: string;
  designation?: string;
  employeeName?: string;
  description?: string;
  date?: string;
  location?: string;
  tags?: string[];
  timestamp: number;
}

const DEPARTMENTS = [
  "All Departments",
  "Software Development",
  "AI & Innovation",
  "Maintenance",
  "Operations",
  "Toll Operations",
  "Technical Support",
  "Network & Infrastructure",
  "Sales & Marketing",
  "Accountancy & Finance",
  "Human Resources (HR)",
  "Administration",
  "Project Management",
  "Quality Assurance (QA)",
  "Higher Authority / Management",
  "Training & Workshops",
  "Events & Celebrations"
];

const CATEGORIES = ["All Categories", "Projects", "Infrastructure", "Events", "Technology", "Site Updates", "Corporate", "Office", "Site Visit", "Training", "Project", "Team"];

const MEDIA: GalleryItem[] = [
  {
    id: "1",
    type: "image",
    src: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop",
    title: "Highway Expansion Phase 1",
    categories: ["Projects", "Infrastructure"],
    department: "Operations",
    designation: "Site Manager",
    employeeName: "John Doe",
    description: "Inspecting the new highway lane expansion.",
    date: "Oct 12, 2023",
    location: "Mumbai Highway",
    tags: ["Site Visit", "Project"],
    timestamp: 1697068800000
  },
  {
    id: "2",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2000&auto=format&fit=crop",
    title: "Toll Plaza Automation",
    categories: ["Technology", "Projects"],
    department: "Toll Operations",
    designation: "Systems Engineer",
    employeeName: "Alice Smith",
    description: "Demonstrating the new automated toll collection system.",
    date: "Nov 05, 2023",
    location: "Plaza 42",
    tags: ["Project"],
    timestamp: 1699142400000
  },
  {
    id: "3",
    type: "image",
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop",
    title: "Annual Tech Conference",
    categories: ["Events", "Corporate"],
    department: "Events & Celebrations",
    designation: "Event Coordinator",
    description: "Company representatives at the annual technology and infrastructure summit.",
    date: "Sep 20, 2023",
    location: "Delhi Convention Center",
    tags: ["Event"],
    timestamp: 1695168000000
  },
  {
    id: "4",
    type: "image",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    title: "New Operations Hub",
    categories: ["Infrastructure", "Corporate"],
    department: "Administration",
    designation: "Facility Manager",
    description: "The newly inaugurated central operations facility.",
    date: "Jan 15, 2024",
    location: "Corporate HQ",
    tags: ["Office"],
    timestamp: 1705276800000
  },
  {
    id: "5",
    type: "image",
    src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2000&auto=format&fit=crop",
    title: "AI Development Team",
    categories: ["Technology"],
    department: "Software Development",
    designation: "Senior Developer",
    employeeName: "Sarah Connor",
    description: "The core software team discussing the new ML models.",
    date: "Feb 10, 2024",
    location: "Innovation Lab",
    tags: ["Team", "Office"],
    timestamp: 1707523200000
  },
  {
    id: "6",
    type: "image",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
    title: "Team Workshop",
    categories: ["Corporate"],
    department: "Training & Workshops",
    designation: "Training Lead",
    employeeName: "Michael Johnson",
    description: "Interactive session on advanced project management.",
    date: "Mar 05, 2024",
    location: "Training Center A",
    tags: ["Training", "Team"],
    timestamp: 1709596800000
  },
  {
    id: "7",
    type: "image",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
    title: "Network Expansion Meeting",
    categories: ["Projects", "Technology"],
    department: "Network & Infrastructure",
    designation: "Network Architect",
    employeeName: "David Lee",
    description: "Planning the next phase of fiber optic deployments.",
    date: "Apr 12, 2024",
    location: "Meeting Room 1",
    tags: ["Office", "Team"],
    timestamp: 1712880000000
  },
  {
    id: "8",
    type: "image",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    title: "Management Strategy Session",
    categories: ["Corporate"],
    department: "Higher Authority / Management",
    designation: "Director",
    employeeName: "Robert Vance",
    description: "Executive board reviewing Q3 objectives.",
    date: "May 02, 2024",
    location: "Boardroom",
    tags: ["Team", "Office"],
    timestamp: 1714608000000
  },
  {
    id: "9",
    type: "image",
    src: "https://images.unsplash.com/photo-1673847401561-fcd73a78a946?q=80&w=2000&auto=format&fit=crop",
    title: "AI Model Review",
    categories: ["Technology"],
    department: "AI & Innovation",
    designation: "AI Researcher",
    employeeName: "Elena Rodriguez",
    description: "Analyzing the latest predictive models for traffic flow.",
    date: "Jun 18, 2024",
    location: "Innovation Lab",
    tags: ["Team"],
    timestamp: 1718668800000
  },
  {
    id: "10",
    type: "image",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
    title: "HR Orientation",
    categories: ["Corporate"],
    department: "Human Resources (HR)",
    designation: "HR Manager",
    employeeName: "Olivia Parker",
    description: "Welcoming the new batch of engineers.",
    date: "Jul 01, 2024",
    location: "Main Auditorium",
    tags: ["Office", "Event"],
    timestamp: 1719792000000
  }
];

const DEPARTMENT_COLORS: Record<string, string> = {
  "Software Development": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  "AI & Innovation": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  "Maintenance": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800",
  "Operations": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  "Toll Operations": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800",
  "Technical Support": "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border-rose-200 dark:border-rose-800",
  "Network & Infrastructure": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
  "Sales & Marketing": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 border-pink-200 dark:border-pink-800",
  "Accountancy & Finance": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
  "Human Resources (HR)": "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-400 border-fuchsia-200 dark:border-fuchsia-800",
  "Administration": "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700",
  "Project Management": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  "Quality Assurance (QA)": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 border-teal-200 dark:border-teal-800",
  "Higher Authority / Management": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
  "Training & Workshops": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
  "Events & Celebrations": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400 border-violet-200 dark:border-violet-800",
  "Default": "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400 border-brand-200 dark:border-brand-800"
};

type SortOption = 'newest' | 'oldest' | 'a-z' | 'department';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All Categories");
  const [activeDepartment, setActiveDepartment] = useState<string>("All Departments");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredMedia = useMemo(() => {
    let result = MEDIA;

    if (activeCategory !== "All Categories") {
      result = result.filter(item => item.categories.includes(activeCategory));
    }
    if (activeDepartment !== "All Departments") {
      result = result.filter(item => item.department === activeDepartment);
    }
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(item => 
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.department && item.department.toLowerCase().includes(q)) ||
        (item.employeeName && item.employeeName.toLowerCase().includes(q)) ||
        (item.designation && item.designation.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.categories && item.categories.some(c => c.toLowerCase().includes(q))) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case 'newest': return b.timestamp - a.timestamp;
        case 'oldest': return a.timestamp - b.timestamp;
        case 'a-z': return a.title.localeCompare(b.title);
        case 'department': return (a.department || "").localeCompare(b.department || "");
        default: return 0;
      }
    });
  }, [activeCategory, activeDepartment, searchQuery, sortBy]);

  // Key navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredMedia.length]);

  // Lock body scroll
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedIndex]);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : filteredMedia.length - 1));
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < filteredMedia.length - 1 ? prev! + 1 : 0));
  };

  const selectedItem = selectedIndex !== null ? filteredMedia[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6"
          >
            Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl"
          >
            Explore our projects, team activities, and departmental highlights through our comprehensive media gallery.
          </motion.p>
        </div>

        {/* Filters and Controls Area */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-8 space-y-6">
          
          {/* Top Bar: Search and Sort */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by department, name, designation, caption..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-900 dark:text-white transition-all outline-none"
              />
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <SortDesc className="w-5 h-5 text-slate-400 shrink-0" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full md:w-auto px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-brand-500 outline-none cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="a-z">A-Z by Title</option>
                <option value="department">By Department</option>
              </select>
            </div>
          </div>

          <div className="h-px bg-slate-200 dark:bg-slate-800 w-full"></div>

          {/* Department Filter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-brand-500" />
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Department</h3>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDepartment(dept)}
                  className={\`relative whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 \${
                    activeDepartment === dept
                      ? "text-white shadow-md shadow-brand-500/20"
                      : "bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                  }\`}
                >
                  {activeDepartment === dept && (
                    <motion.div 
                      layoutId="activeDeptTab"
                      className="absolute inset-0 bg-brand-600 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-cyan-500" />
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Category</h3>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={\`relative whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 \${
                    activeCategory === category
                      ? "text-white shadow-md shadow-cyan-500/20"
                      : "bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                  }\`}
                >
                  {activeCategory === category && (
                    <motion.div 
                      layoutId="activeCatTab"
                      className="absolute inset-0 bg-cyan-600 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Media Grid / Empty State */}
        {filteredMedia.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 border-dashed"
          >
            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
              <ImageIcon className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No media found</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm text-center">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
            <button 
              onClick={() => {
                setActiveCategory("All Categories");
                setActiveDepartment("All Departments");
                setSearchQuery("");
              }}
              className="mt-6 px-6 py-2.5 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-xl font-medium hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredMedia.map((item, index) => {
                const deptColorClass = item.department ? (DEPARTMENT_COLORS[item.department] || DEPARTMENT_COLORS["Default"]) : DEPARTMENT_COLORS["Default"];
                
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-brand-500/10 transition-all duration-300 flex flex-col h-[400px]"
                    onClick={() => setSelectedIndex(index)}
                  >
                    {/* Image Area */}
                    <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
                      <img 
                        src={item.type === 'video' ? item.thumbnail : item.src} 
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                          <div className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:bg-brand-600 transition-all duration-300">
                            <Play className="w-5 h-5 ml-1" fill="currentColor" />
                          </div>
                        </div>
                      )}
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-20">
                         {item.department && (
                           <span className={\`text-[10px] font-bold px-2 py-1 rounded-md border backdrop-blur-md \${deptColorClass}\`}>
                             {item.department}
                           </span>
                         )}
                      </div>
                      
                      <div className="absolute top-3 right-3 z-20">
                         <div className="w-8 h-8 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                            <Maximize2 className="w-4 h-4" />
                         </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                         {item.employeeName && (
                           <h4 className="text-white font-bold text-lg mb-1">{item.employeeName}</h4>
                         )}
                         {item.designation && (
                           <p className="text-brand-300 text-sm font-medium mb-3">{item.designation}</p>
                         )}
                         {item.description && (
                           <p className="text-slate-300 text-xs line-clamp-3 mb-4">{item.description}</p>
                         )}
                         <span className="inline-flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider">
                           <Maximize2 className="w-3.5 h-3.5" /> View Image
                         </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex flex-col flex-1 relative z-20 bg-white dark:bg-slate-900">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {item.categories.slice(0, 2).map((cat, i) => (
                          <span key={i} className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        {item.date && (
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.date}
                          </div>
                        )}
                        {item.location && (
                          <div className="flex items-center gap-1.5 max-w-[50%] truncate">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">{item.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-slate-950/95 flex flex-col p-4 md:p-8"
              onClick={() => setSelectedIndex(null)}
            >
              <div className="flex justify-between items-start mb-4 z-10 w-full max-w-7xl mx-auto">
                <div className="text-white max-w-3xl pr-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {selectedItem.department && (
                      <span className={\`text-xs font-bold px-2 py-1 rounded border \${DEPARTMENT_COLORS[selectedItem.department] || DEPARTMENT_COLORS["Default"]}\`}>
                        {selectedItem.department}
                      </span>
                    )}
                    {selectedItem.categories.map((cat, i) => (
                      <span key={i} className="text-xs font-semibold px-2 py-1 rounded bg-white/10 text-white border border-white/20">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{selectedItem.title}</h3>
                  {(selectedItem.employeeName || selectedItem.designation) && (
                    <div className="mt-2 text-brand-300 font-medium text-lg">
                      {selectedItem.employeeName} {selectedItem.employeeName && selectedItem.designation && " • "} {selectedItem.designation}
                    </div>
                  )}
                  {selectedItem.description && (
                    <p className="mt-2 text-slate-300 text-sm md:text-base leading-relaxed">
                      {selectedItem.description}
                    </p>
                  )}
                  <div className="mt-3 flex gap-4 text-xs text-slate-400">
                    {selectedItem.date && (
                       <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {selectedItem.date}</div>
                    )}
                    {selectedItem.location && (
                       <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {selectedItem.location}</div>
                    )}
                  </div>
                </div>
                <button 
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors shrink-0"
                  onClick={() => setSelectedIndex(null)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 relative flex items-center justify-center min-h-0 w-full max-w-7xl mx-auto" onClick={(e) => e.stopPropagation()}>
                
                {/* Navigation */}
                {filteredMedia.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                      className="absolute left-0 md:-left-6 z-20 w-12 h-12 md:w-16 md:h-16 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 -ml-1" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="absolute right-0 md:-right-6 z-20 w-12 h-12 md:w-16 md:h-16 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 md:w-8 md:h-8 -mr-1" />
                    </button>
                  </>
                )}

                {selectedItem.type === 'video' ? (
                  <motion.div 
                    key={selectedItem.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative"
                  >
                    <video 
                      src={selectedItem.src} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                ) : (
                  <motion.img 
                    key={selectedItem.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    src={selectedItem.src}
                    className="max-w-full max-h-full rounded-xl object-contain shadow-2xl"
                  />
                )}
              </div>
              
              <div className="mt-4 text-center text-slate-400 text-sm z-10">
                {selectedIndex! + 1} of {filteredMedia.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Hide scrollbar styles */}
      <style>{\`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      \`}</style>
    </div>
  );
}
`

fs.writeFileSync('src/pages/Gallery.tsx', content);
