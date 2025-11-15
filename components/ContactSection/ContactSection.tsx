'use client';

import React, { useEffect, useRef, useState } from 'react';
import CTAButton from '../CTAButton';

function LGBranch() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute('autoplay');
    }
  }, []);

  return (
    <section>
      <div className="relative h-screen w-full overflow-hidden font-helvetica">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mt-32"
          ref={videoRef}
        >
          <source src="/Video/ContactBGVideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 backdrop-blur-sm bg-black/40 mt-32" />

        <div className="relative z-10 h-full flex items-center px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
            <div className="space-y-6 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light lg:leading-[1.14] text-nowrap pt-36">
                Stay informed about<br />
                upcoming listings that match<br />
                your budget.
              </h2>

              <p className="text-md font-light">
                Subscribe to be the first to know about my new listings!
              </p>

              <div className="space-y-4 pt-4">
                <div>
                  <input
                    type="email"
                    className="w-full max-w-md text-md bg-transparent border-b border-white/30 pb-2 text-white placeholder-white/80 focus:outline-none focus:border-white transition"
                    placeholder="Email"
                  />
                </div>

                <div className="relative w-full max-w-md">
                  <input
                    type="text"
                    className="w-full max-w-md text-md bg-transparent border-b border-white/30 pb-2 text-white placeholder-white/80 focus:outline-none focus:border-white transition"
                    placeholder="Budget"
                  />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/80 text-md">
                    +
                  </div>
                </div>

                <div className="pt-2 text-sm">
                  <CTAButton>
                    +SUBMIT
                  </CTAButton>
                </div>
              </div>
            </div>

            <div className="grid items-center justify-center lg:justify-start lg:absolute lg:top-20 lg:right-20">
              <div className="bg-brand-orange text-white p-2 md:p-8 lg:pt-16 space-y-6 max-w-md">
                <div className="absolute top-4 right-4 text-white text-xl hover:opacity-80 transition">+</div>
                <div>
                  <div className="text-3xl md:text-4xl font-light mb-2">25 Years</div>
                  <div className="text-sm font-light">
                    Of successful<br />
                    experience in trading
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm justify-between text-white">
                <div className="font-extralight">I WANT TO</div>
                <CTAButton href="">+BUY</CTAButton>
                <CTAButton href="">+SELL</CTAButton>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="relative h-[85vh] w-full overflow-hidden font-helvetica bg-bg-sheet content-center py-24 md:py-32 lg:py-40 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light lg:leading-[1.14] text-nowrap">
                Let's Move<br />
                Something Great<br />
                Together
              </h2>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="text-6xl">+</div>
            </div>

            <div className="space-y-6 text-lg">
              <CTAButton href="">
                +GET STARTED TODAY
              </CTAButton>

              <p className="text-lg font-light leading-relaxed lg:tracking-wide max-w-lg">
                Find your next home or connect with buyers who are already searching. Whether you're moving in or moving on, we're here to make it effortless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileBranch() {
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced && mobileVideoRef.current) {
      mobileVideoRef.current.pause();
      mobileVideoRef.current.removeAttribute('autoplay');
    }
  }, []);

  return (
    <section>
      <div className="relative h-auto w-full overflow-hidden font-helvetica">
        <video
          ref={mobileVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"               
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        >
          <source src="/Video/ContactBGVideo-mobile.mp4" type="video/mp4" />
          <source src="/Video/ContactBGVideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex items-center px-6 py-12">
          <div className="w-full max-w-3xl mx-auto">
            <div className="space-y-6 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
                Stay informed about upcoming listings that match your budget.
              </h2>

              <p className="text-sm font-light">
                Subscribe to be the first to know about my new listings!
              </p>

              <form
                className="space-y-4 pt-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Subscribed: ${email} — budget: ${budget}`);
                }}
              >
                <div>
                  <label htmlFor="mobile-email" className="sr-only">Email</label>
                  <input
                    id="mobile-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    aria-label="Email address"
                    className="w-full text-md bg-transparent border-b border-white/30 pb-2 text-white placeholder-white/80 focus:outline-none focus:border-white transition"
                  />
                </div>

                <div>
                  <label htmlFor="mobile-budget" className="sr-only">Budget</label>
                  <input
                    id="mobile-budget"
                    name="budget"
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Budget"
                    aria-label="Budget"
                    className="w-full text-md bg-transparent border-b border-white/30 pb-2 text-white placeholder-white/80 focus:outline-none focus:border-white transition"
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full inline-block">
                    <CTAButton>
                      +SUBMIT
                    </CTAButton>
                  </button>
                </div>
              </form>

              <div className="mt-6 bg-brand-orange text-white p-6 rounded-md max-w-md relative">
                <div className="absolute top-4 right-4 text-white text-xl">+</div>
                <div className="text-2xl font-light mb-1">25 Years</div>
                <div className="text-sm font-light">Of successful experience in trading</div>
              </div>

              <div className="mt-4 flex items-center justify-between text-white text-sm">
                <div className="font-extralight">I WANT TO</div>
                <div className="flex gap-3">
                  <CTAButton href="">+BUY</CTAButton>
                  <CTAButton href="">+SELL</CTAButton>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-bg-sheet py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
              Let's Move Something Great Together
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
              <CTAButton href="">+GET STARTED TODAY</CTAButton>
              <p className="text-sm font-light max-w-xl">
                Find your next home or connect with buyers who are already searching. Whether you're moving in or moving on, we're here to make it effortless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactSection() {
  const [isLg, setIsLg] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsLg(mq.matches);
    update();

    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);

  if (isLg === null) return <MobileBranch />;

  return isLg ? <LGBranch /> : <MobileBranch />;
}