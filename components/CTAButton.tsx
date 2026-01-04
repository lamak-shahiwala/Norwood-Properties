"use client";
import React from "react";

export default function CTAButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-block font-helvetica bg-[#9E8743] text-white text-md font-normal p-[6px] shadow-sm hover:opacity-95 transition whitespace-nowrap"
    >
      {children}
    </a>
  );
}
