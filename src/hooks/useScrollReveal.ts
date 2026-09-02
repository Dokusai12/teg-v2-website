import { useEffect, useCallback, useLayoutEffect } from "react";
import { useIsNarrowViewport768 } from "@/hooks/useIsNarrowViewport768";

function revealAll() {
  document.querySelectorAll(".r,.rl,.rr,.rs").forEach((el) => el.classList.add("v"));
}

export function useScrollReveal() {
  const narrow = useIsNarrowViewport768();

  useLayoutEffect(() => {
    if (!narrow) return;
    revealAll();
  }, [narrow]);

  const run = useCallback(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("v");
        }),
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".r,.rl,.rr,.rs").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (narrow) return;
    const c = run();
    return c;
  }, [narrow, run]);

  useEffect(() => {
    if (narrow) return;
    const t = setTimeout(run, 120);
    return () => clearTimeout(t);
  }, [narrow, run]);
}
