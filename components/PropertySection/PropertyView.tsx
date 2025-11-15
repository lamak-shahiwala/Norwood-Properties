'use client';

import CTAButton from "../CTAButton";
import { Location } from "@/types/location";

export default function PropertyView({ location }: { location: Location }) {
  return (
    <div
      className={`
        property-card
        relative
        w-[calc(80vw-0.5rem)]        
        sm:w-[calc(60vw-0.5rem)]     
        md:w-[calc(47vw-0.5rem)]     
        lg:w-[calc(47vw-0.5rem)]  
        h-[320px] md:h-[450px] lg:h-[700px]
        flex-shrink-0
      `}
      role="listitem"
      aria-label={location.name}
    >
      <img
        src={location.image}
        alt={location.name}
        className="w-full h-full object-cover"
        draggable={false}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute top-4 right-4 z-20">
        <div className="text-white text-md font-light hover:opacity-80 transition">+</div>
      </div>

      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="
            pb-8
            text-white
            text-xl sm:text-2xl md:text-3xl lg:text-6xl  
            font-light font-helvetica
            whitespace-nowrap
          ">
          {location.name}
        </h3>

        <div className="text-sm md:text-md">
          <CTAButton href={`#${location.id}`}>
            +EXPLORE PROJECT
          </CTAButton>
        </div>
      </div>
    </div>
  );
}