'use client';

import Image from 'next/image';
import CTAButton from '../CTAButton';

export default function IntroSection() {
  return (
    <section className="bg-bg-sheet py-16 md:py-24 px-8 md:px-16 lg:px-24 font-helvetica">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p
                className="
                  text-base sm:text-lg md:text-xl lg:text-2xl
                  font-normal
                  md:leading-7 lg:leading-[1.25]
                  tracking-wide
                  max-w-prose md:max-w-lg lg:max-w-none
                  lg:ml-28 lg:mb-16 lg:mt-16 lg:text-nowrap
                "
              >
                Discover stunning residential buildings and modern
                <br className="hidden lg:block" />
                apartments designed for every lifestyle — whether
                <br className="hidden lg:block" />
                you're buying, renting, or investing.
              </p>
            </div>

            <div className="relative">
              <div className="relative inline-block ml-0 lg:ml-28">
                <Image
                  src="/images/myrtle-property.webp"
                  alt="Modern property"
                  width={514}
                  height={484}
                  className="w-full lg:w-[514px] lg:h-[484px] object-cover"
                  sizes="(max-width: 1024px) 100vw, 514px"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-12 left-0 hidden lg:flex bg-brand-orange text-white w-[180px] h-[180px] lg:w-[228px] lg:h-[228px] p-6 lg:p-8 flex-col justify-between">
                <div className="absolute top-4 right-4 text-white text-xl lg:text-2xl font-light">
                  +
                </div>

                <div className="space-y-2 mt-auto">
                  <div className="text-3xl lg:text-4xl font-light">25 Years</div>
                  <div className="text-xs lg:text-sm leading-tight font-light">
                    Of successful<br />
                    experience in trading
                  </div>
                </div>
              </div>

              <div className="mt-4 lg:hidden flex items-center">
                <div className="bg-brand-orange text-white w-[140px] h-[140px] p-4 flex flex-col justify-between relative">
                  <div className="absolute top-3 right-3 text-white text-lg font-light">+</div>

                  <div className="space-y-1 mt-auto">
                    <div className="text-xl font-light">25 Years</div>
                    <div className="text-xs leading-tight font-light">
                      Of successful experience
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col justify-end space-y-6 pb-0 lg:pb-18">
            <div className="space-y-6">
              <CTAButton href="">
                +EXPLORE PROPERTIES
              </CTAButton>

              <div className="grid grid-cols-2 gap-8 md:gap-12">
                <div>
                  <div className="text-xl font-medium pb-2 mb-2 border-b border-black/20">Sell</div>
                  <div className="text-xs leading-relaxed">
                    Speedily say has suitable<br/>disposal add boy.
                  </div>
                </div>

                <div>
                  <div className="text-xl font-medium pb-2 mb-2 border-b border-black/20">Buy</div>
                  <div className="text-xs leading-relaxed">
                    Passage its ten led removal<br/>Preference any astonished
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}