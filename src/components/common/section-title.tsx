import React from "react";

export default function SectionTitle(props: { title: string, className?: string }) {
    return (
        <h2 className={`text-4xl font-bold animate-fade-in-down opacity-100 text-gray-800 ${props.className}`}>{props.title}</h2>
    )
}