/**
 * File: AuthModal.tsx
 * Purpose: Component: AuthModal.tsx
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Briefcase, Building, Users, Eye, EyeOff, Lock, Mail, Phone } from 'lucide-react';

type AuthView = 'role-selection' | 'login' | 'register';
type Role = 'Admin' | 'Employee' | 'Client' | 'Other/User';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: AuthView;
}

/**
 * Component: AuthModal
 * 
 * Defines the AuthModal component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function AuthModal({ isOpen, onClose, initialView = 'role-selection' }: AuthModalProps) {
  // Local state to manage view
  const [view, setView] = useState<AuthView>(initialView);
  // Local state to manage role
  const [role, setRole] = useState<Role>('Other/User');
  // Local state to manage showPassword
  const [showPassword, setShowPassword] = useState(false);

  // Reset state when modal opens/closes
  React.useEffect(() => {
    if (isOpen) {
      setView(initialView);
      setShowPassword(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialView]);

  if (!isOpen) return null;

  // Handler function for RoleSelect events

  const handleRoleSelect = (selectedRole: Role) => {
    setRole(selectedRole);
    setView('login');
  };

  // Handler function for LoginSubmit events

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    onClose();
  };

  // Handler function for RegisterSubmit events

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate register
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
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
          transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
          className="relative w-full max-w-md glass-card shadow-2xl border-transparent overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-white/5">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              {view === 'role-selection' && 'Select Login Role'}
              {view === 'login' && `${role} Login`}
              {view === 'register' && 'Create an Account'}
            </h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {/* ROLE SELECTION */}
              {view === 'role-selection' && (
                <motion.div
                  key="role-selection"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <button onClick={() => handleRoleSelect('Admin')} className="flex flex-col items-center justify-center p-6 rounded-xl border-transparent hover:border-brand-500 dark:hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all group">
                    <User className="w-8 h-8 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 mb-3" />
                    <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-700 dark:group-hover:text-brand-300">Admin</span>
                  </button>
                  <button onClick={() => handleRoleSelect('Employee')} className="flex flex-col items-center justify-center p-6 rounded-xl border-transparent hover:border-brand-500 dark:hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all group">
                    <Briefcase className="w-8 h-8 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 mb-3" />
                    <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-700 dark:group-hover:text-brand-300">Employee</span>
                  </button>
                  <button onClick={() => handleRoleSelect('Client')} className="flex flex-col items-center justify-center p-6 rounded-xl border-transparent hover:border-brand-500 dark:hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all group">
                    <Building className="w-8 h-8 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 mb-3" />
                    <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-700 dark:group-hover:text-brand-300">Client</span>
                  </button>
                  <button onClick={() => handleRoleSelect('Other/User')} className="flex flex-col items-center justify-center p-6 rounded-xl border-transparent hover:border-brand-500 dark:hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all group">
                    <Users className="w-8 h-8 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 mb-3" />
                    <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-700 dark:group-hover:text-brand-300">Other/User</span>
                  </button>
                </motion.div>
              )}

              {/* LOGIN FORM */}
              {view === 'login' && (
                <motion.form
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleLoginSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Username or Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="text" required className="block w-full pl-10 pr-3 py-2.5 border-transparent rounded-lg glass-section text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="Enter your username or email" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type={showPassword ? "text" : "password"} required className="block w-full pl-10 pr-10 py-2.5 border-transparent rounded-lg glass-section text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="Enter your password" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" type="checkbox" className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-slate-300 rounded" />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 dark:text-slate-400">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="font-medium text-brand-600 dark:text-brand-400 hover:text-brand-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <button type="submit" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors shadow-brand-500/25">
                    Sign in
                  </button>

                  <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                    <button type="button" onClick={() => setView('role-selection')} className="font-medium text-brand-600 dark:text-brand-400 hover:text-brand-500 mb-4 block w-full">
                      ← Change Login Role
                    </button>
                    Don't have an account?{' '}
                    <button type="button" onClick={() => setView('register')} className="font-medium text-brand-600 dark:text-brand-400 hover:text-brand-500">
                      Register now
                    </button>
                  </div>
                </motion.form>
              )}

              {/* REGISTER FORM */}
              {view === 'register' && (
                <motion.form
                  key="register"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleRegisterSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name</label>
                      <input type="text" required className="block w-full px-3 py-2.5 border-transparent rounded-lg glass-section text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Username</label>
                      <input type="text" required className="block w-full px-3 py-2.5 border-transparent rounded-lg glass-section text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="johndoe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="email" required className="block w-full pl-10 pr-3 py-2.5 border-transparent rounded-lg glass-section text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Mobile Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="tel" required className="block w-full pl-10 pr-3 py-2.5 border-transparent rounded-lg glass-section text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
                      <input type={showPassword ? "text" : "password"} required minLength={8} className="block w-full px-3 py-2.5 border-transparent rounded-lg glass-section text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="••••••••" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Confirm Password</label>
                      <input type={showPassword ? "text" : "password"} required minLength={8} className="block w-full px-3 py-2.5 border-transparent rounded-lg glass-section text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="••••••••" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">User Type</label>
                    <select required defaultValue="" className="block w-full px-3 py-2.5 border-transparent rounded-lg glass-section text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none appearance-none">
                      <option value="" disabled>Select User Type</option>
                      <option value="Employee">Employee</option>
                      <option value="Client">Client</option>
                      <option value="Other">Other / General User</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors shadow-brand-500/25 mt-6">
                    Create Account
                  </button>

                  <div className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
                    Already have an account?{' '}
                    <button type="button" onClick={() => setView('role-selection')} className="font-medium text-brand-600 dark:text-brand-400 hover:text-brand-500">
                      Login here
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
