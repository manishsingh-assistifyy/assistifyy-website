"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Space_Mono } from "next/font/google";
import { useRef, useState } from "react";

import { services, values, focusAreas } from "@/app/lib/homeData";
import { containerVariants, itemVariants, cardVariants } from "@/app/lib/animations";
import ServiceModal from "@/app/components/ServiceModal";
import Footer from "@/app/components/Footer";
import { useToast } from "@/app/components/Toast";

const spaceMono = Space_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const heightClass = (h) =>
  h === "short" ? "min-h-[140px]" : h === "tall" ? "min-h-[200px]" : "min-h-[170px]";

const valueHeightClass = (h) =>
  h === "short" ? "min-h-[180px]" : h === "tall" ? "min-h-[280px]" : "min-h-[220px]";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function HomePage() {
  const ref = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isLeadCardOpen, setIsLeadCardOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const openLeadCard = () => setIsLeadCardOpen(true);

  const handleLeadSubmit = async (event) => {
    event.preventDefault();

    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Unable to send email right now.");
      }

      toast.success("Welcome email sent successfully.");
      setEmail("");
      setIsLeadCardOpen(false);
    } catch (error) {
      toast.error(error.message || "Failed to send welcome email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      ref={ref}
      className={`${spaceMono.variable} min-h-screen bg-gradient-to-br from-[#f7f8fa] via-white to-[#dbeafe] text-[#0f172a] overflow-hidden`}
    >
      <motion.div className="fixed inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ duration: 1.2, ease: "easeInOut" }}>
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-300 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-300 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.div>

      <motion.section style={{ y, opacity, scale }} className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-12 md:pt-16 z-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.3 }}>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.5 }} className="text-xs font-semibold uppercase tracking-[0.35em] text-[#3B82F6]">
              Home
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.5 }} className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl font-[family-name:var(--font-space-mono)] tracking-tight">
              From cloud foundations to customer outcomes.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.5 }} className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Assistifyy is a digital product studio helping ambitious teams build web and mobile solutions that feel effortless. We combine strategic clarity, modern engineering, and responsible AI to deliver products that launch fast and scale with confidence.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.5 }} className="mt-6 flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <button
                  type="button"
                  onClick={openLeadCard}
                  className="rounded-full bg-[#3B82F6] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/25 transition duration-300 hover:-translate-y-0.5"
                >
                  Explore services
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <Link href="/home" className="rounded-full border border-[#3B82F6] px-6 py-2 text-sm font-semibold text-[#3B82F6] transition duration-300 hover:bg-[#3B82F6]/10">
                  Learn more
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.3 }} className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl shadow-emerald-200/40 backdrop-blur">
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-slate-500">What we focus on</p>
                <h2 className="mt-2 text-xl font-bold text-slate-800 font-[family-name:var(--font-space-mono)]">Clarity, speed, reliability.</h2>
              </div>
              <motion.div className="grid gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                {focusAreas.map((item) => (
                  <motion.div key={item.title} variants={itemVariants} className="rounded-2xl border border-emerald-100 bg-white px-4 py-3 transition duration-300 hover:border-emerald-300">
                    <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.2 }} className="relative mx-auto w-full max-w-6xl px-6 pb-12 z-10">
        <motion.div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
          {values.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover="hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: idx * 0.12 }}
              viewport={{ amount: 0.3 }}
              className={`break-inside-avoid rounded-2xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-emerald-100/60 cursor-pointer backdrop-blur ${valueHeightClass(item.height)}`}
            >
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: idx * 0.12 + 0.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.5 }} className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] mb-4 flex items-center justify-center text-white font-bold">
                {idx + 1}
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-800 font-[family-name:var(--font-space-mono)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.1 }} className="relative mx-auto w-full max-w-6xl px-6 pb-12 z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.2 }} className="rounded-3xl border border-white/80 bg-white/90 p-8 shadow-xl shadow-emerald-100/60 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
            <div>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.5 }} className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3B82F6]">
                Services
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.5 }} className="mt-3 text-2xl font-bold text-slate-800 font-[family-name:var(--font-space-mono)]">
                Capabilities designed for modern teams.
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.5 }} className="mt-3 max-w-2xl text-sm text-slate-500">
                We help businesses modernize infrastructure, automate workflows, and deliver products that keep customers engaged across every channel.
              </motion.p>
            </div>
          </div>

          <motion.div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover="hover"
                initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: idx * 0.06 }}
                viewport={{ amount: 0.3 }}
                onClick={() => setSelectedService(service)}
                className={`break-inside-avoid rounded-2xl border border-emerald-100 bg-white px-5 py-5 cursor-pointer transition-shadow hover:shadow-xl ${heightClass(service.height)}`}
              >
                <div className="w-12 h-12 mb-3 text-slate-800">{service.image}</div>
                <p className="text-sm font-semibold text-slate-800 font-[family-name:var(--font-space-mono)]">» {service.title}</p>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ amount: 0.3 }} className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/70 bg-white/85 p-8 shadow-lg shadow-emerald-100/60 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3B82F6]">Why teams choose us</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-800 font-[family-name:var(--font-space-mono)]">Professional delivery, transparent partnerships.</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>• Dedicated delivery pods with clear ownership and weekly updates.</li>
              <li>• Security-first engineering and compliance-ready workflows.</li>
              <li>• Flexible engagement models for startups and enterprise teams.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/70 bg-[#101c13] p-8 text-white shadow-lg shadow-emerald-900/30 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Ready to build</p>
            <h2 className="mt-3 text-2xl font-bold font-[family-name:var(--font-space-mono)]">Let&apos;s turn your next idea into a reliable product.</h2>
            <p className="mt-4 text-sm text-emerald-100/80">Share your goals, and we&apos;ll propose the fastest path from concept to launch-ready MVP.</p>
            <button
              type="button"
              onClick={openLeadCard}
              className="mt-6 inline-flex w-fit items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#101c13] transition hover:-translate-y-0.5"
            >
              Talk to our team
            </button>
          </div>
        </div>
      </motion.section>

      <Footer variant="dark" />
      <ServiceModal service={selectedService} isOpen={!!selectedService} onClose={() => setSelectedService(null)} />

      <AnimatePresence>
        {isLeadCardOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsLeadCardOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div
                className="w-full max-w-xl rounded-3xl border border-white/70 bg-white/90 p-7 shadow-2xl shadow-[#3B82F6]/20 backdrop-blur"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3B82F6]">Get Started</p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-800 font-[family-name:var(--font-space-mono)]">Get your welcome email</h3>
                    <p className="mt-2 text-sm text-slate-600">Enter your email and we&apos;ll send the welcome message instantly.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsLeadCardOpen(false)}
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>

                <form onSubmit={handleLeadSubmit} className="mt-6 space-y-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-[#3B82F6]/30 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/15"
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/25 transition disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Welcome Email"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}