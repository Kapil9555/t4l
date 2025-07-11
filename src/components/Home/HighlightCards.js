'use client';

import Image from 'next/image';
import { H4, Para } from '@/components/custom/ui/text';
import { ContainedButton } from '@/components/custom/ui/Buttons';
import relaxImg1 from '../../../public/products/relaxImg1.jpg';

const highlights = [
  {
    id: 1,
    label: 'RELIABILITY',
    title: 'PERFECT SOUND FOR EVERYONE',
    description: 'Learn ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar ante et nisl scelerisque.',
  },
  {
    id: 2,
    label: 'HIGH QUALITY',
    title: 'CHOISE OF PROFESSIONALS',
    description: 'Learn ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar ante et nisl scelerisque.',
  },
  {
    id: 3,
    label: 'CONVENIENCE',
    title: 'SATISFACTION GUARANTEED',
    description: 'Learn ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar ante et nisl scelerisque.',
  },
];

export default function HighlightCards() {
  return (
    <section className="w-full px-20  grid grid-cols-1 md:grid-cols-3 gap-6">
      {highlights.map((item) => (
        <div
          key={item.id}
          className="relative rounded-xl overflow-hidden text-white text-center h-96"
        >
          <Image
            src={relaxImg1}
            alt="Background"
            fill
            className="object-cover object-center absolute inset-0 -z-20"
          />
          <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(62, 87, 167, 0.9), rgba(166, 206, 57, 0.9))' }}></div>
          <div className="relative z-10 p-10 flex flex-col items-center justify-center gap-4 h-full">
            <Para style={{ fontSize: '0.75rem' }} className="uppercase text-white/80">
              {item.label}
            </Para>
            <H4 className="text-white text-xl font-bold leading-tight">
              {item.title}
            </H4>
            <Para className="text-white/90 text-sm max-w-xs">
              {item.description}
            </Para>
            <ContainedButton className="bg-black/80 text-white px-5 py-2 text-xs rounded-full">
              Learn More
            </ContainedButton>
          </div>
        </div>
      ))}
    </section>
  );
}
