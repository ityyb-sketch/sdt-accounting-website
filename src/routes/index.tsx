import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Calculator, BookOpen } from "lucide-react";
import { HeroScene } from "@/components/hero-scene";
import { StatsStrip } from "@/components/stats-strip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SDT Accounting — Your trusted partner for expert accounting" },
      { name: "description", content: "Expert bookkeeping and tax preparation services. We simplify the financial process so you stay compliant and focused on growing your business." },
      { property: "og:title", content: "SDT Accounting — Expert Accounting & Tax" },
      { property: "og:description", content: "Reliable bookkeeping and tax preparation, fully remote nationwide." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: BarChart3, title: "Comprehensive Accounting", body: "We monitor your financial health closely: tracking transactions, preparing financial reports, and helping you make informed decisions." },
  { icon: Calculator, title: "Expert Tax Preparation", body: "We navigate the complexities of your tax return, maximize deductions, and ensure timely filing." },
  { icon: BookOpen, title: "Reliable Bookkeeping", body: "We keep your financial records accurate and up to date — from tracking expenses to managing invoices." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="container-page py-24 md:py-36 relative">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Trusted Accounting Partner
            </span>
            <h1 className="reveal reveal-delay-1 mt-6 text-4xl md:text-6xl font-bold text-navy leading-[1.05]">
              Your trusted partner for <span className="relative inline-block">expert accounting<span className="absolute -bottom-2 left-0 right-0 h-1 bg-gold/70 rounded-full" /></span>
            </h1>
            <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground max-w-2xl">
              Experience peace of mind with our expert bookkeeping and tax preparation services. We simplify the financial process so you stay compliant and focused on growing your business.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-navy-foreground shadow-elegant hover:shadow-lg transition-all">
                Get Started <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:bg-navy/5 transition-colors">
                View Services
              </Link>
            </div>
          </div>
          {/* Animated finance scene */}
          <div className="pointer-events-none absolute -right-10 top-8 hidden lg:block">
            <HeroScene />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">What we do</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Services built around your business</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className={`reveal reveal-delay-${i + 1} group relative rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant`}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                <s.icon size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-gold to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      {/* Purpose */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-page py-20 md:py-28 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">Our Purpose</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Clarity, integrity, and trust at every step.</h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We provide reliable accounting and tax services tailored to individuals and businesses. Our mission is simple: to support our clients in achieving their financial goals with clarity and integrity, through relationships built on trust and transparency.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-xl">
              {["Trust", "Integrity", "Clarity"].map((v) => (
                <div key={v} className="rounded-xl border border-border bg-card p-4 text-center">
                  <div className="font-display text-2xl font-bold text-navy">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container-page py-20 md:py-28">
        <div className="gradient-navy relative overflow-hidden rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-foreground">Ready to simplify your finances?</h2>
          <p className="mt-4 text-navy-foreground/70 max-w-xl mx-auto">
            Let's talk about how we can support your goals — wherever you are.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground hover:brightness-105 transition-all shadow-elegant">
            Get Started <ArrowRight size={16} />
          </Link>
          <div aria-hidden className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        </div>
      </section>
    </>
  );
}
