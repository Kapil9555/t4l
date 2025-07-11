'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { H2 } from '@/components/custom/ui/text';
import { useState } from 'react';
import p1 from '../../../public/products/p1.jpg';
import p2 from '../../../public/products/p2.jpg';
import p3 from '../../../public/products/p3.jpg';
import p4 from '../../../public/products/p4.jpg';
import ProductsListScroll from './ProductsListScroll';


const filters = ['All', 'Sport', 'Professionals', 'DJ', 'Relax', 'Club'];

export default function ProductSliderSection() {

    const [activeFilter, setActiveFilter] = useState('All');

    return (
        <section className="w-full bg-white py-16 ">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <p className="text-center text-sm text-gray-500">NEW ARRIVALS</p>
                <div className="text-center mb-6">
                    <H2>SOMETHING NEW FOR YOU</H2>
                    <div className="mt-4 flex justify-center items-center gap-6 flex-wrap">
                        {filters.map((filter, idx) => (
                            <div
                                key={idx}
                                className={`pr-4 ${idx !== filters.length - 1 ? 'border-r border-gray-300' : ''}`}
                            >
                                <button
                                    onClick={() => setActiveFilter(filter)}
                                    className={`text-sm cursor-pointer font-medium px-5 py-2 rounded-full uppercase tracking-wide transition-all duration-200 ${filter === activeFilter
                                            ? 'bg-[#3E57A7] text-white'
                                            : 'text-gray-600 hover:text-brandBlue hover:bg-gray-100'
                                        }`}
                                >
                                    {filter}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Cards Carousel */}
                <ProductsListScroll />

            </div>
        </section>
    );
}
