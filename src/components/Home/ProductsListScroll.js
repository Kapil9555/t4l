'use client';
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import p1 from '../../../public/products/p1.jpg';
import p2 from '../../../public/products/p2.jpg';
import p3 from '../../../public/products/p3.jpg';
import p4 from '../../../public/products/p4.jpg';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: 'SPORT BEAT ATX',
    edition: 'ERGO EDITION',
    price: 155,
    oldPrice: 350,
    discount: '20% DISCOUNT',
    image: p1,
    description: 'Designed for comfort during workouts. High-fidelity audio and sweat-resistant build.',
  },
  {
    id: 2,
    title: 'HIPSTER BEAT HR',
    edition: 'COLOREX EDITION',
    price: 190,
    image: p2,
    description: 'Perfect for casual use. Stylish, lightweight, and delivers crisp sound.',
  },
  {
    id: 3,
    title: 'SPORT BEAT RTX',
    edition: 'ERGO EDITION',
    price: 185,
    image: p3,
    description: 'Built for active lifestyles with durable design and booming bass.',
  },
  {
    id: 4,
    title: 'STREET BEAT FX',
    edition: 'LIMITED EDITION',
    price: 210,
    image: p4,
    description: 'Bold, modern look with excellent noise isolation and punchy sound.',
  },
];


const ProductsListScroll = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(max-width: 640px)': {
        slides: { perView: 1.2, spacing: 15 },
      },
    },
  });

  const handlePrev = () => instanceRef.current?.prev();
  const handleNext = () => instanceRef.current?.next();

  return (
    <section className="relative px-20 py-16 bg-gray-50">
      {/* Side Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        &#8594;
      </button>

      <div ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <div key={product.id} className="keen-slider__slide rounded-2xl">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsListScroll;
