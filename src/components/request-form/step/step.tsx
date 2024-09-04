import React from "react";

interface StepProps {
    title: string;
    children: React.ReactNode | React.ReactNode[];
}

export default function Step(props: StepProps) {
    const childrenArray = React.Children.toArray(props.children);

    return (
        <div>
            <h2 className="text-xl mb-4">{props.title}</h2>
            {childrenArray.map((child, index) => (
                <div key={index}>
                    {child}
                </div>
            ))}
        </div>
    )
}