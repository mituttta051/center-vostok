'use client';
interface ButtonProps {
    children: string,
    className: string,
    onClick: () => void,
    type: "submit" | "reset" | "button" | undefined

}

export default function Button(props: ButtonProps) {
    return (
        <button type={props.type} onClick={props.onClick}
                className={`focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ease-in-out duration-300 ` + props.className}>
            {props.children}
        </button>
    )
}