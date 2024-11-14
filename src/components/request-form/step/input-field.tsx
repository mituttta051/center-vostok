import React, {ReactNode} from "react";

interface InputFieldProps {
    label: ReactNode;
    name: string;
    value: string | number;
    type: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    placeholder?: string;
    description?: string;
}

export default function InputField({label, name, value, type, handleChange, className, placeholder, description}: InputFieldProps) {
    return (
        <div className={className}>
            <label className="block mb-1">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                // className="border border-gray-300 rounded px-2 py-1 w-full"
                className={'border border-gray-300 focus:outline-none font-medium rounded-lg px-5 py-2.5 mb-1 w-full'}
            />
            {description ? <p className="text-sm text-gray-500">{description}</p> : null}
        </div>
    );
};

