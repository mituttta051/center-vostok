import {ChangeEvent, FormEvent} from "react";
import WagonCargoData from "@/components/request-form/utils/form-data";
import {step} from "next/dist/experimental/testmode/playwright/step";
import {toast} from "react-hot-toast";


export default class FormMethods {

    public static isCurrentStepValid(step: number, formData: WagonCargoData): boolean {
        switch (step) {
            case 0:
                return formData.requestType !== '';
            case 1:
                if (formData.requestType === 'Поиск груза') {
                    return formData.railWagon !== '' && formData.station !== '' && formData.wagonType !== '';
                } else if (formData.requestType === 'Поиск вагона') {
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
            case 3:
                const phoneRegex = /^(\+?\d{1,3}[ \-.]?)?(\(?\d{2,4}\)?[ \-.]?)?\d{2,4}[ \-.]?\d{2,4}[ \-.]?\d{2,4}$/;

                if (!formData.name.trim()) {
                    return false;
                }
                if (!formData.phone  && !formData.email) {
                    return false;
                }
                if (formData.phone && !formData.phone.match(phoneRegex)) {
                    return false;
                }

                return !(formData.email && !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/));

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

    public static nextStep(step: number, setStep: (step: number) => void, formData: WagonCargoData) {
        if (this.isCurrentStepValid(step, formData)) {
            setStep(step + 1);
        }
    };

    public static prevStep(step: number, setStep: (step: number) => void) {
        if (step !== 0) {
            setStep(step - 1);
        }

    };


}