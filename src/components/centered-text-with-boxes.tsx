import React from 'react';

export default function CenteredTextWithBoxes() {
    const commonStyles = "relative flex items-center bg-black opacity-70 justify-center h-full shadow-lg rounded-lg text-center text-lg min-h-[200px]";
    return (
        <div className="h-screen flex items-center justify-center px-10">
            <div className="grid lg:grid-rows-3 lg:grid-cols-5 gap-4 grid-rows-6 justify-items-stretch items-stretch justify-center w-full max-w-screen-xl">
                {/* Two boxes above the main text */}
                <figure className={`lg:col-start-2 lg:row-start-1 ${commonStyles}`}>
                    <img className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50" src="/train-aesthetics/two-trains.jpg" alt="image description" />
                    <figcaption className="relative z-10 text-lg text-white px-5">
                        <p>Транспортно-экспедиционные услуги</p>
                    </figcaption>
                </figure>

                <figure className={`lg:col-start-4 lg:row-start-1 ${commonStyles}`}>
                    <img className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50" src="/train-aesthetics/rails-no-train.jpg" alt="image description" />
                    <figcaption className="relative z-10 text-lg text-white px-5">
                        <p>Организация перевозок грузов</p>
                    </figcaption>
                </figure>

                {/* Two boxes on the same line as the main text */}
                <figure className={`lg:row-start-2 lg:col-start-1 ${commonStyles}`}>
                    <img className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50" src="/train-aesthetics/train.jpg" alt="image description" />
                    <figcaption className="relative z-10 text-lg text-white px-5">
                        <p>Диспетчеризация продвижения грузов</p>
                    </figcaption>
                </figure>

                {/* Main Text */}
                <div className="lg:col-start-3 lg:row-start-2 h-full flex text-center items-center justify-center py-10 px-5 order-first lg:order-none">
                    <h1 className="text-4xl font-bold">Центр Восток - это</h1>
                </div>

                <figure className={`lg:col-start-5 lg:row-start-2 ${commonStyles}`}>
                    <img className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50" src="/train-aesthetics/station.jpg" alt="image description" />
                    <figcaption className="relative z-10 text-lg text-white px-5">
                        <p>Организация рабочих мест с последующим карьерным ростом</p>
                    </figcaption>
                </figure>

                {/* One box below the main text */}
                <figure className={`lg:col-start-3 lg:row-start-3 ${commonStyles}`}>
                    <img className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50" src="/train-aesthetics/rails.jpg" alt="image description" />
                    <figcaption className="relative z-10 text-lg text-white px-5">
                        <p>Оплата ЖД тарифа</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};
