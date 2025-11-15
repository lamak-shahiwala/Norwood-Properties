'use client';

import CTAButton from "../CTAButton";
import { Property } from "@/types/properties";

export default function PropertyDetails({ property }: { property: Property }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0 mt-12 px-8 md:px-16 lg:px-24">
      <div className="relative h-[250px] md:h-[350px] lg:h-[450px]">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-[280px] p-6 lg:p-8 lg:pt-1 lg:pb-0 flex flex-col justify-between font-helvetica">
        <div className="text-sm font-medium">{property.year}</div>

        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-light">{property.name}</h2>

          <p className="text-xs leading-relaxed">
            {property.address}
          </p>

          <div className="flex flex-wrap gap-6 text-xs pt-2">
            <div>
              <span className="font-medium">{property.area}</span>
            </div>
            <div>
              <span className="font-medium">{property.bath} Bath</span>
            </div>
            <div>
              <span className="font-medium">{property.bed} Bed</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-6">
          <div className="text-xl font-helvetica font-medium">
            {property.price}
          </div>

          <div className="text-sm">
            <CTAButton href={`#${property.id}`}>
              +EXPLORE PROJECT
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}