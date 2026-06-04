import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, Settings, RefreshCcw, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SDT Accounting" },
      { name: "description", content: "Transparent monthly bookkeeping packages and one-time services. Fully remote, nationwide." },
      { property: "og:title", content: "Pricing — SDT Accounting" },
      { property: "og:description", content: "Simple monthly packages and one-time services tailored to your business." },
    ],
  }),
  component: Pricing,
});

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

function Pricing() {
  return (
    <>
      {/* Intro */}
      <section className="gradient-hero">
        <div className="container-page py-20 md:py-28">
          <p className="reveal text-sm font-semibold uppercase tracking-wider text-gold">Pricing</p>
          <h1 className="reveal reveal-delay-1 mt-3 text-4xl md:text-5xl font-bold text-navy max-w-3xl">
            Simple, transparent packages.
          </h1>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-muted-foreground max-w-2xl">
            Choose a monthly plan that fits where your business is today — and grow into the next one when you're ready.
          </p>
        </div>
      </section>

      {/* Monthly packages */}
      <section className="container-page py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col rounded-2xl bg-card p-8 shadow-card transition-all hover:-translate-y-1.5 hover:shadow-elegant ${
                p.popular
                  ? "border-2 border-[oklch(0.66_0.14_245)] md:-mt-4 md:mb-4 ring-1 ring-sky/30"
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
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-soft text-[oklch(0.5_0.14_245)]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  p.popular
                    ? "bg-navy text-navy-foreground hover:bg-navy/90 shadow-elegant"
                    : "border border-navy/15 bg-white text-navy hover:bg-navy/5"
                }`}
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Final pricing is tailored to your scope. Contact us for a free quote.
        </p>
      </section>

      {/* One-time services */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">One-Time Services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Project-based help, when you need it.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {oneTime.map((s, i) => (
              <div
                key={s.title}
                className={`reveal reveal-delay-${i + 1} relative rounded-2xl p-8 transition-all hover:-translate-y-1 ${
                  s.free
                    ? "bg-gradient-to-br from-[oklch(0.97_0.04_245)] to-white border-2 border-[oklch(0.66_0.14_245)] shadow-elegant"
                    : "bg-card border border-border shadow-card hover:shadow-elegant"
                }`}
              >
                {s.free && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground shadow-sm">
                    <Sparkles size={12} /> Free
                  </span>
                )}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-soft text-[oklch(0.5_0.14_245)] ring-1 ring-sky/20">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
                <div className={`mt-2 font-display text-xl font-bold ${s.free ? "text-[oklch(0.5_0.14_245)]" : "text-navy"}`}>{s.price}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-28">
        <div className="gradient-navy relative overflow-hidden rounded-3xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-foreground">Not sure which plan fits?</h2>
            <p className="mt-2 text-navy-foreground/70">Start with a free consultation — we'll recommend the right path.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground hover:brightness-105 transition-all">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
