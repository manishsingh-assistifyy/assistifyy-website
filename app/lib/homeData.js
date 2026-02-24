// ── Home page static data ───────────────────────────────────────────────────
// Keeps the page component lean by separating content from presentation.

import { COLORS } from "./constants";

// Helper — creates a gradient definition with a unique id
const grad = (id) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: COLORS.primary, stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: COLORS.secondary, stopOpacity: 1 }} />
    </linearGradient>
  </defs>
);

export const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive websites with cutting-edge technologies.",
    height: "tall",
    fullDescription:
      "Create stunning, high-performance web applications tailored to your business needs. Our team specializes in modern frameworks like Next.js, React, and Vue.js, ensuring your website is fast, secure, and scalable.",
    benefits: ["Responsive Design", "SEO Optimization", "Lightning-fast Performance", "Secure & Scalable"],
    image: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {grad("webGrad")}
        <rect x="30" y="40" width="140" height="110" rx="10" fill="none" stroke="url(#webGrad)" strokeWidth="3" />
        <line x1="30" y1="65" x2="170" y2="65" stroke="url(#webGrad)" strokeWidth="2" />
        <circle cx="50" cy="52" r="4" fill="url(#webGrad)" />
        <circle cx="65" cy="52" r="4" fill="url(#webGrad)" />
        <circle cx="80" cy="52" r="4" fill="url(#webGrad)" />
        <path d="M 50 85 L 75 120 L 100 90 L 125 110 L 150 70" stroke="url(#webGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications.",
    height: "short",
    fullDescription:
      "Develop powerful mobile applications that work seamlessly across iOS and Android. We build native and cross-platform solutions with exceptional user experience and performance.",
    benefits: ["Native Performance", "Cross-Platform Compatibility", "Offline Functionality", "Push Notifications"],
    image: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {grad("appGrad")}
        <rect x="50" y="25" width="100" height="150" rx="12" fill="none" stroke="url(#appGrad)" strokeWidth="3" />
        <rect x="55" y="30" width="90" height="100" fill="none" stroke="url(#appGrad)" strokeWidth="2" />
        <circle cx="100" cy="145" r="5" fill="url(#appGrad)" />
        <path d="M 70 50 L 85 70 L 70 90" stroke="url(#appGrad)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="100" cy="65" r="8" fill="none" stroke="url(#appGrad)" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Artificial Intelligence",
    description: "Machine learning models, NLP, computer vision, and intelligent automation systems that transform data into insights.",
    height: "tall",
    fullDescription:
      "Harness the power of AI to automate processes and unlock insights from your data. From machine learning models to natural language processing, we build intelligent systems that drive business value.",
    benefits: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    image: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {grad("aiGrad")}
        <circle cx="100" cy="100" r="50" fill="none" stroke="url(#aiGrad)" strokeWidth="2" />
        <circle cx="70" cy="70" r="8" fill="url(#aiGrad)" />
        <circle cx="130" cy="70" r="8" fill="url(#aiGrad)" />
        <circle cx="70" cy="130" r="8" fill="url(#aiGrad)" />
        <circle cx="130" cy="130" r="8" fill="url(#aiGrad)" />
        <circle cx="100" cy="100" r="5" fill="url(#aiGrad)" />
        <line x1="70" y1="70" x2="100" y2="100" stroke="url(#aiGrad)" strokeWidth="2" />
        <line x1="130" y1="70" x2="100" y2="100" stroke="url(#aiGrad)" strokeWidth="2" />
        <line x1="70" y1="130" x2="100" y2="100" stroke="url(#aiGrad)" strokeWidth="2" />
        <line x1="130" y1="130" x2="100" y2="100" stroke="url(#aiGrad)" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and deployment solutions.",
    height: "short",
    fullDescription:
      "Deploy, scale, and manage your applications with confidence on modern cloud platforms. We handle AWS, Google Cloud, and Azure to ensure reliability and performance.",
    benefits: ["High Availability", "Auto-Scaling", "Cost Optimization", "Security First"],
    image: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {grad("cloudGrad")}
        <path d="M 140 100 Q 160 100 160 85 Q 160 70 145 70 Q 140 50 120 50 Q 100 50 95 65 Q 75 65 75 80 Q 75 95 85 100 Z" fill="none" stroke="url(#cloudGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="100" y1="130" x2="100" y2="160" stroke="url(#cloudGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <polyline points="90,150 100,160 110,150" fill="none" stroke="url(#cloudGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Data & Analytics",
    description: "Transform raw data into actionable insights with advanced analytics, visualization dashboards, and predictive modeling.",
    height: "medium",
    fullDescription:
      "Turn your data into competitive advantage. We build comprehensive analytics solutions with real-time dashboards, predictive models, and actionable insights.",
    benefits: ["Data Visualization", "Real-time Analytics", "Predictive Modeling", "Business Intelligence"],
    image: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {grad("dataGrad")}
        <line x1="40" y1="160" x2="160" y2="160" stroke="url(#dataGrad)" strokeWidth="2.5" />
        <line x1="40" y1="160" x2="40" y2="40" stroke="url(#dataGrad)" strokeWidth="2.5" />
        <rect x="55" y="110" width="20" height="50" fill="url(#dataGrad)" rx="2" />
        <rect x="85" y="80" width="20" height="80" fill="url(#dataGrad)" rx="2" />
        <rect x="115" y="60" width="20" height="100" fill="url(#dataGrad)" rx="2" />
        <circle cx="65" cy="105" r="3" fill="white" />
        <circle cx="95" cy="75" r="3" fill="white" />
        <circle cx="125" cy="55" r="3" fill="white" />
      </svg>
    ),
  },
  {
    title: "Robotics & Automation",
    description: "Automated workflows and intelligent systems.",
    height: "medium",
    fullDescription:
      "Streamline operations through intelligent automation. From process automation to robotic systems, we reduce manual work and increase efficiency.",
    benefits: ["Workflow Automation", "RPA Solutions", "Process Optimization", "Smart Systems"],
    image: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {grad("robotGrad")}
        <rect x="60" y="40" width="80" height="85" rx="8" fill="none" stroke="url(#robotGrad)" strokeWidth="2.5" />
        <circle cx="80" cy="70" r="8" fill="none" stroke="url(#robotGrad)" strokeWidth="2" />
        <circle cx="120" cy="70" r="8" fill="none" stroke="url(#robotGrad)" strokeWidth="2" />
        <circle cx="80" cy="70" r="3" fill="url(#robotGrad)" />
        <circle cx="120" cy="70" r="3" fill="url(#robotGrad)" />
        <line x1="90" y1="90" x2="110" y2="90" stroke="url(#robotGrad)" strokeWidth="2" strokeLinecap="round" />
        <rect x="50" y="140" width="100" height="25" rx="5" fill="none" stroke="url(#robotGrad)" strokeWidth="2.5" />
        <line x1="65" y1="148" x2="65" y2="157" stroke="url(#robotGrad)" strokeWidth="2" />
        <line x1="100" y1="148" x2="100" y2="157" stroke="url(#robotGrad)" strokeWidth="2" />
        <line x1="135" y1="148" x2="135" y2="157" stroke="url(#robotGrad)" strokeWidth="2" />
      </svg>
    ),
  },
];

export const values = [
  {
    title: "Outcome-first thinking",
    description:
      "We align every decision to measurable impact, from discovery to delivery. Our approach ensures that every line of code serves a purpose.",
    height: "medium",
  },
  {
    title: "Product-grade engineering",
    description: "Clean architecture, secure defaults, and scalable systems you can trust.",
    height: "short",
  },
  {
    title: "Human-centered design",
    description:
      "Experiences crafted for clarity, speed, and real-world adoption. We believe technology should serve people, not the other way around.",
    height: "tall",
  },
];

export const focusAreas = [
  { title: "Discovery & Strategy", desc: "Roadmaps, MVP scoping, and product positioning." },
  { title: "Design & Engineering", desc: "Elegant UX paired with reliable full-stack delivery." },
  { title: "Launch & Growth", desc: "Performance, analytics, and continuous optimization." },
];
