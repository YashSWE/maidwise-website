"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, HandCoins, CheckSquare, CloudSync, ArrowRight } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-yellow/30 selection:text-brand-red bg-sunset-gradient relative overflow-hidden text-dark-ink">
      
      {/* Top Header Placeholder for symmetry if needed, or just let it breathe */}
      <header className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-display font-black text-2xl text-brand-red lowercase tracking-tighter">
          maidwise
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-20 flex flex-col items-center">
        
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl flex flex-col items-center mb-24 md:mb-32"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="font-display font-black tracking-tighter text-6xl md:text-8xl lg:text-9xl text-brand-red lowercase leading-none">
              maidwise
            </h1>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark-ink mb-6 text-balance tracking-tight">
            Manage your household help effortlessly.
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-black/50 mb-12 text-balance max-w-2xl font-medium leading-relaxed">
            A beautifully designed premium iOS app for tracking domestic help, attendance, tasks, and finances. Keeps the whole family in sync.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 bg-brand-red text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:bg-brand-red/90 transition-all hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgb(255,38,0,0.25)]"
            >
              Download on the App Store
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12"
        >
          <motion.div variants={itemVariants} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-black/[0.03] hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <CalendarCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-dark-ink mb-3 tracking-tight">Attendance Tracking</h3>
            <p className="text-black/50 text-lg leading-relaxed font-medium">
              Easily log daily attendance for your maids and staff. Keep a reliable record of presence, absences, and leaves in one tap.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-black/[0.03] hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <HandCoins className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-dark-ink mb-3 tracking-tight">Salary & Advances</h3>
            <p className="text-black/50 text-lg leading-relaxed font-medium">
              Keep track of monthly payouts, salary advances, and remaining balances without the math. Everything is calculated for you.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-black/[0.03] hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-14 h-14 bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <CheckSquare className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-dark-ink mb-3 tracking-tight">Task Management</h3>
            <p className="text-black/50 text-lg leading-relaxed font-medium">
              Assign and track daily chores. Ensure everyone knows exactly what needs to be done around the house each day.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-black/[0.03] hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <CloudSync className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-dark-ink mb-3 tracking-tight">Cloud Sync</h3>
            <p className="text-black/50 text-lg leading-relaxed font-medium">
              Multi-device synchronization so the whole family stays updated. Make a change on one device and see it instantly on all others.
            </p>
          </motion.div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="w-full bg-white/80 backdrop-blur-xl border-t border-black/5 py-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-display font-black tracking-tight text-xl text-brand-red lowercase">
            maidwise
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-sm font-semibold text-black/50 hover:text-brand-red transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-semibold text-black/50 hover:text-brand-red transition-colors">
              App Store
            </Link>
          </div>
          <p className="text-sm font-medium text-black/30">
            &copy; {new Date().getFullYear()} Maidwise. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
