"use client";

import { useEffect, useRef, useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!open) return;
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      menuBtnRef.current?.focus();
    } else {
      const first = panelRef.current?.querySelector<HTMLElement>("a,button");
      first?.focus();
    }
  }, [open]);

  return (
    <nav className="sticky top-0 z-40">
      <div className="bg-brand-orange text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-6">
              <div className="text-2xl font-semibold">
                Norwood Properties
                <span className="text-white/90">
                  <sup>+</sup>
                </span>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <span className="h-[1px] w-8 bg-white/20" />
                <span className="hidden md:block text-sm">1997</span>
                <span className="h-[1px] w-96 bg-white/20" />
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-8 text-sm uppercase tracking-wider">
              <a
                className="hidden sm:inline-block hover:underline"
                href="#properties"
              >
                Properties
              </a>
              <a className="hidden sm:inline-block hover:underline" href="">
                Studio
              </a>
              <a className="hidden sm:inline-block hover:underline" href="">
                Process
              </a>
              <button aria-label="add property" className="px-2">
                +ADD PROPERTY
              </button>
            </div>

            <div className="flex items-center gap-2 sm:hidden">
              <button
                ref={menuBtnRef}
                aria-controls="mobile-menu"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {open ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiOutlineMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`sm:hidden bg-brand-orange text-white transition-[max-height,opacity,transform] duration-300 ease-out overflow-hidden ${
          open
            ? "max-h-[500px] opacity-100 transform-none"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
        aria-hidden={!open}
      >
        <div className="px-6 pt-4 pb-6">
          <div className="flex flex-col gap-4">
            <a
              href="#properties"
              onClick={() => setOpen(false)}
              className="block text-base uppercase tracking-wider hover:underline"
            >
              Properties
            </a>
            <a
              href=""
              onClick={() => setOpen(false)}
              className="block text-base uppercase tracking-wider hover:underline"
            >
              Studio
            </a>
            <a
              href=""
              onClick={() => setOpen(false)}
              className="block text-base uppercase tracking-wider hover:underline"
            >
              Process
            </a>
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="mt-2 text-left py-2 px-3 bg-white/10 rounded-sm"
            >
              +ADD PROPERTY
            </button>

            <div className="border-t border-white/10 mt-4 pt-4">
              <div className="text-sm text-white/90">
                Norwood Properties <span className="text-white/70">• 1997</span>
              </div>
              <div className="mt-2 text-xs text-white/70">
                Discover curated residences & services
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
