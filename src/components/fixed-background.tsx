import React from 'react';

interface FixedBackgroundProps {
    className?: string;
}

const FixedBackground = (props: FixedBackgroundProps) => {
    return (
        <div className="absolute inset-0">
            <div
                className={`bg-fixed bg-cover bg-center ` + props.className}
            >
            </div>
        </div>
    );
};

export default FixedBackground;