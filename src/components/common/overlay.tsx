'use client'
import React, {useEffect} from 'react';
import {useStorage} from "@/utils/useStorage";
import {OverlayProps} from "next/dist/client/components/react-dev-overlay/internal/components/Overlay/Overlay";

const Overlay: React.FC<OverlayProps> = () => {
    const {isOpen, setIsOpen} = useStorage(state => state);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;


    return (
        <div
            className="fixed inset-0 top-[57px] bg-black bg-opacity-50 z-30 flex items-center justify-center"
            onClick={toggleMenu}
        >

        </div>
    );
};

export default Overlay;