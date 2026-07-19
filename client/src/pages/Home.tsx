import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowRight, Zap, Users, Shield, Target, Star, CircleCheck as CheckCircle2, Award, FlaskConical, TrendingUp, ClipboardList, GraduationCap, Trophy, Menu, X, Check } from "lucide-react";

const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- scroll reveal ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (el.classList.add("reveal-visible"), io.disconnect()),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = "", flip = false }: { children: React.ReactNode; delay?: number; className?: string; flip?: boolean }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${flip ? "reveal-flip" : ""} ${className}`} style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
}

/* ---------- word-by-word headline rise ---------- */
const Words = ({ text, base = 0, cls = "" }: { text: string; base?: number; cls?: string }) => (
  <>
    {text.split(" ").map((w, i) => (
      <span key={i} className="word-mask">
        <span className={`word-rise ${cls}`} style={{ "--d": `${base + i * 90}ms` } as React.CSSProperties}>{w}&nbsp;</span>
      </span>
    ))}
  </>
);

/* ---------- rotating word ---------- */
function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span key={i} className="word-mask">
      <span className="word-rise text-accent font-semibold">{words[i]}</span>
    </span>
  );
}

/* ---------- counter with gold progress ring + landing flash ---------- */
function RingStat({ value, suffix, label, size = 96 }: { value: number; suffix: string; label?: string; size?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const q = Math.min((t - t0) / 1600, 1);
        setP(1 - Math.pow(1 - q, 3)); // ease-out cubic
        q < 1 ? requestAnimationFrame(tick) : setDone(true);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className={`relative rounded-full mb-3 ${done ? "stat-flash" : ""}`} style={{ width: size, height: size, background: `conic-gradient(rgb(212 165 71) ${p * 360}deg, rgb(212 165 71 / 0.12) 0deg)` }}>
        <div className="absolute inset-[3px] rounded-full bg-background flex items-center justify-center">
          <span className="font-serif-display text-2xl font-bold text-gradient-gold">{Math.round(value * p)}{suffix}</span>
        </div>
      </div>
      {label && <p className="text-xs md:text-sm text-foreground/55 leading-snug max-w-[140px]">{label}</p>}
    </div>
  );
}

/* ---------- 3D tilt card ---------- */
function TiltCard({ children, className = "", href }: { children: React.ReactNode; className?: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
  };
  const onLeave = () => ref.current && (ref.current.style.transform = "");
  return (
    <a ref={ref} href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>
      {children}
    </a>
  );
}

/* ---------- gold dust particles ---------- */
function Particles({ count = 40 }: { count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c || reducedMotion()) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let w = 0, h = 0, raf = 0;
    const resize = () => { w = c.width = c.offsetWidth; h = c.height = c.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const ps = Array.from({ length: count }, () => ({
      x: Math.random(), y: Math.random(),
      s: 0.6 + Math.random() * 1.6,
      v: (0.25 + Math.random() * 0.6) / 900,
      o: 0.15 + Math.random() * 0.45,
      drift: (Math.random() - 0.5) / 3000,
    }));
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.y -= p.v;
        p.x += p.drift;
        if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
        ctx.fillStyle = `rgb(212 165 71 / ${p.o})`;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.s, 0, 7);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [count]);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none z-[2]" />;
}

/* ---------- scroll progress bar ---------- */
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => setP(window.scrollY / (document.body.scrollHeight - window.innerHeight || 1));
    window.addEventListener("scroll", f, { passive: true });
    f();
    return () => window.removeEventListener("scroll", f);
  }, []);
  return <div className="fixed top-0 left-0 h-[2px] z-[60] bg-gradient-to-r from-accent via-yellow-300 to-accent" style={{ width: `${p * 100}%` }} />;
}

/* ---------- magnetic wrapper ---------- */
function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ transition: "transform 0.25s ease" }}
      onMouseMove={e => {
        const el = ref.current;
        if (!el || reducedMotion()) return;
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.06}px, ${(e.clientY - r.top - r.height / 2) * 0.2}px)`;
      }}
      onMouseLeave={() => ref.current && (ref.current.style.transform = "")}
    >
      {children}
    </div>
  );
}

/* ---------- data ---------- */
const expertiseData = [
  { title: "Precious Metal Refinery Project Management", description: "Structured project guidance from concept to commissioning, with disciplined coordination between technical, operational, and investment stakeholders.", Icon: ClipboardList, href: "/services/project-management", backgroundImage: "https://i.pinimg.com/1200x/1f/c0/83/1fc083851f7b5db76ae7690e7cffe760.jpg" },
  { title: "Procurement Consulting & Technical Evaluation", description: "Vendor review, equipment selection, specification comparison, calibration standards procurement, and investment-grade purchasing support.", Icon: CheckCircle2, href: "/services/procurement-consulting", backgroundImage: "https://i.pinimg.com/1200x/b7/7a/42/b77a4264911d8cd2e5756fb1eed222f0.jpg" },
  { title: "Production & Chemical Process Optimization", description: "Production process planning, chemical process improvement, troubleshooting, and operational performance enhancement for existing refineries.", Icon: TrendingUp, href: "/services/process-optimization", backgroundImage: "https://i.pinimg.com/1200x/6f/a4/29/6fa4292bbb6bf17e3e2b1196d5d78cbb.jpg" },
  { title: "Laboratory Setup & Development", description: "Laboratory planning, standard practices, ISO method validation, reference material production, and reliable analytical workflows.", Icon: FlaskConical, href: "/services/laboratory-setup", backgroundImage: "https://i.pinimg.com/1200x/a3/e5/d3/a3e5d31ecc67efdf9f1c38fa2ee0c37c.jpg" },
  { title: "ICP-OES Training & Technical Staff Development", description: "Practical training programs that strengthen operator capability, laboratory reliability, and long-term technical independence.", Icon: GraduationCap, href: "/services/icp-training", backgroundImage: "https://i.pinimg.com/1200x/8f/02/b2/8f02b2008406456dd233615919349495.jpg" },
  { title: "World-class Standards & Continuous Improvement", description: "Tailor-made consulting for reliable operations, cost-effective solutions, and refinery systems built for sustainable growth.", Icon: Trophy, href: "/services/world-class-standards", backgroundImage: "https://i.pinimg.com/1200x/70/f2/f5/70f2f5abcbfcd8ca5186ff466debf1bd.jpg" },
];

const impactStats = [
  { value: 16, suffix: "+", label: "Years of Industry Experience" },
  { value: 40, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 25, suffix: "+", label: "Training Programs" },
  { value: 30, suffix: "+", label: "Laboratory Solutions" },
];

const methodology = [
  { phase: "Feasibility", detail: "Market, technical, and financial viability assessment before capital commitment." },
  { phase: "Design", detail: "Process flow, plant layout, and equipment specification aligned to capacity goals." },
  { phase: "Procurement", detail: "Vendor evaluation, technical comparison, and investment-grade purchasing." },
  { phase: "Construction", detail: "Disciplined site coordination between contractors and technology suppliers." },
  { phase: "Commissioning", detail: "Systematic startup, safety verification, and performance tuning." },
  { phase: "Validation", detail: "Method validation, assay verification, and ISO-ready documentation." },
  { phase: "Handover", detail: "Trained staff, documented systems, and confident independent operation." },
];

const certifications = [
  { code: "ISO 17025", label: "Laboratory Accreditation Support" },
  { code: "LBMA", label: "Good Delivery Standards" },
  { code: "ICP-OES", label: "Validated Analysis Methods" },
  { code: "AU 999.9", label: "Refined Gold Benchmarks" },
  { code: "AG 999.0", label: "Fine Silver Benchmarks" },
  { code: "RJC CoC", label: "Chain of Custody Alignment" },
];

const industriesData = ["Gold Refineries", "Silver Refineries", "Platinum Industries", "Precious Metal Laboratories", "Recycling Facilities", "Industrial Manufacturing", "Jewelry Manufacturing", "Investment Refining"];

const whyUs = [
  { Icon: Shield, title: "Trusted and Reliable Industry Expertise", text: "Decades of combined experience in precious metal refining across multiple markets and operational scales." },
  { Icon: Target, title: "Precision-Driven Consulting Approach", text: "Every recommendation is backed by rigorous analysis, industry standards, and proven methodologies." },
  { Icon: Zap, title: "Cost-Efficient and Effective Solutions", text: "We optimize for both performance and budget, delivering maximum value without compromise." },
  { Icon: Users, title: "Tailored Strategies for Every Scale", text: "From startup refineries to established operations, we customize solutions for your unique needs." },
];

const skills = [["Refinery Operations", 95], ["Laboratory Systems", 92], ["Procurement Evaluation", 90], ["Performance Improvement", 88]] as const;

const testimonials = [
  { quote: "Phenix Consultancy transformed our refinery operations. Their expertise in process optimization increased our yield by 18% within six months. Highly professional and results-driven.", name: "David Chen", title: "Director of Operations", company: "Global Bullion Refineries" },
  { quote: "Outstanding service and technical expertise. They identified critical inefficiencies in our lab operations and implemented solutions that improved accuracy and reduced costs significantly.", name: "Sarah Al-Farsi", title: "Chief Technical Officer", company: "Oasis Precious Metals" },
  { quote: "Phenix's team brought invaluable insights to our refinery project. Their attention to detail and commitment to excellence made all the difference in our success.", name: "Marcus Thorne", title: "Production Manager", company: "Sterling Silver Industrial" },
  { quote: "Phenix's technical validation was the key to our ISO 17025 accreditation. Their precision and attention to detail are unmatched in the industry.", name: "Elena Rossi", title: "CTO", company: "Alpine Assay Labs" },
  { quote: "The efficiency gains we've seen since implementing Phenix's process optimizations have directly impacted our bottom line. Truly a world-class consultancy.", name: "Ahmed Al-Mansoori", title: "Managing Director", company: "Emirates Precious Metals" },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#methodology", label: "Methodology" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

/* ---------- section heading ---------- */
function SectionHead({ eyebrow, title, sub, center = true }: { eyebrow: string; title: React.ReactNode; sub?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-16 ${center ? "text-center" : ""}`}>
      <p className="text-xs text-accent font-semibold uppercase tracking-[0.25em] mb-4">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl text-foreground mb-5">{title}</h2>
      {sub && <p className={`text-lg text-foreground/60 max-w-3xl leading-relaxed ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </Reveal>
  );
}

/* ---------- methodology with scroll-driven line draw ---------- */
function Methodology() {
  const wrap = useRef<HTMLDivElement>(null);
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setProg(Math.min(1, Math.max(0, (window.innerHeight * 0.75 - r.top) / r.height)));
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const active = Math.min(methodology.length - 1, Math.floor(prog * methodology.length));
  return (
    <div ref={wrap} className="relative max-w-3xl mx-auto">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px bg-border/60" />
      <div className="absolute left-6 md:left-1/2 top-0 w-px md:-translate-x-px bg-gradient-to-b from-accent/80 to-accent transition-[height] duration-300 ease-out" style={{ height: `${prog * 100}%`, boxShadow: "0 0 12px rgb(212 165 71 / 0.5)" }} />
      {methodology.map((m, i) => {
        const done = prog > 0.02 && i < active;
        const isActive = i === active && prog > 0.02;
        return (
          <Reveal key={m.phase} delay={i * 60} className="relative mb-10 pl-16 md:pl-0">
            <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 z-10">
              <div className={`w-11 h-11 rounded-full glass flex items-center justify-center font-serif-display font-bold transition-all duration-500 ${done ? "node-done" : isActive ? "node-active text-accent" : "text-accent/60"}`}>
                {done ? <Check className="h-5 w-5" strokeWidth={3} /> : i + 1}
              </div>
            </div>
            <div className={`md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-14" : "md:pr-14 md:text-right"}`}>
              <h3 className={`font-sans text-lg font-bold mb-1 transition-colors duration-500 ${done || isActive ? "text-accent" : ""}`}>{`0${i + 1}. ${m.phase}`}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{m.detail}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ---------- center-focus testimonial marquee ---------- */
function TestimonialMarquee() {
  const row = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reducedMotion()) return;
    let raf = 0;
    const loop = () => {
      const r = row.current;
      if (r) {
        const cx = window.innerWidth / 2;
        for (const el of Array.from(r.children) as HTMLElement[]) {
          const b = el.getBoundingClientRect();
          if (b.right < -100 || b.left > window.innerWidth + 100) continue;
          const d = Math.min(1, Math.abs(b.left + b.width / 2 - cx) / cx);
          el.style.transform = `scale(${1 - d * 0.06})`;
          el.style.opacity = `${1 - d * 0.35}`;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className="marquee-mask relative overflow-hidden">
      <div ref={row} className="animate-marquee-left flex flex-nowrap w-max gap-8 py-8 px-4">
        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="flex-shrink-0 w-[320px] md:w-[440px] glass rounded-3xl p-8 hover:border-accent/40 transition-colors duration-500">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }, (_, s) => (
                <Star key={s} className="star-pop h-4 w-4 fill-accent text-accent" style={{ "--d": `${(i % 5) * 200 + s * 100}ms` } as React.CSSProperties} />
              ))}
            </div>
            <p className="text-sm text-foreground/75 mb-6 leading-relaxed italic min-h-[100px]">"{t.quote}"</p>
            <div className="border-t border-border/30 pt-4">
              <p className="font-bold text-sm">{t.name}</p>
              <p className="text-xs text-foreground/50">{t.title} • {t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- contact form with magnetic button + success burst ---------- */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [burst, setBurst] = useState(false);
  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return void toast.error("Please fill in all required fields");
    setBusy(true);
    try {
      const body = new URLSearchParams({ "form-name": "contact", ...form }).toString();
      const res = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body });
      if (!res.ok) throw new Error(`Submission failed: ${res.status}`);
      toast.success("Thank you! We'll be in touch soon.");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
      setBurst(true);
      setTimeout(() => setBurst(false), 900);
    } catch {
      toast.error("Something went wrong sending your message. Please try WhatsApp or email us directly.");
    } finally {
      setBusy(false);
    }
  };

  const cls = "bg-background/60 border-border/40 text-foreground placeholder:text-foreground/35";
  const fields: [string, string, string, boolean][] = [
    ["name", "Full Name *", "Your name", true],
    ["email", "Email Address *", "your@email.com", true],
    ["phone", "Phone Number", "+971 00 000 0000", false],
    ["company", "Company Name", "Your company", false],
  ];
  return (
    <form onSubmit={submit} name="contact" data-netlify="true" className="glass rounded-2xl p-8 md:p-10 space-y-6 text-left">
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid md:grid-cols-2 gap-6">
        {fields.map(([name, label, ph, req]) => (
          <div key={name} className="field">
            <label className="block text-sm font-semibold mb-2">{label}</label>
            <Input type={name === "email" ? "email" : name === "phone" ? "tel" : "text"} name={name} value={form[name as keyof typeof form]} onChange={set} placeholder={ph} className={cls} required={req} />
          </div>
        ))}
      </div>
      <div className="field">
        <label className="block text-sm font-semibold mb-2">Message *</label>
        <Textarea name="message" value={form.message} onChange={set} rows={5} placeholder="Tell us about your project or inquiry..." className={`${cls} resize-none`} required />
      </div>
      <Magnetic>
        <Button type="submit" disabled={busy} className="btn-gold w-full px-8 py-6 text-base font-semibold rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50">
          {busy ? "Sending..." : "Send Message"} <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        {burst && Array.from({ length: 14 }, (_, i) => {
          const a = (i / 14) * Math.PI * 2;
          return <span key={i} className="burst" style={{ "--tx": `${Math.cos(a) * 80}px`, "--ty": `${Math.sin(a) * 60}px` } as React.CSSProperties} />;
        })}
      </Magnetic>
    </form>
  );
}

/* ---------- page ---------- */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const aboutImgs = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      const el = aboutImgs.current;
      if (el && !reducedMotion()) {
        const r = el.getBoundingClientRect();
        const d = (r.top + r.height / 2 - window.innerHeight / 2) * 0.05;
        el.style.setProperty("--par1", `${d}px`);
        el.style.setProperty("--par2", `${-d}px`);
      }
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const spotlight = (e: React.MouseEvent) => {
    const t = e.currentTarget as HTMLElement;
    const r = t.getBoundingClientRect();
    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
    t.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <ScrollProgress />

      {/* Navigation */}
      <nav className={`nav-intro fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${scrolled ? "bg-background/85 backdrop-blur-xl border-border/60 shadow-[0_8px_30px_rgb(0_0_0/0.4)]" : "bg-transparent border-transparent"}`}>
        <div className="container flex items-center justify-between h-20 mx-auto">
          <a href="/" className="flex items-center gap-3">
            <span className="shine-loop rounded-xl"><img src="/logo.png" alt="Phenix Logo" className="h-14 w-14" /></span>
            <span className="text-lg font-bold tracking-tight whitespace-nowrap">Phenix Consultancy</span>
          </a>
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="link-underline text-sm text-foreground/70 hover:text-accent transition-colors whitespace-nowrap">{l.label}</a>
            ))}
            <a href="#contact"><Button className="btn-gold px-5 py-2 text-sm font-semibold rounded-lg">Get a Quote</Button></a>
          </div>
          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/40 px-6 py-6 flex flex-col gap-4">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-foreground/80 hover:text-accent transition-colors">{l.label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="kenburns w-full h-full opacity-100" style={{ backgroundImage: "url('https://phenix-consultancy.vercel.app/assets/hero_background.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <Particles count={45} />

        {/* animated geometric lines */}
        <svg className="absolute inset-0 w-full h-full z-[1] opacity-25 pointer-events-none" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
          <path className="hero-line" d="M-50 700 L400 700 L520 580 L900 580 L1020 460 L1500 460" stroke="rgb(212 165 71 / 0.8)" strokeWidth="1" />
          <path className="hero-line" d="M-50 760 L340 760 L480 620 L960 620 L1100 500 L1500 500" stroke="rgb(212 165 71 / 0.4)" strokeWidth="1" style={{ animationDelay: "0.6s" }} />
          <circle cx="520" cy="580" r="4" fill="rgb(212 165 71)" className="animate-pulse" />
          <circle cx="1020" cy="460" r="4" fill="rgb(212 165 71)" className="animate-pulse" style={{ animationDelay: "1s" }} />
        </svg>

        <div className="absolute top-1/4 right-[12%] w-72 h-72 rounded-full bg-accent/10 blur-[100px] animate-drift z-[1]" />
        <div className="absolute bottom-1/4 left-[8%] w-56 h-56 rounded-full bg-accent/5 blur-[80px] animate-drift z-[1]" style={{ animationDelay: "4s" }} />

        <div className="container relative z-10 mx-auto py-24">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <p className="text-sm text-accent font-medium tracking-wide">Global Operations | UAE & GCC</p>
              </div>
            </Reveal>
            <h1 className="text-5xl md:text-7xl text-foreground mb-8">
              <Words text="Engineering Excellence in" base={250} />
              <Words text="Precious Metal" base={550} cls="text-gradient-gold italic" />
              <Words text="Refining" base={750} />
            </h1>
            <Reveal delay={900}>
              <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed">
                Empowering refineries worldwide with{" "}
                <RotatingWord words={["precision consulting.", "project management.", "laboratory solutions.", "operational excellence."]} />
              </p>
            </Reveal>
            <Reveal delay={1050}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact">
                  <Button className="btn-gold animate-pulse-glow px-8 py-6 text-base font-semibold rounded-xl transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#services">
                  <Button variant="outline" className="border-accent/40 text-accent hover:bg-accent/10 px-8 py-6 text-base font-semibold rounded-xl w-full sm:w-auto">
                    Explore Services
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-accent/40 flex justify-center pt-2">
            <div className="w-1 h-2.5 rounded-full bg-accent animate-pulse" />
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="relative py-16 border-y border-border/40 bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {impactStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <RingStat value={s.value} suffix={s.suffix} label={s.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto">
          <SectionHead
            eyebrow="Our Expertise"
            title="Our Core Services"
            sub="From project planning and procurement to laboratory systems and operational training, Phenix supports refineries with practical clarity at every stage."
          />
          <div className="spotlight grid sm:grid-cols-2 lg:grid-cols-3 gap-6" onMouseMove={spotlight}>
            {expertiseData.map((s, i) => (
              <Reveal key={s.href} delay={(i % 3) * 120} flip>
                <TiltCard href={s.href} className="service-card group block h-full bg-card/60 border border-border/40 p-7 overflow-hidden">
                  <div className="duotone absolute inset-0 opacity-100 transition-opacity duration-700 z-0" style={{ backgroundImage: `url('${s.backgroundImage}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/60 to-background/30 z-[1]" />
                  <div className="card-shine" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <s.Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-sans text-lg font-bold mb-3 group-hover:text-accent transition-colors duration-300">{s.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed group-hover:text-foreground/75 transition-colors flex-1">{s.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-accent text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Methodology */}
      <section id="methodology" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://i.pinimg.com/1200x/16/81/1a/16811a9933e76da3cfc970d543f7467a.jpg" alt="Proven Methodology" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto relative z-10">
          <SectionHead
            eyebrow="Proven Methodology"
            title="Seven Phases. One Standard: Precision."
            sub="A disciplined delivery framework refined across 40+ projects — protecting value, minimizing losses, and ensuring regulatory compliance at every step."
          />
          <Methodology />
        </div>
      </section>

      <div className="gold-divider" />

      {/* About */}
      <section id="about" className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="text-xs text-accent font-semibold uppercase tracking-[0.25em] mb-4">Our Core Story</p>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
                Built to Endure. <br /><span className="text-gradient-gold italic">Destined to Rise.</span>
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed font-medium mb-6">
                Phenix Consultancy FZC LLC is a UAE-based consulting firm specializing in precious metal refinery solutions across the GCC and international markets.
              </p>
              <p className="text-lg text-foreground/55 leading-relaxed mb-8">
                Founded on resilience, expertise, and vision, we support refineries and laboratories in achieving operational excellence through precise, data-driven strategies — ensuring clients avoid costly mistakes, select the right technologies, and operate with confidence.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[["GCC", "Primary Hub"], ["ISO", "Standard Focus"]].map(([v, l]) => (
                  <div key={v} className="glass rounded-xl p-5">
                    <h4 className="font-serif-display text-3xl font-bold text-accent mb-1">{v}</h4>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">{l}</p>
                  </div>
                ))}
              </div>
              <a href="#methodology">
                <Button className="btn-gold px-8 py-6 text-base font-semibold rounded-xl transition-transform hover:scale-105 active:scale-95">
                  Explore Our Approach <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </Reveal>

            <Reveal delay={150}>
              <div ref={aboutImgs} className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12" style={{ transform: "translateY(var(--par1, 0px))", transition: "transform 0.2s ease-out" }}>
                  {[["https://media.easy-peasy.ai/1d80cd80-d216-444b-8592-c51f397bc31d/3e41bcfb-69b1-41a8-8303-58522d6d34d8.png", "Refining Precision", "aspect-[4/5]", 0], ["https://media.easy-peasy.ai/1d80cd80-d216-444b-8592-c51f397bc31d/dab8e834-b2af-48ce-82c7-83f94bd48e4e.png", "Thermal Engineering", "aspect-square", 200]].map(([src, cap, ratio, d]: any) => (
                    <div key={cap} className="clip-img relative group overflow-hidden rounded-2xl border border-accent/20" style={{ "--d": `${d}ms` } as React.CSSProperties}>
                      <img src={src} alt={cap} className={`w-full ${ratio} object-cover transition-transform duration-700 group-hover:scale-110`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                      <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-accent font-bold">{cap}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4" style={{ transform: "translateY(var(--par2, 0px))", transition: "transform 0.2s ease-out" }}>
                  <div className="clip-img relative group overflow-hidden rounded-2xl border border-accent/20" style={{ "--d": "400ms" } as React.CSSProperties}>
                    <img src="https://media.easy-peasy.ai/1d80cd80-d216-444b-8592-c51f397bc31d/c79ed139-d14f-4ff3-8de6-02664ade7309.png" alt="Gold Bar Assets" className="w-full aspect-[4/6] object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                    <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-accent font-bold">Valuable Assets</p>
                  </div>
                  <div className="btn-gold rounded-2xl p-6 flex flex-col justify-end aspect-[4/3] animate-pulse-glow">
                    <p className="font-serif-display font-bold text-2xl leading-tight text-background">Global Mastery In Precious Metals</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 border-y border-border/40 bg-secondary/20 overflow-hidden">
        <Reveal className="text-center mb-10">
          <p className="text-xs text-accent font-semibold uppercase tracking-[0.25em]">Standards & Certifications We Work To</p>
        </Reveal>
        <div className="marquee-mask relative overflow-hidden">
          <div className="animate-marquee-left flex flex-nowrap w-max gap-4 px-4">
            {[...certifications, ...certifications, ...certifications].map((c, i) => (
              <div key={i} className="shine-loop glass rounded-xl p-5 text-center w-[190px] flex-shrink-0 hover:border-accent/40 transition-colors duration-300 group" style={{ "--d": `${(i % 6) * 1300}ms` } as React.CSSProperties}>
                <Award className="h-5 w-5 text-accent/60 group-hover:text-accent mx-auto mb-3 transition-colors" />
                <p className="font-serif-display font-bold text-accent mb-1">{c.code}</p>
                <p className="text-[11px] text-foreground/50 leading-snug">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionHead
              center={false}
              eyebrow="Industries We Serve"
              title="Built for organizations where accuracy directly affects value."
              sub="Phenix supports precious metal operators, laboratories, investors, and manufacturing teams that need confident technical decisions, reliable processes, and measurable improvement."
            />
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                {industriesData.map((name, i) => (
                  <div key={name} className="pill glass rounded-full px-5 py-3.5 hover:border-accent/40 hover:bg-accent/10 transition-all duration-300 flex items-center gap-3 hover:-translate-y-0.5" style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm font-medium">{name}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Why Us */}
      <section id="why-us" className="py-24 md:py-32 bg-secondary/20">
        <div className="container mx-auto">
          <SectionHead eyebrow="Why Choose Us" title="Trusted Expertise, Proven Results" />
          <div className="spotlight grid md:grid-cols-2 gap-6" onMouseMove={spotlight}>
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 150}>
                <div className="glass rounded-2xl p-8 h-full hover:border-accent/30 transition-colors duration-300 group flex gap-5">
                  <div className="draw-icon flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-500" style={{ "--d": `${i * 150 + 300}ms` } as React.CSSProperties}>
                    <w.Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold mb-2">{w.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Leadership */}
      <section id="leadership" className="py-24 md:py-32">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden group h-[500px] md:h-[550px]">
                <div className="absolute inset-0">
                  <img src="/subash-leader.jpg" alt="Mr. Subash Nediyodath" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-background/20" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
                  <div className="mb-8">
                    <div className="inline-block mb-4">
                      <p className="text-xs text-accent font-semibold uppercase tracking-[0.25em] bg-accent/20 border border-accent/40 rounded-full px-4 py-2">Leadership</p>
                    </div>
                    <h3 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-3">Mr. Subash Nediyodath</h3>
                    <p className="text-lg text-foreground/90 font-medium">Senior Precious Metals & Operations Expert</p>
                  </div>

                  <div className="glass rounded-2xl p-6 border border-accent/30">
                    <div className="flex items-center gap-6">
                      <RingStat value={16} suffix="+" size={90} />
                      <div>
                        <p className="text-sm text-foreground/70 leading-relaxed">Years of relevant industry experience in refinery operations, laboratory systems, and process optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Experience that connects technical decisions with business outcomes.</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">With 16 years of proven expertise, Mr. Subash Nediyodath brings deep practical understanding of precious metal refinery operations, laboratory systems, procurement evaluation, technical troubleshooting, staff training, and performance improvement.</p>
                </div>

                <div className="glass rounded-2xl p-8 border border-border/40">
                  <p className="text-foreground/80 leading-relaxed mb-6">His leadership approach is built on precision, integrity, and measurable improvement — helping clients make confident decisions, avoid costly mistakes, and build refinery systems that can scale with trust.</p>
                  <div className="space-y-5">
                    {skills.map(([label, w], i) => (
                      <div key={label}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-semibold text-foreground">{label}</span>
                          <span className="text-accent font-bold">{w}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-border/50 overflow-hidden">
                          <div className="bar-fill h-full rounded-full bg-gradient-to-r from-accent/70 to-accent" style={{ "--w": `${w}%`, "--d": `${i * 150}ms` } as React.CSSProperties} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="#contact">
                  <Button className="btn-gold w-full px-8 py-6 text-base font-semibold rounded-xl transition-transform hover:scale-105 active:scale-95">
                    Work With Our Expert <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHead
            eyebrow="Client Success Stories"
            title="Trusted by Industry Leaders"
            sub="Hear from the refineries and laboratories we've partnered with to achieve operational excellence."
          />
        </div>
        <TestimonialMarquee />
      </section>

      {/* CTA + Contact */}
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[140px] pointer-events-none" />
        <Particles count={25} />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHead
              eyebrow="Ready to Transform Your Operations?"
              title={<>Work With <span className="text-gradient-gold">Phenix Consultancy</span></>}
              sub="If you are building, upgrading, or optimizing a refinery or laboratory, Phenix Consultancy is your trusted partner for precision, performance, and long-term success."
            />
            <Reveal delay={150}><ContactForm /></Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
