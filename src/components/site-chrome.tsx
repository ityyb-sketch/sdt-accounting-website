import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const linkCls = "text-sm font-medium text-navy/80 hover:text-navy transition-colors";
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-navy text-navy-foreground text-xs tracking-tight">SDT</span>
          SDT Accounting
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-navy font-semibold" }}>Home</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-navy font-semibold" }}>About</Link>
          <Link to="/services" className={linkCls} activeProps={{ className: "text-navy font-semibold" }}>Services</Link>
          <Link to="/pricing" className={linkCls} activeProps={{ className: "text-navy font-semibold" }}>Pricing</Link>
          <Link to="/faq" className={linkCls} activeProps={{ className: "text-navy font-semibold" }}>FAQs</Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: "text-navy font-semibold" }}>Contact</Link>
          <Link to="/contact" className="inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-navy-foreground shadow-sm hover:bg-navy/90 transition-all hover:shadow-elegant">
            Get Started
          </Link>
        </nav>
        <button className="md:hidden text-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page flex flex-col gap-1 py-4">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 text-navy">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2 text-navy">About</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="py-2 text-navy">Services</Link>
            <Link to="/pricing" onClick={() => setOpen(false)} className="py-2 text-navy">Pricing</Link>
            <Link to="/faq" onClick={() => setOpen(false)} className="py-2 text-navy">FAQs</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2 text-navy">Contact</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex w-fit items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-navy-foreground">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const linkCls = "text-[#C9BFB2] hover:text-[#FBF9F6] transition-colors";
  return (
    <footer className="bg-[#0F0C0A] text-[#FBF9F6] mt-24">
      <div className="container-page py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-lg font-semibold text-[#FBF9F6]">SDT Accounting</div>
          <p className="mt-2 text-sm text-[#C9BFB2] max-w-xs">
            Expert bookkeeping and tax preparation. Serving clients nationwide, fully remote.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-semibold text-[#FBF9F6] mb-1">Navigate</div>
          <Link to="/" className={linkCls}>Home</Link>
          <Link to="/about" className={linkCls}>About</Link>
          <Link to="/services" className={linkCls}>Services</Link>
          <Link to="/pricing" className={linkCls}>Pricing</Link>
          <Link to="/faq" className={linkCls}>FAQs</Link>
          <Link to="/contact" className={linkCls}>Contact</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-semibold text-[#FBF9F6] mb-1">Legal</div>
          <Link to="/privacy" className={linkCls}>Privacy Policy</Link>
          <Link to="/terms" className={linkCls}>Terms of Service</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-semibold text-[#FBF9F6] mb-1">Contact</div>
          <a href="mailto:info@sdtaccounting.com" className={linkCls}>info@sdtaccounting.com</a>
          <span className="text-[#C9BFB2]">Fully remote, nationwide</span>
        </div>
      </div>
      <div className="border-t border-[#FBF9F6]/10">
        <div className="container-page py-5 text-xs text-[#C9BFB2] flex flex-wrap justify-between gap-2">
          <span>© 2026 SDT Accounting. All rights reserved.</span>
          <a href="mailto:info@sdtaccounting.com" className="hover:text-[#FBF9F6]">info@sdtaccounting.com</a>
        </div>
      </div>
    </footer>
  );
}

