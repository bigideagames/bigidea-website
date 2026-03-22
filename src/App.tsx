import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Download, Smartphone, Mail } from "lucide-react";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const HOCKEY_SCREENSHOTS = [
  "/assets/hockey/screenshots/screenshot001_1290x2796.webp",
  "/assets/hockey/screenshots/screenshot002_1290x2796.webp",
  "/assets/hockey/screenshots/screenshot003_1290x2796.webp",
  "/assets/hockey/screenshots/screenshot004_1290x2796.webp",
  "/assets/hockey/screenshots/screenshot006_1290x2796.webp",
  "/assets/hockey/screenshots/screenshot007_1290x2796.webp",
];

const SOCCER_SCREENSHOTS = [
  "/assets/soccer/soccer_A.webp",
  "/assets/soccer/soccer_B.webp",
  "/assets/soccer/soccer_C.webp",
  "/assets/soccer/soccer_D.webp",
  "/assets/soccer/soccer_E.webp",
  "/assets/soccer/soccer_F.webp",
];

const HOCKEY_PLAYERS = [
  "/assets/hockey/players/player_bf_burns.webp",
  "/assets/hockey/players/player_cup.webp",
  "/assets/hockey/players/player_gourdain.webp",
  "/assets/hockey/players/player_krejci.webp",
  "/assets/hockey/players/player_weight.webp",
];

/* ──────────────────────────────────────────────
   Intersection Observer Hook
   ────────────────────────────────────────────── */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ──────────────────────────────────────────────
   Screenshot Carousel
   ────────────────────────────────────────────── */

function ScreenshotCarousel({ screenshots, accent = "blue" }: { screenshots: string[]; accent?: "blue" | "green" }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const btnColor = accent === "green"
    ? "bg-[#22C55E]/90 hover:bg-[#22C55E]"
    : "bg-[#0E66C1]/90 hover:bg-[#0E66C1]";

  return (
    <div className="relative group">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className={`absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full ${btnColor} p-2 text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full ${btnColor} p-2 text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer`}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 px-1"
      >
        {screenshots.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Screenshot ${i + 1}`}
            loading="lazy"
            className="h-[360px] sm:h-[420px] w-auto rounded-xl shadow-card snap-center flex-shrink-0 hover:scale-[1.02] transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Store Badges
   ────────────────────────────────────────────── */

function StoreBadges({
  appStoreUrl,
  googlePlayUrl,
  size = "inline",
}: {
  appStoreUrl: string;
  googlePlayUrl: string;
  size?: "inline" | "cta";
}) {
  const w = size === "cta" ? "w-[140px] sm:w-[180px]" : "w-[130px] sm:w-[155px]";
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
        <img
          src="/assets/badges/app-store-badge.svg"
          alt="Download on the App Store"
          className={`${w} h-auto hover:scale-105 transition-transform`}
        />
      </a>
      <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
        <img
          src="/assets/badges/google-play-badge.png"
          alt="Get it on Google Play"
          className={`${w} h-auto hover:scale-105 transition-transform`}
        />
      </a>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Stat Pill
   ────────────────────────────────────────────── */

function StatPill({ icon, text, accent = "blue" }: { icon: React.ReactNode; text: string; accent?: "blue" | "green" }) {
  const bg = accent === "green" ? "bg-[#22C55E]/15 text-[#4ADE80]" : "bg-[#0E66C1]/15 text-[#28A9FF]";
  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 ${bg} text-xs sm:text-sm font-semibold`}>
      {icon}
      {text}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Main App
   ────────────────────────────────────────────── */

/* ──────────────────────────────────────────────
   Hero Background Slideshow
   ────────────────────────────────────────────── */

// Alternating hockey/soccer screenshots for hero backdrop
const HERO_SLIDES = [
  HOCKEY_SCREENSHOTS[0],
  SOCCER_SCREENSHOTS[0],
  HOCKEY_SCREENSHOTS[1],
  SOCCER_SCREENSHOTS[1],
  HOCKEY_SCREENSHOTS[2],
  SOCCER_SCREENSHOTS[2],
  HOCKEY_SCREENSHOTS[3],
  SOCCER_SCREENSHOTS[3],
  HOCKEY_SCREENSHOTS[4],
  SOCCER_SCREENSHOTS[4],
];

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {HERO_SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            transform: "scale(1)",
            filter: "blur(2px)",
          }}
        />
      ))}
      {/* Overlay to dim screenshots — light enough to see the action */}
      <div className="absolute inset-0 bg-[#071B33]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#071B33]/40 via-transparent to-[#071B33]/80" />
    </div>
  );
}

export default function App() {
  const heroReveal = useReveal();
  const gamesReveal = useReveal();
  const soccerReveal = useReveal();
  const aboutReveal = useReveal();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* ──── HERO ──── */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        {/* Slideshow background */}
        <HeroSlideshow />

        <div
          ref={heroReveal.ref}
          className={`relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center gap-5 sm:gap-6 transition-all duration-1000 ${
            heroReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src="/assets/hockey/logos/BIG Logo - Transparent on Dark - Final.webp"
            alt="Big Idea Games"
            className="mx-auto w-[385px] sm:w-[560px] lg:w-[735px] drop-shadow-2xl"
          />
          <h1
            className="font-display text-[clamp(1.75rem,6vw,3.75rem)] tracking-wider text-white leading-[1.1]"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)" }}
          >
            Creating the World's Best
            <br className="sm:hidden" />
            {" "}Mobile{" "}
            <span className="whitespace-nowrap">Sports Games</span>
          </h1>
          <p
            className="font-sans text-base sm:text-lg lg:text-xl text-[#D4E8F5] max-w-lg sm:max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
          >
            Built with passion. Played by millions.
          </p>
          <a
            href="#games"
            className="flex items-center justify-center gap-3 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-glow-blue shadow-lg no-underline"
            style={{
              background: "linear-gradient(135deg, #0E66C1, #28A9FF)",
              padding: "20px 56px",
              fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
              minHeight: "64px",
              minWidth: "280px",
              lineHeight: 1,
              boxSizing: "border-box",
            }}
          >
            <Smartphone className="h-6 w-6 shrink-0" />
            <span>See Our Games</span>
          </a>
        </div>

        {/* Floating players removed — slideshow provides the visual interest */}

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-[#8BB8D9]/40 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-[#28A9FF] animate-pulse" />
          </div>
        </div>
      </section>

      {/* ──── OUR GAMES ──── */}
      <section id="games" className="py-8 sm:py-14 lg:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wider text-center text-[#EAF6FF] mb-4">
            Our Games
          </h2>
          <p className="text-center text-[#8BB8D9] mb-6 sm:mb-10 max-w-xl mx-auto">
            Pick up and play sports action. Quick matches, deep progression, pure fun.
          </p>

          <div className="flex flex-col gap-8 lg:gap-16">
          {/* ── SUPERSTAR HOCKEY ── */}
          <div
            ref={gamesReveal.ref}
            className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${
              gamesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Background */}
            <div className="absolute inset-0">
              <img
                src="/assets/hockey/backgrounds/arena_bg_1024.webp"

                alt=""
                loading="lazy"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071B33] via-[#071B33]/90 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B33] via-transparent to-[#071B33]/60" />
            </div>

            <div className="relative z-10 p-5 sm:p-12 lg:p-16">
              {/* Header row */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4 sm:gap-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  <img
                    src="/assets/hockey/logos/SuperstarHockey-Logo-2048x2048.webp"
                    alt="Superstar Hockey"
                    className="w-[72px] sm:w-[120px] h-auto rounded-xl sm:rounded-2xl shadow-card shrink-0"
                  />
                  <div>
                    <h3 className="font-display text-2xl sm:text-4xl tracking-wider text-[#EAF6FF]">
                      Superstar Hockey
                    </h3>
                    <p className="text-[#28A9FF] font-semibold text-sm uppercase tracking-widest mt-1">
                      Flagship Title
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <StatPill icon={<Star className="h-4 w-4" />} text="4.8★ App Store" />
                  <StatPill icon={<Download className="h-4 w-4" />} text="2M+ Downloads" />
                  <StatPill icon={<Smartphone className="h-4 w-4" />} text="Free" />
                </div>
              </div>

              {/* Description */}
              <p className="text-[#8BB8D9] text-lg max-w-2xl mb-8 leading-relaxed">
                The ultimate pick-up-and-play hockey experience. Build your dream team,
                compete in weekly leagues, and collect all-star players. One-touch controls
                make it easy to learn, hard to master.
              </p>

              {/* Screenshots */}
              <div className="mb-8">
                <ScreenshotCarousel screenshots={HOCKEY_SCREENSHOTS} accent="blue" />
              </div>

              {/* Store badges */}
              <div className="mb-8">
                <StoreBadges
                  appStoreUrl="https://apps.apple.com/us/app/superstar-hockey/id1556321339"
                  googlePlayUrl="https://play.google.com/store/apps/details?id=com.bigideagames.googleplay.superhockey"
                  size="cta"
                />
              </div>

              {/* Decorative player renders */}
              <div className="hidden xl:block absolute right-8 bottom-8 pointer-events-none">
                <img
                  src={HOCKEY_PLAYERS[3]}
                  alt=""
                  loading="lazy"
                  className="h-[240px] opacity-40 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* ── SUPERSTAR SOCCER ── */}
          <div
            ref={soccerReveal.ref}
            className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${
              soccerReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Background - green themed */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E1A] via-[#0C2444] to-[#071B33]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,197,94,0.12)_0%,_transparent_60%)]" />

            <div className="relative z-10 p-5 sm:p-12 lg:p-16">
              {/* Header row */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4 sm:gap-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  <img
                    src="/assets/soccer/soccer-icon.png"
                    alt="Superstar Soccer"
                    className="w-[72px] sm:w-[120px] h-[72px] sm:h-[120px] rounded-xl sm:rounded-2xl shadow-card flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-display text-2xl sm:text-4xl tracking-wider text-[#EAF6FF]">
                      Superstar Soccer
                    </h3>
                    <p className="text-[#4ADE80] font-semibold text-sm uppercase tracking-widest mt-1">
                      New Release
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <StatPill icon={<Star className="h-4 w-4" />} text="4.6★ App Store" accent="green" />
                  <StatPill icon={<Download className="h-4 w-4" />} text="10K+ Downloads" accent="green" />
                  <StatPill icon={<Smartphone className="h-4 w-4" />} text="Free" accent="green" />
                </div>
              </div>

              {/* Description */}
              <p className="text-[#8BB8D9] text-lg max-w-2xl mb-8 leading-relaxed">
                Authentic 6v6 soccer action at your fingertips. Pass, shoot, and slide-tackle
                your way through league mode. Quick matches fit your schedule, deep progression
                keeps you coming back.
              </p>

              {/* Screenshots */}
              <div className="mb-8">
                <ScreenshotCarousel screenshots={SOCCER_SCREENSHOTS} accent="green" />
              </div>

              {/* Store badges */}
              <div className="mb-8">
                <StoreBadges
                  appStoreUrl="https://apps.apple.com/us/app/superstar-soccer/id6450317114"
                  googlePlayUrl="https://play.google.com/store/apps/details?id=com.bigideagames.googleplay.supersoccer"
                  size="cta"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ──── ABOUT / OUR STORY ──── */}
      <section id="about" className="py-8 sm:py-14 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#071B33] via-[#0C2444] to-[#071B33]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,196,0,0.06)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-6">
          <div
            ref={aboutReveal.ref}
            className={`transition-all duration-1000 ${
              aboutReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wider text-center text-[#EAF6FF] mb-12">
              Our Story
            </h2>

            <div className="bg-[#0C2444]/80 backdrop-blur-sm rounded-3xl px-6 py-8 sm:p-12 border border-[#1A3A5C]/50">
              <div className="max-w-2xl mx-auto">
                <p className="text-[#8BB8D9] text-lg leading-relaxed mb-6">
                  Big Idea Games was founded in October 2020 by Travis and Sharon Brown-John —
                  two people with over 20 years each in Vancouver's video game industry. Travis
                  is the tech and product guru, with experience at studios like Radical
                  Entertainment, Next Level Games, and Hothead Games. Sharon brings the
                  structure, running operations with experience across executive admin,
                  marketing, and HR.
                </p>
                <p className="text-[#8BB8D9] text-lg leading-relaxed mb-8">
                  Travis always had a passion for hockey and a dream of making his own game.
                  Sometimes you just have to go for those big dreams and make them a reality.
                  What started at home with late nights and a laptop became something real — a
                  small studio with big ideas, building sports games people actually love to play.
                </p>

                {/* Mission */}
                <div className="border-l-4 border-[#FFC400] pl-4 sm:pl-6 py-2">
                  <p className="font-display text-2xl sm:text-3xl tracking-wider text-[#FFC400]">
                    Our Mission
                  </p>
                  <p className="text-[#EAF6FF] text-xl mt-2 font-semibold">
                    To create the world's best mobile sports games.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-6 justify-center">
                  <div className="text-center">
                    <div className="font-display text-4xl text-[#28A9FF]">2020</div>
                    <div className="text-[#5A8AAF] text-sm mt-1">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-4xl text-[#28A9FF]">2</div>
                    <div className="text-[#5A8AAF] text-sm mt-1">Games</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-4xl text-[#28A9FF]">2M+</div>
                    <div className="text-[#5A8AAF] text-sm mt-1">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-4xl text-[#FFC400]">∞</div>
                    <div className="text-[#5A8AAF] text-sm mt-1">Big Ideas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <footer className="border-t border-[#1A3A5C] bg-[#050F1D] py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            {/* Logo & info */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <img
                src="/assets/hockey/logos/BIG - Icon (white).webp"
                alt="Big Idea Games"
                loading="lazy"
                className="w-12 h-auto opacity-80"
              />
              <p className="text-[#5A8AAF] text-sm">
                © 2026 Big Idea Games Inc.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a
                href="https://www.bigidea.games/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8BB8D9] hover:text-[#28A9FF] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.bigidea.games/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8BB8D9] hover:text-[#28A9FF] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="https://www.bigidea.games/superstarhockeyfaq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8BB8D9] hover:text-[#28A9FF] transition-colors"
              >
                FAQ
              </a>
              <a
                href="mailto:superstarhockey@bigidea.games"
                className="inline-flex items-center gap-1.5 text-[#8BB8D9] hover:text-[#28A9FF] transition-colors"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
