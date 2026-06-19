import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs | SDT Accounting" },
      { name: "description", content: "Frequently asked questions about SDT Accounting's bookkeeping, tax preparation, and remote services." },
      { property: "og:title", content: "SDT Accounting FAQs" },
      { property: "og:description", content: "Answers to common questions about our services, fees, and remote process." },
    ],
  }),
  component: Faq,
});

const faqs = [
  { q: "What services do you provide?", a: "We provide bookkeeping, tax preparation, accounting, and financial consulting." },
  { q: "How do I schedule a consultation?", a: "Email us at info@sdtaccounting.com and we'll respond within one business day." },
  { q: "What are your fees?", a: "Pricing is tailored to your needs, contact us for a free quote." },
  { q: "Do you offer remote services?", a: "Yes, we work with clients nationwide, fully remote." },
  { q: "How do I get support?", a: "Email us anytime at info@sdtaccounting.com." },
];

function Faq() {
  return (
    <>
      <section className="gradient-hero">
        <div className="container-page py-20 md:py-28">
          <p className="reveal text-sm font-semibold uppercase tracking-wider text-gold">FAQ</p>
          <h1 className="reveal reveal-delay-1 mt-3 text-4xl md:text-6xl font-bold text-navy max-w-3xl">Frequently asked questions</h1>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-muted-foreground max-w-2xl">
            Can't find what you're looking for? Email us, we're happy to help.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="reveal max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-0 px-6">
                <AccordionTrigger className="text-left font-semibold text-navy py-5 hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="gradient-navy relative overflow-hidden rounded-3xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-foreground">Still have questions?</h2>
            <p className="mt-2 text-navy-foreground/70">We respond within one business day.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground hover:brightness-105 transition-all">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
