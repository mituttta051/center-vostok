import React from 'react';
import SectionTitle from "@/components/common/section-title";

export default function TrainCarriages() {

    const images = [
        {src: '/trains/train1.png', text: "Собственный подвижной состав"},
        {src: '/trains/train2.png', text: "Выгодные тарифы грузоперевозок"},
        {src: '/trains/train3.png', text: "Надежные партнеры"},
        {src: '/trains/train4.png', text: "Личный менеджер"},
        {src: '/trains/train5.png', text: "Широкий спектр услуг (в том числе ЭТРАН)"},
    ];
    return (
        <div className={"h-screen flex flex-col justify-center"}>
            <SectionTitle title={"Наши преимущества"} className={"text-center mb-20"}/>
            <div className="flex items-center justify-center">
                <div className="flex">
                    {images.map((image, index: number) => (
                        <div key={index} className="relative">
                            <img src={image.src} alt={image.text} className="relative w-30 object-cover"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};