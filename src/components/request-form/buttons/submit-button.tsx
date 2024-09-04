import React from "react";

interface ButtonProps {
    onClick: ((e: any) => void) | undefined;
}

export default function SubmitButton(props: ButtonProps) {
    return (
        <button
            type="submit"
            className={`mt-4 px-4 py-2 rounded bg-green-500 text-white`}
            onClick={props.onClick}
        >
            Submit
        </button>
    )
}