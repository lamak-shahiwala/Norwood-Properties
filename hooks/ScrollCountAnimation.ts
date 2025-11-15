import { useCallback, useEffect, useRef, useState } from "react";

type ReturnShape = {
  count: number;
  sectionRef: React.RefObject<HTMLElement | null>;
  setImmediate: () => void;
};

export default function useScrollCountAnimation(end: number): ReturnShape {
  const [count, setCount] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafId = useRef<number | null>(null);

  const cancelRaf = useCallback(() => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  const setImmediate = useCallback(() => {
    cancelRaf();
    setCount(Math.round(end));
  }, [cancelRaf, end]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      const isInViewport = rect.top < windowHeight && rect.bottom > 0;

      if (!isInViewport) {
        cancelRaf();
        rafId.current = requestAnimationFrame(() => setCount(0));
        return;
      }

      const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);

      cancelRaf();
      rafId.current = requestAnimationFrame(() => {
        setCount(Math.round(progress * end));
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelRaf();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [end, cancelRaf]);

  useEffect(() => {
    return () => cancelRaf();
  }, [cancelRaf]);

  return { count, sectionRef, setImmediate };
}
