import React from "react";

interface InputFieldProps {
    label: string;
    name: string;
    value: string | number;
    type: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({label, name, value, type, handleChange}: InputFieldProps) {
    return (
        <>
            <label className="block mb-2">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
            />
        </>
    );
};

