import React from 'react';
import {motion} from 'framer-motion'

export default function Hero() {
    return (
        <div className="relative h-[calc(100vh-50px)] flex items-center justify-center text-center bg-gray-900">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                autoPlay
                loop
                muted
            >
                <source src="/beutiful-trains.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 p-4">
                <motion.div
                    className={"text-5xl md:text-7xl text-white font-bold"}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 3}}
                >
                    С нами надежно!

                </motion.div>
            </div>
        </div>
    );
};