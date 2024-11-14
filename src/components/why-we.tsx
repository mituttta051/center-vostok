import React from "react";
import FixedBackground from "@/components/fixed-background";
import {FaBolt, FaChartLine, FaCoins, FaPuzzlePiece, FaTrophy, FaUserGroup} from "react-icons/fa6";
import UnderLine from "@/components/common/under-line";
import {motion} from 'framer-motion';

const iconClassname = "w-6 h-6";
const data = [
    {
        subtitle: 'Клиентоориентированность',
        description: <p>Ваш процесс с нами начинается с расчета стоимости услуг. Вам необходимо просто предоставить информацию <span className={"whitespace-nowrap"}>о маршруте </span><span className={"whitespace-nowrap"}>и характеристиках</span> груза. Мы предложим Вам несколько вариантов доставки, учитывая ваши потребности.</p>,
        icon: <FaUserGroup className={iconClassname}/>
    },
    {
        subtitle: 'Качество',
        description: <p>За годы работы наша компания, завоевала признательность и доверие со стороны своих партнеров. Мы готовы предложить Вам высококачественные логистические услуги, соответствующие всем международным стандартам.</p>,
        icon: <FaTrophy className={iconClassname}/>
    },
    {
        subtitle: 'Комплексные решения',
        description: <p>Наша команда решает сложные логистические задачи ежедневно. Мы стремимся полностью удовлетворять потребности клиентов, обеспечивая быструю <span className={"whitespace-nowrap"}>и безопасную</span> доставку грузов любой сложности, независимо от их объема, размеров или расстояния.</p>,
        icon: <FaPuzzlePiece className={iconClassname}/>
    },
    {
        subtitle: 'Скорость',
        description: <p className="text-md font-medium">От расчета, заключения договора до момента оказания услуг Вы потратите всего <span className={"whitespace-nowrap"}>от 2 до 5 дней.</span></p>,
        icon: <FaBolt className={iconClassname}/>
    },
    {
        subtitle: 'Цена',
        description: <p>Благодаря нашему парку собственных <span className={"whitespace-nowrap"}>и арендованных</span> вагонов, мы можем предложить Вашей компании конкурентоспособные цены на предоставление подвижного состава.</p>,
        icon: <FaCoins className={iconClassname}/>
    },
    {
        subtitle: 'Стратегическое развитие',
        description: <p>Фокусируемся на повышении качества сервиса <span className={"whitespace-nowrap"}> и расширении</span> спектра предлагаемых услуг.</p>,
        icon: <FaChartLine className={iconClassname}/>
    }
];

export default function WhyWe() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-20 text-gray-200">
            <FixedBackground className="h-full w-full bg-[url('/WhyWe/rails.jpg')]"/>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            {/* Semi-transparent overlay */}
            <div
                className="relative z-10 max-w-screen-xl lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                >
                    <h2 className={`text-4xl font-bold animate-fade-in-down opacity-100 text-left mb-4 text-gray-200`}>Почему
                        клиенты выбирают именно нас?</h2>
                    <UnderLine classname={'bg-white mb-20'}/>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((text, index) => (
                        <motion.div key={index} className={"flex justify-between text-left space-x-3"}
                            initial={{opacity: 0, y: 100}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.05}}
                            viewport={{once: true}}
                        >
                            <div className={"w-10 h-10 flex items-center justify-center -mt-1.5"}>
                                {text.icon}
                            </div>
                            <div className=" grow flex flex-col">
                                <p className="text-xl font-extrabold text-left">{text.subtitle}</p>
                                <hr className="w-full border-gray-200 my-2"/>
                                {text.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}