'use client';
import React, { ChangeEvent, useState } from 'react';
import FormField from "@/components/vacancy/form-field";
import Button from "@/components/common/button";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import FileInput from "@/components/vacancy/file-input";
import axios from "axios";
import {CONSTANTS} from "@/utils/constants";

const VacancyForm: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        file: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target instanceof HTMLInputElement) {
            const file = e.target.files?.[0] || null;
            setFormData(prevState => ({ ...prevState, file }));
            console.log(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputsAreValid()) {
            console.log("Invalid inputs");
            return;
        }
        console.log(formData);
        router.push('/');
        sendFormData(formData.name, formData.phone, formData.email, formData.file as File);
        toast.success('Резюме успешно отправлено!');
    };

    const sendFormData = async (name: string, phone: string, email: string, file: File) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('file', file);

        try {
            const response = await axios.post(CONSTANTS.backendBaseURL + "/sendResume", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const inputsAreValid = () => {
        const phoneRegex = /^(\+?\d{1,3}[ \-.]?)?(\(?\d{2,4}\)?[ \-.]?)?\d{2,4}[ \-.]?\d{2,4}[ \-.]?\d{2,4}$/;

        if (!formData.name.trim()) {
            toast.error('Пожалуйста, введите ваше ФИО.');
            return false;
        }

        if (!formData.phone.match(phoneRegex)) {
            toast.error('Пожалуйста, введите корректный номер телефона.');
            return false;
        }

        if (formData.email && !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            toast.error('Пожалуйста, введите корректный email.');
            return false;
        }

        if (!formData.file) {
            toast.error('Пожалуйста, загрузите резюме.');
            return false;
        }

        return true;
    }
    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <FormField label="Фамилия, имя, отчество*" name="name" type="text" value={formData.name}
                       placeholder={"Иванов Иван Иванович"} onChange={handleChange} />
            <FormField label="Телефон*" name="phone" type="tel" value={formData.phone} placeholder={"+7 (999) 888-77-66"}
                       onChange={handleChange} />
            <FormField label="Email" name="email" type="email" value={formData.email} placeholder={"email@mail.ru"}
                       onChange={handleChange} />
            <FileInput label="Резюме" onChange={handleFileChange}/>
            <Button className="bg-default-violet-700 hover:bg-default-violet-900" type="submit" onClick={() => {}}>
                Отправить
            </Button>
        </form>
    );
}

export default VacancyForm;