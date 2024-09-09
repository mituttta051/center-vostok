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
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div
            className="flex flex-col md:flex-row items-center justify-between bg-gray-100 text-black py-20 px-40 ">
            <div className="md:w-1/2">
                <h1 className={"text-5xl font-bold mb-10 animate-fade-in-down text-gray-800"}>
                    Менеджер отдела продаж в Краснодаре
                </h1>
                <ul className={"mb-5"}>
                    <HeroItem svg={svg}>
                        стабильность и карьерный рост внутри компании
                    </HeroItem>
                    <HeroItem svg={svg}>
                        доступ к свежей клиентской базе
                    </HeroItem>
                    <HeroItem svg={svg}>
                        дружный коллектив, в котором комфортно работать и развиваться
                    </HeroItem>
                    <HeroItem svg={svg}>
                        комфортное, полностью оборудованное рабочее место в офисе
                    </HeroItem>
                </ul>
                <div className={"flex items-center text-gray-900 mb-10 leading-loose"}>
                    Топ-менеджеры, которые доказали свою состоятельность и активно участвуют в развитии компании,
                    получают ежемесячные премии и заработную плату свыше 100 тысяч рублей.
                </div>
                <Button className={"bg-default-violet-700 hover:bg-default-violet-900"} onClick={handleButtonClick} type={"button"}>
                    Откликнуться
                </Button>
            </div>
            <div className="md:w-1/2 flex justify-center content-start">
                <Image
                    width={400}
                    height={400}
                    src="/office-worker.png"
                    alt="office worker"
                    className=""/>
            </div>
        </div>
    );
}

export default Hero;
