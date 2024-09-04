import {ChangeEvent, FormEvent} from "react";
import WagonCargoData from "@/components/request-form/utils/form-data";
import axios from "axios";

export default class FormMethods {
    public static async handleSubmit(event: FormEvent<HTMLFormElement>, formData: WagonCargoData, preferredContact: string) {
        event.preventDefault();
        console.log(formData);
        const botToken = "7215757624:AAFpHSlkBTHMgFIM8QQ_gVpCHeOimYq8XKc";
        const chatId = "-4159746367";
        let message: string;
        if (formData.requestType === "Поиск вагона") {
            message = `
          🚂 Новая заявка: ${formData.requestType} 🚂
Дорога: ${formData.railWagon}
Станция: ${formData.station}
Тип вагона: ${formData.wagonType}\n`;
            if (formData.desiredDirection !== '') {
                message += `Желаемое направление: ${formData.desiredDirection}\n`
            } else {
                message += `Желаемое направление: не указано\n`
            }
        } else {
            message = `
          🪨 Новая заявка: ${formData.requestType} 🪨
Дорога: ${formData.rail}
Станция отправления: ${formData.departure}
Станция назначения: ${formData.destination}
Наименование груза: ${formData.cargoType}
Тип вагона: ${formData.wagonTypeForCargo}\n`;
            if (formData.desiredRate != 0) {
                message += `Желаемая ставка: ${formData.desiredRate}\n`
            } else {
                message += `Желаемая ставка: не указана\n`
            }
            if (formData.wagonRequirements !== '') {
                message += `Требования к вагону: ${formData.wagonRequirements}\n`
            } else {
                message += `Требования к вагону: не указаны\n`
            }
        }
        message += `Имя: ${formData.name}\n`;

        if (preferredContact === 'phone') {
            message += `Телефон: ${formData.phone}`;
        } else {
            message += `Email: ${formData.email}`;
        }
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            await axios.post(url, {
                chat_id: chatId,
                text: message,
            });
            alert('Form data sent to Telegram!');
        } catch (error) {
            console.error('Error sending message to Telegram:', error);
            alert('Failed to send form data to Telegram.');
        }
    };

    public static isCurrentStepValid(step: number, formData: WagonCargoData): boolean {
        switch (step) {
            case 0:
                return formData.requestType !== '';
            case 1:
                if (formData.requestType === 'Поиск вагона') {
                    return formData.railWagon !== '' && formData.station !== '' && formData.wagonType !== '';
                } else if (formData.requestType === 'Поиск груза') {
                    return (
                        formData.rail !== '' &&
                        formData.departure !== '' &&
                        formData.destination !== '' &&
                        formData.cargoType !== '' &&
                        formData.wagonTypeForCargo !== ''
                    );
                }
                return false;
            case 2:
                return true;
            default:
                return false;
        }
    };

    public static handleChange(e: ChangeEvent<HTMLInputElement>, formData: WagonCargoData, setFormData: (data: WagonCargoData) => void) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    public static nextStep(e: FormEvent, step: number, setStep: (step: number) => void, formData: WagonCargoData) {
        e.preventDefault();
        if (this.isCurrentStepValid(step, formData)) {
            setStep(step + 1);
        }
    };

    public static prevStep(e: FormEvent, step: number, setStep: (step: number) => void) {
        e.preventDefault();
        if (step !== 0) {
            setStep(step - 1);
        }

    };


}