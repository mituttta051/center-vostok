import React from "react";
interface RadioInputProps {
    label: string;
    name: string;
    value: string | number;
    checked: boolean;
    type: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function RadioInput(props: RadioInputProps) {
    return (

        <label className="block mb-2">
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                checked={props.checked}
                onChange={props.handleChange}
                className="mr-2"
            />
            {props.label}
        </label>
    )
}