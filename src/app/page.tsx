'use client'
import React from "react";
import Hero from "@/components/hero";
import CenteredTextWithBoxes from "@/components/centered-text-with-boxes";
import SectionWithColumns from "@/components/section-with-columns";
import LineGraph from "@/components/line-graph";
import TrainCarriages from "@/components/train-carriages";
import Carousel from "@/components/carousel";
import IconsSection from "@/components/icon-section";
import VacancySection from "@/components/vacancy/vacancy-card";
import SectionWithImage from "@/components/section-with-image";
import InspiringQuote from "@/components/qoute";
import Overlay from "@/components/common/overlay";
import ContactSection from "@/components/contact-section";

export default function Home() {
    return (
        <div className={"relative bg-gradient-to-b from-gray-100 via-purple-50 via-80% to-purple-200"}>
            <Hero/>
            <CenteredTextWithBoxes/>
            <SectionWithColumns/>
            <LineGraph/>
            <SectionWithImage/>
            <TrainCarriages/>
            <IconsSection/>
            <Carousel/>
            <VacancySection/>
            <InspiringQuote/>
            <ContactSection/>
            <Overlay/>
        </div>
    )
}
