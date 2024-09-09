'use client'
import {motion} from 'framer-motion';
import React, {useState} from "react";
import SectionTitle from "@/components/common/section-title";
import ImageViewer from "@/components/common/image-viewer";

export default function SectionWithImage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    return (
        <div className="p-20 flex flex-col">
            {selectedImage && (
                <ImageViewer
                    selectedImage={selectedImage}
                    unselectImage={() => setSelectedImage(null)}
                />
            )}

            {/* Animated Title */}
            <motion.figure
                initial="hidden" // Corresponds to the hidden state defined in variants
                whileInView="visible" // Trigger animation when in view
                viewport={{once: true}} // Only animate the first time it comes into view
                transition={{duration: 0.6, delay: 0.5}} // Control the speed of the animation
                variants={{
                    hidden: {opacity: 0, x: -100}, // Hidden state, element is off-screen below
                    visible: {opacity: 1, x: 0}, // Visible state, element slides into view
                }}
            >
                <SectionTitle title="Достижения"/>
            </motion.figure>

            <motion.figure
                className="w-full"
                initial="hidden" // Corresponds to the hidden state defined in variants
                whileInView="visible" // Trigger animation when in view
                viewport={{once: true}} // Only animate the first time it comes into view
                transition={{duration: 0.6, delay: 1}} // Control the speed of the animation
                variants={{
                    hidden: {opacity: 0, y: 100}, // Hidden state, element is off-screen below
                    visible: {opacity: 1, y: 0}, // Visible state, element slides into view
                }}
            >
                <img
                    src="/certificate2019.jpeg"
                    alt="Сертификат Лучшее предприятие отрасли 2019 года"
                    className="lg:w-[600px] h-auto lg:float-right lg:ml-6 lg:mb-6 cursor-zoom-in"
                    onClick={() => setSelectedImage("/certificate2019.jpeg")}
                />
                <p>
                    В 2019 году наша компания была удостоена почётного звания Лучшее предприятие отрасли, что
                    подтверждено
                    получением соответствующего сертификата. Этот успех стал возможен благодаря стабильному развитию
                    компании,
                    основанному на трёх ключевых факторах:
                </p>
                <ul className="list-disc list-inside">
                    <li>
                        Развитие партнёрских отношений: Мы активно строим и поддерживаем долгосрочные связи с нашими
                        партнёрами, что
                        позволяет нам эффективно сотрудничать и достигать общих целей.
                    </li>
                    <li>
                        Современное оборудование: Наше предприятие оснащено передовыми технологиями, обеспечивающими
                        оперативное
                        взаимодействие с клиентами и партнёрами, а также возможность точного отслеживания
                        перевозимых грузов на всех
                        этапах их перемещения.
                    </li>
                    <li>
                        Опытный штат сотрудников: Наша команда состоит из высококвалифицированных специалистов,
                        обладающих глубокими
                        знаниями и опытом в своей области. Это гарантирует высокий уровень обслуживания клиентов и
                        эффективное
                        выполнение задач.
                    </li>
                </ul>
                <p>
                    Благодаря этим факторам, наша компания продолжает уверенно двигаться вперёд, укрепляя свои
                    позиции лидера в
                    отрасли.
                </p>
            </motion.figure>
        </div>
    );
}
