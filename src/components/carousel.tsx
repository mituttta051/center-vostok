'use client'
import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import {AnimatePresence, motion} from 'framer-motion';
import SectionTitle from "@/components/common/section-title";
import Image from "next/image";
import UnderLine from "@/components/common/under-line";

export default function Carousel() {
    const slides = [
        {url: '/client-carousel/notebooks.png'},
        {url: '/client-carousel/cake2.png'},
        {url: '/client-carousel/calendar.png'},
        {url: '/client-carousel/cake1.png'}
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    const [isHovered, setIsHovered] = useState(false);
    // Мы ценим постоянство наших клиентов
    return (
        <div className={'p-20 bg-gray-200'}>
            {/*<h2 className={`text-4xl font-medium animate-fade-in-down opacity-100 text-gray-800 text-center mb-4`}>Мы ценим постоянное сотрудничество с нашими клиентами</h2>*/}
            <SectionTitle title={"Мы ценим постоянство наших клиентов"}
                          className={'text-left mb-4'}/>
            <UnderLine/>
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>

                <div className="relative w-full h-full">
                    {slides.map((slide, slideIndex) => (
                        <motion.div
                            key={slideIndex}
                            initial={{opacity: 0}}
                            animate={{opacity: currentIndex === slideIndex ? 1 : 0}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.3}}
                            className='absolute top-0 left-0 w-full h-full'
                        >
                            <Image src={slides[slideIndex].url} alt={"image"} priority={true} width={1920} height={1080}
                                   className='w-full h-full rounded-2xl bg-center bg-cover duration-500'/>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {isHovered && (
                        <>
                            {/* Left Arrow */}
                            <motion.div
                                className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                                onClick={prevSlide}
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -20}}
                                transition={{duration: 0.3}}
                            >
                                <BsChevronCompactLeft size={30}/>
                            </motion.div>

                            {/* Right Arrow */}
                            <motion.div
                                className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                                onClick={nextSlide}
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: 20}}
                                transition={{duration: 0.3}}
                            >
                                <BsChevronCompactRight size={30}/>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}