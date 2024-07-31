'use client'
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import {useState} from "react";
import Hero from "@/components/hero";
import CenteredTextWithBoxes from "@/components/centered-text-with-boxes";
import SectionWithColumns from "@/components/section-with-columns";
import { motion } from 'framer-motion';
import LineGraph from "@/components/line-graph";
import SectionTextImg from "@/components/section-text-img";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const columns = [
        { subtitle: 'Клиентоориентированность', text: 'От расчета, заключения договора до момента оказания услуг Вы потратите всего от 2-х до 5-ти дней. Для расчета стоимости услуг достаточно лишь предоставить информацию о маршруте и перевозимом грузе. Мы предоставим Вам несколько вариантов доставки груза. Наличие парка арендованных и собственных вагонов нам позволяет предложить Вашей компании конкурентную стоимость услуг по предоставлению подвижного состава.\n' },
        { subtitle: 'Качество', text: 'За годы работы наша компания, завоевала признательность и доверие со стороны своих партнеров. Мы готовы предложить своим партнерам высококачественные логистические услуги, соответствующие всем международным стандартам.' },
        { subtitle: 'Комплексные решения', text: 'Работая с доставкой грузов, мы ежедневно сталкиваемся с множеством трудных задач. Наша цель – соответствовать требованиям заказчика. А это значит, клиент должен получить груз (вне зависимости от его объема, габаритов и дальности транспортировки) в максимально короткие сроки и в полной сохранности.\n' },
    ];
    return (
        <>
            <Header toggleMenu={toggleMenu}/>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
            <Hero/>
            <CenteredTextWithBoxes/>
            <SectionWithColumns title="Ценности компании" columns={columns} />
            <LineGraph/>
            <SectionTextImg/>
        </>
    )
}
