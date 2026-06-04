import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix?: string; label: string };

const stats: Stat[] = [
  { value: 1, suffix: " business day", label: "Typical response time" },
  { value: 50, suffix: " states", label: "Serving clients nationwide" },
  { value: 4, label: "Core service offerings" },
  { value: 100, suffix: "% remote", label: "Work with us from anywhere" },
];

function CountUp({ to, suffix = "", trigger }: { to: number; suffix?: string; trigger: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setN(to); return; }
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, to]);
  return <>{n}{suffix}</>;
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="container-page py-12 md:py-16">
      <div className="reveal rounded-2xl border border-border surface-soft px-6 py-8 md:px-10 md:py-10">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-3xl md:text-4xl font-bold text-navy tabular-nums">
                <CountUp to={s.value} suffix={s.suffix} trigger={visible} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
