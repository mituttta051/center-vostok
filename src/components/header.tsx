'use client'
import {FaEnvelope, FaPhone} from "react-icons/fa";
import {HiMenu} from "react-icons/hi";
import {useStorage} from "@/utils/useStorage";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Header() {
    const {isOpen, setIsOpen} = useStorage(state => state);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const router = useRouter();
    const menuItemClassname = "max-w-screen-xl lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl  xl:block hidden transition-colors duration-300 hover:text-default-violet-500";

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        else {
            router.push(e.currentTarget.href);
        }
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-gray-100/50 text-gray-800 border-b border-b-gray-400 backdrop-blur-md">
            <div className="px-4 flex justify-between items-center h-[57px]">
                <div className="flex items-center space-x-3">
                    <HiMenu className="xl:hidden h-8 w-8 cursor-pointer" onClick={toggleMenu}/>
                    <Link className={"flex items-center"} href={"/"}>
                        <img src="/mainLogo.png" alt="Logo" className="h-10 mr-4"/>
                        <span className="text-2xl font-medium text-gray-800">ООО &quot;Центр Восток&quot;</span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-6 p-4">
                    <Link href={"/#about-us"} className={menuItemClassname} onClick={(e) => handleSmoothScroll(e, 'about-us')}>О компании</Link>
                    <Link href={"/#client"} className={menuItemClassname} onClick={(e) => handleSmoothScroll(e, 'client')}>Наши партнеры</Link>
                    <Link href={"/request"} className={menuItemClassname}>Запрос услуги</Link>
                    <Link href={"/vacancy"} className={menuItemClassname}>Вакансии</Link>
                    <div className="xl:block hidden h-6 border-l border-gray-400 mx-2"></div>
                    <div className="flex items-center space-x-2">
                        <FaPhone/>
                        <span>+7 (499) 677-1447</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope/>
                        <span>centr-vostok@list.ru</span>
                    </div>
                </div>
            </div>
        </header>
    );
};