'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import {number} from "prop-types";

interface FormData {
    requestType: string;
    rail: string;
    station: string;
    departure: string;
    destination: string;
    wagonType: string;
    desiredDirection: string;

    cargoType: string;
    desiredRate: number;
    wagonRequirements: string;
}

const MultiStepForm: React.FC = () => {
    const [step, setStep] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>({
        requestType: '',
        rail: '',
        station: '',
        departure: '',
        destination: '',
        wagonType: '',
        desiredDirection: '',

        cargoType: '',
        desiredRate: 0,
        wagonRequirements: ''

    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log(formData); // Log the form data or perform other actions like API calls
        // You can also reset the form or navigate the user after successful submission
    };

    const renderButton = () => {
        if (step < 2) {
            return (
                <button
                    type="button"
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={nextStep}
                >
                    Next
                </button>
            );
        }
        return (
            <button
                type="submit"
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
                Submit
            </button>
        );
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-md">
            <ProgressBar step={step} />
            <form onSubmit={handleSubmit}>
                {step === 0 && (
                    <div>
                        <h2 className="text-xl mb-4">Тип услуги</h2>
                        <div>
                            <label className="block mb-2">
                                <input
                                    type="radio"
                                    name="requestType"
                                    value="Поиск вагона"
                                    checked={formData.requestType === 'Поиск вагона'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Поиск вагона
                            </label>
                            <label className="block mb-2">
                                <input
                                    type="radio"
                                    name="requestType"
                                    value="Поиск груза"
                                    checked={formData.requestType === 'Поиск груза'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Поиск груза
                            </label>
                        </div>
                    </div>
                )}

                {step === 1 && formData.requestType === 'Поиск вагона' && (
                    <div>
                        <h2 className="text-xl mb-4">Поиск вагона</h2>
                        <div>
                            <label className="block mb-2">Укажите дорогу</label>
                            <input
                                type="text"
                                name="rail"
                                value={formData.rail}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2">Укажите станцию</label>
                            <input
                                type="text"
                                name="station"
                                value={formData.station}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2">Тип вагона</label>
                            <input
                                type="text"
                                name="wagonType"
                                value={formData.wagonType}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </div>
                    </div>
                )}

                {step === 1 && formData.requestType === 'Поиск груза' && (
                    <div>
                        <h2 className="text-xl mb-4">Поиск груза</h2>
                        <div>
                            <label className="block mb-2">Укажите дорогу</label>
                            <input
                                type="text"
                                name="rail"
                                value={formData.rail}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Укажите станцию отправления</label>
                            <input
                                type="text"
                                name="departure"
                                value={formData.departure}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Укажите станцию назначения</label>
                            <input
                                type="text"
                                name="destination"
                                value={formData.destination}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Наименование груза</label>
                            <input
                                type="text"
                                name="cargoType"
                                value={formData.cargoType}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </div>
                    </div>
                )}
                {step === 2 && formData.requestType === 'Поиск вагона' && (
                    <div>
                        <h2 className="text-xl mb-4">Дополнительная информация</h2>
                        <div>
                            <label className="block mb-2">Желаемое направление</label>
                            <input
                                type="text"
                                name="desiredDirection"
                                value={formData.desiredDirection}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </div>
                    </div>
                )}

                {step === 2 && formData.requestType === 'Поиск груза' && (
                    <div>
                        <h2 className="text-xl mb-4">Дополнительная информация</h2>
                        <div>
                            <label className="block mb-2">Желаемая ставка</label>
                            <input
                                type="text"
                                name="desiredRate"
                                value={formData.desiredRate}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Требование к вагону</label>
                            <input
                                type="text"
                                name="wagonRequirements"
                                value={formData.wagonRequirements}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </div>
                    </div>
                )}

                <div className="mt-4 flex justify-between">
                    {step > 0 && (
                        <button
                            type="button"
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                            onClick={prevStep}
                        >
                            Back
                        </button>
                    )}
                    {renderButton()}
                </div>
            </form>
        </div>
    );
};

interface ProgressBarProps {
    step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
    return (
        <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className={`bg-blue-500 h-2.5 rounded-full`}
                    style={{ width: `${(step / 3) * 100}%` }}
                ></div>
            </div>
        </div>
    );
};

export default MultiStepForm;
