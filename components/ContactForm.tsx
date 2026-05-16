"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#FFDB4D] px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — text */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B1A1A]">
            Get in Touch
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-[clamp(3rem,7vw,6rem)] leading-none text-[#1A0808] uppercase">
            Let&apos;s Make
            <br />
            <span className="text-[#8B1A1A]">Something</span>
            <br />
            Happen.
          </h2>
          <p className="mt-6 text-[#1A0808]/60 text-sm leading-relaxed max-w-xs">
            Wanna book a table, plan an event, or just ask us something? Drop us a message.
          </p>

          <div className="mt-10 flex flex-col gap-4 text-sm text-[#1A0808]/70">
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <a href="tel:1234567811" className="hover:text-[#8B1A1A] transition-colors font-medium">
                1234567811
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <a href="mailto:hello@tangping.com" className="hover:text-[#8B1A1A] transition-colors font-medium">
                hello@tangping.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🕐</span>
              <span>Tue–Sun: 5pm – 2am</span>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-white rounded-2xl border-2 border-[#1A0808]/10 p-6 md:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <span className="text-5xl">🎉</span>
              <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-[#1A0808] uppercase tracking-wide">
                We Got Your Message!
              </h3>
              <p className="text-[#1A0808]/50 text-sm">We&apos;ll hit you back real soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#1A0808]/40 mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl px-4 py-3 text-[#1A0808] text-sm placeholder-[#1A0808]/30 focus:outline-none focus:border-[#8B1A1A] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#1A0808]/40 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl px-4 py-3 text-[#1A0808] text-sm placeholder-[#1A0808]/30 focus:outline-none focus:border-[#8B1A1A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-[#1A0808]/40 mb-2 block">
                  I&apos;m here for...
                </label>
                <select
                  className="w-full bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl px-4 py-3 text-[#1A0808] text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Pick one</option>
                  <option value="table">Table Reservation</option>
                  <option value="event">Private Event</option>
                  <option value="collab">Collaboration / Partnership</option>
                  <option value="other">Just Saying Hi</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-[#1A0808]/40 mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us more..."
                  className="w-full bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl px-4 py-3 text-[#1A0808] text-sm placeholder-[#1A0808]/30 focus:outline-none focus:border-[#8B1A1A] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-4 bg-[#8B1A1A] text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-[#FF6B8A] transition-colors"
              >
                Send It
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
