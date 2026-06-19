import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | SDT Accounting" },
      { name: "description", content: "How SDT Accounting collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy | SDT Accounting" },
      { property: "og:description", content: "Our commitment to confidentiality and responsible data handling." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <section className="gradient-hero">
        <div className="container-page py-20 md:py-24">
          <p className="reveal text-sm font-semibold uppercase tracking-wider text-gold">Legal</p>
          <h1 className="reveal reveal-delay-1 mt-3 text-4xl md:text-5xl font-bold text-navy">Privacy Policy</h1>
          <p className="reveal reveal-delay-2 mt-4 text-muted-foreground">Last updated: 2026</p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <article className="reveal prose prose-slate max-w-3xl mx-auto text-muted-foreground leading-relaxed space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-navy">Introduction</h2>
            <p className="mt-3">
              SDT Accounting ("we," "us," or "our") respects your privacy and is committed to protecting the personal and financial information you share with us. This policy explains what we collect, how we use it, and the choices you have.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Information We Collect</h2>
            <p className="mt-3">
              We collect information you provide directly, such as your name, email, phone number, business details, and any financial records you share so we can perform bookkeeping, tax preparation, or consulting services. We may also receive limited technical information (such as IP address and browser type) when you visit this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">How We Use Your Information</h2>
            <p className="mt-3">
              We use your information solely to deliver the services you've engaged us for, communicate with you about your account, prepare and file required documents, and comply with our legal and professional obligations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Confidentiality</h2>
            <p className="mt-3">
              Your financial information is treated with the highest level of confidentiality. We use reputable, industry-standard tools (such as QuickBooks Online and Xero) to store and transmit data securely, and access is limited to authorized personnel who need it to serve you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">We Do Not Sell Your Data</h2>
            <p className="mt-3">
              We do not sell, rent, or trade your personal or financial information. We only share information with third parties when required by law, when necessary to perform the services you've requested (for example, e-filing a tax return), or with your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Data Retention</h2>
            <p className="mt-3">
              We retain client records for as long as needed to provide services and to meet legal, tax, and professional record-keeping requirements. After that period, records are securely deleted or anonymized.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Your Rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your personal information at any time, subject to legal record-keeping requirements. To make a data request, email us at{" "}
              <a href="mailto:info@sdtaccounting.com" className="text-navy font-semibold underline">info@sdtaccounting.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Changes to This Policy</h2>
            <p className="mt-3">
              We may update this policy from time to time. Material changes will be reflected on this page with a revised "last updated" date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Contact</h2>
            <p className="mt-3">
              Questions about this policy? Email{" "}
              <a href="mailto:info@sdtaccounting.com" className="text-navy font-semibold underline">info@sdtaccounting.com</a>.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
