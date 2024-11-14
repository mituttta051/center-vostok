import React from "react";
import SectionTitle from "@/components/common/section-title";
import UnderLine from "@/components/common/under-line";

export default function IconSection() {
    const imageClassname = " h-32 md:h-40";
    const icons = [
        {icon: <img className={imageClassname} src="/logos/aemz-logo.svg" alt="AЭМЗ"/>, label: 'АЭМЗ'},
        {icon: <img className={imageClassname} src="/logos/belshpala.svg" alt="БелШпала"/>, label: 'БелШпала'},
        {
            icon: <img className={imageClassname} src="/logos/Carbon%20Group.png" alt="Carbon Group"/>,
            label: 'Carbon Group'
        },
        {icon: <img className={imageClassname} src="/logos/Gerkules%20logo.svg" alt="Gerkules"/>, label: 'Gerkules'},
        {icon: <img className={imageClassname} src="/logos/GK%20logo.png" alt="ТЭМПО"/>, label: 'ТЭМПО'},
        {icon: <img className={imageClassname} src="/logos/glogistic.png" alt="GLogistic"/>, label: 'GLogistic'},
        {icon: <img className={imageClassname} src="/logos/gok.png" alt="ГОК Ташлинский"/>, label: 'ГОК Ташлинский'},
        {icon: <img className={imageClassname} src="/logos/knauf.png" alt="knauf"/>, label: 'knauf'},
        {
            icon: <img className={imageClassname} src="/logos/kpz-novliansky.png" alt="КПЗ Новлянский"/>,
            label: 'КПЗ Новлянский'
        },
        {icon: <img className={imageClassname} src="/logos/mashstal.jpg" alt="МашСталь"/>, label: 'МашСталь'},
        {
            icon: <img className={imageClassname} src="/logos/ngbs.jpg" alt="Нефтегазбурсервис"/>,
            label: 'Нефтегазбурсервис'
        },
        {
            icon: <img className={imageClassname} src="/logos/ngok.png" alt="Новокаолиновый ГОК"/>,
            label: 'Новокаолиновый ГОК'
        },
        {
            icon: <img className={imageClassname} src="/logos/novokyznetsky-melkombinat.png"
                       alt="Новокузнецкий мелькомбинат"/>, label: 'Новокузнецкий мелькомбинат'
        },
        {
            icon: <img className={imageClassname} src="/logos/novorosmetall.svg" alt="Новоросметалл"/>,
            label: 'Новоросметалл'
        },
        {
            icon: <img className={imageClassname} src="/logos/novorossiiskiy-prokatniy-zavod.svg"
                       alt="Новороссийский прокатный завод"/>, label: 'Новороссийский прокатный завод'
        },
        {
            icon: <img className={imageClassname} src="/logos/Novostal%20logo.svg" alt="Новосталь-М"/>,
            label: 'Новосталь-М'
        },
        {icon: <img className={imageClassname} src="/logos/omega-trans.png" alt="Омега Транс"/>, label: 'Омега Транс'},
        {icon: <img className={imageClassname} src="/logos/russtal.png" alt="Руссталь"/>, label: 'Руссталь'},
        {
            icon: <img className={imageClassname} src="/logos/rvrz.png" alt="Рославльский ВРЗ"/>,
            label: 'Рославльский ВРЗ'
        },
        {icon: <img className={imageClassname} src="/logos/rzhd.png" alt="РЖД"/>, label: 'РЖД'},
        {
            icon: <img className={imageClassname} src="/logos/salavatsteklo.jpeg" alt="Салаватстекло"/>,
            label: 'Салаватстекло'
        },
        {icon: <img className={imageClassname} src="/logos/sopz.png" alt="СОПЗ"/>, label: 'СОПЗ'},
        {icon: <img className={imageClassname} src="/logos/soya.png" alt="ЗАО Соя"/>, label: 'ЗАО Соя'},
        {
            icon: <img className={imageClassname} src="/logos/stroysmes.png" alt="Завод Стройсмесь"/>,
            label: 'Завод Стройсмесь'
        },
        {icon: <img className={imageClassname} src="/logos/technonikol.svg" alt="Технониколь"/>, label: 'Технониколь'},
        {
            icon: <img className={imageClassname} src="/logos/tolmachevstiyzavod.png" alt="Толмачевский завод"/>,
            label: 'Толмачевский завод'
        },
    ];

    return (
        <section id="client" className={'p-20'}>
            <SectionTitle title={"Наши партнеры"} className="mb-4"/>
            <UnderLine classname={"mb-12"}/>
            <div
                className="mt-4 mb-20 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {icons.map((item, index) => (
                        <li key={index}>
                            {item.icon}
                        </li>
                    ))}
                </ul>

                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                    aria-hidden="true">
                    {icons.map((item, index) => (
                        <li key={index}>
                            {item.icon}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}