import React from "react";

interface ProgressBarProps {
    step: number;
}

export default function ProgressBar({step} : ProgressBarProps) {
    return (
        <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className={`bg-blue-500 h-2.5 rounded-full`}
                    style={{ width: `${(step / 3) * 100}%` }}
                ></div>
            </div>
        </div>
    );
};