'use client'

import Image from 'next/image';
import { H2, H3, Para } from '@/components/custom/ui/text';
import { Button, ContainedButton, OutlineButton } from '@/components/custom/ui/Buttons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import relax from '../../../public/products/relaxImg1.jpg';
import headphone from '../../../public/products/headphone.png';

const slides = [
  {
    id: 1,
    image: relax,
    product: headphone,
    title: 'HEADPHONES KLM + LEATHER CASE + FREE DELIVERY',
    price: '$195.00',
    description:
      'Praesent nec finibus massa. Phasellus id auctor lacus, at iaculis lorem. Donec quis arcu elit. In vehicula purus sem, eu mattis est lacinia sit amet.',
  },
  {
    id: 2,
    image: relax,
    product: headphone,
    title: 'WIRELESS HEADSET + FREE POUCH + FAST SHIPPING',
    price: '$215.00',
    description:
      'Suspendisse potenti. Vivamus id lorem varius, fermentum elit in, ullamcorper libero. Integer vitae laoreet ipsum.',
  },
];

export default function HeroOfferSlider() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-gray-500">SPECIAL OFFERS</p>
        <div className="text-center mb-12">
          <H2>CHOOSE THE BEST</H2>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="hero-slider"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="grid grid-cols-1 relative md:grid-cols-2 gap-8 items-center">
                {/* <div className="absolute  left-1/2 transform -translate-x-1/2 z-10">
                  <Image
                    src={slide.product}
                    alt="Headphones"
                    width={'auto'}
                    height={350}
                  />
                </div> */}
                {/* Left Image Section */}
                <div className="">
                  <Image
                    src={slide.image}
                    alt="Person with headphones"
                    width={'auto'}
                    height={500}
                    className="rounded-xl"
                  />

                </div>

                {/* Right Text Section */}
                <div>
                  <H3>
                    {slide.title.split('+').map((text, i) => (
                      <span key={i} className={i > 0 ? 'text-brandBlue' : ''}>
                        {text}
                        {i < slide.title.split('+').length - 1 ? '+' : ' '}
                      </span>
                    ))}
                  </H3>
                  <p className="text-gray-600 mt-4">
                    BEST PRICE: <span className="text-[#3E57A7] font-semibold">{slide.price}</span>
                  </p>

                  {/* Countdown (Static) */}
                  <div className="flex gap-4 mt-6 mb-6">
                    {['DAYS', 'HOURS', 'MINUTES', 'SECONDS'].map((label, idx) => (
                      <div
                        key={idx}
                        className="text-center border-2 border-[#3E57A7] h-15 w-15 rounded-full"
                      >
                        <div className="text-lg font-semibold text-gray-700">0</div>
                        <div className="text-[10px] text-gray-500">{label}</div>
                      </div>
                    ))}
                  </div>

                  <Para>{slide.description}</Para>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-4">
                    <OutlineButton >LEARN MORE</OutlineButton>
                    <ContainedButton >ADD TO CART</ContainedButton>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
