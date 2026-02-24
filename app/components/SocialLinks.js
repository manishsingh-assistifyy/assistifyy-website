"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SOCIAL_LINKS } from "@/app/lib/constants";

// ── Reusable social‑icon row ────────────────────────────────────────────────
// `variant` controls the look:
//   "dark"  → used on dark backgrounds (home footer) – glass‑morphism icons
//   "light" → used on light backgrounds (wait‑list footer) – subtle bg icons

export default function SocialLinks({ variant = "light", iconSize = "h-3" }) {
  const isDark = variant === "dark";

  const baseClass = isDark
    ? "w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-[#3B82F6] hover:to-[#8B5CF6] flex items-center justify-center text-slate-300 hover:text-white transition duration-300"
    : "inline-flex items-center p-2 bg-black/4 rounded-lg transition duration-300";

  const rotations = [10, -10, 10]; // alternating rotations for hover effect

  return (
    <ul className="flex items-center justify-center md:justify-end flex-wrap gap-2 [&_li]:leading-[0]">
      {SOCIAL_LINKS.map((link, idx) => (
        <li key={link.name}>
          <motion.div
            whileHover={{ scale: 1.2, rotate: rotations[idx % rotations.length] }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              className={isDark ? baseClass : `${baseClass} ${link.hoverColor}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <span className={`inline-flex ${isDark ? "w-4 h-4" : iconSize} [&>svg]:w-full [&>svg]:h-full`}>
                {link.icon}
              </span>
            </Link>
          </motion.div>
        </li>
      ))}
    </ul>
  );
}
