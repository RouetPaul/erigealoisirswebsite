'use client';
import { useEffect, useRef, useState } from 'react';

export function KpiCounter({
  value,
  prefix = '',
  suffix = '',
  durationMs = 1200,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / durationMs);
              setDisplay(Math.floor(value * (1 - Math.pow(1 - t, 3))));
              if (t < 1) requestAnimationFrame(step);
            };
            if (prefersReduced) {
              setDisplay(value);
            } else {
              requestAnimationFrame(step);
            }
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, durationMs]);

  return (
    <div ref={ref} className="text-3xl font-semibold tabular-nums">
      {prefix}
      {display.toLocaleString()} {suffix}
    </div>
  );
}
