import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Calculator, BookOpen, LineChart, Award, Heart, Wallet, FileText, Receipt, Banknote, ClipboardList, TrendingUp, FileSpreadsheet, CircleDollarSign, Settings2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | SDT Accounting" },
      { name: "description", content: "Accounting, tax preparation, bookkeeping, and financial consulting tailored to your needs. Fully remote, nationwide." },
      { property: "og:title", content: "Services | SDT Accounting" },
      { property: "og:description", content: "Personalized accounting, tax, and bookkeeping services to simplify your financial life." },
    ],
  }),
  component: Services,
});

const details = [
  { icon: BarChart3, title: "Accounting Services", body: "Clear financial records, accurate statements, and full compliance, with tailored solutions that grow alongside your business." },
  { icon: Calculator, title: "Tax Preparation", body: "Every deduction you deserve. We stay compliant with current tax laws to maximize refunds and minimize liabilities." },
  { icon: BookOpen, title: "Bookkeeping", body: "Daily transactions, invoices, and accurate financial statements, kept current so you always know where you stand." },
  { icon: LineChart, title: "Financial Consulting", body: "Strategic insights for complex financial decisions and confident future planning." },
];

const reasons = [
  { icon: Award, title: "Expert Guidance", body: "Years of experience across diverse industries and tax situations." },
  { icon: Heart, title: "Personalized Solutions", body: "Tailored to your goals, never one-size-fits-all." },
  { icon: Wallet, title: "Affordable Pricing", body: "Transparent rates designed to deliver real value." },
];

const steps = [
  { n: "01", title: "Initial Consultation", body: "We discuss your needs, goals, and current financial picture." },
  { n: "02", title: "Data Gathering", body: "We collect the records and details needed to do the work right." },
  { n: "03", title: "Review and Analysis", body: "We review, analyze, and deliver clear insights and next steps." },
];

const included = [
  { icon: FileText, title: "Accounts Receivable", body: "Invoicing and tracking what's owed to you, so nothing slips through." },
  { icon: Receipt, title: "Accounts Payable", body: "Bill tracking and timely payments to keep vendors happy." },
  { icon: Banknote, title: "Bank Reconciliation", body: "Every transaction matched and verified against your bank records." },
  { icon: ClipboardList, title: "Ledger Maintenance", body: "Clean, categorized books that always tie out." },
  { icon: TrendingUp, title: "Cash Flow Tracking", body: "Know what's coming in, what's going out, and what's left." },
  { icon: FileSpreadsheet, title: "Monthly Financial Reports", body: "P&L, balance sheet, and clear summaries delivered each month." },
  { icon: CircleDollarSign, title: "Expense Tracking", body: "Categorized expenses so deductions are never missed." },
  { icon: Settings2, title: "Accounting Software Setup", body: "QuickBooks Online or Xero, configured the right way from day one." },
];

function Services() {
  return (
    <>
      {/* Intro */}
      <section className="gradient-hero">
        <div className="container-page py-20 md:py-28">
          <p className="reveal text-sm font-semibold uppercase tracking-wider text-gold">Services</p>
          <h1 className="reveal reveal-delay-1 mt-3 text-4xl md:text-5xl font-bold text-navy max-w-3xl">Your Reliable Accounting Partner</h1>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-muted-foreground max-w-2xl">
            Personalized bookkeeping and tax preparation to simplify your financial life.
          </p>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="container-page py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {details.map((d, i) => (
            <article key={d.title} className={`reveal reveal-delay-${(i % 2) + 1} group rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant`}>
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                  <d.icon size={22} />
                </div>
                <h2 className="text-2xl font-bold text-navy">{d.title}</h2>
              </div>
              <p className="mt-5 text-muted-foreground leading-relaxed">{d.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="container-page pb-8 md:pb-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">What's included</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Every package, fully covered</h2>
          <p className="mt-4 text-muted-foreground">The core work we handle, so you can focus on running the business.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {included.map((it, i) => (
            <div
              key={it.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-sky/40 hover:shadow-elegant`}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-soft text-[#3B5BFF] ring-1 ring-sky/20 transition-transform group-hover:scale-110">
                <it.icon size={18} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Why choose us */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">Why choose us</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">A partner who actually pays attention.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((r, i) => (
              <div key={r.title} className={`reveal reveal-delay-${i + 1} rounded-2xl bg-card border border-border p-8`}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15 text-navy">
                  <r.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-page py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">How it works</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">A simple, three-step process.</h2>
        </div>
        <div className="relative mt-14">
          {/* Animated connector line (drawn on scroll, desktop only) */}
          <svg
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[64px] hidden md:block"
            height="6"
            viewBox="0 0 1000 6"
            preserveAspectRatio="none"
            style={{ width: "100%" }}
          >
            <path
              d="M 20 3 L 980 3"
              fill="none"
              stroke="#3B5BFF73"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 8"
              className="connector-line"
            />
          </svg>
          <ol className="grid gap-6 md:grid-cols-3 relative">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className={`step-pop d${i + 1} relative rounded-2xl border border-border bg-card p-8 shadow-card`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-soft ring-1 ring-sky/30">
                  <span className="font-display text-lg font-bold text-[#3B5BFF]">{s.n}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>


      {/* CTA */}
      <section className="container-page pb-20">
        <div className="gradient-navy relative overflow-hidden rounded-3xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-foreground">Let's build a plan that fits.</h2>
            <p className="mt-2 text-navy-foreground/70">Tailored pricing, transparent process, expert advice.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground hover:brightness-105 transition-all">
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
