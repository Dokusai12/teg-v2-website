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

const itemClass =
  "mx-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground shrink-0";

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
    <section className="trust-marquee-section overflow-hidden border-b border-border py-5">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-5">
        {/*
          w-max + shrink-0: track width = full duplicated strip (percentage in @keyframes is of this box).
          If a flex parent shrinks the track to the viewport, -50% is wrong and the loop jumps (mobile bug).
        */}
        <div
          suppressHydrationWarning
          className="trust-marquee-track flex w-max shrink-0 flex-row will-change-transform [backface-visibility:hidden]"
          style={trackStyle}
        >
          <div className="flex shrink-0 flex-row whitespace-nowrap">
            {marqueeItems.map((item, i) => (
              <span key={`a-${i}`} className={itemClass}>
                {item}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 flex-row whitespace-nowrap" aria-hidden>
            {marqueeItems.map((item, i) => (
              <span key={`b-${i}`} className={itemClass}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
