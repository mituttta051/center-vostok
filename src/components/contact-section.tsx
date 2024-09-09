import React from "react";
import Link from "next/link";
import {FaEnvelope, FaMap, FaPhoneAlt} from "react-icons/fa";

const ContactSection: React.FC = () => {
    const contactItems = [
        {icon: <FaPhoneAlt className={"mr-2"}/>, text: "+7(989)-262-03-05"},
        {icon: <FaEnvelope className={"mr-2"}/>, text: "cv-tk@mail.ru"},
        {icon: <FaMap className={"mr-2"}/>, text: "г. Краснодар, ул. 1 Мая, 304"}
    ]
    return (
        <>
            <footer className="flex justify-end" id={"contact"}>
                <div className=" w-full px-8">
                    <div className="md:flex md:justify-between ">
                        <div>
                            <div className="mb-6 md:mb-0">
                                <img src="/Remove-BG.AI%20image.png" className="h-36 me-3"
                                     alt="Logo"/>
                            </div>
                        </div>

                        <div className="flex gap-16 content-center justify-items-center items-center">
                            {contactItems.map((item, index) => (
                                <div key={index} className="flex items-center text-gray-500">
                                    {item.icon}
                                    <p className="text-gray-500">{item.text}</p>
                                </div>
                            ))}

                            <Link
                                href='/vacancy'
                                className="text-gray-500"
                            >
                                Вакансии
                            </Link>

                            <Link
                                href='/request'
                                className="text-gray-500"
                            >
                                Запрос услуг
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default ContactSection;