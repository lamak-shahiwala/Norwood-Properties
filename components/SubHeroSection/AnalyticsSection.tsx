'use client';

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import CTAButton from "../CTAButton";
import useScrollCountAnimation from "../../hooks/ScrollCountAnimation";

export default function AnalyticsSection() {
  const mainSectionRef = useRef<HTMLDivElement | null>(null);

  const satisfaction = useScrollCountAnimation(99);
  const agents = useScrollCountAnimation(56);
  const sales = useScrollCountAnimation(249);

  const reduce = useReducedMotion();

  useEffect(() => {
    satisfaction.sectionRef.current = mainSectionRef.current;
    agents.sectionRef.current = mainSectionRef.current;
    sales.sectionRef.current = mainSectionRef.current;
  }, [satisfaction, agents, sales]);

  useEffect(() => {
    if (reduce) {
      satisfaction.setImmediate?.();
      agents.setImmediate?.();
      sales.setImmediate?.();
    }
  }, [reduce, satisfaction, agents, sales]);

  return (
    <section
      ref={mainSectionRef}
      className="relative h-auto lg:h-screen w-full overflow-hidden font-helvetica"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full min-h-screen object-cover lg:block"
        aria-hidden
      >
        <source src="/Video/HeroBGVideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16 lg:p-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-6">
            <CTAButton href="#">+ADD PROPERTY</CTAButton>

            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight max-w-xl">
              Modern<br />
              Homes. Prime<br />
              Locations.
            </h1>
          </div>

          <div className="flex items-end gap-8 md:gap-12">
            <div className="text-center">
              <div
                className="text-white text-5xl md:text-6xl lg:text-7xl font-light mb-2"
                aria-live="polite"
              >
                {reduce ? "99%" : `${satisfaction.count}%`}
              </div>
              <div className="text-white/80 text-sm font-light">
                Customer satisfaction
              </div>
            </div>

            <div className="text-center">
              <div
                className="text-white text-5xl md:text-6xl lg:text-7xl font-light mb-2"
                aria-live="polite"
              >
                {reduce ? "56+" : `${agents.count}+`}
              </div>
              <div className="text-white/80 text-sm font-light">
                Experience agents
              </div>
            </div>

            <div className="text-center relative">
              <div
                className="text-white text-5xl md:text-6xl lg:text-7xl font-light mb-2"
                aria-live="polite"
              >
                {reduce ? "249" : `${sales.count}`}
              </div>
              <div className="text-white/80 text-sm font-light">
                Total Property sell
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}