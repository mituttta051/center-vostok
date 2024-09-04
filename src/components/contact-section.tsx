import React from "react";

interface ContactSectionProps {
    address: string;
    phoneNumber: string;
    emailAddress: string;
    link1: { text: string; href: string };
    link2: { text: string; href: string };
}

const ContactSection: React.FC<ContactSectionProps> = ({
                                                           address,
                                                           phoneNumber,
                                                           emailAddress,
                                                           link1,
                                                           link2,
                                                       }) => {
    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-700">{address}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Phone Number</h3>
                <p className="text-gray-700">{phoneNumber}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Email Address</h3>
                <p className="text-gray-700">{emailAddress}</p>
            </div>
            <div className="flex justify-between">
                <a
                    href={link1.href}
                    className="text-blue-500 hover:underline font-semibold"
                >
                    {link1.text}
                </a>
                <a
                    href={link2.href}
                    className="text-blue-500 hover:underline font-semibold"
                >
                    {link2.text}
                </a>
            </div>
        </div>
    );
};

export default ContactSection;