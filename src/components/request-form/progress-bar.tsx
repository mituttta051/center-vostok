import React from "react";
import {motion} from "framer-motion";

interface ProgressBarProps {
    step: number;
}

export default function ProgressBar({ step }: ProgressBarProps) {
    return (
        <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                    className="bg-violet-700 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
}