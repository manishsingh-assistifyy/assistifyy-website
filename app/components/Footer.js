"use client";

import { motion } from "motion/react";
import { COMPANY } from "@/app/lib/constants";
import SocialLinks from "./SocialLinks";

// ── Shared Footer ──────────────────────────────────────────────────────────
// `variant` controls the visual style:
//   "dark"    → dark bg with border, used on the Home page
//   "simple"  → minimal light footer, used on the Wait‑list page

export default function Footer({ variant = "simple" }) {
  if (variant === "dark") {
    return (
      <footer className="relative mx-auto w-full max-w-6xl px-6 py-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="rounded-2xl border border-[#3B82F6] bg-[#0f172a] p-6 shadow-lg backdrop-blur"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left — Contact info */}
            <div className="flex flex-col gap-3 text-center md:text-left">
              <motion.div whileHover={{ x: 5 }} className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-4 h-4 text-[#3B82F6] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <a
                  href={COMPANY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-300 hover:text-[#3B82F6] transition"
                >
                  {COMPANY.address}
                </a>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center justify-center md:justify-start gap-2 text-slate-300">
                <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href={COMPANY.phoneHref} className="text-sm font-medium hover:text-[#3B82F6] transition">
                  {COMPANY.phone}
                </a>
              </motion.div>

              <p className="text-xs text-slate-400 mt-2">{COMPANY.copyright}</p>
            </div>

            {/* Right — Social links */}
            <SocialLinks variant="dark" />
          </div>
        </motion.div>
      </footer>
    );
  }

  // ── Simple / light variant (wait‑list) ──────────────────────────────────
  return (
    <footer className="px-6 py-4 mt-0">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-between items-center gap-3">
          <div className="md:w-1/2 text-center md:text-start order-2 md:order-1">
            <span className="text-xs text-gray-500">{COMPANY.copyright}</span>
          </div>
          <div className="md:w-1/2 mb-0 order-1 md:order-2">
            <SocialLinks variant="light" iconSize="h-3" />
          </div>
        </div>
      </div>
    </footer>
  );
}
