import React from "react";
import {FaArrowRightLong} from "react-icons/fa6";

interface ButtonProps {
    onClick: ((e: any) => void) | undefined;
    disabled: boolean;
}

export default function FwdButton(props: ButtonProps) {
    return (
        <button
            type="button"
            className={`mt-4 px-4 py-2 rounded text-white ${!props.disabled ? 'bg-violet-500  hover:bg-violet-700 transition duration-150 ease-in-out' : 'bg-gray-500 cursor-not-allowed'}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <FaArrowRightLong/>
        </button>
    )
}