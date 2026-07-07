const fs = require('fs');
/**
 * fix_badges.cjs
 * Script to process files.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '../..');

let code = fs.readFileSync(path.join(ROOT, 'src/pages/Home.tsx'), 'utf8');

const oldBadge = `<div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-[#1E293B]/40 border border-white/20 dark:border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-cyan-400 dark:bg-[#60A5FA] rounded-full animate-pulse"></span>
                <span className="text-white/90 dark:text-[#94A3B8] text-base font-medium tracking-wide uppercase">Your Intelligent Transportation System Partner</span>
              </div>`;

const newBadges = `<div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 mb-6">
                {/* Existing Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-[#1E293B]/40 border border-white/20 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-[#1E293B]/60 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] dark:hover:shadow-[0_0_15px_rgba(96,165,250,0.15)] group cursor-default">
                  <span className="w-2 h-2 bg-cyan-400 dark:bg-[#60A5FA] rounded-full animate-pulse"></span>
                  <span className="text-white/90 dark:text-[#94A3B8] text-base font-medium tracking-wide uppercase">Your Intelligent Transportation System Partner</span>
                </div>

                {/* Legacy Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-[#1E293B]/40 border border-white/20 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-[#1E293B]/60 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] dark:hover:shadow-[0_0_15px_rgba(96,165,250,0.15)] group cursor-default">
                  <Star className="w-3.5 h-3.5 text-cyan-400 dark:text-[#60A5FA] group-hover:scale-110 transition-transform duration-300 fill-cyan-400/20 dark:fill-[#60A5FA]/20" />
                  <span className="text-white/90 dark:text-[#94A3B8] text-base font-medium tracking-wide uppercase">A Legacy of Excellence</span>
                </div>

                {/* ISO Certification Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-[#1E293B]/40 border border-white/20 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-[#1E293B]/60 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] dark:hover:shadow-[0_0_15px_rgba(96,165,250,0.15)] group cursor-default">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 dark:text-[#60A5FA] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white/90 dark:text-[#94A3B8] text-base font-medium tracking-wide uppercase">ISO 9001:2015 Certified</span>
                </div>
              </div>`;

code = code.replace(oldBadge, newBadges);
fs.writeFileSync(path.join(ROOT, 'src/pages/Home.tsx'), code);
