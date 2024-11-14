'use client'

import {motion} from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/common/section-title';
import FixedBackground from '@/components/fixed-background';
import UnderLine from "@/components/common/under-line";

export default function SectionWithImage() {
    return (
        <div className={"bg-gray-200"}>
            <div
                className="mx-auto px-4 py-20 flex flex-col justify-center relative z-10 max-w-screen-xl lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
                {/* Фоновое изображение */}
                <div className="absolute inset-0 z-0">
                    <FixedBackground className="h-full w-full opacity-50"/>
                </div>

                {/* Контент */}
                <div className="relative z-20">
                    {/* Animated Title */}
                    <motion.figure
                        initial="hidden" // Corresponds to the hidden state defined in variants
                        whileInView="visible" // Trigger animation when in view
                        viewport={{once: true}} // Only animate the first time it comes into view
                        transition={{duration: 0.5}} // Control the speed of the animation
                        variants={{
                            hidden: {opacity: 0, x: -100}, // Hidden state, element is off-screen below
                            visible: {opacity: 1, x: 0}, // Visible state, element slides into view
                        }}
                    >
                        <SectionTitle title="Путь к успеху:" className={""}/>
                        <h2 className={"text-gray-800 text-2xl mb-4 italic"}>как мы стали Лучшим предприятием
                            отрасли</h2>
                        <UnderLine classname={"mb-8"}/>
                    </motion.figure>

                    <motion.figure
                        className="w-full text-gray-800 flex flex-col-reverse gap-4 items-center xl:flex-row xl:justify-between"
                        initial="hidden" // Corresponds to the hidden state defined in variants
                        whileInView="visible" // Trigger animation when in view
                        viewport={{once: true}} // Only animate the first time it comes into view
                        transition={{duration: 0.5, delay: 0.5}} // Control the speed of the animation
                        variants={{
                            hidden: {opacity: 0, y: 100}, // Hidden state, element is off-screen below
                            visible: {opacity: 1, y: 0}, // Visible state, element slides into view
                        }}
                    >

                        <div className={"xl:w-1/2"}>
                            <p className="mb-3 border bg-gray-50 p-4 rounded-xl shadow-sm">
                                В 2019 году наша компания была удостоена почётного звания <span className={"whitespace-nowrap"}>Лучшее предприятие отрасли,</span>
                                заняв 10 место в крае, что подтверждено получением соответствующего сертификата. Этот успех стал
                                возможен
                                благодаря стабильному
                                развитию компании, основанному на трёх ключевых факторах:
                            </p>
                            <ul className="list-disk mb-3 border bg-gray-50 p-4 rounded-xl shadow-sm">
                                <li className="mb-3">
                                    <span
                                        className="font-semibold text-lg">Развитие партнёрских отношений:</span><br/> Мы
                                    активно строим и поддерживаем долгосрочные связи с нашими партнёрами, <span className={"whitespace-nowrap"}>что позволяет</span>  нам эффективно
                                    сотрудничать и достигать общих целей.
                                </li>
                                <li className="mb-3">
                                    <span className="font-semibold text-lg">Современное оборудование:</span><br/> Наше
                                    предприятие
                                    оснащено
                                    передовыми технологиями, обеспечивающими оперативное взаимодействие с клиентами и
                                    партнёрами, а также возможность точного отслеживания подвижного состава на всех
                                    этапах
                                    перемещения.
                                </li>
                                <li className="mb-3">
                                    <span className="font-semibold text-lg">Опытный штат сотрудников:</span><br/> Наша
                                    команда состоит из
                                    высококвалифицированных специалистов, обладающих глубокими знаниями и опытом в своей
                                    области. Это гарантирует блистательный и оперативный уровень обслуживания клиентов и
                                    эффективное выполнение задач.
                                </li>
                            </ul>
                            <p className={"mb-3 border bg-gray-50 p-4 rounded-xl shadow-sm"}>
                                Благодаря этим факторам, наша компания продолжает уверенно двигаться вперёд, укрепляя
                                свои
                                позиции лидера в отрасли.
                            </p>
                        </div>
                        <div className={"flex items-center"}>
                            <Image
                                src="/certificate2019.jpeg"
                                alt="Сертификат Лучшее предприятие отрасли 2019 года"
                                className="lg:w-[600px] h-auto lg:float-right lg:ml-6 lg:mb-6"
                                width={1280}
                                height={720}
                            />
                        </div>
                    </motion.figure>
                </div>
            </div>
        </div>
    );
}