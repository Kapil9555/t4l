
import React from 'react';
import Image from 'next/image';
import { H4, Para } from '../custom/ui/text';
import { ContainedButton, OutlineButton } from '../custom/ui/Buttons';

const ProductCard = ({ product }) => {
    const { title, edition, price, oldPrice, discount, image, description } = product;

    return (
        <div className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transition hover:shadow-2xl hover:-translate-y-1 border border-gray-100 duration-300">

            {/* Discount Badge */}
            {discount && (
                <span className="absolute top-4 left-4 bg-red-600 text-xs text-white font-bold px-2 py-1 z-1 rounded-full shadow">
                    {discount}
                </span>
            )}

            {/* Product Image */}
            <div className="relative h-52 w-full mb-4">
                <Image src={image} alt={title} fill className="object-contain" />
            </div>

            {/* Product Info */}
            <div className="flex-1">
                <Para style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: '#3E57A7', fontWeight: '600' }}>
                    {edition}
                </Para>
                <H4 className="mb-1">{title}</H4>

                <Para style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>
                    {description || 'Experience immersive audio with cutting-edge design and unbeatable comfort.'}
                </Para>

                {/* Pricing */}
                <div className="mt-3">
                    <span className="text-green-600 font-bold text-lg">${price.toFixed(2)}</span>
                    {oldPrice && (
                        <span className="ml-2 text-gray-400 line-through text-sm">
                            ${oldPrice.toFixed(2)}
                        </span>
                    )}
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-row flex-wrap gap-3">
                <OutlineButton >LEARN MORE</OutlineButton>
                <ContainedButton >ADD TO CART</ContainedButton>
            </div>

        </div>
    );
};

export default ProductCard;

