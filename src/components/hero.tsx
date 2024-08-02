import React from 'react';

export default function Hero() {
    return (
        <div className="relative h-[calc(100vh-50px)] flex items-center justify-center text-center bg-gray-900">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                autoPlay
                loop
                muted
            >
                <source src="/Mountain%20Train.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 p-4">
                <h1 className="text-4xl md:text-6xl text-gray-200 font-bold">
                    С нами надежно!
                </h1>
            </div>
        </div>
    );
};