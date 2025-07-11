// HeroSection.js

import Image from 'next/image';
import headphones from '../../../public/products/headphone.png';
import { H1, Para } from '../custom/ui/text';
import { Button } from '../custom/ui/Buttons';


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-between px-20 py-20 bg-gradient-to-r from-[#a3a3a3] via-[#5c76c7] to-[#4a4a4a] text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#a3a3a3] via-[#5c76c7] to-[#4a4a4a] opacity-80 z-0" />

      {/* Content */}
      <div className="z-10 max-w-xl">
        <Para style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          Professional Edition
        </Para>
        <H1 style={{ marginBottom: '1.5rem' }}>REAL BEAT TRX</H1>
        <Para style={{ marginBottom: '1.5rem' }}>
          In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec.
        </Para>

        <ul className="mb-6 space-y-2">
          <li className="flex items-center space-x-2">
            <span className="text-green-300">✔</span>
            <span>20,000h of high quality music</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-300">✔</span>
            <span>Perfect insulation</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-300">✔</span>
            <span>5 years guaranteed work</span>
          </li>
        </ul>

        <p className="font-semibold mb-4">
          BEST PRICE: <span className="text-white font-bold">$195.00</span>
        </p>

        <div className="flex items-center space-x-4">
          <Button variant="primary">LEARN MORE</Button>
          <Button
            bgColor="#3E57A7"
            textColor="white"
            className="hover:brightness-110"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Image */}
      <div className="hidden md:block absolute right-10 bottom-10 md:static md:ml-10 z-10">
        <Image
          src={headphones}
          alt="Headphones"
          width={'auto'}
          height={450}
          className="object-contain"
        />
      </div>
    </section>
  );
}
