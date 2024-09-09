import React from "react";

export default function SectionTitle(props: {title: string, className?: string}) {
    return (
        <h2 className={`text-4xl font-bold mb-8 animate-fade-in-down ${props.className}`}>{props.title}</h2>
    )
}