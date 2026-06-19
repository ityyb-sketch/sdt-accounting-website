import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  BookOpen,
  LineChart,
  BadgeCheck,
  ShieldCheck,
  ShoppingCart,
  Rocket,
  Briefcase,
  UtensilsCrossed,
  Home as HomeIcon,
  HardHat,
  Stethoscope,
  HeartHandshake,
  Check,
  AlertTriangle,
  Layers,
  ClipboardCheck,
  Sparkles,
  Settings,
  RefreshCcw,
  MessageCircle,
  Send,
  Mail,
  FileText,
  Receipt,
  Banknote,
  ClipboardList,
  TrendingUp,
  FileSpreadsheet,
  CircleDollarSign,
  Settings2,
} from "lucide-react";
import { Parallax } from "@/components/parallax";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SDT Accounting — Your trusted partner for expert accounting" },
      { name: "description", content: "Expert bookkeeping and tax preparation, fully remote nationwide. QuickBooks Online & Xero certified. Free consultation, no contracts." },
      { property: "og:title", content: "SDT Accounting — Expert Accounting & Tax" },
      { property: "og:description", content: "Reliable bookkeeping and tax preparation, fully remote nationwide." },
    ],
  }),
  component: Home,
});

const PHOTOS = {
  hero: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1200",
  bookkeeper: "https://images.pexels.com/photos/4476375/pexels-photo-4476375.jpeg?auto=compress&cs=tinysrgb&w=1200",
  documents: "https://images.pexels.com/photos/7821540/pexels-photo-7821540.jpeg?auto=compress&cs=tinysrgb&w=1200",
  workspace: "https://images.pexels.com/photos/6694492/pexels-photo-6694492.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const services = [
  { icon: BarChart3, title: "Accounting Services", body: "Clear financial records, accurate statements, and full compliance — tailored solutions that grow with your business." },
  { icon: Calculator, title: "Tax Preparation", body: "Every deduction you deserve. We stay current with tax law to maximize refunds and minimize liabilities." },
  { icon: BookOpen, title: "Bookkeeping", body: "Daily transactions, invoices, and statements kept current so you always know where you stand." },
  { icon: LineChart, title: "Financial Consulting", body: "Strategic insights for complex decisions and confident future planning." },
];

const included = [
  { icon: FileText, title: "Accounts Receivable", body: "Invoicing and tracking what's owed to you, so nothing slips through." },
  { icon: Receipt, title: "Accounts Payable", body: "Bill tracking and timely payments to keep vendors happy." },
  { icon: Banknote, title: "Bank Reconciliation", body: "Every transaction matched and verified against your bank records." },
  { icon: ClipboardList, title: "Ledger Maintenance", body: "Clean, categorized books that always tie out." },
  { icon: TrendingUp, title: "Cash Flow Tracking", body: "Know what's coming in, going out, and what's left." },
  { icon: FileSpreadsheet, title: "Monthly Reports", body: "P&L, balance sheet, and clear summaries delivered each month." },
  { icon: CircleDollarSign, title: "Expense Tracking", body: "Categorized expenses so deductions are never missed." },
  { icon: Settings2, title: "Software Setup", body: "QuickBooks Online or Xero, configured the right way from day one." },
];

const industries = [
  { icon: ShoppingCart, label: "E-commerce & Online Sellers" },
  { icon: Rocket, label: "Startups & SaaS" },
  { icon: Briefcase, label: "Freelancers & Consultants" },
  { icon: UtensilsCrossed, label: "Restaurants & Retail" },
  { icon: HomeIcon, label: "Real Estate & Rentals" },
  { icon: HardHat, label: "Construction & Trades" },
  { icon: Stethoscope, label: "Healthcare Practices" },
  { icon: HeartHandshake, label: "Nonprofits" },
];

const pains = [
  { icon: AlertTriangle, title: "Messy or behind books", body: "Receipts piling up, categories out of whack, and a quarter-end scramble every time." },
  { icon: Layers, title: "Juggling too many tools", body: "QuickBooks here, spreadsheets there, bank exports somewhere else — and nothing tying out." },
  { icon: ClipboardCheck, title: "Compliance worry", body: "Missed deadlines, surprise tax bills, and the nagging feeling you might be missing something." },
];

const plans = [
  {
    name: "Starter",
    price: "$150–$250",
    blurb: "For small businesses getting organized.",
    features: [
      "Up to 50 transactions per month",
      "Monthly reconciliation + P&L report",
      "QuickBooks Online / Xero setup",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$350–$500",
    blurb: "For growing businesses that need more.",
    features: [
      "Up to 150 transactions per month",
      "Full bookkeeping service",
      "Monthly financial reports",
      "Quarterly video call review",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$700–$1,000",
    blurb: "Hands-on, dedicated support.",
    features: [
      "Unlimited transactions",
      "Dedicated bookkeeper",
      "Priority support + WhatsApp",
      "Monthly strategy review",
    ],
    popular: false,
  },
];

const oneTime = [
  { icon: Settings, title: "QuickBooks / Xero Setup", price: "$300–$500", body: "Chart of accounts, integrations, and clean foundations from day one.", free: false },
  { icon: RefreshCcw, title: "Catch-up Bookkeeping", price: "$100–$200 / month of backlog", body: "Bring your books current quickly and accurately.", free: false },
  { icon: MessageCircle, title: "Initial Consultation", price: "Free", body: "A no-pressure conversation to understand your needs and goals.", free: true },
];

const faqs = [
  { q: "What services do you provide?", a: "We provide bookkeeping, tax preparation, accounting, and financial consulting." },
  { q: "How do I schedule a consultation?", a: "Email us at info@sdtaccounting.com and we'll respond within one business day." },
  { q: "What are your fees?", a: "Pricing is tailored to your needs — contact us for a free quote." },
  { q: "Do you offer remote services?", a: "Yes — we work with clients nationwide, fully remote." },
  { q: "How do I get support?", a: "Email us anytime at info@sdtaccounting.com." },
];

const clients = [
  { name: "Capital City Cargo", src: "/clients/capital-city-cargo.png", card: "#FFFFFF" },
  { name: "The Econic Company", src: "/clients/econic.png", card: "#FFFFFF" },
  { name: "Top Notch Masonry & Restoration", src: "/clients/top-notch.png", card: "#FFFFFF" },
  { name: "Marketsz", src: "/clients/marketsz.png", card: "#FFFFFF" },
  { name: "Timberwolf Studios", src: "/clients/timberwolf.png", card: "#11100B" },
  { name: "Akemi", src: "/clients/akemi.png", card: "#FFFFFF" },
  { name: "Accounting Expert Group", src: "/clients/accounting-expert-group.png", card: "#FFFFFF" },
  { name: "Sugarleaf Insurance Services", src: "/clients/sugarleaf.png", card: "#FFFFFF" },
  { name: "Expatsi", src: "/clients/expatsi.png", card: "#F6F6F6" },
  { name: "Digz Media Group", src: "/clients/digz-media.png", card: "#000000" },
];

function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const tryScroll = () => {
      const el = document.getElementById(hash);
      if (!el) return false;
      const lenis = (window as any).__lenis;
      if (lenis) lenis.scrollTo(el, { offset: -72 });
      else el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };
    const t1 = window.setTimeout(tryScroll, 100);
    const t2 = window.setTimeout(tryScroll, 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      {/* ============== HERO ============== */}
      <section id="top" className="gradient-hero relative overflow-hidden">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-70 [filter:blur(3px)] motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-bg.jpg"
          aria-hidden="true"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div aria-hidden className="absolute inset-0 bg-white/60" />
        <div className="container-page py-20 md:py-28 relative">
          <div className="max-w-3xl mx-auto text-center">
              <span className="reveal inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Trusted Accounting Partner
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold text-navy leading-[1.05]">
                <span className="kinetic-line"><span>Your trusted partner</span></span>
                <span className="kinetic-line k-d1">
                  <span>for&nbsp;</span>
                  <span className="kinetic-accent relative inline-block">
                    expert accounting
                    <span aria-hidden className="absolute -bottom-2 left-0 right-0 h-1 bg-gold/70 rounded-full" />
                  </span>
                </span>
              </h1>
              <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Experience peace of mind with expert bookkeeping and tax preparation. We simplify the financial process so you stay compliant and focused on growing your business.
              </p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-4 justify-center">
                <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-navy-foreground shadow-elegant hover:shadow-lg transition-all">
                  Get Started <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:bg-navy/5 transition-colors">
                  View Services
                </a>
              </div>
              <p className="reveal reveal-delay-3 mt-5 text-sm text-muted-foreground">
                Free consultation · No contracts · No commitment
              </p>
            </div>
        </div>
      </section>

      {/* ============== PROBLEM ============== */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="reveal lg:col-span-5">
            <img
              src={PHOTOS.documents}
              alt="Stack of business documents and receipts"
              loading="lazy"
              className="w-full h-[360px] md:h-[460px] object-cover rounded-3xl shadow-card ring-1 ring-navy/5"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="reveal text-sm font-semibold uppercase tracking-wider text-gold">The problem</p>
            <h2 className="reveal reveal-delay-1 mt-3 text-3xl md:text-4xl font-bold text-navy">
              Bookkeeping shouldn't keep you up at night.
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-muted-foreground max-w-xl">
              You started your business to do what you love — not chase receipts. Here's where most owners get stuck:
            </p>
            <div className="mt-8 grid gap-4">
              {pains.map((p, i) => (
                <div
                  key={p.title}
                  className={`reveal reveal-delay-${i + 1} flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card`}
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-soft text-[#3B5BFF] ring-1 ring-sky/20">
                    <p.icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section id="services" className="container-page py-20 md:py-28 scroll-mt-20">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="reveal text-sm font-semibold uppercase tracking-wider text-gold">What we do</p>
            <h2 className="reveal reveal-delay-1 mt-3 text-3xl md:text-4xl font-bold text-navy">
              Services built around your business
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-muted-foreground">
              Personalized bookkeeping and tax preparation to simplify your financial life — handled by a real, certified bookkeeper.
            </p>
            <div className="reveal reveal-delay-2 mt-8">
              <img
                src={PHOTOS.bookkeeper}
                alt="Bookkeeper working on financial records"
                loading="lazy"
                className="w-full h-[320px] object-cover rounded-3xl shadow-card ring-1 ring-navy/5"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className={`svc-card reveal reveal-delay-${(i % 3) + 1} group relative rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant hover:border-sky/40`}
                >
                  <div className="svc-icon inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-soft text-[#3B5BFF] ring-1 ring-sky/20">
                    <s.icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="reveal text-xl font-bold text-navy">What's included in every engagement</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {included.map((it, i) => (
                  <div
                    key={it.title}
                    className={`reveal reveal-delay-${(i % 3) + 1} flex gap-3 rounded-xl border border-border bg-card p-4`}
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft text-[#3B5BFF] ring-1 ring-sky/20">
                      <it.icon size={16} />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-navy">{it.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{it.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== WHO WE SERVE ============== */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-page py-20 md:py-24">
          <div className="reveal max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">Who we serve</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Small businesses across every industry</h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((it, i) => (
              <div
                key={it.label}
                className={`reveal reveal-delay-${(i % 3) + 1} group flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-sky/40 hover:shadow-elegant`}
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-soft text-[#3B5BFF] ring-1 ring-sky/20 transition-transform group-hover:scale-110">
                  <it.icon size={18} />
                </span>
                <span className="text-sm font-semibold text-navy">{it.label}</span>
              </div>
            ))}
          </div>
          <p className="reveal mt-6 text-center text-muted-foreground italic">…and every business in between.</p>
        </div>
      </section>

      {/* ============== ABOUT ============== */}
      <section id="about" className="container-page py-20 md:py-28 scroll-mt-20">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="reveal lg:col-span-5">
            <img
              src={PHOTOS.workspace}
              alt="Calm workspace with laptop and coffee"
              loading="lazy"
              className="w-full h-[440px] object-cover rounded-3xl shadow-elegant ring-1 ring-navy/5"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="reveal text-sm font-semibold uppercase tracking-wider text-gold">About</p>
            <h2 className="reveal reveal-delay-1 mt-3 text-3xl md:text-4xl font-bold text-navy">
              Meet Sam, Founder
            </h2>
            <div className="reveal reveal-delay-2 mt-6 flex items-center gap-5">
              <div className="relative h-20 w-20 shrink-0 rounded-full bg-gradient-to-br from-sky-soft to-white ring-1 ring-sky/30 shadow-card grid place-items-center">
                <span className="font-display text-2xl font-bold text-navy">S</span>
              </div>
              <div>
                <div className="font-display text-lg font-bold text-navy">Sam</div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Founder · QuickBooks Online & Xero Certified
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2 mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Sam started SDT Accounting out of a genuine passion for helping small business owners make sense of their numbers. After years of watching founders struggle with messy books, missed deductions, and last-minute tax stress, she set out to build a practice that puts clarity and care first — one where owners actually understand what their numbers are telling them.
              </p>
              <p>
                Today, SDT works remotely with clients nationwide, combining certified QuickBooks Online and Xero expertise with personal, responsive service. Every engagement is hands-on: real conversations, clean books, and a partner who answers when you reach out.
              </p>
            </div>
            <div className="reveal mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky-soft/60 px-4 py-2 text-sm font-semibold text-navy">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#2CA01C] text-white text-[10px] font-bold">qb</span> QuickBooks Online Certified
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky-soft/60 px-4 py-2 text-sm font-semibold text-navy">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#13B5EA] text-white text-[11px] font-bold">X</span> Xero Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRICING ============== */}
      <section id="pricing" className="bg-muted/40 border-y border-border scroll-mt-20">
        <div className="container-page py-20 md:py-28">
          <div className="reveal max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">Pricing</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Simple, transparent packages.</h2>
            <p className="mt-4 text-muted-foreground">
              Choose a monthly plan that fits where your business is today — and grow into the next one when you're ready.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
            {plans.map((p, i) => (
              <div
                key={p.name}
                className={`reveal reveal-delay-${i + 1} relative flex flex-col rounded-2xl bg-card p-8 shadow-card transition-all hover:-translate-y-1.5 hover:shadow-elegant ${
                  p.popular
                    ? "border-2 border-[#3B5BFF] md:-mt-4 md:mb-4 ring-1 ring-sky/30"
                    : "border border-border"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground shadow-sm">
                    <Sparkles size={12} /> Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold text-navy">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-navy">{p.price}</span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-navy/80">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-soft text-[#3B5BFF]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                    p.popular
                      ? "bg-navy text-navy-foreground hover:bg-navy/90 shadow-elegant"
                      : "border border-navy/15 bg-white text-navy hover:bg-navy/5"
                  }`}
                >
                  Get Started <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Final pricing is tailored to your scope. Contact us for a free quote.
          </p>

          {/* One-time services */}
          <div className="mt-16">
            <h3 className="reveal text-xl font-bold text-navy">Project-based help, when you need it</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {oneTime.map((s, i) => (
                <div
                  key={s.title}
                  className={`reveal reveal-delay-${i + 1} relative rounded-2xl p-7 transition-all hover:-translate-y-1 ${
                    s.free
                      ? "bg-gradient-to-br from-[#E8ECFF] to-white border-2 border-[#3B5BFF] shadow-elegant"
                      : "bg-card border border-border shadow-card hover:shadow-elegant"
                  }`}
                >
                  {s.free && (
                    <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground shadow-sm">
                      <Sparkles size={12} /> Free
                    </span>
                  )}
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-soft text-[#3B5BFF] ring-1 ring-sky/20">
                    <s.icon size={20} />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-navy">{s.title}</h4>
                  <div className={`mt-1 font-display text-lg font-bold ${s.free ? "text-[#3B5BFF]" : "text-navy"}`}>{s.price}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section id="faq" className="container-page py-20 md:py-28 scroll-mt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="reveal text-sm font-semibold uppercase tracking-wider text-gold">FAQ</p>
            <h2 className="reveal reveal-delay-1 mt-3 text-3xl md:text-4xl font-bold text-navy">
              Questions, answered.
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-muted-foreground">
              Don't see your question? Email us at{" "}
              <a href="mailto:info@sdtaccounting.com" className="text-navy font-semibold underline underline-offset-2 hover:text-navy/80">
                info@sdtaccounting.com
              </a>.
            </p>
          </div>
          <div className="reveal lg:col-span-8">
            <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-0 px-6">
                  <AccordionTrigger className="text-left font-semibold text-navy py-5 hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============== OUR CLIENTS (moving) ============== */}
      <section className="py-16 md:py-20 border-y border-border bg-secondary/40 overflow-hidden">
        <div className="container-page text-center">
          <p className="reveal text-sm font-semibold uppercase tracking-wider text-gold">Our Clients</p>
          <h2 className="reveal reveal-delay-1 mt-2 text-2xl md:text-3xl font-bold text-navy">
            Businesses we're proud to support
          </h2>
        </div>
        <div className="marquee-mask mt-10">
          <div className="marquee-track gap-5">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={i}
                className="h-24 w-52 shrink-0 overflow-hidden rounded-2xl border border-border shadow-sm"
                style={{ backgroundColor: c.card }}
                title={c.name}
              >
                <img src={c.src} alt={c.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-mask mt-6">
          <div className="marquee-track marquee-reverse items-center gap-10 px-6">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="shrink-0 whitespace-nowrap font-display text-base md:text-lg font-semibold text-navy/55">
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certified + software we work with (scrolling) */}
      <section className="reveal py-10 overflow-hidden">
        {(() => {
          const certs = [
            { mark: "qb", bg: "#2CA01C", label: "QuickBooks Online Certified" },
            { mark: "X", bg: "#13B5EA", label: "Xero Certified" },
          ];
          const software = [
            { mark: "fb", bg: "#0075DD", name: "FreshBooks" },
            { mark: "z", bg: "#E42527", name: "Zoho Books" },
            { mark: "w", bg: "#1F9CE4", name: "Wave Accounting" },
            { mark: "s", bg: "#00B760", name: "Sage" },
            { mark: "O", bg: "#C74634", name: "Oracle NetSuite" },
            { mark: "T", bg: "#C8102E", name: "TallyPrime" },
            { mark: "o", bg: "#714B67", name: "Odoo" },
            { mark: "D", bg: "#0B53CE", name: "Microsoft Dynamics 365" },
          ];
          const chip = (
            b: { mark: string; bg: string; label?: string; name?: string },
            i: number,
          ) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm whitespace-nowrap"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full text-white text-[10px] font-bold" style={{ backgroundColor: b.bg }}>{b.mark}</span>
              {b.label ?? b.name}
            </span>
          );
          return (
            <>
              <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Certified &amp; Accredited</p>
              <div className="marquee-mask mt-5">
                <div className="marquee-track gap-4">
                  {[...certs, ...certs, ...certs, ...certs, ...certs, ...certs].map(chip)}
                </div>
              </div>
              <p className="mt-10 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Software we work with</p>
              <div className="marquee-mask mt-5">
                <div className="marquee-track marquee-reverse gap-4">
                  {[...software, ...software].map(chip)}
                </div>
              </div>
            </>
          );
        })()}
      </section>

      {/* ============== FINAL CTA / CONTACT ============== */}
      <section id="contact" className="container-page py-20 md:py-28 scroll-mt-20">
        <div className="gradient-navy relative overflow-hidden rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-foreground">Ready to simplify your finances?</h2>
          <p className="mt-4 text-navy-foreground/70 max-w-xl mx-auto">
            Let's talk about how we can support your goals — wherever you are.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:info@sdtaccounting.com" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground hover:brightness-105 transition-all shadow-elegant">
              Get Started <ArrowRight size={16} />
            </a>
            <a href="mailto:info@sdtaccounting.com" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-navy-foreground hover:bg-white/10 transition-all">
              <Mail size={16} /> info@sdtaccounting.com
            </a>
          </div>
          <Parallax speed={40} className="absolute -bottom-20 -right-20">
            <div aria-hidden className="h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          </Parallax>
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="reveal md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">Get a callback</p>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-navy">Tell us about your business</h3>
            <p className="mt-4 text-muted-foreground">
              Send us a message and we'll get back to you within one business day.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Prefer to read first? Jump to our{" "}
              <a href="#faq" className="text-navy font-semibold underline underline-offset-2 hover:text-navy/80">FAQs</a>.
            </p>
          </div>
          <div className="reveal reveal-delay-1 md:col-span-7">
            <form action="https://formsubmit.co/info@sdtaccounting.com" method="POST" className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card space-y-5">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://sdtaccounting.com/" />
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">Name</label>
                  <input id="name" name="name" type="text" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30" placeholder="Jane Smith" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">Email</label>
                  <input id="email" name="email" type="email" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30" placeholder="you@business.com" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">Phone <span className="font-normal text-muted-foreground">(optional)</span></label>
                <input id="phone" name="phone" type="tel" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">Message</label>
                <textarea id="message" name="message" required rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30 resize-y" placeholder="Tell us a little about your business and what you're looking for…" />
              </div>
              <button type="submit" className="group inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-navy-foreground shadow-elegant hover:shadow-lg transition-all">
                Request Callback <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
