import React, { useEffect } from 'react';

interface OverlayProps {
    isVisible: boolean;
    onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 top-[72px] bg-black bg-opacity-50 z-30 flex items-center justify-center"
            onClick={onClose}
        >

        </div>
    );
};

export default Overlay;