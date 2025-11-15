'use client';

import React, { useEffect, useRef, useState } from "react";
import PropertyView from "./PropertyView";
import { Location } from "@/types/location";

export default function PropertySlider() {
  const locations: Location[] = [
    { id: 'los-angeles', name: 'Los Angeles', image: '/images/myrtle-property.webp' },
    { id: 'north-junction', name: 'North Junction', image: '/images/sidney-property.webp' },
    { id: 'dubai', name: 'Dubai', image: '/images/clifton-property.webp' },
  ];

  const infiniteLocations = React.useMemo(() => [...locations, ...locations, ...locations], [locations]);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const measuredCardWidthRef = useRef<number>(0);
  const sectionWidthRef = useRef<number>(0); 

  const [, setDraggingState] = useState(false);

  const measureCard = () => {
    const container = scrollContainerRef.current;
    if (!container) return 0;
    const firstCard = container.querySelector<HTMLElement>('.property-card') || container.firstElementChild as HTMLElement | null;
    if (!firstCard) return 0;
    const rect = firstCard.getBoundingClientRect();
    const style = getComputedStyle(container);
    const gapValue = style.columnGap || style.gap || '0px';
    const gapPx = gapValue.endsWith('px') ? parseFloat(gapValue) : 0;
    const measured = Math.round(rect.width + gapPx);
    measuredCardWidthRef.current = measured;
    sectionWidthRef.current = measured * locations.length;
    return measured;
  };

  const computeCardWidthFromViewport = () => Math.round(window.innerWidth * 0.47 + 4);

  const computeInitialScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return 0;

    if (window.innerWidth >= 1024) {
      const cardWidth = computeCardWidthFromViewport();
      measuredCardWidthRef.current = cardWidth;
      sectionWidthRef.current = cardWidth * locations.length;
      return Math.max(0, sectionWidthRef.current - Math.round(window.innerWidth * 0.28));
    } else {
      const measured = measureCard() || Math.round(window.innerWidth * 0.47 + 4);
      return Math.max(0, measured * locations.length - Math.round(window.innerWidth * 0.18));
    }
  };

  const waitForImages = (timeout = 600) => {
    return new Promise<void>((resolve) => {
      const container = scrollContainerRef.current;
      if (!container) return resolve();
      const imgs = Array.from(container.querySelectorAll('img'));
      if (imgs.length === 0) return resolve();

      let remaining = imgs.length;
      let done = false;
      const tryResolve = () => {
        if (done) return;
        remaining -= 1;
        if (remaining <= 0) {
          done = true;
          resolve();
        }
      };

      imgs.forEach((img) => {
        if ((img as HTMLImageElement).complete) {
          tryResolve();
          return;
        }
        const onLoad = () => {
          img.removeEventListener('load', onLoad);
          img.removeEventListener('error', onLoad);
          tryResolve();
        };
        img.addEventListener('load', onLoad);
        img.addEventListener('error', onLoad);
      });

      setTimeout(() => {
        if (!done) {
          done = true;
          resolve();
        }
      }, timeout);
    });
  };

  const initScroll = async () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    await waitForImages(800);
    await new Promise((r) => requestAnimationFrame(() => r(null)));

    const initial = computeInitialScroll();
    container.scrollLeft = initial;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onPointerDown = (e: PointerEvent) => {
      isPointerDownRef.current = true;
      setDraggingState(true);
      (e.target as Element | null)?.setPointerCapture?.(e.pointerId);
      startXRef.current = e.clientX;
      startScrollLeftRef.current = container.scrollLeft;
      container.style.scrollBehavior = 'auto';
      document.documentElement.style.userSelect = 'none';
      document.documentElement.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDownRef.current) return;
      e.preventDefault();
      const x = e.clientX;
      const walk = (x - startXRef.current) * 2;
      container.scrollLeft = startScrollLeftRef.current - walk;
    };

    const onPointerUpOrCancel = () => {
      if (!isPointerDownRef.current) return;
      isPointerDownRef.current = false;
      setDraggingState(false);
      container.style.scrollBehavior = '';
      document.documentElement.style.userSelect = '';
      document.documentElement.style.cursor = '';
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUpOrCancel);
    window.addEventListener('pointercancel', onPointerUpOrCancel);

    return () => {
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUpOrCancel);
      window.removeEventListener('pointercancel', onPointerUpOrCancel);
    };
  }, [locations.length]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const sectionWidth = sectionWidthRef.current || 0;
        if (sectionWidth <= 0) return;

        if (container.scrollLeft <= 0) {
          container.scrollLeft = sectionWidth;
        } else if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = sectionWidth * 2 - container.clientWidth;
        } else {
          if (container.scrollLeft < sectionWidth * 0.5) {
            container.scrollLeft = sectionWidth + (container.scrollLeft % sectionWidth);
          } else if (container.scrollLeft > sectionWidth * 1.5 + container.clientWidth) {
            container.scrollLeft = sectionWidth + (container.scrollLeft % sectionWidth);
          }
        }
      });
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [locations.length]);

  useEffect(() => {
    initScroll();

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        const cardWidth = computeCardWidthFromViewport();
        measuredCardWidthRef.current = cardWidth;
        sectionWidthRef.current = cardWidth * locations.length;
      } else {
        measureCard();
      }

      const container = scrollContainerRef.current;
      if (!container) return;
      const relative = container.scrollLeft % (sectionWidthRef.current || 1);
      container.scrollLeft = (sectionWidthRef.current || 0) + relative;
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="relative bg-bg-sheet">
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        role="list"
        aria-label="Featured property locations"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-2 items-stretch">
          {infiniteLocations.map((location, index) => (
            <PropertyView key={`${location.id}-${index}`} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}