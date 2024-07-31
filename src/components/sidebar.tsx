import React from 'react';
import {FaCog, FaHome, FaUser} from 'react-icons/fa';
import Overlay from "@/components/common/overlay";

interface SidebarProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function Sidebar(props: SidebarProps) {
    return (
        <>
            {props.isOpen && <Overlay onClick={props.toggleMenu}/>}
            <div
                className={`pt-2 fixed left-0 h-screen w-64 rounded-r-lg shadow-lg flex flex-col z-50 bg-violet-50 transition-transform ${
                    props.isOpen ? '' : '-translate-x-full'
                }`}>
                <ul className="flex flex-col flex-1 text-default-violet-900 text-lg font-medium">
                    <SidebarItem icon={<FaHome/>} name="Главная"/>
                    <SidebarItem icon={<FaUser/>} name="О компании"/>
                    <SidebarItem icon={<FaCog/>} name="Рассчет расстояния"/>
                    <SidebarItem icon={<FaCog/>} name="Запрос услуги"/>
                    <SidebarItem icon={<FaCog/>} name="Вакансии"/>
                    <SidebarItem icon={<FaCog/>} name="Наши клиенты"/>
                    <SidebarItem icon={<FaCog/>} name="Контакты"/>
                </ul>
            </div>
        </>
    );
};

interface SidebarItemProps {
    icon: React.ReactNode;
    name: string;

}

export function SidebarItem(props: SidebarItemProps) {
    return (
        <li className="flex items-center px-4 py-2 hover:bg-violet-200 rounded-lg mx-2 cursor-pointer transition-colors duration-200">
            <span className="mr-3">{props.icon}</span>
            <span>{props.name}</span>
        </li>
    );
}

