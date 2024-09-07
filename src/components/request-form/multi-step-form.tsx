'use client';
import React, { ChangeEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WagonCargoData from "@/components/request-form/utils/form-data";
import FormMethods from "@/components/request-form/utils/form-methods";
import ProgressBar from "@/components/request-form/progress-bar";
import FwdButton from "@/components/request-form/buttons/fwd-button";
import BwdButton from "@/components/request-form/buttons/bwd-button";
import SubmitButton from "@/components/request-form/buttons/submit-button";
import InputField from "@/components/request-form/step/input-field";
import Step from "@/components/request-form/step/step";
import RadioInput from "@/components/request-form/step/radio-input";

export default function MultiStepForm() {
    const [step, setStep] = useState<number>(0);
    const [formData, setFormData] = useState<WagonCargoData>({
        requestType: '',
        railWagon: '',
        rail: '',
        station: '',
        departure: '',
        destination: '',
        wagonType: '',
        wagonTypeForCargo: '',
        desiredDirection: '',
        cargoType: '',
        desiredRate: 100,
        wagonRequirements: '',
        name: '',
        phone: '',
        email: ''
    });

    const [preferredContact, setPreferredContact] = useState<string>('phone');

    const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPreferredContact(e.target.value);
    };

    const renderStep = () => {
        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex h-full"
                >
                    {(() => {
                        switch (step) {
                            case 0:
                                return (
                                    <Step title="Тип услуги">
                                        <RadioInput
                                            label="Поиск вагона"
                                            name="requestType"
                                            value="Поиск вагона"
                                            checked={formData.requestType === 'Поиск вагона'}
                                            type="radio"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                        <RadioInput
                                            label="Поиск груза"
                                            name="requestType"
                                            value="Поиск груза"
                                            checked={formData.requestType === 'Поиск груза'}
                                            type="radio"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                    </Step>
                                );
                            case 1:
                                return formData.requestType === 'Поиск вагона' ? (
                                    <Step title="Поиск вагона">
                                        <InputField
                                            label="Укажите дорогу"
                                            name="railWagon"
                                            value={formData.railWagon}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                        <InputField
                                            label="Укажите станцию"
                                            name="station"
                                            value={formData.station}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                        <InputField
                                            label="Тип вагона"
                                            name="wagonType"
                                            value={formData.wagonType}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                    </Step>
                                ) : (
                                    <Step title="Поиск груза">
                                        <InputField
                                            label="Укажите дорогу"
                                            name="rail"
                                            value={formData.rail}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                        <InputField
                                            label="Укажите станцию отправления"
                                            name="departure"
                                            value={formData.departure}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                        <InputField
                                            label="Укажите станцию назначения"
                                            name="destination"
                                            value={formData.destination}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                        <InputField
                                            label="Наименование груза"
                                            name="cargoType"
                                            value={formData.cargoType}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                        <InputField
                                            label="Тип вагона"
                                            name="wagonTypeForCargo"
                                            value={formData.wagonTypeForCargo}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                    </Step>
                                );
                            case 2:
                                return formData.requestType === 'Поиск вагона' ? (
                                    <Step title="Дополнительная информация">
                                        <InputField
                                            label="Желаемое направление"
                                            name="desiredDirection"
                                            value={formData.desiredDirection}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                    </Step>
                                ) : (
                                    <Step title="Дополнительная информация">
                                        <InputField
                                            label="Желаемая ставка"
                                            name="desiredRate"
                                            value={formData.desiredRate}
                                            type="number"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                        <InputField
                                            label="Требование к вагону"
                                            name="wagonRequirements"
                                            value={formData.wagonRequirements}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                    </Step>
                                );
                            case 3:
                                return (
                                    <Step title="Контактная информация">
                                        <InputField
                                            label="ФИО"
                                            name="name"
                                            value={formData.name}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                        />
                                        <div className="flex justify-between">
                                            <RadioInput
                                                label="Телефон"
                                                name="preferredContact"
                                                value="phone"
                                                checked={preferredContact === 'phone'}
                                                type="radio"
                                                handleChange={handleContactChange}
                                            />
                                            <RadioInput
                                                label="Email"
                                                name="preferredContact"
                                                value="email"
                                                checked={preferredContact === 'email'}
                                                type="radio"
                                                handleChange={handleContactChange}
                                            />
                                        </div>
                                        {preferredContact === 'phone' ? (
                                            <InputField
                                                label="Телефон"
                                                name="phone"
                                                value={formData.phone}
                                                type="tel"
                                                handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            />
                                        ) : (
                                            <InputField
                                                label="Email"
                                                name="email"
                                                value={formData.email}
                                                type="email"
                                                handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            />
                                        )}
                                    </Step>
                                );
                            default:
                                return null;
                        }
                    })()}
                </motion.div>
            </AnimatePresence>
        );
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-10 border border-gray-300 rounded-lg shadow-md h-[650px]">
            <div className="flex flex-col h-full">
                <form onSubmit={(e) => FormMethods.handleSubmit(e, formData, preferredContact)}
                      className="flex-grow">
                    <ProgressBar step={step}/>
                    {renderStep()}
                </form>
                <div className="mt-4 flex justify-between bg-white sticky bottom-0 p-4 border-t border-gray-200">
                    {step > 0 && (
                        <BwdButton step={step} onClick={(e) => FormMethods.prevStep(e, step, setStep)}/>
                    )}
                    <div className="flex justify-end flex-grow">
                        {step < 3 ? (
                            <FwdButton disabled={!FormMethods.isCurrentStepValid(step, formData)}
                                       onClick={FormMethods.isCurrentStepValid(step, formData) ? (e) => FormMethods.nextStep(e, step, setStep, formData) : undefined}/>
                        ) : (
                            <SubmitButton onClick={(e) => FormMethods.handleSubmit(e, formData, preferredContact)}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}