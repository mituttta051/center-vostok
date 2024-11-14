import React from "react";
import {FaArrowLeftLong} from "react-icons/fa6";

interface ButtonProps {
    step: number;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BwdButton(props: ButtonProps) {
    return (
        <>
            <button
                type="button"
                className="bg-violet-500 hover:bg-violet-700 transition duration-150 ease-in-out text-white px-4 py-2 rounded mt-4 w-full"
                onClick={props.onClick}
            >
                <FaArrowLeftLong/>
            </button>

        </>
    )
}