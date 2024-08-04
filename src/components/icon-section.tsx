import React from 'react';
import SectionTitle from "@/components/common/section-title";

const icons = [
    {icon: <img src="/logos/aemz-logo.svg" alt="AЭМЗ" />, label: 'АЭМЗ'},
    {icon: <img src="/logos/belshpala.svg" alt="БелШпала" />, label: 'БелШпала'},
    {icon: <img src="/logos/Carbon%20Group.png" alt="Carbon Group" />, label: 'Carbon Group'},
    {icon: <img src="/logos/Gerkules%20logo.svg" alt="Gerkules" />, label: 'Gerkules'},
    {icon: <img src="/logos/GK%20logo.png" alt="ТЭМПО" />, label: 'ТЭМПО'},
    {icon: <img src="/logos/glogistic.png" alt="GLogistic" />, label: 'GLogistic'},
    {icon: <img src="/logos/gok.png" alt="ГОК Ташлинский" />, label: 'ГОК Ташлинский'},
    {icon: <img src="/logos/knauf.png" alt="knauf" />, label: 'knauf'},
    {icon: <img src="/logos/kpz-novliansky.png" alt="КПЗ Новлянский" />, label: 'КПЗ Новлянский'},
    {icon: <img src="/logos/mashstal.jpg" alt="МашСталь" />, label: 'МашСталь'},
    {icon: <img src="/logos/ngbs.jpg" alt="Нефтегазбурсервис" />, label: 'Нефтегазбурсервис'},
    {icon: <img src="/logos/ngok.png" alt="Новокаолиновый ГОК" />, label: 'Новокаолиновый ГОК'},
    {icon: <img src="/logos/novokyznetsky-melkombinat.png" alt="Новокузнецкий мелькомбинат" />, label: 'Новокузнецкий мелькомбинат'},
    {icon: <img src="/logos/novorosmetall.svg" alt="Новоросметалл" />, label: 'Новоросметалл'},
    {icon: <img src="/logos/novorossiiskiy-prokatniy-zavod.svg" alt="Новороссийский прокатный завод" />, label: 'Новороссийский прокатный завод'},
    {icon: <img src="/logos/Novostal%20logo.svg" alt="Новосталь-М" />, label: 'Новосталь-М'},
    {icon: <img src="/logos/omega-trans.png" alt="Омега Транс" />, label: 'Омега Транс'},
    {icon: <img src="/logos/russtal.png" alt="Руссталь" />, label: 'Руссталь'},
    {icon: <img src="/logos/rvrz.png" alt="Рославльский ВРЗ" />, label: 'Рославльский ВРЗ'},
    {icon: <img src="/logos/rzhd.png" alt="РЖД" />, label: 'РЖД'},
    {icon: <img src="/logos/salavatsteklo.jpeg" alt="Салаватстекло" />, label: 'Салаватстекло'},
    {icon: <img src="/logos/sopz.png" alt="СОПЗ" />, label: 'СОПЗ'},
    {icon: <img src="/logos/soya.png" alt="ЗАО Соя" />, label: 'ЗАО Соя'},
    {icon: <img src="/logos/stroysmes.png" alt="Завод Стройсмесь" />, label: 'Завод Стройсмесь'},
    {icon: <img src="/logos/technonikol.svg" alt="Технониколь" />, label: 'Технониколь'},
    {icon: <img src="/logos/tolmachevstiyzavod.png" alt="Толмачевский завод" />, label: 'Толмачевский завод'},
];

export default function IconsSection() {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <SectionTitle title={"Наши клиенты"} className={"ml-10 mb-10"}/>
                <div className="grid md:grid-cols-9 grid-cols-3 gap-8">
                    {icons.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center h-[180px]">
                            <div className="relative group">
                                <div className="text-4xl">
                                    {item.icon}
                                </div>
                                <div
                                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded px-2 py-1">
                                    {item.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

