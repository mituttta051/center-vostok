'use client'
import React from 'react';
import {FaBriefcase, FaHome, FaTrain, FaUser} from 'react-icons/fa';
import {FaCalculator, FaLocationDot, FaUsers} from "react-icons/fa6";
import Link from "next/link";
import {useStorage} from "@/utils/useStorage";
import {CONSTANTS} from "@/utils/constants";

export default function Sidebar() {
    const {isOpen, setIsOpen} = useStorage(state => state);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div
                className={`pt-2 fixed left-0 h-screen w-64 rounded-r-lg shadow-lg flex flex-col z-50 bg-violet-50 transition-transform ${
                    isOpen ? '' : '-translate-x-full'
                }`}>
                <ul className="flex flex-col flex-1 text-default-violet-900 text-lg font-medium">
                    <SidebarItem icon={<FaHome/>} name="Главная" link={CONSTANTS.baseURL + "/"} toggleMenu={toggleMenu}/>
                    <SidebarItem icon={<FaUser/>} name="О компании" link={CONSTANTS.baseURL + "#about-us"} toggleMenu={toggleMenu}/>
                    <SidebarItem icon={<FaCalculator/>} name="Рассчет расстояния" link={""} toggleMenu={toggleMenu}/>
                    <SidebarItem icon={<FaTrain/>} name="Запрос услуги" link={"/request"} toggleMenu={toggleMenu}/>
                    <SidebarItem icon={<FaUsers/>} name="Наши клиенты" link={CONSTANTS.baseURL + "#client"} toggleMenu={toggleMenu}/>
                    <SidebarItem icon={<FaBriefcase/>} name="Вакансии" link={"/vacancy"} toggleMenu={toggleMenu}/>
                    <SidebarItem icon={<FaLocationDot/>} name="Контакты" link={CONSTANTS.baseURL + "#contact"} toggleMenu={toggleMenu}/>
                </ul>
            </div>
        </>
    );
};

interface SidebarItemProps {
    icon: React.ReactNode;
    name: string;
    link: string;
    toggleMenu: () => void;

}

export function SidebarItem(props: SidebarItemProps) {
    return (
        <li className="flex items-center px-4 py-2 hover:bg-violet-200 rounded-lg mx-2 cursor-pointer transition-colors duration-200">
            <Link className={"flex items-center w-full"} href={props.link} onClick={props.toggleMenu}>
                <span className="mr-3">{props.icon}</span>
                <span>{props.name}</span>
            </Link>
        </li>
    );
}

