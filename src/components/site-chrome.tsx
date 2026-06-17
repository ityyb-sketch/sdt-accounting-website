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

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const linkCls = "text-sm font-medium text-navy/80 hover:text-navy transition-colors cursor-pointer";
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <NavAnchor hash="top" className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-navy text-navy-foreground text-xs tracking-tight">SDT</span>
          SDT Accounting
        </NavAnchor>
        <nav className="hidden md:flex items-center gap-7">
          <NavAnchor hash="top" className={linkCls}>Home</NavAnchor>
          <NavAnchor hash="about" className={linkCls}>About</NavAnchor>
          <NavAnchor hash="services" className={linkCls}>Services</NavAnchor>
          <NavAnchor hash="pricing" className={linkCls}>Pricing</NavAnchor>
          <NavAnchor hash="faq" className={linkCls}>FAQs</NavAnchor>
          <NavAnchor hash="contact" className={linkCls}>Contact</NavAnchor>
          <NavAnchor hash="contact" className="inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-navy-foreground shadow-sm hover:bg-navy/90 transition-all hover:shadow-elegant">
            Get Started
          </NavAnchor>
        </nav>
        <button className="md:hidden text-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
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
  const linkCls = "text-[#A7D9CE] hover:text-[#E7F5F2] transition-colors cursor-pointer";
  return (
    <footer className="bg-[#042F2A] text-[#E7F5F2] mt-24">
      <div className="container-page py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-lg font-semibold text-[#E7F5F2]">SDT Accounting</div>
          <p className="mt-2 text-sm text-[#A7D9CE] max-w-xs">
            Expert bookkeeping and tax preparation. Serving clients nationwide, fully remote.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-semibold text-[#E7F5F2] mb-1">Navigate</div>
          <a href="/" className={linkCls}>Home</a>
          <a href="/#about" className={linkCls}>About</a>
          <a href="/#services" className={linkCls}>Services</a>
          <a href="/#pricing" className={linkCls}>Pricing</a>
          <a href="/#faq" className={linkCls}>FAQs</a>
          <a href="/#contact" className={linkCls}>Contact</a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-semibold text-[#E7F5F2] mb-1">Legal</div>
          <Link to="/privacy" className={linkCls}>Privacy Policy</Link>
          <Link to="/terms" className={linkCls}>Terms of Service</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-semibold text-[#E7F5F2] mb-1">Contact</div>
          <a href="mailto:info@sdtaccounting.com" className={linkCls}>info@sdtaccounting.com</a>
          <span className="text-[#A7D9CE]">Fully remote, nationwide</span>
        </div>
      </div>
      <div className="border-t border-[#E7F5F2]/10">
        <div className="container-page py-5 text-xs text-[#A7D9CE] flex flex-wrap justify-between gap-2">
          <span>© 2026 SDT Accounting. All rights reserved.</span>
          <a href="mailto:info@sdtaccounting.com" className="hover:text-[#E7F5F2]">info@sdtaccounting.com</a>
        </div>
      </div>
    </footer>
  );
}
