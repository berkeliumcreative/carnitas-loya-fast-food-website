// @ts-nocheck
"use client";

import { Anton, Karla } from "next/font/google";
import content from "../data/content.json";

const display = Anton({ subsets: ["latin"], weight: ["400"] });
const body = Karla({ subsets: ["latin"], weight: ["400", "500", "700"] });

const TOMATO = "#C5282F";
const TOMATO_DARK = "#8E1F25";
const MARIGOLD = "#F4A261";
const FOREST = "#2A6F4F";
const CREAM = "#FFF7E8";
const ASH = "#1F1B1B";

const GALLERY = content.gallery || [content.hero.image];

export default function Page() {
  return (
    <main className={body.className} style={{ background: CREAM, color: ASH }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        .fade-up { animation: fadeUp 800ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .slide-in { animation: slide 900ms cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <nav className="absolute top-0 left-0 right-0 z-30 px-6 py-5 lg:px-10 lg:py-6 flex items-center justify-between" style={{ color: CREAM }}>
        <div className={display.className} style={{ fontSize: '26px', letterSpacing: '0.04em', lineHeight: 1 }}>
          {content.businessName.toUpperCase()}
        </div>
        <div className="flex items-center gap-5 text-[13px] font-bold uppercase tracking-wider">
          <a href="#menu" className="hidden md:inline hover:opacity-70">Menu</a>
          <a href="#visit" className="hidden md:inline hover:opacity-70">Visit</a>
          <a href={content.hero.ctaLink} className="px-4 py-2 text-[12px] font-bold tracking-wider" style={{ background: CREAM, color: TOMATO_DARK }}>
            ORDER · {content.contact.phone}
          </a>
        </div>
      </nav>

      <section className="relative min-h-[92vh] flex items-end px-6 lg:px-10 pt-24 pb-12 overflow-hidden" style={{ background: TOMATO }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url("${GALLERY[0]}")`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4, mixBlendMode: 'multiply' }}></div>
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${TOMATO}EE 0%, ${TOMATO}AA 50%, ${ASH}DD 100%)` }}></div>

        <div className="absolute top-1/4 -right-20 w-[260px] h-[260px] rounded-full opacity-20" style={{ background: MARIGOLD }}></div>
        <div className="absolute bottom-1/4 -left-16 w-[180px] h-[180px] rounded-full opacity-20" style={{ background: FOREST }}></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 fade-up" style={{ background: MARIGOLD, color: ASH }}>
            <span style={{ fontSize: '14px' }}>★</span>
            <span className="text-[12px] font-bold uppercase tracking-wider">{content.rating} · {content.reviewCount.toLocaleString()} reviews · Pacoima staple</span>
          </div>
          <h1 className={display.className + " fade-up"} style={{ fontSize: 'clamp(72px, 14vw, 200px)', lineHeight: 0.85, color: CREAM, letterSpacing: '0.01em', textTransform: 'uppercase' }}>
            {content.hero.heading}
          </h1>
          <p className="text-[18px] lg:text-[22px] leading-relaxed mt-7 max-w-2xl fade-up" style={{ color: CREAM + 'DD' }}>
            {content.hero.subheading}
          </p>
          <div className="flex flex-wrap gap-3 mt-10 fade-up">
            <a href={content.hero.ctaLink} className="px-7 py-4 font-bold uppercase tracking-wider text-[14px] transition-transform hover:scale-105" style={{ background: MARIGOLD, color: ASH, boxShadow: `0 10px 20px ${ASH}40` }}>
              {content.hero.ctaText} → {content.contact.phone}
            </a>
            <a href="#menu" className="px-7 py-4 font-bold uppercase tracking-wider text-[14px] transition-colors" style={{ background: 'transparent', color: CREAM, border: `2px solid ${CREAM}` }}>
              See the menu
            </a>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="overflow-hidden py-3" style={{ background: ASH, color: MARIGOLD }}>
        <div className={display.className + " whitespace-nowrap"} style={{ fontSize: '24px', letterSpacing: '0.08em' }}>
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="inline-block mx-6">
              CARNITAS · TACOS · BURRITOS · TORTAS · AGUAS FRESCAS · PACOIMA SINCE FOREVER ·
            </span>
          ))}
        </div>
      </div>

      <section id="about" className="px-6 lg:px-10 py-20 lg:py-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="aspect-[4/5] relative overflow-hidden" style={{ background: ASH }}>
            <div className="absolute inset-0" style={{ backgroundImage: `url("${GALLERY[1]}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="absolute bottom-4 left-4 right-4 p-4" style={{ background: MARIGOLD, color: ASH }}>
              <div className="text-[11px] font-bold uppercase tracking-wider">EST.</div>
              <div className={display.className} style={{ fontSize: '40px', lineHeight: 1 }}>PACOIMA</div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-bold uppercase tracking-wider mb-3" style={{ color: TOMATO }}>About us</div>
            <h2 className={display.className} style={{ fontSize: 'clamp(40px, 5.5vw, 64px)', lineHeight: 0.95, color: ASH, textTransform: 'uppercase', marginBottom: '24px' }}>
              {content.about.heading}
            </h2>
            <div className="space-y-4">
              {content.about.paragraphs.map((p, i) => (
                <p key={i} className="text-[16px] lg:text-[17px] leading-relaxed" style={{ color: ASH + 'C0' }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="px-6 lg:px-10 py-20 lg:py-28" style={{ background: ASH, color: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[12px] font-bold uppercase tracking-wider mb-3" style={{ color: MARIGOLD }}>The menu</div>
            <h2 className={display.className} style={{ fontSize: 'clamp(48px, 6.5vw, 88px)', lineHeight: 0.9, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              What's good today.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: CREAM + '20' }}>
            {content.services.map((s, i) => (
              <div key={i} className="p-7 transition-colors hover:bg-[${TOMATO}]" style={{ background: ASH }}>
                <div className={display.className} style={{ fontSize: '22px', color: MARIGOLD, marginBottom: '6px', letterSpacing: '0.04em' }}>0{i + 1}</div>
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className={display.className} style={{ fontSize: '24px', textTransform: 'uppercase', letterSpacing: '0.02em', color: CREAM }}>{s.title}</h3>
                  {s.price && <span className={display.className} style={{ fontSize: '20px', color: TOMATO, whiteSpace: 'nowrap' }}>{s.price}</span>}
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: CREAM + 'A0' }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY.map((p, i) => (
            <div key={i} className="aspect-square overflow-hidden" style={{ background: ASH }}>
              <div className="w-full h-full transition-transform hover:scale-110 duration-700" style={{ backgroundImage: `url("${p}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 py-20 lg:py-28" style={{ background: TOMATO, color: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[12px] font-bold uppercase tracking-wider mb-3" style={{ color: MARIGOLD }}>What folks say</div>
            <h2 className={display.className} style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 0.9, textTransform: 'uppercase' }}>
              {content.rating} ★ · {content.reviewCount.toLocaleString()} Reviews
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.reviews.map((r, i) => (
              <div key={i} className="p-7" style={{ background: CREAM, color: ASH }}>
                <div className="flex mb-3" style={{ color: TOMATO, fontSize: '20px', letterSpacing: '3px' }}>{'★'.repeat(r.rating)}</div>
                <p className="text-[16px] leading-relaxed mb-4" style={{ color: ASH + 'D0' }}>&ldquo;{r.text}&rdquo;</p>
                <div className={display.className} style={{ fontSize: '20px', textTransform: 'uppercase', letterSpacing: '0.02em', color: TOMATO_DARK }}>— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="px-6 lg:px-10 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-wider mb-3" style={{ color: TOMATO }}>Find us</div>
            <h2 className={display.className} style={{ fontSize: 'clamp(40px, 5.5vw, 64px)', lineHeight: 0.95, color: ASH, textTransform: 'uppercase', marginBottom: '20px' }}>
              Laurel Canyon Blvd.
            </h2>
            <div className="mb-6 text-[16px]" style={{ color: ASH }}>
              <div className="font-semibold">{content.contact.address}</div>
              <a href={content.hero.ctaLink} className={display.className + " block mt-2 hover:underline"} style={{ fontSize: '32px', color: TOMATO, letterSpacing: '0.02em' }}>{content.contact.phone}</a>
            </div>
            <div style={{ background: ASH, color: CREAM }}>
              <div className="px-5 py-3 text-[11px] font-bold uppercase tracking-widest" style={{ background: MARIGOLD, color: ASH }}>Hours</div>
              <table className="w-full">
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, h], i) => (
                    <tr key={day} className="border-b" style={{ borderColor: CREAM + '15' }}>
                      <td className="px-5 py-3 text-[13.5px] font-bold uppercase tracking-wider">{day}</td>
                      <td className="px-5 py-3 text-[13.5px] text-right tabular-nums" style={{ color: CREAM + 'B0' }}>{String(h)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="h-[520px] lg:h-auto" style={{ background: ASH, border: `4px solid ${ASH}` }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(content.contact.mapEmbedQuery)}`} className="w-full h-full block border-0" loading="lazy" title="Location"></iframe>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-20">
        <div className="max-w-7xl mx-auto p-10 lg:p-16 text-center" style={{ background: MARIGOLD, color: ASH }}>
          <div className="text-[12px] font-bold uppercase tracking-wider mb-3">Lunch is calling</div>
          <h2 className={display.className} style={{ fontSize: 'clamp(48px, 7vw, 100px)', lineHeight: 0.9, textTransform: 'uppercase', marginBottom: '24px' }}>
            Real Mexican. Period.
          </h2>
          <a href={content.hero.ctaLink} className="inline-block px-8 py-4 font-bold uppercase tracking-wider text-[15px] transition-transform hover:scale-105" style={{ background: TOMATO, color: CREAM }}>
            CALL {content.contact.phone}
          </a>
        </div>
      </section>

      <footer className="px-6 lg:px-10 py-10" style={{ background: ASH, color: CREAM }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className={display.className} style={{ fontSize: '24px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{content.businessName}</div>
          <div className="text-[12px] uppercase tracking-wider" style={{ color: CREAM + '80' }}>© {new Date().getFullYear()} · {content.contact.address} · {content.rating}★ {content.reviewCount.toLocaleString()} reviews</div>
        </div>
      </footer>
    </main>
  );
}
