"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, HelpCircle, Mail, Calendar, HandCoins, CheckSquare, CloudSync } from "lucide-react";

export default function FAQComingSoon() {
  const containerVariants: import("framer-motion").Variants = {
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

  const topics = [
    {
      icon: <Calendar className="w-5 h-5 text-brand-red" />,
      title: "Attendance & Leaves",
      desc: "How to log daily attendance, record absences, and manage monthly leaves.",
    },
    {
      icon: <HandCoins className="w-5 h-5 text-amber-500" />,
      title: "Salary & Advances",
      desc: "Understanding leave deductions, calculating monthly payouts, and tracking advances.",
    },
    {
      icon: <CheckSquare className="w-5 h-5 text-blue-500" />,
      title: "Task Management",
      desc: "Assigning daily tasks to your household help and verifying completion.",
    },
    {
      icon: <CloudSync className="w-5 h-5 text-emerald-500" />,
      title: "Family Cloud Sync",
      desc: "How multiple devices in your household coordinate data seamlessly.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-yellow/30 selection:text-brand-red bg-sunset-gradient relative overflow-hidden text-dark-ink">
      
      {/* Header */}
      <header className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto z-10">
        <Link href="/" className="font-display font-black text-2xl text-brand-red lowercase tracking-tighter hover:opacity-85 transition-opacity">
          maidwise
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold hover:text-brand-red transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center justify-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[2.5rem] p-8 md:p-16 w-full text-center relative overflow-hidden flex flex-col items-center"
        >
          {/* Animated decorative icon */}
          <motion.div
            variants={itemVariants}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-16 h-16 bg-brand-red/10 text-brand-red rounded-3xl flex items-center justify-center mb-8"
          >
            <HelpCircle className="w-9 h-9" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-black tracking-tighter text-5xl md:text-7xl text-brand-red lowercase leading-none mb-4"
          >
            faqs
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-dark-ink mb-6 tracking-tight"
          >
            Coming Soon
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-black/60 text-lg md:text-xl max-w-lg mb-12 font-medium leading-relaxed"
          >
            We are putting together a comprehensive help center to answer all your questions about managing your household staff.
          </motion.p>

          {/* Topics Preview Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left mb-12 border-t border-black/5 pt-10"
          >
            {topics.map((topic, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/40 border border-white/20">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center shadow-sm">
                  {topic.icon}
                </div>
                <div>
                  <h3 className="font-bold text-dark-ink tracking-tight">{topic.title}</h3>
                  <p className="text-black/50 text-sm mt-1 leading-snug">{topic.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="border-t border-black/5 pt-8 w-full"
          >
            <p className="text-sm font-semibold text-black/40 uppercase tracking-wider mb-3">
              Need immediate support?
            </p>
            <p className="text-black/60 font-medium mb-3">
              Feel free to send us your queries or suggestions:
            </p>
            <a
              href="mailto:behumoury.ch@gmail.com"
              className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-brand-red/90 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <Mail className="w-4 h-4" />
              behumoury.ch@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 text-center text-sm font-medium text-black/30 mt-auto z-10">
        &copy; {new Date().getFullYear()} Maidwise. All rights reserved.
      </footer>
    </div>
  );
}
