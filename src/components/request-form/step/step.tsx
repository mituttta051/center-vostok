import React from "react";
import SectionTitle from "@/components/common/section-title";

interface StepProps {
    title: string;
    children: React.ReactNode | React.ReactNode[];
}

export default function Step(props: StepProps) {
    const childrenArray = React.Children.toArray(props.children);

    return (
        <div className={"w-full py-4"}>
            <SectionTitle title={props.title} className="text-xl mb-4"/>
            {childrenArray.map((child, index) => (
                <div key={index}>
                    {child}
                </div>
            ))}
        </div>
    )
}