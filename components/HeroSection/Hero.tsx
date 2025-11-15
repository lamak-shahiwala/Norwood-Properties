'use client'

import React from 'react'
import Image from 'next/image'
import CTAButton from '../CTAButton'
import { IoMdArrowDown } from "react-icons/io";
import HeroTitleMotion from './HeroTitle.motion';

function HeroLG() {
  return (
    <header className="pt-0">
      <div className="w-full min-h-screen px-6 lg:px-8 flex justify-center">

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 w-full items-center">

          <div
            className="
              lg:col-span-5 
              grid lg:grid-rows-8 
              lg:h-screen              
              text-4xl sm:text-5xl md:text-6xl lg:text-[5.2rem]
              leading-[1.75] tracking-[-0.05em] ml-2 lg:-mt-14
            "
          >

            <div className="lg:row-span-6 flex items-center">
              <HeroTitleMotion />
            </div>

            <div className="lg:row-span-2 flex items-start">
              <a href="#analytics" aria-label="Scroll to analytics">
                <IoMdArrowDown className="text-2xl text-black/70 cursor-pointer" />
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-end items-start">
            <div className="w-72 sm:w-[18rem] lg:w-[22rem]">

              <div className="relative h-auto lg:h-[70vh] lg:-mt-56 mr-8">

                <Image
                  src="/Images/HeroImage.webp"
                  alt="Interior preview"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                  priority
                />

                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 hidden lg:block">
                  <CTAButton href="#properties">+EXPLORE PROPERTIES</CTAButton>
                </div>

              </div>

              <div className="mt-4 flex justify-center lg:hidden">
                <CTAButton href="#properties">+EXPLORE PROPERTIES</CTAButton>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

function HeroMobile() {
  const onArrowClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.querySelector('#analytics')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="pt-0">
      <div className="w-full h-auto px-6 lg:px-8 flex justify-center">

        <div className="max-w-7xl w-full">

          <div className="px-2 sm:px-4 md:px-6">
            <div
              className="
                text-3xl sm:text-4xl md:text-5xl
                leading-[1.3] sm:leading-[1.45] md:leading-[1.6]
                tracking-[-0.02em]
                font-helvetica font-light
                mb-4
              "
            >
              <HeroTitleMotion />
            </div>
            <div className="flex items-start">
              <a href="#analytics" onClick={onArrowClick} aria-label="Scroll to analytics" className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange">
                <IoMdArrowDown className="text-2xl mb-8 text-black/70 cursor-pointer" />
              </a>
            </div>
            <div className="mb-6">
            <div className="w-full">
              <div className="relative w-full h-[56vw] sm:h-[48vw] md:h-[40vw] overflow-hidden rounded-sm">
                <Image
                  src="/Images/HeroImage.webp"
                  alt="Interior preview"
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 70vw, 600px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <CTAButton href="#properties">+EXPLORE PROPERTIES</CTAButton>
            </div>
          </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default function Hero() {
  return (
    <>
      <div className="hidden lg:block">
        <HeroLG />
      </div>

      <div className="block lg:hidden">
        <HeroMobile />
      </div>
    </>
  )
}