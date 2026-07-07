const fs = require('fs');

const content = `import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'motion/react';
import { 
  Lightbulb, 
  Construction, 
  Network, 
  TrafficCone, 
  CarFront, 
  ShieldAlert, 
  Settings2, 
  Cctv, 
  Code2, 
  BrainCircuit, 
  Rocket, 
  Globe2,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TIMELINE_DATA = [
  {
    year: "2015",
    title: "Highway Lighting Solutions",
    description: "Installation and modernization of highway lighting systems.",
    icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-amber-400 to-amber-600",
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
    details: ["Company Foundation", "Initial focus on lighting solutions for national highways.", "Setting the groundwork for infrastructure excellence."]
  },
  {
    year: "2016",
    title: "Infrastructure Development",
    description: "Expanded into core infrastructure.",
    icon: <Construction className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-orange-400 to-orange-600",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-600 dark:text-orange-400",
    details: ["Civil infrastructure projects", "Electrical infrastructure", "Communication infrastructure"]
  },
  {
    year: "2017",
    title: "Communication & Network",
    description: "Building the digital backbone.",
    icon: <Network className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-blue-400 to-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
    details: ["Fiber Optic Networks", "Structured Cabling", "Enterprise Networking", "System Integration"]
  },
  {
    year: "2018",
    title: "Intelligent Transportation",
    description: "Pioneering smart mobility (ITS).",
    icon: <TrafficCone className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-emerald-400 to-emerald-600",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-600 dark:text-emerald-400",
    details: ["Traffic Monitoring Systems", "Smart Highway Technologies", "Road Safety Solutions", "Intelligent Transportation Infrastructure"]
  },
  {
    year: "2019",
    title: "Toll Management Solutions",
    description: "Revolutionizing toll collection.",
    icon: <CarFront className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-cyan-400 to-cyan-600",
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
    text: "text-cyan-600 dark:text-cyan-400",
    details: ["Electronic Toll Collection (ETC)", "FASTag Solutions", "Toll Plaza Management Systems", "Toll Lane Automation"]
  },
  {
    year: "2020",
    title: "Tunnel Management Systems",
    description: "Ensuring safety underground.",
    icon: <ShieldAlert className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-slate-400 to-slate-600",
    bg: "bg-slate-200 dark:bg-slate-800",
    text: "text-slate-600 dark:text-slate-300",
    details: ["Tunnel Surveillance", "Environmental Monitoring", "Emergency Communication", "Incident Detection"]
  },
  {
    year: "2021",
    title: "Advanced Traffic Management",
    description: "Next-gen traffic control (ATMS).",
    icon: <Settings2 className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-indigo-400 to-indigo-600",
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    text: "text-indigo-600 dark:text-indigo-400",
    details: ["Traffic Monitoring & Control", "Variable Message Signs (VMS)", "Speed Enforcement", "Traffic Analytics"]
  },
  {
    year: "2022",
    title: "Smart Surveillance & Security",
    description: "AI-powered safety infrastructure.",
    icon: <Cctv className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-rose-400 to-rose-600",
    bg: "bg-rose-100 dark:bg-rose-900/30",
    text: "text-rose-600 dark:text-rose-400",
    details: ["AI CCTV Surveillance", "ANPR Cameras", "RFID & FASTag Readers", "Biometric & Access Control"]
  },
  {
    year: "2023",
    title: "Software & Digital Solutions",
    description: "Enterprise digital transformation.",
    icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-purple-400 to-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
    details: ["Custom Software Development", "Web & Mobile Applications", "ERP & CRM", "Cloud Applications"]
  },
  {
    year: "2024",
    title: "AI & Integrated Tech Solutions",
    description: "The era of intelligent automation.",
    icon: <BrainCircuit className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-brand-400 to-brand-600",
    bg: "bg-brand-100 dark:bg-brand-900/30",
    text: "text-brand-600 dark:text-brand-400",
    isCurrent: true,
    details: ["Intelligent Toll Management", "AI Centre & Intelligent Automation", "Cloud Computing", "Cybersecurity"]
  },
  {
    year: "2025",
    title: "Innovation & Expansion",
    description: "Scaling the future.",
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-fuchsia-400 to-fuchsia-600",
    bg: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
    text: "text-fuchsia-600 dark:text-fuchsia-400",
    details: ["AI-powered transportation solutions", "Smart City initiatives", "Enterprise IT expansion", "Research & Development"]
  },
  {
    year: "2026+",
    title: "MLFF, AI & Future Tech",
    description: "Pioneering the next frontier.",
    icon: <Globe2 className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-cyan-400 via-brand-500 to-purple-600",
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-brand-500",
    isFuture: true,
    details: ["Multi-Lane Free Flow (MLFF)", "Intelligent Toll Collection", "Digital Twin Technologies", "Connected Mobility"]
  }
];

export default function CompanyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);

  const { scrollXProgress } = useScroll({
    container: scrollContainerRef
  });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const springScrollX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const springScrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (selectedMilestone !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMilestone]);

  return (
    <section className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950" id="growth-journey">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-600 dark:text-brand-400 uppercase mb-3">
              Our Growth Journey
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              From Highway Lighting Solutions to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">AI-Driven Digital Infrastructure.</span>
            </h3>
          </motion.div>
        </div>

        {/* Desktop Horizontal Timeline (md and up) */}
        <div className="hidden md:block relative">
          {/* Base Line */}
          <div className="absolute top-[48px] left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden z-0">
             <motion.div 
               className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-brand-400 via-cyan-500 to-purple-600 rounded-full origin-left"
               style={{ scaleX: springScrollX }}
             />
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-12 pt-4 px-4 -mx-4 items-start"
          >
            <div className="flex gap-8 min-w-max px-4">
              {TIMELINE_DATA.map((item, index) => (
                <TimelineItemDesktop 
                  key={index} 
                  item={item} 
                  index={index} 
                  onClick={() => setSelectedMilestone(index)} 
                />
              ))}
            </div>
          </div>
          
          {/* Scroll instruction indicator */}
          <div className="absolute right-0 top-[32px] translate-x-12 translate-y-2 animate-bounce pointer-events-none opacity-50">
             <div className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-full border border-slate-200 dark:border-slate-800">
               Scroll <ArrowRight className="w-3 h-3" />
             </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline (up to md) */}
        <div className="md:hidden relative px-2">
          {/* Vertical Line */}
          <div className="absolute left-[24px] top-4 bottom-4 w-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden z-0">
             <motion.div 
               className="absolute top-0 left-0 right-0 bg-gradient-to-b from-brand-400 via-cyan-500 to-purple-600 rounded-full origin-top"
               style={{ scaleY: springScrollY }}
             />
          </div>

          <div className="space-y-6">
            {TIMELINE_DATA.map((item, index) => (
              <TimelineItemMobile 
                key={index} 
                item={item} 
                index={index} 
                onClick={() => setSelectedMilestone(index)} 
              />
            ))}
          </div>
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <button 
            onClick={() => setSelectedMilestone(TIMELINE_DATA.findIndex(i => i.isCurrent))}
            className="px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 card-hover"
          >
            <span>View Complete Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Modal for Details */}
      <AnimatePresence>
        {selectedMilestone !== null && (
          <MilestoneModal 
            item={TIMELINE_DATA[selectedMilestone]} 
            onClose={() => setSelectedMilestone(null)}
            onNext={selectedMilestone < TIMELINE_DATA.length - 1 ? () => setSelectedMilestone(selectedMilestone + 1) : undefined}
            onPrev={selectedMilestone > 0 ? () => setSelectedMilestone(selectedMilestone - 1) : undefined}
            total={TIMELINE_DATA.length}
            currentIndex={selectedMilestone}
          />
        )}
      </AnimatePresence>

      <style>{"\
        .hide-scrollbar::-webkit-scrollbar {\
          display: none;\
        }\
        .hide-scrollbar {\
          -ms-overflow-style: none;\
          scrollbar-width: none;\
        }\
      "}</style>
    </section>
  );
}

function TimelineItemDesktop({ item, index, onClick }: { key?: string | number, item: any, index: number, onClick: () => void }) {
  const isAlt = index % 2 !== 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="snap-start w-64 shrink-0 relative flex flex-col group cursor-pointer"
      onClick={onClick}
    >
      {/* Connector Icon */}
      <div className="absolute top-[48px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className={\`
          w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110
          \${item.isCurrent ? 'bg-brand-600 text-white ring-4 ring-brand-100 dark:ring-brand-900/50' : 
            item.isFuture ? 'bg-gradient-to-br from-cyan-400 to-purple-600 text-white' :
            'bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 ' + item.text}
        \`}>
          {item.icon}
        </div>
      </div>

      {/* Content Card (alternating up and down) */}
      <div className={\`w-full \${isAlt ? 'mt-[100px]' : 'mb-[100px] order-first'}\`}>
        <div className={\`
          p-5 rounded-2xl border bg-white dark:bg-slate-900/90 backdrop-blur-sm
          shadow-sm hover:shadow-xl transition-all duration-300 card-hover
          \${item.isCurrent 
            ? 'border-brand-500 shadow-brand-500/10' 
            : item.isFuture
              ? 'border-transparent relative overflow-hidden'
              : 'border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-slate-600'}
        \`}>
          {item.isFuture && (
            <div className="absolute inset-0 p-[1px] bg-gradient-to-br from-cyan-400 to-purple-600 -z-10 rounded-2xl opacity-50"></div>
          )}
          
          <div className={\`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold mb-3 tracking-wider uppercase \${
            item.isCurrent || item.isFuture ? 'bg-gradient-to-r ' + item.color + ' text-white' : item.bg + ' ' + item.text
          }\`}>
            {item.year}
          </div>
          
          <h4 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 min-h-[3rem]">
            {item.title}
          </h4>
          
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function TimelineItemMobile({ item, index, onClick }: { key?: string | number, item: any, index: number, onClick: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="relative flex items-center gap-4 group cursor-pointer"
      onClick={onClick}
    >
      {/* Node */}
      <div className="z-10 shrink-0">
        <div className={\`
          w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110
          \${item.isCurrent ? 'bg-brand-600 text-white ring-4 ring-brand-100 dark:ring-brand-900/50' : 
            item.isFuture ? 'bg-gradient-to-br from-cyan-400 to-purple-600 text-white' :
            'bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 ' + item.text}
        \`}>
          {item.icon}
        </div>
      </div>

      {/* Card */}
      <div className={\`
        flex-1 p-4 rounded-2xl border bg-white dark:bg-slate-900
        shadow-sm transition-all duration-300 active:scale-[0.98]
        \${item.isCurrent 
          ? 'border-brand-500 shadow-brand-500/10' 
          : item.isFuture
            ? 'border-purple-500/50 shadow-purple-500/10'
            : 'border-slate-200 dark:border-slate-800'}
      \`}>
        <div className="flex items-center justify-between mb-1">
          <div className={\`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase \${
            item.isCurrent || item.isFuture ? 'bg-gradient-to-r ' + item.color + ' text-white' : item.bg + ' ' + item.text
          }\`}>
            {item.year}
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
          {item.title}
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function MilestoneModal({ item, onClose, onNext, onPrev, total, currentIndex }: { item: any, onClose: () => void, onNext?: () => void, onPrev?: () => void, total: number, currentIndex: number }) {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      
      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className={\`
          relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl 
          overflow-hidden flex flex-col border \${item.isFuture ? 'border-purple-500/30' : 'border-slate-200 dark:border-slate-800'}
        \`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header Graphic */}
        <div className={\`h-32 bg-gradient-to-r \${item.color} relative overflow-hidden flex items-center justify-center\`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <motion.div 
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
            className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 z-10 shadow-xl"
          >
            {React.cloneElement(item.icon, { className: "w-10 h-10" })}
          </motion.div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors z-20 backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className={\`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 tracking-widest uppercase \${item.bg} \${item.text}\`}>
              {item.year} {item.isCurrent && " (Current)"}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {item.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-2">
              Key Highlights
            </h4>
            <ul className="space-y-3">
              {item.details.map((detail: string, i: number) => (
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  key={i} 
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <div className={\`w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-gradient-to-r \${item.color}\`}></div>
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <button 
            onClick={onPrev}
            disabled={!onPrev}
            className={\`p-2 rounded-lg flex items-center gap-1 text-sm font-medium transition-colors \${onPrev ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800' : 'text-slate-300 dark:text-slate-700 cursor-not-allowed'}\`}
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>
          
          <div className="flex gap-1 hidden sm:flex">
            {Array.from({length: total}).map((_, idx) => (
              <div key={idx} className={\`w-1.5 h-1.5 rounded-full \${currentIndex === idx ? 'bg-brand-500' : 'bg-slate-200 dark:bg-slate-700'}\`} />
            ))}
          </div>
          <div className="text-xs text-slate-500 font-medium sm:hidden">
            {currentIndex + 1} / {total}
          </div>

          <button 
            onClick={onNext}
            disabled={!onNext}
            className={\`p-2 rounded-lg flex items-center gap-1 text-sm font-medium transition-colors \${onNext ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800' : 'text-slate-300 dark:text-slate-700 cursor-not-allowed'}\`}
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
`

fs.writeFileSync('src/components/home/CompanyTimeline.tsx', content);
