export function HeroScene() {
  return (
    <div aria-hidden className="relative h-[420px] w-[420px]">
      {/* glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky/30 via-sky-soft to-transparent blur-2xl" />

      {/* orbiting dots */}
      <svg className="absolute inset-0 anim-orbit" viewBox="0 0 420 420">
        <g fill="none" stroke="#3B5BFF40" strokeWidth="1">
          <circle cx="210" cy="210" r="180" strokeDasharray="2 6" />
        </g>
        <g fill="#3B5BFF">
          <circle cx="210" cy="30" r="6" />
          <circle cx="390" cy="210" r="4" opacity="0.7" />
          <circle cx="210" cy="390" r="5" opacity="0.6" />
          <circle cx="30" cy="210" r="3" opacity="0.5" />
        </g>
      </svg>

      {/* floating ledger card */}
      <div className="absolute left-6 top-10 anim-float-slower">
        <svg width="200" height="240" viewBox="0 0 200 240" className="drop-shadow-[0_18px_30px_rgba(40,80,160,0.18)]">
          <rect x="6" y="6" width="188" height="228" rx="14" fill="white" stroke="#DCE3F5" />
          <rect x="6" y="6" width="188" height="44" rx="14" fill="#E8ECFF" />
          <circle cx="26" cy="28" r="5" fill="#3B5BFF" />
          <rect x="40" y="23" width="80" height="10" rx="3" fill="#1B1B1DB3" />
          {[68, 92, 116, 140, 164, 188].map((y, i) => (
            <g key={y}>
              <rect x="22" y={y} width={90 - i * 6} height="8" rx="2" fill="#1B1B1D26" />
              <rect x="130" y={y} width={48} height="8" rx="2" fill="#3B5BFF59" />
            </g>
          ))}
          {/* checkmark */}
          <path
            d="M 140 210 l 12 12 l 22 -28"
            fill="none"
            stroke="#3B5BFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="draw-spark"
          />
        </svg>
      </div>

      {/* floating bar-chart card */}
      <div className="absolute right-2 top-32 anim-float">
        <svg width="220" height="200" viewBox="0 0 220 200" className="drop-shadow-[0_18px_30px_rgba(40,80,160,0.18)]">
          <rect x="6" y="6" width="208" height="188" rx="14" fill="white" stroke="#DCE3F5" />
          <rect x="22" y="22" width="80" height="8" rx="2" fill="#1B1B1D99" />
          <rect x="22" y="36" width="50" height="6" rx="2" fill="#1B1B1D40" />
          {/* baseline */}
          <line x1="22" y1="170" x2="200" y2="170" stroke="#DCE3F5" strokeWidth="1" />
          {/* bars */}
          {[
            { x: 30, h: 50, d: "0s" },
            { x: 60, h: 80, d: "0.15s" },
            { x: 90, h: 40, d: "0.3s" },
            { x: 120, h: 100, d: "0.45s" },
            { x: 150, h: 70, d: "0.6s" },
            { x: 180, h: 110, d: "0.75s" },
          ].map((b) => (
            <rect
              key={b.x}
              x={b.x}
              y={170 - b.h}
              width="18"
              height={b.h}
              rx="3"
              fill="url(#barGrad)"
              className="bar-anim"
              style={{ animationDelay: b.d }}
            />
          ))}
          {/* trend line */}
          <path
            d="M 39 130 L 69 100 L 99 140 L 129 80 L 159 110 L 189 70"
            fill="none"
            stroke="#3B5BFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="draw-spark"
            style={{ strokeDasharray: 400, strokeDashoffset: 400, animationDuration: "2.6s" }}
          />
          <defs>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2F49CC" />
              <stop offset="100%" stopColor="#3B5BFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* coin */}
      <div className="absolute left-44 bottom-6 anim-float">
        <svg width="84" height="84" viewBox="0 0 84 84" className="drop-shadow-[0_10px_20px_rgba(40,80,160,0.25)]">
          <g className="anim-coin" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <circle cx="42" cy="42" r="36" fill="#3B5BFF" />
            <circle cx="42" cy="42" r="30" fill="none" stroke="white" strokeOpacity="0.45" strokeWidth="1.5" />
            <text x="42" y="50" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="28" fill="white">$</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
