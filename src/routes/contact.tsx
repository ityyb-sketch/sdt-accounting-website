import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SDT Accounting" },
      { name: "description", content: "Get in touch with SDT Accounting. Email us at info@sdtaccounting.com or request a callback — we serve clients nationwide, fully remote." },
      { property: "og:title", content: "Contact SDT Accounting" },
      { property: "og:description", content: "Email info@sdtaccounting.com or request a callback — fully remote, nationwide." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="gradient-hero">
        <div className="container-page py-20 md:py-28">
          <p className="reveal text-sm font-semibold uppercase tracking-wider text-gold">Contact</p>
          <h1 className="reveal reveal-delay-1 mt-3 text-4xl md:text-6xl font-bold text-navy max-w-3xl">We're Here to Help</h1>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-muted-foreground max-w-2xl">
            Have a question or ready to get started? Send us a note and we'll be in touch.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <a
            href="mailto:info@sdtaccounting.com"
            className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-navy/10 bg-card p-10 md:p-12 shadow-elegant transition-all hover:-translate-y-1"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-navy-foreground">
              <Mail size={24} />
            </div>
            <div className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold">Email us</div>
            <div className="mt-2 font-display text-3xl md:text-4xl font-bold text-navy break-all group-hover:text-navy/80">
              info@sdtaccounting.com
            </div>
            <p className="mt-4 text-muted-foreground max-w-md">
              Click to start a conversation. We typically respond within one business day.
            </p>
            <div aria-hidden className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
          </a>
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-navy">
                <MapPin size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-navy">Serving Clients Nationwide</h3>
              <p className="mt-2 text-sm text-muted-foreground">Fully remote, wherever you are.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-navy">
                <Clock size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-navy">Response Time</h3>
              <p className="mt-2 text-sm text-muted-foreground">Within one business day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Callback form */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-page py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="reveal md:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">Get a callback</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Tell us about your business</h2>
              <p className="mt-4 text-muted-foreground">
                Send us a message and we'll get back to you within one business day.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Questions? Visit our{" "}
                <Link to="/faq" className="text-navy font-semibold underline underline-offset-2 hover:text-navy/80">FAQs</Link>.
              </p>
            </div>
            <div className="reveal reveal-delay-1 md:col-span-7">
              <form
                action="https://formsubmit.co/info@sdtaccounting.com"
                method="POST"
                className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card space-y-5"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://sdtaccounting.com/contact" />

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30"
                      placeholder="you@business.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                    Phone <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30 resize-y"
                    placeholder="Tell us a little about your business and what you're looking for…"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-navy-foreground shadow-elegant hover:shadow-lg transition-all"
                >
                  Request Callback
                  <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="gradient-navy relative overflow-hidden rounded-3xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-foreground">Prefer to browse first?</h2>
            <p className="mt-2 text-navy-foreground/70">Check our packages or read common questions.</p>
          </div>
          <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground hover:brightness-105 transition-all">
            See Pricing <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
