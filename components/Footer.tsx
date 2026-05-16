export default function Footer() {
  return (
    <footer className="bg-[#1C0A0A] border-t border-white/5 px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B8A] flex items-center justify-center font-[family-name:var(--font-bebas)] text-white text-xl">
                TP
              </div>
              <span className="font-[family-name:var(--font-bebas)] text-white text-2xl tracking-widest uppercase">
                Tang Ping
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Entertainment Restaurant & Bar. Where every night is the right night.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
              Opening Hours
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-white/60">
              <li className="flex justify-between gap-4">
                <span>Tue – Thu</span>
                <span className="text-white">5pm – 12am</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Fri – Sat</span>
                <span className="text-[#FFDB4D] font-bold">5pm – 2am</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-white">3pm – 11pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Monday</span>
                <span className="text-white/30">Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
              Find Us
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li>
                <a href="tel:1234567811" className="hover:text-[#FF6B8A] transition-colors">
                  1234567811
                </a>
              </li>
              <li>
                <a href="mailto:hello@tangping.com" className="hover:text-[#FF6B8A] transition-colors">
                  hello@tangping.com
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                { label: "IG", href: "#" },
                { label: "TT", href: "#" },
                { label: "FB", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold text-white/40 hover:border-[#FF6B8A] hover:text-[#FF6B8A] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© 2025 Tang Ping. All rights reserved.</p>
          <p>Eat. Drink. Go Wild. 🔥</p>
        </div>
      </div>
    </footer>
  );
}
