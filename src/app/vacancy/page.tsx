import React from 'react';
import VacancyForm from "@/components/vacancy/vacancy-form";
import SectionTitle from "@/components/common/section-title";
import Hero from "@/components/vacancy/hero";
import HeroItem from "@/components/vacancy/hero-item";

const VacancyPage: React.FC = () => {
    const whiteCardClassname = "max-w-2xl w-full bg-white p-8 shadow-lg rounded-2xl mb-20";
    const whiteCardTitle = "text-xl font-bold text-gray-800 mb-5";
    const svg = <svg className="w-6 h-6 text-gray-800 mr-1" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                     viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M5 12h14"/>
    </svg>;
    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <Hero/>
            <div className={"w-full px-40 flex justify-start flex-col"}>
                <div className={whiteCardClassname}>
                    <h3 className={whiteCardTitle}>Что вы будете делать</h3>
                    <ul>
                        <HeroItem svg={svg}>Уверенное ведение переговоров с клиентами по телефону, поиск клиентов и
                            работа с
                            действующими постоянными заводами. НЕ ХОЛОДНЫЕ ЗВОНКИ!
                        </HeroItem>
                        <HeroItem svg={svg}>Организация железнодорожного перевозочного процесса.
                        </HeroItem>
                        <HeroItem svg={svg}>Строгое выполнение должностной инструкции и ведение документации, связанной
                            с обеспечением
                            безопасности на ж/д
                        </HeroItem>
                    </ul>
                </div>
                <div className={whiteCardClassname}>
                    <h3 className={whiteCardTitle}>Мы ждем от вас</h3>
                    <ul>
                        <HeroItem svg={svg}>Коммуникабельность, стрессоустойчивость, оперативность принятия решений,
                            ответственность, тактичность, целеустремленность
                        </HeroItem>
                        <HeroItem svg={svg}>Грамотную деловую речь, исполнительность, педантичность
                        </HeroItem>
                        <HeroItem svg={svg}>Желание зарабатывать большие деньги
                        </HeroItem>
                    </ul>
                </div>
                <div className={whiteCardClassname}>
                    <h3 className={whiteCardTitle}>Условия</h3>
                    <ul>
                        <HeroItem svg={svg}>5-дневная рабочая неделя, с 8.00 до 15.00
                        </HeroItem>
                        <HeroItem svg={svg}>Работа в офисе, с полным обеспечением баз и жд программ для уверенного
                            старта в работе
                        </HeroItem>
                        <HeroItem svg={svg}>Оборудована зона приема пищи, в здании столовая, рядом магазины,
                            аптеки
                        </HeroItem>
                        <HeroItem svg={svg}>Испытательный срок 1 месяц
                        </HeroItem>
                    </ul>
                </div>
            </div>
            <div id={"vacancy-form"} className={"w-full px-40 flex flex-col justify-stretch"}>
                <SectionTitle title={"Откликнуться на вакансию"} className={"text-center"}/>
                <div className={"w-full bg-white p-8 shadow-lg rounded-2xl mb-20"}>
                    <VacancyForm/>
                </div>
            </div>
        </div>
    );
}

export default VacancyPage;
