import { useEffect, useState } from "react";

const SESSION_KEY = "sdt_loaded_v1";

export function LoadingCounter() {
  const [mounted, setMounted] = useState(false);
  const [pct, setPct] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMounted(true);

    if (reduce) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setHidden(true);
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");
    const start = performance.now();
    const duration = 1100;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setPct(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setHidden(true), 220);
        setTimeout(() => setMounted(false), 900);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-white transition-opacity duration-500 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="font-display text-6xl md:text-7xl font-bold tabular-nums text-navy tracking-tight">
          {pct.toString().padStart(2, "0")}
          <span className="text-[#3B5BFF]">%</span>
        </div>
        <div className="h-px w-48 overflow-hidden bg-navy/10">
          <div
            className="h-full bg-[#3B5BFF] transition-[width] duration-100 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          SDT Accounting
        </div>
      </div>
    </div>
  );
}
