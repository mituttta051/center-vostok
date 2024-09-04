'use client'
import {FaEnvelope, FaPhone} from "react-icons/fa";
import {HiMenu} from "react-icons/hi";
interface HeaderProps {
    toggleMenu: () => void;
}
export default function Header(props: HeaderProps) {

    return (
        <header className="z-60 bg-violet-50 text-default-violet-900 py-4 border-b border-b-violet-200">
            <div className="w-full px-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <HiMenu className="h-8 w-8 cursor-pointer" onClick={props.toggleMenu}/>
                    <img src="/mainLogo.png" alt="Logo" className="h-10 mr-4"/>
                    <span className="text-2xl font-bold">ТК Центр-Восток</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <div className="flex items-center space-x-2">
                        <FaPhone/>
                        <span>+7 (123) 456-7890</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope/>
                        <span>info@centr-vostok.ru</span>
                    </div>
                </div>
            </div>
        </header>
    );
};