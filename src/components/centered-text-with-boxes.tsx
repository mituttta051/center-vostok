import React from 'react';

const CenteredTextWithBoxes: React.FC = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
            <div
                className="absolute grid grid-rows-3 grid-cols-3 gap-4 items-center justify-center w-full max-w-screen-lg p-10">
                {/* Two boxes above the main text */}
                <div className="grid grid-cols-5 col-span-3 row-start-1">
                    <div
                        className="col-start-2 w-full h-full bg-white shadow-md rounded-lg flex items-center justify-center">
                        <p>Транспортно-экспедиционные услуги</p>
                    </div>
                    <div
                        className="col-start-4 w-full h-full bg-white shadow-md rounded-lg flex items-center justify-center">
                        <p>Организация перевозок грузов</p>
                    </div>
                </div>
                {/* Two boxes on the same line as the main text */}
                <div
                    className="col-start-1 row-start-2 w-full h-full bg-white shadow-md rounded-lg flex items-center justify-center">
                    <p>Диспетчеризация продвижения грузов</p>
                </div>
                <div
                    className="col-start-3 row-start-2 w-full h-full bg-white shadow-md rounded-lg flex items-center justify-center">
                    <p>Организация рабочих мест с последующим карьерным ростом</p>
                </div>

                {/* Main Text */}
                <div className="col-start-2 row-start-2 w-full h-full flex items-center justify-center">
                    <h1 className="text-2xl font-bold">Main Text</h1>
                </div>

                {/* One box below the main text */}
                <div
                    className="col-start-2 row-start-3 w-full h-full bg-white shadow-md rounded-lg flex items-center justify-center">
                    <p>Оплата ЖД тарифа</p>
                </div>
            </div>
        </div>
    );
};

export default CenteredTextWithBoxes;
