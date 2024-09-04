'use client'
import React, { useState } from 'react';
import FormField from "@/components/vacancy/form-field";
import Button from "@/components/common/button";

const VacancyForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        patronymic: '',
        phone: '',
        email: '',
        file: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prevState => ({ ...prevState, file }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <FormField label="Фамилия, имя, отчество*" name="name" type="text" value={formData.name} placeholder={"Митютнева Анастасия Михайловна"} onChange={handleChange} />
            <FormField label="Телефон" name="phone" type="tel" value={formData.phone} placeholder={"+7 (999) 888-77-66"} onChange={handleChange} />
            <FormField label="Email" name="email" type="email" value={formData.email} placeholder={"email@mail.ru"} onChange={handleChange} />
            {/*<FormField label="Resume" name="file" type="file" onChange={handleFileChange} />*/}
            <Button className={"bg-default-violet-700 hover:bg-default-violet-900"} onClick={() => {}} type={"submit"}>Отправить</Button>
        </form>
    );
}

export default VacancyForm;
