'use client'
import React, { useState } from 'react';
import SectionTitle from "@/components/common/section-title";

export default function Carousel() {
    const images = [
        '/client-carousel/notebooks.png',
        '/client-carousel/calendar.png',
        '/client-carousel/cake1.png',
        '/client-carousel/cake2.png'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="p-10">
            <SectionTitle title="Мы благодарим партнеров за сотрудничество" className="text-center" />
            <div className="relative w-full max-w-2xl mx-auto my-10">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500"
                         style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Slide ${index}`} className="w-full flex-shrink-0" />
                        ))}
                    </div>
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-2 -ml-10 top-1/2 transform -translate-y-1/2 bg-default-violet-50 text-white p-2 rounded-full"
                >
                    &lt;
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-2 -mr-10 top-1/2 transform -translate-y-1/2 bg-default-violet-50 text-white p-2 rounded-full"
                >
                    &gt;
                </button>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-6 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === currentIndex ? 'bg-default-violet-900' : 'bg-default-violet-50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
