// ── Centralized Theme Constants ──────────────────────────────────────────────
// Single source of truth for colors, links, and company info used across pages.

export const COLORS = {
  primary: "#3B82F6",
  secondary: "#8B5CF6",
  danger: "#d7263d",
  dark: "#0f172a",
  darkAlt: "#101c13",
};

export const GRADIENTS = {
  primary: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
  primaryTw: "from-[#3B82F6] to-[#8B5CF6]",
};

export const SOCIAL_LINKS = [
  {
    name: "X (Twitter)",
    href: "https://x.com/WeAssistifyy",
    hoverColor: "hover:text-cyan-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/weassistifyy",
    hoverColor: "hover:text-pink-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.6 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.8 9-132.2 9s-102.7 2.6-132.2-9c-19.6-7.8-34.7-23-42.6-42.6-11.7-29.5-9-99.8-9-132.2s-2.6-102.7 9-132.2c7.8-19.6 23-34.7 42.6-42.6 29.5-11.7 99.8-9 132.2-9s102.7-2.6 132.2 9c19.6 7.8 34.7 23 42.6 42.6 11.7 29.5 9 99.8 9 132.2s2.7 102.7-9 132.2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/weassistifyy",
    hoverColor: "hover:text-blue-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    ),
  },
];

export const COMPANY = {
  name: "Assistifyy",
  phone: "+(91) 8810699099",
  phoneHref: "tel:+918810699099",
  address: "Akivna Technologies, Fourth Floor, JMD MEGAPOLIS, Unit 460A, Sector 48, Gurugram, Haryana 122018",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Akivna+Technologies+Fourth+Floor+JMD+MEGAPOLIS+Unit+460A+Sector+48+Gurugram+Haryana+122018",
  copyright: `Copyright © ${new Date().getFullYear()} Assistify, All rights reserved.`,
};

export const NAV_MENU = [
  { name: "Home", path: "/home" },
];
