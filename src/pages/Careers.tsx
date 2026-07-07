/**
 * File: Careers.tsx
 * Purpose: Page component for Careers. Handles the UI and routing for this specific route.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, MapPin, UploadCloud, Send, Lock, Clock, CheckCircle } from 'lucide-react';
import { useState, useMemo } from 'react';

type JobStatus = 'Open' | 'Closed' | 'Filled' | 'Coming Soon';

interface Job {
  id: number;
  title: string;
  dept: string;
  location: string;
  type: string;
  status: JobStatus;
}

const JOBS: Job[] = [
  { id: 1, title: "Senior AI Engineer", dept: "Engineering", location: "New Delhi (Hybrid)", type: "Full-time", status: "Open" },
  { id: 2, title: "Infrastructure Project Manager", dept: "Operations", location: "Remote / On-site", type: "Full-time", status: "Filled" },
  { id: 3, title: "Toll Systems Analyst", dept: "Data & Analytics", location: "New Delhi", type: "Full-time", status: "Closed" },
  { id: 4, title: "Frontend Developer (React)", dept: "Engineering", location: "Hybrid", type: "Full-time", status: "Open" },
  { id: 5, title: "Smart City Solutions Architect", dept: "Engineering", location: "Mumbai", type: "Full-time", status: "Coming Soon" }
];

/**
 * Component: Careers
 * 
 * Defines the Careers component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Careers() {
  // Local state to manage filter
  const [filter, setFilter] = useState<JobStatus | 'All'>('All');
  
  const filteredJobs = useMemo(() => {
    return filter === 'All' ? JOBS : JOBS.filter(job => job.status === filter);
  }, [filter]);

  const defaultOpenJob = JOBS.find(j => j.status === 'Open' || j.status === 'Coming Soon') || JOBS[0];
  // Local state to manage selectedJob
  const [selectedJob, setSelectedJob] = useState<Job>(defaultOpenJob);

  const getStatusBadge = (status: JobStatus) => {
    switch(status) {
      case 'Open': return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">Open</span>;
      case 'Filled': return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800"><CheckCircle className="w-3.5 h-3.5 mr-1" /> Position Filled</span>;
      case 'Closed': return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800"><Lock className="w-3.5 h-3.5 mr-1" /> Applications Closed</span>;
      case 'Coming Soon': return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800"><Clock className="w-3.5 h-3.5 mr-1" /> Coming Soon</span>;
    }
  }

  // Handler function for JobClick events

  const handleJobClick = (job: Job) => {
    if (job.status === 'Filled' || job.status === 'Closed') {
      return;
    }
    setSelectedJob(job);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-12 pb-24">
      <div className="container-custom">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Build the Future with Us</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Join a team of innovators transforming India's intelligent transportation systems and digital infrastructure.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Job Listings */}
          <div className="lg:w-1/3 space-y-4">
            <div className="flex flex-col mb-6 space-y-4">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Open Positions</h2>
              
              {/* Filter */}
              <div className="flex flex-wrap gap-2">
                {(['All', 'Open', 'Coming Soon', 'Filled', 'Closed'] as const).map(status => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      filter === status 
                        ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900' 
                        : 'glass-card text-slate-600 dark:text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job) => {
                  const isClosedOrFilled = job.status === 'Closed' || job.status === 'Filled';
                  const isSelected = selectedJob.id === job.id;
                  
                  return (
                    <motion.div 
                      key={job.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: isClosedOrFilled ? 0.75 : 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => handleJobClick(job)}
                      className={`p-6 rounded-2xl border transition-all ${
                        isClosedOrFilled 
                          ? 'cursor-not-allowed glass border-slate-200 dark:border-slate-800' 
                          : 'cursor-pointer hover:border-brand-300 dark:hover:border-slate-700 card-hover glass-card border-slate-200 dark:border-slate-800'
                      } ${
                        isSelected && !isClosedOrFilled
                          ? '!bg-brand-600 !border-brand-500 shadow-lg shadow-brand-500/20' 
                          : ''
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className={`font-semibold text-lg pr-2 ${
                          isSelected && !isClosedOrFilled 
                            ? 'text-white' 
                            : isClosedOrFilled ? 'text-slate-500 dark:text-slate-500' : 'text-slate-900 dark:text-white'
                        }`}>
                          {job.title}
                        </h3>
                        <div className="shrink-0 mt-1">
                          {getStatusBadge(job.status)}
                        </div>
                      </div>
                      
                      <div className={`flex items-center space-x-4 text-sm ${
                        isSelected && !isClosedOrFilled 
                          ? 'text-brand-100' 
                          : isClosedOrFilled ? 'text-slate-400 dark:text-slate-600' : 'text-slate-500 dark:text-slate-400'
                      }`}>
                        <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1" /> {job.dept}</span>
                        <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {job.location}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              {filteredJobs.length === 0 && (
                <div className="p-8 text-center text-slate-500 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl">
                  No positions match the selected filter.
                </div>
              )}
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:w-2/3 glass-card glass-panel p-8 md:p-12 shadow-xl h-fit sticky top-24">
            <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Apply for {selectedJob.title}</h2>
                {getStatusBadge(selectedJob.status)}
              </div>
              <p className="text-slate-600 dark:text-slate-400">{selectedJob.dept} • {selectedJob.location}</p>
            </div>
            
            {selectedJob.status === 'Coming Soon' ? (
              <div className="py-12 text-center flex flex-col items-center justify-center glass-card border border-slate-100 dark:border-slate-800">
                <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mb-4 text-brand-600 dark:text-brand-400">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Applications Opening Soon</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                  We are finalizing the details for this position. Please check back later or subscribe to our newsletter for updates.
                </p>
                <button disabled className="mt-8 px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium rounded-lg cursor-not-allowed transition-colors">
                  Apply Now (Disabled)
                </button>
              </div>
            ) : selectedJob.status === 'Closed' || selectedJob.status === 'Filled' ? (
              <div className="py-12 text-center flex flex-col items-center justify-center glass-card border border-slate-100 dark:border-slate-800">
                <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4 text-slate-500 dark:text-slate-400">
                  {selectedJob.status === 'Filled' ? <CheckCircle className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {selectedJob.status === 'Filled' ? 'Position Filled' : 'Applications Closed'}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                  We are no longer accepting applications for this role. Check out our open positions.
                </p>
                <button disabled className="mt-8 px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium rounded-lg cursor-not-allowed transition-colors">
                  Apply Now (Disabled)
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); alert("Application submitted successfully!"); }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name *</label>
                    <input type="text" required maxLength={50} pattern="^[a-zA-Z\s\-]+$" title="Only letters, spaces, and hyphens are allowed." className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name *</label>
                    <input type="text" required maxLength={50} pattern="^[a-zA-Z\s\-]+$" title="Only letters, spaces, and hyphens are allowed." className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address *</label>
                    <input type="email" required maxLength={150} className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number *</label>
                    <input type="tel" required maxLength={20} pattern="^\+?[0-9\-\s()]+$" title="Only numbers and phone formatting characters allowed." className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">LinkedIn Profile URL</label>
                    <input type="url" maxLength={200} className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white" />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Upload Resume/CV *</label>
                  <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group relative">
                    <UploadCloud className="w-10 h-10 mx-auto text-slate-400 group-hover:text-brand-500 transition-colors mb-3" />
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Click to upload your resume</p>
                    <p className="text-xs text-slate-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                    <input type="file" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Cover Letter (Optional)</label>
                  <textarea rows={4} className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors btn-premium">
                  <span>Submit Application</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
