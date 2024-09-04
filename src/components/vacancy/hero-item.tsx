import React from "react";

interface HeroItemProps {
    children: string,
    svg: React.ReactNode
}

export default function HeroItem(props: HeroItemProps) {
    return (
        <li className={"flex items-center mb-3 text-gray-900"}>
            <span className="flex-shrink-0">{props.svg}</span>
            {props.children}
        </li>
    )
}