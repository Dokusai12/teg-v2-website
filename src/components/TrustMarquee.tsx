import { useMemo, useSyncExternalStore } from "react";

const marqueeItems = [
  "Travel",
  "Transport",
  "Accommodation",
  "Ticketing",
  "Tours & Activities",
  "Platforms",
  "Fintech",
  "SaaS",
];

const MOBILE_MQ = "(max-width: 768px)";
const REDUCE_MQ = "(prefers-reduced-motion: reduce)";

function subscribeMobile(cb: () => void) {
  const mq = window.matchMedia(MOBILE_MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getMobileSnapshot() {
  return window.matchMedia(MOBILE_MQ).matches;
}

function subscribeReduce(cb: () => void) {
  const mq = window.matchMedia(REDUCE_MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getReduceSnapshot() {
  return window.matchMedia(REDUCE_MQ).matches;
}

function useIsMobileMarqueeSpeed() {
  return useSyncExternalStore(subscribeMobile, getMobileSnapshot, () => false);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeReduce, getReduceSnapshot, () => false);
}

function MarqueeRow({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 flex-row items-center whitespace-nowrap" aria-hidden={hidden}>
      {marqueeItems.map((item, i) => (
        <span key={`${hidden ? "b" : "a"}-${i}`} className="flex items-center">
          <span className="mx-9 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground/80 transition-colors duration-3 ease-brand hover:text-foreground">
            {item}
          </span>
          <span className="h-1 w-1 rounded-full bg-accent/40" aria-hidden />
        </span>
      ))}
    </div>
  );
}

export function TrustMarquee() {
  const mobile = useIsMobileMarqueeSpeed();
  const reduceMotion = usePrefersReducedMotion();

  const trackStyle = useMemo(() => {
    if (reduceMotion) {
      return { animation: "none" as const };
    }
    const seconds = mobile ? 15 : 40;
    return {
      animation: `marquee ${seconds}s linear infinite`,
    };
  }, [mobile, reduceMotion]);

  return (
    <section className="trust-marquee-section overflow-hidden border-b border-border/70 bg-secondary/40 py-6">
      <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
        Powering protection across every sector
      </p>
      <div className="mx-auto max-w-[1200px] px-4 lg:px-5">
        {/*
          w-max + shrink-0: track width = full duplicated strip (percentage in @keyframes is of this box).
          If a flex parent shrinks the track to the viewport, -50% is wrong and the loop jumps (mobile bug).
        */}
        <div className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div
            suppressHydrationWarning
            className="trust-marquee-track flex w-max shrink-0 flex-row will-change-transform [backface-visibility:hidden]"
            style={trackStyle}
          >
            <MarqueeRow />
            <MarqueeRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
