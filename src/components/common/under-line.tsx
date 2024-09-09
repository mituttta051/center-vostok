import React from "react";

interface UnderLineProps {
    classname?: string;
}
export default function UnderLine(props: UnderLineProps) {
    return (
        <div className={"w-[100%] h-1 bg-default-violet-500 " + props.classname}></div>
    )
}