"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, HandCoins, CheckSquare, CloudSync } from "lucide-react";

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
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-yellow/30 selection:text-brand-red bg-sunset-gradient relative overflow-hidden">
      {/* Decorative background sweeps */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center">
        
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl flex flex-col items-center mb-32"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="font-display font-black tracking-tighter text-5xl md:text-7xl lg:text-8xl text-dark-ink lowercase">
              maidwise
            </h1>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-black/70 mb-8 text-balance font-medium">
            Manage your household help effortlessly.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-base md:text-lg text-black/50 mb-10 text-balance max-w-2xl">
            A beautifully designed premium iOS app for tracking domestic help, attendance, tasks, and finances. Keeps the whole family in sync.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-red/90 transition-transform hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgb(255,38,0,0.2)]"
            >
              Download on the App Store
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24"
        >
          <motion.div variants={itemVariants} className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 rounded-3xl shadow-sm hover:bg-white/60 transition-colors group">
            <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CalendarCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-dark-ink mb-3">Attendance Tracking</h3>
            <p className="text-black/60 leading-relaxed">
              Easily log daily attendance for your maids and staff. Keep a reliable record of presence, absences, and leaves in one tap.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 rounded-3xl shadow-sm hover:bg-white/60 transition-colors group">
            <div className="w-14 h-14 bg-brand-yellow/30 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HandCoins className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-dark-ink mb-3">Salary & Advances</h3>
            <p className="text-black/60 leading-relaxed">
              Keep track of monthly payouts, salary advances, and remaining balances without the math. Everything is calculated for you.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 rounded-3xl shadow-sm hover:bg-white/60 transition-colors group">
            <div className="w-14 h-14 bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CheckSquare className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-dark-ink mb-3">Task Management</h3>
            <p className="text-black/60 leading-relaxed">
              Assign and track daily chores. Ensure everyone knows exactly what needs to be done around the house each day.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 rounded-3xl shadow-sm hover:bg-white/60 transition-colors group">
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CloudSync className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-dark-ink mb-3">Cloud Sync</h3>
            <p className="text-black/60 leading-relaxed">
              Multi-device synchronization so the whole family stays updated. Make a change on one device and see it instantly on all others.
            </p>
          </motion.div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-black/5 bg-white/50 backdrop-blur-md py-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-display font-black tracking-tight text-xl text-dark-ink">
            maidwise
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm font-medium text-black/60 hover:text-brand-red transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium text-black/60 hover:text-brand-red transition-colors">
              App Store
            </Link>
          </div>
          <p className="text-sm text-black/40">
            &copy; {new Date().getFullYear()} Maidwise. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
