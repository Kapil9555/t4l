'use client';

import Image from 'next/image';
import { H2, Para } from '@/components/custom/ui/text';
import { ContainedButton } from '@/components/custom/ui/Buttons';

import acc1 from '../../../public/products/acc1.jpg';
import acc2 from '../../../public/products/acc2.jpg';
import acc3 from '../../../public/products/acc3.jpg';
import acc4 from '../../../public/products/acc4.jpg';
import acc5 from '../../../public/products/acc5.jpg';
import acc6 from '../../../public/products/acc6.jpg';
import acc7 from '../../../public/products/acc7.jpg';

const accessories = [
  { id: 1, image: acc1 },
  { id: 2, image: acc2 },
  { id: 3, image: acc3, discount: '20% DISCOUNT', oldPrice: 32, price: 24 },
  { id: 4, image: acc4 },
  { id: 5, image: acc5 },
  { id: 6, image: acc6 },
  { id: 7, image: acc7 },
  { id: 8, image: acc1, bestPrice: true, oldPrice: 32, price: 24 },
  { id: 9, image: acc2 },
  { id: 10, image: acc3 },
];

export default function AccessoriesGrid() {
  return (
    <section className="w-full py-20 px-4 md:px-12">
      <div className="text-center mb-12">
        <Para style={{ fontSize: '0.75rem' }} className="text-gray-400 uppercase">ACCESSORIES</Para>
        <H2>CHOOSING IN ONE STYLE</H2>
        <div className="h-1 w-8 bg-brandGreen mt-2 mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {accessories.map((item) => (
          <div key={item.id} className="text-center cursor-pointer relative">
            {item.discount && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full">
                {item.discount}
              </span>
            )}
            {item.bestPrice && (
              <span className="absolute top-2 left-2 bg-brandGreen text-white text-[10px] px-2 py-0.5 rounded-full">
                BEST PRICE
              </span>
            )}
            <div className="flex justify-center mb-2">
              <Image src={item.image} alt={`acc-${item.id}`} width={80} height={80} />
            </div>
            <Para style={{ fontSize: '0.625rem' }} className="text-brandGreen uppercase font-medium">MODERN EDITION</Para>
            <Para style={{ fontSize: '0.875rem' }} className="font-semibold text-gray-800 mb-1">MODERN BEAT NINE</Para>
            <Para style={{ fontSize: '0.875rem' }} className="text-gray-800">
              {item.price ? (
                <>
                  <span className="text-brandGreen font-semibold mr-1">${item.price.toFixed(2)}</span>
                  <span className="line-through text-xs text-gray-500">${item.oldPrice.toFixed(2)}</span>
                </>
              ) : (
                '$24.00'
              )}
            </Para>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <ContainedButton className="bg-brandGreen text-white px-6 py-2 rounded-full hover:brightness-105">
          View All Accessories
        </ContainedButton>
      </div>
    </section>
  );
}
