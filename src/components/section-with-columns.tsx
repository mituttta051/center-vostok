import React from 'react';
import SectionTitle from "@/components/common/section-title";

export default function SectionWithColumns() {
    const columns = [
        {
            subtitle: 'Клиентоориентированность',
            text: 'Ваш процесс с нами начинается с расчета и заканчивается оказанием услуг всего за 2-5 дней. Для расчета стоимости услуг вам нужно просто предоставить информацию о маршруте и характеристиках груза. Мы предложим вам несколько вариантов доставки, учитывая ваши потребности. Благодаря нашему парку арендованных и собственных вагонов, мы можем предложить вашей компании конкурентоспособные цены на предоставление подвижного состава.',
            svg: <svg className="w-10 h-10 text-gray-800 group-hover:text-default-darkBlue dark:text-white transition-colors ease-in-out duration-300" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd"
                      d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                      clipRule="evenodd"/>
            </svg>

        },
        {
            subtitle: 'Качество',
            text: 'За годы работы наша компания, завоевала признательность и доверие со стороны своих партнеров. Мы готовы предложить своим партнерам высококачественные логистические услуги, соответствующие всем международным стандартам.',
            svg: <svg className="w-10 h-10 text-gray-800 dark:text-white group-hover:text-yellow-500 transition-colors ease-in-out duration-300" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
            </svg>
        },
        {
            subtitle: 'Комплексные решения',
            text: 'Работая с доставкой грузов, мы ежедневно сталкиваемся с множеством трудных задач. Наша цель – соответствовать требованиям заказчика. А это значит, клиент должен получить груз (вне зависимости от его объема, габаритов и дальности транспортировки) в максимально короткие сроки и в полной сохранности.\n',
            svg: <svg className="w-10 h-10 text-gray-800 group-hover:text-red-600 transition-colors ease-in-out duration-300 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd"
                      d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                      clipRule="evenodd"/>
            </svg>

        },
    ];
    return (
        <section className="py-12 h-screen flex">
            <div className="container  mx-auto px-4 text-center content-center">
                <SectionTitle title={"Ценности компании"}/>
                <div className="flex flex-col md:flex-row justify-around gap-10 mt-16">
                    {columns.map((column, index) => (
                        <div
                            key={index}
                            className="md:w-1/3 p-8 mb-8 md:mb-0
                                       bg-white/30
                                       backdrop-blur-lg
                                       border border-gray-200
                                       rounded-lg
                                       shadow-lg
                                       bg-gradient-to-br from-transparent to-gray-100 bg-opacity-20"
                        >
                            <div
                                className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full group transition-colors ease-in-out duration-300">
                                {column.svg}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">{column.subtitle}</h3>
                            <p className="text-gray-700">{column.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


