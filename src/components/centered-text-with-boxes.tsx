import React from 'react';

export default function CenteredTextWithBoxes() {
    const commonStyles = "h-full shadow-md rounded-lg flex text-center items-center justify-center text-lg py-10 max-w-48 px-5"
    return (
        <div className="relative min-h-[800px] flex items-center justify-center bg-gray-100">
            <div
                className="absolute grid grid-rows-3 grid-cols-3 gap-4 justify-items-center items-stretch justify-center w-full max-w-screen-xl p-10">
                {/* Two boxes above the main text */}
                <div className="grid grid-cols-5 col-span-3 row-start-1">
                    <div
                        className={`text-default-darkBlue col-start-2 ${commonStyles}`}>
                        <p className="break-words">Транспортно-экспедиционные услуги</p>
                    </div>
                    <div
                        className={`text-default-violet-50 col-start-4 ${commonStyles}`}>
                        <p className="break-words ">Организация перевозок грузов</p>
                    </div>
                </div>
                {/* Two boxes on the same line as the main text */}
                <div
                    className={`text-default-violet-50 col-start-1 row-start-2 ${commonStyles}`}>
                    <p className="break-words">Диспетчеризация продвижения грузов</p>
                </div>
                <div
                    className={`text-default-darkBlue col-start-3 row-start-2 ${commonStyles}`}>
                    <p className="break-words">Организация рабочих мест с последующим карьерным ростом</p>
                </div>

                {/* Main Text */}
                <div className="col-start-2 row-start-2 h-full flex text-center items-center justify-center py-10 max-w-48 px-5">
                    <h1 className="text-4xl font-bold">Центр Восток - это</h1>
                </div>

                {/* One box below the main text */}
                <div
                    className={`text-default-violet-50 col-start-2 row-start-3 ${commonStyles}`}>
                    <p className="break-words">Оплата ЖД тарифа</p>
                </div>
            </div>
        </div>
    );
};