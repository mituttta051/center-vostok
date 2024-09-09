import {ChangeEvent, FormEvent} from "react";
import WagonCargoData from "@/components/request-form/utils/form-data";


export default class FormMethods {

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