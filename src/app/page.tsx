'use client'
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import React, {useState} from "react";
import Hero from "@/components/hero";
import CenteredTextWithBoxes from "@/components/centered-text-with-boxes";
import SectionWithColumns from "@/components/section-with-columns";
import LineGraph from "@/components/line-graph";
import TrainCarriages from "@/components/train-carriages";
import Carousel from "@/components/carousel";
import IconsSection from "@/components/icon-section";
import VacancySection from "@/components/vacancy-card";
import SectionWithImage from "@/components/section-with-image";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Header toggleMenu={toggleMenu}/>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
            <Hero/>
            <CenteredTextWithBoxes/>
            <SectionWithColumns/>
            <LineGraph/>
            <SectionWithImage/>
            <TrainCarriages/>
            <IconsSection/>
            <Carousel/>
            <VacancySection/>

        </>
    )
}
