"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/95 backdrop-blur-md border-b border-[#1A0808]/10">
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-xl bg-[#FF6B8A] flex items-center justify-center font-[family-name:var(--font-bebas)] text-white text-xl leading-none">
          TP
        </div>
        <span className="font-[family-name:var(--font-bebas)] text-[#1A0808] text-2xl tracking-widest uppercase">
          Tang Ping
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {["Menu", "Services", "Reviews", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-semibold tracking-widest uppercase text-[#1A0808]/50 hover:text-[#8B1A1A] transition-colors"
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-4 px-5 py-2 bg-[#8B1A1A] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#FF6B8A] transition-colors"
        >
          Book Now
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-[#1A0808] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-[#1A0808] transition-all ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-[#1A0808] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#1A0808]/10 px-6 py-6 flex flex-col gap-4 md:hidden">
          {["Menu", "Services", "Reviews", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-base font-bold tracking-widest uppercase text-[#1A0808]/70 hover:text-[#8B1A1A] transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 bg-[#8B1A1A] text-white text-sm font-bold uppercase tracking-widest rounded-full text-center hover:bg-[#FF6B8A] transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
