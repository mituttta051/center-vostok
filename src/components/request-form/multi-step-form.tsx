'use client';
import React, {ChangeEvent, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import WagonCargoData from "@/components/request-form/utils/form-data";
import FormMethods from "@/components/request-form/utils/form-methods";
import ProgressBar from "@/components/request-form/progress-bar";
import InputField from "@/components/request-form/step/input-field";
import Step from "@/components/request-form/step/step";
import {toast} from "react-hot-toast";
import axios from "axios";
import {useRouter} from "next/navigation";
import {FaTrain} from "react-icons/fa";
import Button from "@/components/common/button";
import {FaArrowLeftLong, FaArrowRightLong, FaBox, FaCheck} from "react-icons/fa6";
import {CONSTANTS} from "@/utils/constants";
// TODO mobile version

export default function MultiStepForm() {
    const router = useRouter();
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
        desiredRate: 0,
        wagonRequirements: '',
        name: '',
        phone: '',
        email: ''
    });

    const [preferredContact, setPreferredContact] = useState<string>('phone');

    const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPreferredContact(e.target.value);
    };

    function handleSubmit(formData: WagonCargoData) {
        const url = CONSTANTS.backendBaseURL + '/sendForm'
        toast.promise(axios.post(url, formData), {
            loading: 'Отправка заявки...',
            success: () => {
                router.push("/");
                return 'Спасибо за заявку! Наши менеджеры уже приступили к обработке вашего запроса';
            },
            error: () => {
                return 'Произошла ошибка при отправке заявки, попробуйте позже.';
            }
        })
    }

    const renderStep = () => {
        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -50}}
                    transition={{duration: 0.3, ease: "easeInOut"}}
                    className="flex h-full"
                >
                    {(() => {
                        switch (step) {
                            case 0:
                                return (
                                    <Step title="Выберите интересующую Вас услугу">
                                        <div className={'grid grid-cols-2 gap-4 my-8'}>
                                            <div
                                                className={'border border-gray-200 transition ease-in-out duration-200 hover:shadow-xl hover:-translate-y-1.5 rounded-xl p-4 cursor-pointer'}
                                                onClick={() => {
                                                    setFormData(() => {
                                                        const newFormData = {
                                                            ...formData,
                                                            requestType: "Поиск груза",
                                                        };
                                                        FormMethods.nextStep(step, setStep, newFormData)
                                                        return newFormData;
                                                    });
                                                }}
                                            >
                                                <FaBox className="size-8 mb-4"/>
                                                <p className={'text-lg'}>Поиск груза</p>
                                            </div>
                                            <div
                                                className={'border border-gray-200 transition ease-in-out duration-200 hover:shadow-xl hover:-translate-y-1.5 rounded-xl p-4 cursor-pointer'}
                                                onClick={() => {
                                                    setFormData(() => {
                                                        const newFormData = {
                                                            ...formData,
                                                            requestType: "Поиск вагона",
                                                        };
                                                        FormMethods.nextStep(step, setStep, newFormData)
                                                        return newFormData;
                                                    });
                                                }}
                                            >
                                                <FaTrain className="size-8 mb-4"/>
                                                <p className={'text-lg'}>Поиск вагона</p>
                                            </div>
                                        </div>
                                    </Step>
                                );
                            case 1:
                                return formData.requestType === 'Поиск груза' ? (
                                    <Step title="Поиск груза">
                                        <InputField
                                            label={<span>Укажите дорогу <span className="text-red-500">*</span></span>}
                                            name="railWagon"
                                            value={formData.railWagon}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            className={'mb-4'}
                                            placeholder={"МСК"}
                                        />
                                        <InputField
                                            label={<span>Укажите станцию <span className="text-red-500">*</span></span>}
                                            name="station"
                                            value={formData.station}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            className={'mb-4'}
                                            placeholder={"Берники"}
                                        />
                                        <InputField
                                            label={<span>Тип вагона <span className="text-red-500">*</span></span>}
                                            name="wagonType"
                                            value={formData.wagonType}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            placeholder={"Полувагон"}
                                        />
                                    </Step>
                                ) : (
                                    <Step title="Поиск вагона">
                                        <InputField
                                            label={<span>Укажите дорогу <span className="text-red-500">*</span></span>}
                                            name="rail"
                                            value={formData.rail}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            className={'mb-4'}
                                            placeholder={"СВР"}
                                        />
                                        <InputField
                                            label={<span>Укажите станцию отправления <span className="text-red-500">*</span></span>}
                                            name="departure"
                                            value={formData.departure}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            className={'mb-4'}
                                            placeholder={"Войновка"}
                                        />
                                        <InputField
                                            label={<span>Укажите станцию назначения <span className="text-red-500">*</span></span>}
                                            name="destination"
                                            value={formData.destination}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            className={'mb-4'}
                                            placeholder={"Трубная"}
                                        />
                                        <InputField
                                            label={<span>Наименование груза <span className="text-red-500">*</span></span>}
                                            name="cargoType"
                                            value={formData.cargoType}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            className={'mb-4'}
                                            placeholder={"Лом черных металлов"}
                                        />
                                        <InputField
                                            label={<span>Тип вагона <span className="text-red-500">*</span></span>}
                                            name="wagonTypeForCargo"
                                            value={formData.wagonTypeForCargo}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            placeholder={"Полувагон"}
                                        />
                                    </Step>
                                );
                            case 2:
                                return formData.requestType === 'Поиск груза' ? (
                                    <Step title="Дополнительная информация">
                                        <InputField
                                            label="Желаемое направление"
                                            name="desiredDirection"
                                            value={formData.desiredDirection}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            placeholder={"ЮУР"}
                                        />
                                    </Step>
                                ) : (
                                    <Step title="Дополнительная информация">
                                        <div className={"mb-3"}>
                                            <InputField
                                                label="Желаемая ставка"
                                                name="desiredRate"
                                                value={formData.desiredRate === 0 ? "" : formData.desiredRate}
                                                type="number"
                                                handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                                placeholder={"120 000"}
                                            />
                                        </div>
                                        <div>
                                            <InputField
                                                label="Требование к вагону"
                                                name="wagonRequirements"
                                                value={formData.wagonRequirements}
                                                type="text"
                                                handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                                placeholder={"88 м^3"}
                                            />
                                        </div>
                                    </Step>
                                );
                            case 3:
                                return (
                                    <Step title="Контактная информация">
                                        <InputField
                                            label={<span>ФИО <span className="text-red-500">*</span></span>}
                                            name="name"
                                            value={formData.name}
                                            type="text"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            className={'mb-4'}
                                        />
                                        <InputField
                                            label="Телефон"
                                            name="phone"
                                            value={formData.phone}
                                            type="tel"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            className={'mb-4'}
                                        />
                                        <InputField
                                            label="Email"
                                            name="email"
                                            value={formData.email}
                                            type="email"
                                            handleChange={(e) => FormMethods.handleChange(e, formData, setFormData)}
                                            className={'mb-4'}
                                        />
                                        <p className={'text-gray-500'}>Введите номер телефона или электронную почту, чтобы мы могли связаться с Вами.</p>
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
        <div className={'h-[calc(100vh-57px)] w-full mt-[57px] flex relative z-0 px-10'}
             style={{
                 backgroundImage: 'url(/request/bg.jpg)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
             }}>
            <div className="z-10 absolute inset-0 bg-black opacity-80"></div>
            <div className={'w-full flex flex-grow h-full ml-10 z-20 items-center'}>
                <h1 className={'text-5xl text-gray-100 font-bold tracking-wide'}>Запрос услуги</h1>
            </div>
            <div className="z-20 bg-gray-100 p-10 border border-gray-500 rounded-2xl shadow-md my-10 mr-10">
                <div className="flex flex-col h-full w-[450px]">
                    <form onSubmit={() => handleSubmit(formData)}
                          className="flex-grow">
                        <motion.div
                            className={'mb-4'}
                            initial={{
                                opacity: 0,
                                y: -10
                            }}
                            animate={step > 0 ? {
                                opacity: 1,
                                y: 0
                            } : {
                                opacity: 0,
                                y: -10
                            }}
                            transition={{duration: 0.6, ease: "easeInOut"}}
                        >
                            <ProgressBar step={step}/>
                        </motion.div>

                        {renderStep()}
                    </form>
                    <motion.div
                        className={''}
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={step > 0 ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 10,
                        }}
                        transition={{duration: 0.6, ease: "easeInOut"}}
                    >
                        <div
                            className="mt-4 flex justify-between sticky bottom-0 pt-8 border-t border-gray-300 gap-4"
                        >
                            <Button
                                className={'bg-default-violet-500 hover:bg-default-violet-900 tracking-wide w-full' + (step === 0 ? ' cursor-default' : '')}
                                onClick={() => {
                                    FormMethods.prevStep(step, setStep)
                                }}
                                type={'button'}
                            >
                                <div className={'flex gap-2 items-center justify-center'}>
                                    <FaArrowLeftLong className={''}/>
                                    <p>Назад</p>
                                </div>
                            </Button>
                            {step < 3 ? (
                                <Button className={'tracking-wide w-full ' + (FormMethods.isCurrentStepValid(step, formData) ? ' hover:bg-default-violet-900' : ' cursor-not-allowed bg-gray-400') + (step === 0 ? ' bg-gray-100 cursor-default' : ' bg-default-violet-500')}
                                        onClick={() => {
                                            if (!FormMethods.isCurrentStepValid(step, formData)) {
                                                console.log("Invalid step");
                                            }
                                            FormMethods.nextStep(step, setStep, formData)
                                        }} type={'button'}>
                                    <div className={'flex gap-2 items-center justify-center'}>
                                        <p>Вперёд</p>
                                        <FaArrowRightLong className={''}/>
                                    </div>
                                </Button>
                            ) : (
                                <Button
                                    className={'bg-default-violet-500 tracking-wide w-full' + (FormMethods.isCurrentStepValid(step, formData) ? ' hover:bg-default-violet-900' : ' cursor-not-allowed bg-gray-400')}
                                    onClick={() => {
                                        if (!FormMethods.isCurrentStepValid(step, formData)) {
                                            console.log("Invalid step");
                                            return;
                                        }
                                        handleSubmit(formData)
                                    }} type={'button'}>
                                    <div className={'flex gap-2 items-center justify-center'}>
                                        <p>Отправить</p>
                                        <FaCheck className={''}/>
                                    </div>
                                </Button>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}