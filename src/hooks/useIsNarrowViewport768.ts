import { useSyncExternalStore } from "react";

/** Matches TrustMarquee / home “mobile” breakpoint (not Tailwind md). */
const QUERY = "(max-width: 768px)";

function subscribe(cb: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

/** True at viewport widths where we apply mobile-only perf optimizations. */
export function useIsNarrowViewport768() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
