'use client';
import React from 'react';
import Image from "next/image";
import HeroItem from "@/components/vacancy/hero-item";
import Button from "@/components/common/button";

const Hero: React.FC = () => {
    const svg = <svg className="w-6 h-6 text-gray-800 mr-1" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                     viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M5 12h14"/>
    </svg>;
    const handleButtonClick = () => {
        const element = document.getElementById("vacancy-form");
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <div
            className="w-full flex flex-col lg:flex-row items-center justify-between bg-gray-100 text-black py-20 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            <div className="lg:w-1/2">
                <h1 className={"text-5xl font-medium mb-10 animate-fade-in-down text-gray-800 self-stretch"}>
                    Менеджер <span className={"whitespace-nowrap"}>ж/д отдела</span> продаж <span className={"whitespace-nowrap"}>в Краснодаре</span>
                </h1>
                <ul className={"mb-5"}>
                    <HeroItem svg={svg}>
                        стабильность и карьерный рост внутри компании
                    </HeroItem>
                    <HeroItem svg={svg}>
                        доступ к свежей клиентской базе
                    </HeroItem>
                    <HeroItem svg={svg}>
                        <p>дружный коллектив, в котором комфортно работать <span className={"whitespace-nowrap"}>и развиваться</span></p>
                    </HeroItem>
                    <HeroItem svg={svg}>
                        <p>комфортное, полностью оборудованное рабочее место <span className={"whitespace-nowrap"}>в офисе</span></p>
                    </HeroItem>
                </ul>
                <div className={"flex items-center text-gray-900 mb-10 leading-loose"}>
                    <p>
                        Топ-менеджеры, которые доказали свою состоятельность <span className={"whitespace-nowrap"}>и активно</span> участвуют <span className={"whitespace-nowrap"}>в развитии</span> компании,
                    получают ежемесячные премии и заработную плату свыше <span className={"whitespace-nowrap"}>100 тысяч рублей.</span></p>
                </div>
                <Button className={"bg-default-violet-700 hover:bg-default-violet-900"} onClick={handleButtonClick}
                        type={"button"}>
                    Откликнуться
                </Button>
            </div>
            <div className="hidden lg:w-1/2 lg:flex justify-center content-start ml-10">
                <Image
                    width={900}
                    height={900}
                    src="/vacancy/team.jpg"
                    alt="office worker"
                    className=""/>
            </div>
        </div>
    );
}

export default Hero;
