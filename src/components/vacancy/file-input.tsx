import React, {ChangeEvent, DragEvent, useState} from "react";
import {FaTrash} from "react-icons/fa6";

interface FileInputProps {
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function FileInput(props: FileInputProps) {
    const [fileName, setFileName] = useState<string | null>(null);

    // Handle regular file input change
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName(null);
        }
        props.onChange(e); // Pass the event to the parent component
    };

    // Handle drag-and-drop file upload
    const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setFileName(file.name);
            const inputEvent = {
                ...e,
                target: {files: [file]} // Mock an input event for the parent onChange
            };
            props.onChange(inputEvent as unknown as ChangeEvent<HTMLInputElement>);
        }
    };

    const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
    };

    // Remove uploaded file
    const handleRemoveFile = () => {
        setFileName(null);
    };

    return (
        <div>
            <p className="mb-2 text-md font-medium">{props.label}</p>
            <div className="flex items-center justify-center w-full">
                <label
                    htmlFor="dropzone-file"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className={`flex flex-col items-center justify-center w-full h-64 border-2 ${
                        fileName ? 'bg-green-50 border-green-400' : 'bg-gray-50 hover:bg-gray-100 border-gray-300'
                    } border-dashed rounded-lg cursor-pointer`}
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            className="w-8 h-8 mb-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        {fileName ? (
                            <div className={"flex items-center"}>
                                <p className="text-sm text-green-600 font-semibold mr-2">Загружен файл: {fileName}</p>
                                <button
                                    onClick={handleRemoveFile}
                                    className="flex items-center text-red-500 hover:text-red-700"
                                >
                                    <FaTrash className="inline-block w-4 text-red-500 hover:text-red-700"/>
                                </button>
                            </div>
                        ) : (
                            <p className="mb-2 text-sm text-gray-500 px-10">
                                <span className="font-semibold">Нажмите, чтобы загрузить файл</span> или перетащите его
                                сюда
                            </p>
                        )}
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>
            </div>
        </div>
    );
}