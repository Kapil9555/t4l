'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { H2, Para } from '@/components/custom/ui/text';
import { ContainedButton, OutlineButton } from '@/components/custom/ui/Buttons';

import bg1 from '../../../public/products/bg1.jpg';

import headphone from '../../../public/products/headphone.png';
import thumb1 from '../../../public/products/thumb1.png';
import thumb2 from '../../../public/products/thumb2.png';
import thumb3 from '../../../public/products/thumb3.png';


const slides = [
  {
    id: 1,
    title: 'HEADPHONES MDX',
    subtitle: 'MODERN COLLECTION',
    features: [
      '20.000h of high quality music',
      'perfect insulation',
      '5 years guaranteed work',
      'consectetur adipiscing elit',
      'porta tortor sit amet',
      'feugiat augue placerat',
    ],
    price: '$195.00',
    image: headphone,
    thumbnails: [thumb1, thumb2, thumb3],
    bgGradient: 'bg-gradient-to-r from-[#3E57A7]/80 to-brandGreen/80',
  },

   {
    id: 1,
    title: 'HEADPHONES MDX',
    subtitle: 'MODERN COLLECTION',
    features: [
      '20.000h of high quality music',
      'perfect insulation',
      '5 years guaranteed work',
      'consectetur adipiscing elit',
      'porta tortor sit amet',
      'feugiat augue placerat',
    ],
    price: '$195.00',
    image: headphone,
    thumbnails: [thumb1, thumb2, thumb3],
    bgGradient: 'bg-gradient-to-r from-[#3E57A7]/80 to-brandGreen/80',
  },
];


export default function ModernCollection() {
  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        className="hero-gradient-slider"
         a11y={{ enabled: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`flex items-center justify-center gap-12 px-12 py-20 text-white ${slide.bgGradient}`}
            >
              {/* Thumbnails */}
              <div className="flex flex-col gap-4">
                {slide.thumbnails.map((thumb, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/20"
                  >
                    <Image src={thumb} alt={`thumb-${idx}`} width={32} height={32} />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative z-10">
                <Image src={slide.image} alt={slide.title} width={400} height={400} />
              </div>

              {/* Text Content */}
              <div className="max-w-xl">
                <p className="text-sm uppercase tracking-wide opacity-80">
                  {slide.subtitle}
                </p>
                <H2 className="text-white text-4xl font-bold mt-2 mb-4">
                  {slide.title}
                </H2>
                <Para className="text-white/80 mb-4">
                  Praesent nec finibus massa. Phasellus id auctor lacus, at iaculis
                  lorem. Donec quis arcu elit. In vehicula purus sem, eu mattis est
                  lacinia.
                </Para>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm mb-6">
                  {slide.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-lg">✔️</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Buttons */}
                <div className="flex items-center gap-4">
                  <span className="text-white text-sm">
                    BEST PRICE: <strong>{slide.price}</strong>
                  </span>
                  <OutlineButton >
                    Learn More
                  </OutlineButton>
                  <ContainedButton >
                    Add to Cart
                  </ContainedButton>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
