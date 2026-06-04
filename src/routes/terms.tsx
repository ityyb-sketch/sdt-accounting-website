import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — SDT Accounting" },
      { name: "description", content: "Terms governing your use of SDT Accounting's services and website." },
      { property: "og:title", content: "Terms of Service — SDT Accounting" },
      { property: "og:description", content: "Scope of services, limitations, and your responsibilities as a client." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <section className="gradient-hero">
        <div className="container-page py-20 md:py-24">
          <p className="reveal text-sm font-semibold uppercase tracking-wider text-gold">Legal</p>
          <h1 className="reveal reveal-delay-1 mt-3 text-4xl md:text-5xl font-bold text-navy">Terms of Service</h1>
          <p className="reveal reveal-delay-2 mt-4 text-muted-foreground">Last updated: 2026</p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <article className="reveal prose prose-slate max-w-3xl mx-auto text-muted-foreground leading-relaxed space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-navy">Agreement</h2>
            <p className="mt-3">
              These Terms govern your use of this website and the services provided by SDT Accounting. By engaging us or using this site, you agree to these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Scope of Services</h2>
            <p className="mt-3">
              SDT Accounting provides bookkeeping, tax preparation, accounting, and financial consulting services on a remote basis. The specific scope, deliverables, and fees of each engagement will be defined in a separate written agreement or proposal between SDT Accounting and the client. Work outside that scope is not included unless we agree to it in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Client Responsibilities</h2>
            <p className="mt-3">
              You agree to provide complete, accurate, and timely information and documentation needed for us to perform our services. The accuracy of our work depends on the accuracy of the information you provide. You remain responsible for the truthfulness of any return or document filed on your behalf.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">No Guarantee of Specific Tax Outcomes</h2>
            <p className="mt-3">
              We use professional care and current knowledge of applicable rules to prepare your books and returns, but we cannot and do not guarantee any specific tax outcome — including the size of a refund, a particular liability, or any particular tax position being accepted by a taxing authority. Tax laws change and are subject to interpretation; outcomes ultimately depend on the facts of your situation and the decisions of regulatory bodies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Fees and Payment</h2>
            <p className="mt-3">
              Fees are set out in your engagement agreement. Invoices are due according to the terms stated there. We may pause work on overdue accounts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Confidentiality</h2>
            <p className="mt-3">
              We handle your information in accordance with our{" "}
              <a href="/privacy" className="text-navy font-semibold underline">Privacy Policy</a>. We do not sell or trade your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Limitation of Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, our total liability arising from any engagement is limited to the fees you paid us for the specific services giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Termination</h2>
            <p className="mt-3">
              Either party may terminate an engagement in writing. You remain responsible for fees earned through the termination date and for providing or retrieving records as agreed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Website Content</h2>
            <p className="mt-3">
              Information on this website is provided for general informational purposes only and does not constitute tax, legal, or financial advice. For advice specific to your situation, please contact us to start an engagement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Contact</h2>
            <p className="mt-3">
              Questions about these Terms? Email{" "}
              <a href="mailto:info@sdtaccounting.com" className="text-navy font-semibold underline">info@sdtaccounting.com</a>.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
