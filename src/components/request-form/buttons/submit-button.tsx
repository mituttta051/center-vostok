import React from "react";
import {FaCheck, FaPaperPlane} from "react-icons/fa6";

interface ButtonProps {
    onClick: ((e: any) => void) | undefined;
}

export default function SubmitButton(props: ButtonProps) {
    return (
        <button
            type="submit"
            className={`mt-4 px-4 py-2 rounded bg-violet-500 hover:bg-violet-700 transition duration-150 ease-in-out text-white`}
            onClick={props.onClick}
        >
            <FaCheck/>
        </button>
    )
}