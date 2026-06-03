import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SDT Accounting" },
      { name: "description", content: "Get in touch with SDT Accounting. Email us at info@sdtaccounting.com — we serve clients nationwide, fully remote." },
      { property: "og:title", content: "Contact SDT Accounting" },
      { property: "og:description", content: "Email info@sdtaccounting.com — fully remote, nationwide." },
    ],
  }),
  component: Contact,
});

const faqs = [
  { q: "What services do you provide?", a: "We provide bookkeeping, tax preparation, accounting, and financial consulting." },
  { q: "How do I schedule a consultation?", a: "Email us at info@sdtaccounting.com and we'll respond within one business day." },
  { q: "What are your fees?", a: "Pricing is tailored to your needs — contact us for a free quote." },
  { q: "Do you offer remote services?", a: "Yes — we work with clients nationwide, fully remote." },
  { q: "How do I get support?", a: "Email us anytime at info@sdtaccounting.com." },
];

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

      <section className="bg-muted/40 border-y border-border">
        <div className="container-page py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">FAQ</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Frequently asked questions</h2>
              <p className="mt-4 text-muted-foreground">Can't find what you're looking for? Email us — we're happy to help.</p>
            </div>
            <div className="md:col-span-8">
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
        </div>
      </section>
    </>
  );
}
