import React from "react";

interface ButtonProps {
    step: number;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BwdButton(props: ButtonProps) {
    return (
        <>
            <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={props.onClick}
            >
                Back
            </button>

        </>
    )
}