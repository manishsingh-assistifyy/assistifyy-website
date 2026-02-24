"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_MENU, COMPANY } from "@/app/lib/constants";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="main-header">
      <div className="main-header-left">
        <img src="/assistifyy-logo-new.svg" alt={`${COMPANY.name} Logo`} className="main-header-logo" />
        <span className="main-header-title">{COMPANY.name.toUpperCase()}</span>
      </div>
      <nav className="main-header-nav">
        {NAV_MENU.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`main-header-link${pathname === item.path ? " active" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
