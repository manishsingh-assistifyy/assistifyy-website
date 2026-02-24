"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { Space_Mono } from "next/font/google";
import { useRef, useState } from "react";

// Centralized imports
import { services, values, focusAreas } from "@/app/lib/homeData";
import { containerVariants, itemVariants, cardVariants } from "@/app/lib/animations";
import ServiceModal from "@/app/components/ServiceModal";
import Footer from "@/app/components/Footer";

const spaceMono = Space_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-space-mono",
});

// ── Height utility ──────────────────────────────────────────────────────────
const heightClass = (h) =>
  h === "short" ? "min-h-[140px]" : h === "tall" ? "min-h-[200px]" : "min-h-[170px]";

const valueHeightClass = (h) =>
  h === "short" ? "min-h-[180px]" : h === "tall" ? "min-h-[280px]" : "min-h-[220px]";

// ── Page ────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const ref = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <main
      ref={ref}
      className={`${spaceMono.variable} min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden relative`}
    >
      {/* ── Enhanced Animated background blobs with grid pattern ── */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        {/* Animated gradient blobs */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.6 }} 
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute top-0 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#3B82F6] to-[#2563eb] blur-[120px]"
            animate={{ 
              y: [0, 50, 0], 
              x: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6366f1] blur-[120px]"
            animate={{ 
              y: [0, -60, 0], 
              x: [0, -40, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#06b6d4] to-[#3B82F6] blur-[130px]"
            animate={{ 
              y: [0, 40, 0], 
              scale: [1, 1.08, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </motion.div>
      </div>

      {/* ── Hero Section ── */}
      <motion.section style={{ y, opacity, scale }} className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-12 md:pt-16 z-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ amount: 0.3 }}>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }} viewport={{ amount: 0.5 }} className="text-xs font-semibold uppercase tracking-[0.35em] text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
              About
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2, duration: 0.6 }} 
              viewport={{ amount: 0.5 }} 
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl font-[family-name:var(--font-space-mono)] tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl"
            >
              From cloud foundations to customer outcomes.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ amount: 0.5 }} className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg drop-shadow-lg">
              Assistifyy is a digital product studio helping ambitious teams build web and mobile solutions that feel effortless. We combine strategic clarity, modern engineering, and responsible AI to deliver products that launch fast and scale with confidence.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} viewport={{ amount: 0.5 }} className="mt-6 flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link href="/wait-list" className="rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563eb] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.6)] transition hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] border border-blue-400/30">
                  Join the waitlist
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link href="/report" className="rounded-full border-2 border-[#3B82F6]/50 bg-white/5 backdrop-blur-sm px-7 py-3 text-sm font-semibold text-[#60a5fa] transition hover:bg-white/10 hover:border-[#3B82F6] shadow-lg">
                  View sample report
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right – enhanced focus card with glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7, ease: "easeOut" }} 
            viewport={{ amount: 0.3 }} 
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl relative overflow-hidden"
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
            
            <div className="space-y-5 relative z-10">
              <div>
                <p className="text-sm font-semibold text-slate-400">What we focus on</p>
                <h2 className="mt-2 text-xl font-bold text-white font-[family-name:var(--font-space-mono)] drop-shadow-lg">Clarity, speed, reliability.</h2>
              </div>
              <motion.div className="grid gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                {focusAreas.map((item, idx) => (
                  <motion.div 
                    key={item.title} 
                    variants={itemVariants} 
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="rounded-2xl border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm px-5 py-4 hover:border-emerald-400/40 transition shadow-lg hover:shadow-emerald-500/20"
                  >
                    <p className="text-sm font-semibold text-white flex items-center gap-2">
                      <span className="text-emerald-400">✦</span>
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-300">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Values – Masonry ── */}
      <motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ amount: 0.2 }} className="relative mx-auto w-full max-w-6xl px-6 pb-12 z-10">
        <motion.div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
          {values.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover="hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ amount: 0.3 }}
              className={`break-inside-avoid rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-7 shadow-[0_8px_32px_rgba(0,0,0,0.3)] cursor-pointer hover:shadow-[0_8px_40px_rgba(59,130,246,0.4)] hover:border-blue-400/30 transition-all duration-300 ${valueHeightClass(item.height)} relative overflow-hidden group`}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-3xl"></div>
              
              <motion.div 
                initial={{ scale: 0 }} 
                whileInView={{ scale: 1 }} 
                transition={{ delay: idx * 0.1 + 0.3, duration: 0.5, type: "spring" }} 
                viewport={{ amount: 0.5 }} 
                className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6] via-[#60a5fa] to-[#8B5CF6] mb-5 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                {idx + 1}
              </motion.div>
              <h3 className="relative z-10 text-lg font-semibold text-white font-[family-name:var(--font-space-mono)] mb-3 drop-shadow-lg">{item.title}</h3>
              <p className="relative z-10 text-sm leading-relaxed text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Services ── */}
      <motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ amount: 0.1 }} className="relative mx-auto w-full max-w-6xl px-6 pb-12 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ amount: 0.2 }} 
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
          
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-6 mb-10">
            <div>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ amount: 0.5 }} className="text-xs font-semibold uppercase tracking-[0.3em] text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
                Services
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ amount: 0.5 }} className="mt-3 text-3xl font-bold text-white font-[family-name:var(--font-space-mono)] bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Capabilities designed for modern teams.
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ amount: 0.5 }} className="mt-3 max-w-2xl text-sm text-slate-300">
                We help businesses modernize infrastructure, automate workflows, and deliver products that keep customers engaged across every channel.
              </motion.p>
            </div>
          </div>

          <motion.div className="relative z-10 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover="hover"
                initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.6, delay: Math.random() * 0.3 }}
                viewport={{ amount: 0.3 }}
                onClick={() => setSelectedService(service)}
                className={`break-inside-avoid rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg px-6 py-6 cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:border-blue-400/50 hover:scale-[1.02] group ${heightClass(service.height)} relative overflow-hidden`}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-2xl"></div>
                
                <div className="relative z-10 w-14 h-14 mb-4 text-blue-300 group-hover:text-blue-100 transition-colors drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                  {service.image}
                </div>
                <p className="relative z-10 text-sm font-semibold text-white font-[family-name:var(--font-space-mono)] mb-3 flex items-center gap-2">
                  <span className="text-blue-400">»</span> 
                  {service.title}
                </p>
                <p className="relative z-10 text-xs text-slate-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── CTA Section ── */}
      <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ amount: 0.3 }} className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div 
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-9 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 group-hover:from-blue-500/10 group-hover:to-emerald-500/10 transition-all duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">Why teams choose us</p>
              <h2 className="mt-3 text-2xl font-bold text-white font-[family-name:var(--font-space-mono)] drop-shadow-lg">Professional delivery, transparent partnerships.</h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-lg">✓</span>
                  <span>Dedicated delivery pods with clear ownership and weekly updates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-lg">✓</span>
                  <span>Security-first engineering and compliance-ready workflows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-lg">✓</span>
                  <span>Flexible engagement models for startups and enterprise teams.</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-900/40 to-blue-900/40 backdrop-blur-xl p-9 text-white shadow-[0_8px_32px_rgba(16,185,129,0.2)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 group-hover:from-emerald-500/20 group-hover:to-blue-500/20 transition-all duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300 drop-shadow-[0_0_8px_rgba(167,243,208,0.5)]">Ready to build</p>
              <h2 className="mt-3 text-2xl font-bold font-[family-name:var(--font-space-mono)] bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">Let&apos;s turn your next idea into a reliable product.</h2>
              <p className="mt-5 text-sm text-slate-200 leading-relaxed">Share your goals, and we&apos;ll propose the fastest path from concept to launch-ready MVP.</p>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link href="/wait-list" className="mt-7 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-white to-emerald-50 px-7 py-3 text-sm font-semibold text-slate-900 transition shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                  Talk to our team
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Footer (shared component) ── */}
      <Footer variant="dark" />

      {/* ── Service detail modal (shared component) ── */}
      <ServiceModal service={selectedService} isOpen={!!selectedService} onClose={() => setSelectedService(null)} />
    </main>
  );
}
