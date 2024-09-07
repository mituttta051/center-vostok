import React from 'react';
import SectionTitle from "@/components/common/section-title";
import Button from "@/components/common/button";
import {useRouter} from "next/navigation";

interface VacancyCardProps {
    skills: string[];
    title: string;
    description: React.ReactNode;
}

const VacancyCard: React.FC<VacancyCardProps> = ({skills, title, description}) => {
    const router = useRouter();
    return (
        <div className="md:w-[450px] mx-auto bg-white rounded-lg shadow-md overflow-hidden" id='vacancy'>
            <div className="px-6 py-4">
                <div className="flex flex-wrap gap-2 mb-4">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                        >
              {skill}
            </span>
                    ))}
                </div>
                <div className="font-bold text-xl mb-2">{title}</div>
                {description}
            </div>
            <div className="px-6 py-4">
                <Button className={"bg-default-violet-500 hover:bg-default-violet-900"} onClick={() => router.push("/vacancy")} type={"button"}>Откликнуться</Button>
            </div>
        </div>
    );
};

export default function VacancySection() {
    return (
        <section className="py-8 h-screen">
            <div className="container mx-auto px-4">
                <SectionTitle title={"Стань частью нашей команды"} className={"text-center"}/>
                <VacancyCard
                    skills={['Коммуникабельность', 'Оперативность', 'Грамотная деловая речь']}
                    title="Менеджер отдела продаж"
                    description={
                        <>
                            <p className={"mb-2"}>Мы предлагаем вам присоединиться к нашей дружной команде и занять позицию менеджера по работе с клиентами.</p> <p>Ваша основная задача будет заключаться в ведении переговоров с клиентами по телефону, поиске новых клиентов и организации железнодорожного перевозочного процесса без холодных звонков.</p>
                            <p className={"mb-2"}>Вы будете работать в комфортном офисе с полным обеспечением необходимых программ и баз данных для уверенного старта.</p>
                            <p><b>Рассматриваем студентов</b></p>
                        </>}
                />
            </div>
        </section>
    );
};