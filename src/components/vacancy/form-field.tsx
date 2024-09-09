import React, {ChangeEvent} from 'react';

interface FormFieldProps {
    label: string;
    name: string;
    type: string;
    value?: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, type, value, placeholder, onChange }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="mb-2 text-md font-medium">{label}</label>
            {type === 'file' ? (
                <input
                    id={name}
                    name={name}
                    type={type}
                    className="border rounded-lg p-2"
                    onChange={onChange}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    className="border rounded-lg p-2"
                    onChange={onChange}
                />
            )}
        </div>
    );
}

export default FormField;
