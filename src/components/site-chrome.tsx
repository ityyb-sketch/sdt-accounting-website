import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavAnchorProps = {
  hash: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function NavAnchor({ hash, className, children, onClick }: NavAnchorProps) {
  const href = hash === "top" ? "/" : `/#${hash}`;
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        if (typeof window === "undefined") return;
        if (window.location.pathname === "/") {
          e.preventDefault();
          const target =
            hash === "top"
              ? null
              : document.getElementById(hash);
          const lenis = (window as any).__lenis;
          if (hash === "top") {
            if (lenis) lenis.scrollTo(0, { offset: 0 });
            else window.scrollTo({ top: 0, behavior: "smooth" });
          } else if (target) {
            if (lenis) lenis.scrollTo(target, { offset: -72 });
            else target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          try {
            history.replaceState(null, "", hash === "top" ? "/" : `/#${hash}`);
          } catch {}
        }
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}

function CountryFlags({ className = "" }: { className?: string }) {
  const flagCls = "h-4 w-6 rounded-[2px] shadow-sm ring-1 ring-black/10";
  return (
    <div className={`flex items-center gap-1.5 ${className}`} aria-label="Serving the United States and Canada">
      <svg viewBox="0 0 24 16" className={flagCls} xmlns="http://www.w3.org/2000/svg" role="img">
        <title>United States</title>
        <rect width="24" height="16" fill="#B22234" />
        <g fill="#fff"><rect y="1.23" width="24" height="1.23" /><rect y="3.69" width="24" height="1.23" /><rect y="6.15" width="24" height="1.23" /><rect y="8.62" width="24" height="1.23" /><rect y="11.08" width="24" height="1.23" /><rect y="13.54" width="24" height="1.23" /></g>
        <rect width="10.4" height="8.62" fill="#3C3B6E" />
        <g fill="#fff"><circle cx="2" cy="1.6" r="0.5" /><circle cx="4.6" cy="1.6" r="0.5" /><circle cx="7.2" cy="1.6" r="0.5" /><circle cx="3.3" cy="3.2" r="0.5" /><circle cx="5.9" cy="3.2" r="0.5" /><circle cx="8.5" cy="3.2" r="0.5" /><circle cx="2" cy="4.8" r="0.5" /><circle cx="4.6" cy="4.8" r="0.5" /><circle cx="7.2" cy="4.8" r="0.5" /><circle cx="3.3" cy="6.4" r="0.5" /><circle cx="5.9" cy="6.4" r="0.5" /><circle cx="8.5" cy="6.4" r="0.5" /></g>
      </svg>
      <svg viewBox="0 0 24 16" className={flagCls} xmlns="http://www.w3.org/2000/svg" role="img">
        <title>Canada</title>
        <rect width="24" height="16" fill="#fff" />
        <rect width="6" height="16" fill="#FF0000" />
        <rect x="18" width="6" height="16" fill="#FF0000" />
        <g transform="translate(-2.45,2.0) scale(0.063)" fill="#FF0000"><path d="m228.6 0-13.4 25c-1.5 2.7-4.3 2.5-7.1 1l-9.7-5 7.2 38.5c1.5 7-3.4 7-5.8 4l-16.9-19-2.7 9.6c-.3 1.2-1.7 2.5-3.8 2.2l-21.4-4.5 5.6 20.4c1.2 4.5 2.1 6.4-1.2 7.6l-7.6 3.6 36.7 29.8c1.5 1.1 2.2 3.2 1.7 5.1l-3.2 10.5c12.6-1.4 23.9-3.6 36.5-5 1.1-.1 3 1.7 3 3l-1.7 38.8h6l-1-38.8c0-1.3 1.8-3.1 2.9-3 12.6 1.4 23.9 3.6 36.5 5l-3.2-10.5c-.5-1.9.2-4 1.7-5.1l36.7-29.8-7.6-3.6c-3.3-1.2-2.4-3.1-1.2-7.6l5.6-20.4-21.4 4.5c-2.1.3-3.5-1-3.8-2.2l-2.7-9.6-16.9 19c-2.4 3-7.3 3-5.8-4l7.2-38.5-9.7 5c-2.8 1.5-5.6 1.7-7.1-1z" /></g>
      </svg>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const linkCls = "text-sm font-medium text-navy/80 hover:text-navy transition-colors cursor-pointer";
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <NavAnchor hash="top" className="flex items-center gap-2.5">
          <img src="/logo-mark.png" alt="SDT Accounting logo" className="h-9 w-9" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-navy">SDT Accounting</span>
            <span className="text-[11px] font-medium text-muted-foreground">Sam’s Daybooks &amp; Tax</span>
          </span>
        </NavAnchor>
        <div className="flex items-center gap-3 sm:gap-4">
          <CountryFlags />
        <nav className="hidden md:flex items-center gap-7">
          <NavAnchor hash="top" className={linkCls}>Home</NavAnchor>
          <NavAnchor hash="about" className={linkCls}>About</NavAnchor>
          <NavAnchor hash="services" className={linkCls}>Services</NavAnchor>
          <NavAnchor hash="pricing" className={linkCls}>Pricing</NavAnchor>
          <NavAnchor hash="faq" className={linkCls}>FAQs</NavAnchor>
          <NavAnchor hash="contact" className={linkCls}>Contact</NavAnchor>
          <NavAnchor hash="contact" className="cta-pulse inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-navy-foreground shadow-sm hover:bg-navy/90 transition-all hover:shadow-elegant">
            Get Started
          </NavAnchor>
        </nav>
        <button className="md:hidden text-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page flex flex-col gap-1 py-4">
            <NavAnchor hash="top" onClick={close} className="py-2 text-navy">Home</NavAnchor>
            <NavAnchor hash="about" onClick={close} className="py-2 text-navy">About</NavAnchor>
            <NavAnchor hash="services" onClick={close} className="py-2 text-navy">Services</NavAnchor>
            <NavAnchor hash="pricing" onClick={close} className="py-2 text-navy">Pricing</NavAnchor>
            <NavAnchor hash="faq" onClick={close} className="py-2 text-navy">FAQs</NavAnchor>
            <NavAnchor hash="contact" onClick={close} className="py-2 text-navy">Contact</NavAnchor>
            <NavAnchor hash="contact" onClick={close} className="mt-2 inline-flex w-fit items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-navy-foreground">
              Get Started
            </NavAnchor>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const linkCls = "text-[#9AA6BE] hover:text-[#EEF2FF] transition-colors cursor-pointer";
  return (
    <footer className="bg-[#1B1B1D] text-[#EEF2FF] mt-24">
      <div className="container-page py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src="/logo-primary-dark.png" alt="SDT Accounting | Sam’s Daybooks & Tax" className="h-12 w-auto" />
          <p className="mt-2 text-sm text-[#9AA6BE] max-w-xs">
            Expert bookkeeping and tax preparation. Serving clients nationwide, fully remote.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { label: "Facebook", href: "#", path: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8v8.44C19.61 23.1 24 18.1 24 12.07z" },
              { label: "Instagram", href: "#", path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07c-1.27.06-2.15.26-2.91.56-.79.31-1.46.72-2.12 1.38C1.36 2.67.95 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.12-1.38.66-.66 1.07-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.12C21.33 1.36 20.66.95 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" },
              { label: "X", href: "#", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" },
            ].map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                aria-label={soc.label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-[#9AA6BE] ring-1 ring-white/10 transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-[#3B5BFF] hover:text-white hover:ring-[#3B5BFF]"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true"><path d={soc.path} /></svg>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-semibold text-[#EEF2FF] mb-1">Navigate</div>
          <a href="/" className={linkCls}>Home</a>
          <a href="/#about" className={linkCls}>About</a>
          <a href="/#services" className={linkCls}>Services</a>
          <a href="/#pricing" className={linkCls}>Pricing</a>
          <a href="/#faq" className={linkCls}>FAQs</a>
          <a href="/#contact" className={linkCls}>Contact</a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-semibold text-[#EEF2FF] mb-1">Legal</div>
          <Link to="/privacy" className={linkCls}>Privacy Policy</Link>
          <Link to="/terms" className={linkCls}>Terms of Service</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-semibold text-[#EEF2FF] mb-1">Contact</div>
          <a href="mailto:info@sdtaccounting.com" className={linkCls}>info@sdtaccounting.com</a>
          <span className="text-[#9AA6BE]">Fully remote, nationwide</span>
        </div>
      </div>
      <div className="border-t border-[#EEF2FF]/10">
        <div className="container-page py-5 text-xs text-[#9AA6BE] flex flex-wrap justify-between gap-2">
          <span>© 2026 SDT Accounting. All rights reserved.</span>
          <a href="mailto:info@sdtaccounting.com" className="hover:text-[#EEF2FF]">info@sdtaccounting.com</a>
        </div>
      </div>
    </footer>
  );
}
