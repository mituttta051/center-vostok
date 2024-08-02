import React from 'react';
import {
    FaAnchor,
    FaAndroid,
    FaApple,
    FaBeer,
    FaBicycle,
    FaBus,
    FaCar,
    FaCat,
    FaCoffee,
    FaDog,
    FaFish,
    FaPlane,
    FaRocket,
    FaShip,
    FaSkull,
    FaTrain
} from 'react-icons/fa';
import SectionTitle from "@/components/common/section-title";

const icons = [
    {icon: <FaBeer/>, label: 'Beer'},
    {icon: <FaCoffee/>, label: 'Coffee'},
    {icon: <FaApple/>, label: 'Apple'},
    {icon: <FaAndroid/>, label: 'Android'},
    {icon: <FaCat/>, label: 'Cat'},
    {icon: <FaDog/>, label: 'Dog'},
    {icon: <FaFish/>, label: 'Fish'},
    {icon: <FaCar/>, label: 'Car'},
    {icon: <FaBicycle/>, label: 'Bicycle'},
    {icon: <FaBus/>, label: 'Bus'},
    {icon: <FaPlane/>, label: 'Plane'},
    {icon: <FaTrain/>, label: 'Train'},
    {icon: <FaShip/>, label: 'Ship'},
    {icon: <FaRocket/>, label: 'Rocket'},
    {icon: <FaSkull/>, label: 'Skull'},
    {icon: <FaAnchor/>, label: 'Anchor'},
    {icon: <FaAnchor/>, label: 'Anchor'},
    // Add more icons as needed
];

export default function IconsSection() {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <SectionTitle title={"Наши клиенты"} className={"ml-10 mb-10"}/>
                <div className="grid grid-cols-8 gap-8">
                    {icons.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
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

