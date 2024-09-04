import React from "react";

interface ButtonProps {
    onClick: ((e: any) => void) | undefined;
    disabled: boolean;
}

export default function FwdButton(props: ButtonProps) {
    return (
        <button
            type="button"
            className={`mt-4 px-4 py-2 rounded ${!props.disabled ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white cursor-not-allowed'}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            Next
        </button>
    )
}