'use client';

import {ReactElement} from "react";

interface ButtonProps {
    children: string | ReactElement,
    className: string,
    onClick: () => void,
    type: "submit" | "reset" | "button" | undefined

}

export default function Button(props: ButtonProps) {
    return (
        <button type={props.type} onClick={props.onClick}
                className={`focus:outline-none text-white font-medium rounded-lg px-5 py-2.5 mb-2 ease-in-out duration-300 ` + props.className}>
            {props.children}
        </button>
    )
}