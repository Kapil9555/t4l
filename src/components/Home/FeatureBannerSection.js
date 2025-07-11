import Image from 'next/image';
import React from 'react';
import relaxImg1 from '../../../public/products/relaxImg1.jpg';  // Replace with correct path
import relaxImg2 from '../../../public/products/relaxImg2.jpg'; // Replace with correct path
import { H2, H3, Para } from '../custom/ui/text';
import { Button } from '../custom/ui/Buttons';

const BannerCard = ({ image, label, heading }) => (
    <div className="relative w-full h-[500px] md:h-[400px] px-20 overflow-hidden ">
        {/* Background Image */}
        <Image
            src={image}
            alt={heading}
            layout="fill"
            objectFit="cover"
            className="z-0"
        />

        {/* Blackish Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Text Content */}
        <div className="absolute inset-0 z-20 text-white p-8 flex  space-y-2 flex-col justify-center">
            <div>
                <Para style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</Para>
                <H3>{heading}</H3>
            </div>
            <Para className="max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar ante et nisl scelerisque.
            </Para>
            <div className="flex items-center space-x-4 mt-5">
                <Button variant="primary">LEARN MORE</Button>

            </div>
        </div>
    </div>


);

const FeatureBannerSection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 ">
            <BannerCard
                image={relaxImg1}
                label="RELAX COLLECTION"
                heading="YOUR PERFECT SOUND"
            />
            <BannerCard
                image={relaxImg2}
                label="STREET COLLECTION"
                heading="NOISE IS NOT A PROBLEM"
            />
        </section>
    );
};

export default FeatureBannerSection;
