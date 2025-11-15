'use client';

import PropertyDetails from "./PropertyDetails";
import CTAButton from "../CTAButton";
import { useState } from "react";
import type { Property } from "../../types/properties";
import PropertySlider from "./PropertySlider";

export default function PropertiesSection() {
  const properties: Property[] = [
    {
      id: 'haig',
      name: 'Haig',
      year: 2024,
      address: 'Van huren st quincy, threefold, 02301',
      area: '925 M²',
      bath: 3,
      bed: 2,
      price: '$24,458 USD',
      image: '/images/haig-property.webp'
    },
    {
      id: 'myrtle-pool-house',
      name: 'Myrtle Pool House',
      year: 2023,
      address: 'Myrtle avenue, brooklyn, NY 11205',
      area: '1200 M²',
      bath: 4,
      bed: 3,
      price: '$32,500 USD',
      image: '/images/myrtle-property.webp'
    },
    {
      id: 'clifton',
      name: 'Clifton',
      year: 2023,
      address: 'Clifton road, bristol, BS8 3JT',
      area: '850 M²',
      bath: 2,
      bed: 2,
      price: '$19,800 USD',
      image: '/images/clifton-property.webp'
    },
    {
      id: 'sidney-house',
      name: 'Sidney House',
      year: 2022,
      address: 'Sidney street, cambridge, CB2 3HX',
      area: '1050 M²',
      bath: 3,
      bed: 3,
      price: '$28,900 USD',
      image: '/images/sidney-property.webp'
    },
    {
      id: 'sweetman',
      name: 'Sweetman',
      year: 2025,
      address: 'Sweet street, cambridge, CB2 3HX',
      area: '1250 M²',
      bath: 2,
      bed: 3,
      price: '$14,900 USD',
      image: '/images/clifton-property.webp'
    }
  ];

  const [selectedProperty, setSelectedProperty] = useState<Property>(properties[0]);

  return (
    <section className="bg-bg-sheet py-16 md:py-24 font-helvetica">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight whitespace-nowrap">
              Latest<br />
              Properties
            </h1>
          </div>

          <div className="flex-1 flex justify-center">
            <div
              className="
                flex gap-3
                overflow-x-auto whitespace-nowrap py-2 md:py-0
                md:flex-col md:gap-2 md:overflow-visible
              "
              role="tablist"
              aria-label="Choose property"
            >
              {properties.map((property) => {
                const active = selectedProperty.id === property.id;
                return (
                  <button
                    key={property.id}
                    onClick={() => setSelectedProperty(property)}
                    role="tab"
                    aria-selected={active}
                    className={`flex items-center gap-2 text-sm transition-colors text-left ${
                      active ? 'text-brand-orange font-medium' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span
                      className={`text-lg leading-none transition-opacity duration-150 ${
                        active ? 'opacity-100' : 'opacity-0'
                      }`}
                      aria-hidden
                    >
                      ■
                    </span>

                    <span
                      className={active ? 'relative' : ''}
                      style={
                        active
                          ? { textDecoration: 'line-through', textDecorationColor: 'currentColor' }
                          : {}
                      }
                    >
                      {property.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex-1 flex justify-end items-start text-sm">
            <CTAButton href="#">+EXPLORE ALL PROPERTIES</CTAButton>
          </div>
        </div>
      </div>

      <div className="w-full">
        <PropertyDetails property={selectedProperty} />
      </div>

      <div className="w-full space-y-12">
        <div className="px-8 md:px-16 lg:px-24 w-full min-h-96 flex items-center justify-center">
          <h2 className="pt-32 text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Mapped with<br className="hidden md:block" /> Purpose, Built with<br className="hidden md:block" />Heart
          </h2>
        </div>

        <PropertySlider />
      </div>
    </section>
  );
}