import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SDT — SDT Accounting" },
      { name: "description", content: "Meet Samiha Syed, founder of SDT Accounting. QuickBooks Online & Xero Certified, serving clients nationwide, fully remote." },
      { property: "og:title", content: "About SDT Accounting" },
      { property: "og:description", content: "Founded by Samiha Syed — certified, remote-first bookkeeping for small businesses across the country." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="gradient-hero">
        <div className="container-page py-20 md:py-28">
          <p className="reveal text-sm font-semibold uppercase tracking-wider text-gold">About</p>
          <h1 className="reveal reveal-delay-1 mt-3 text-4xl md:text-6xl font-bold text-navy max-w-3xl">About SDT</h1>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-muted-foreground max-w-2xl">
            A small, certified team built to give small business owners clarity and confidence in their numbers.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          <div className="reveal md:col-span-4">
            <div className="relative mx-auto md:mx-0 h-48 w-48 rounded-full bg-gradient-to-br from-sky-soft to-white ring-1 ring-sky/30 shadow-elegant grid place-items-center">
              <span className="font-display text-5xl font-bold text-navy">SS</span>
              <span className="absolute -bottom-2 -right-2 inline-flex items-center gap-1 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-navy-foreground shadow-card">
                <BadgeCheck size={14} className="text-gold" /> Founder
              </span>
            </div>
          </div>
          <div className="reveal reveal-delay-1 md:col-span-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Samiha Syed</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
              Founder · QuickBooks Online & Xero Certified
            </p>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Samiha started SDT Accounting out of a genuine passion for helping small business owners make sense of their numbers. After years of watching founders struggle with messy books, missed deductions, and last-minute tax stress, she set out to build a practice that puts clarity and care first — one where owners actually understand what their numbers are telling them.
              </p>
              <p>
                Today, SDT works remotely with clients nationwide, combining certified QuickBooks Online and Xero expertise with personal, responsive service. Every engagement is hands-on: real conversations, clean books, and a partner who answers when you reach out.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky-soft/60 px-4 py-2 text-sm font-semibold text-navy">
                <BadgeCheck size={16} className="text-[#0D9488]" /> QuickBooks Online Certified
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky-soft/60 px-4 py-2 text-sm font-semibold text-navy">
                <ShieldCheck size={16} className="text-[#0D9488]" /> Xero Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-page py-20 md:py-24 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">Our Purpose</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Clarity, integrity, and trust at every step.</h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We provide reliable accounting and tax services tailored to individuals and businesses. Our mission is simple: to support our clients in achieving their financial goals with clarity and integrity, through relationships built on trust and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="gradient-navy relative overflow-hidden rounded-3xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-foreground">Let's get acquainted.</h2>
            <p className="mt-2 text-navy-foreground/70">Free initial consultation — no pressure, just clarity.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground hover:brightness-105 transition-all">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
