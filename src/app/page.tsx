'use client'
import React from "react";
import Hero from "@/components/hero";
import LineGraph from "@/components/line-graph";
import VacancySection from "@/components/vacancy/vacancy-card";
import SectionWithImage from "@/components/section-with-image";
import InspiringQuote from "@/components/quote";
import ContactSection from "@/components/contact-section";
import IconSection from "@/components/icon-section";
import Carousel from "@/components/carousel";
import FeatureSection from "@/components/feature-section";
import WhyWe from "@/components/why-we";
// <div className={"relative from-gray-100 via-gray-100 via-90% to-purple-200 w-full"}>
export default function Home() {
    return (
        <div className={"relative bg-gray-100 w-full"}>
            <Hero/>
            <FeatureSection/>
            <WhyWe/>
            <LineGraph/>
            <SectionWithImage/>
            <IconSection/>
            <ContactSection/>
            <Carousel/>
            <VacancySection/>
            <InspiringQuote/>
        </div>
    )
}
