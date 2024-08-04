import React, {useEffect, useRef, useState} from "react";
import {Line} from "react-chartjs-2";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import SectionTitle from "@/components/common/section-title";

// Register the components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface TimelineItemProps {
    year: string,
    text: string,
    index: number,
    onHover: (index: number) => void,
    onLeave: () => void
}

function TimelineItem({year, text, index, onHover, onLeave}: TimelineItemProps) {
    return (
        <li
            className="mb-10 ms-4 group"
            onMouseEnter={() => onHover(index)}
            onMouseLeave={onLeave}
        >
            <div
                className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 group-hover:bg-default-violet-500 transition duration-300 ease-in-out"
            ></div>
            <div
                className={"w-[450px] group-hover:translate-x-6 group-hover:text-black transition duration-300 ease-in-out group-hover:scale-105"}
            >
                <time
                    className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                > {year}
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ">{text}</p>
            </div>
        </li>
    );
}

function Timeline({onHover, onLeave}: { onHover: (index: number) => void, onLeave: () => void }) {
    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <TimelineItem year={"2009"} text={"Общее количество перевезенного груза составило 11тыс.тонн."} index={0}
                          onHover={onHover} onLeave={onLeave}/>
            <TimelineItem year={"2015"}
                          text={"В этом году были налажены партнёрские отношения с такими заводами как Технониколь, Новороссийский прокатный завод, Кнауф, Абинский металлургический завод, Макфа, и количество доставленного груза составило 25 тысяч тонн."}
                          index={1} onHover={onHover} onLeave={onLeave}/>
            <TimelineItem year={"2018"} text={""} index={2} onHover={onHover} onLeave={onLeave}/>
            <TimelineItem year={"2022"}
                          text={"На момент середины 2022 года количество доставленного груза составило уже 295 тысяч тонн, партнёрская работа со всеми крупными заводами России по всей сети железной дороги."}
                          index={3} onHover={onHover} onLeave={onLeave}/>
            <TimelineItem year={"2023"} text={""} index={4} onHover={onHover} onLeave={onLeave}/>
        </ol>
    );
}

export default function LineGraph() {
    const chartRef = useRef<any>(null);

    const data = {
        labels: ['2009', '2015', '2018', '2022', '2023'],
        datasets: [
            {
                label: 'Количество тонн перевезенных грузов',
                data: [11, 25, 0, 295, 0],
                fill: false,
                borderColor: 'rgb(120,82,183)',
                pointBackgroundColor: 'rgb(120,82,183)',
                pointRadius: 3,
                tension: 0.1,
                customTooltipData: [
                    [' 2009 год:', 'Общее количество перевезенного груза составило 11тыс.тонн.'],
                    [' В 2015 году были налажены партнёрские отношения', ' с такими заводами как Технониколь, Новороссийский прокатный завод,', ' Кнауф, Абинский металлургический завод, Макфа,', ' и количество доставленного груза составило 25 тысяч тонн.'],
                    [''],
                    [' На момент середины 2022 года', ' количество доставленного груза составило уже 295 тысяч тонн,', ' партнёрская работа со всеми крупными заводами России', ' по всей сети железной дороги. '],
                    ['']
                ],
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'года',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'тонны',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                mode: "nearest" as const,
                intersect: false,
                callbacks: {
                    label: function (context: any) {
                        const dataset = context.dataset;
                        const index = context.dataIndex;
                        // return dataset.customTooltipData[index];
                    }
                }
            }
        },
    };

    const handleTimelineHover = (index: number) => {
        const chart = chartRef.current;

        if (chart) {
            const meta = chart.getDatasetMeta(0);
            const point = meta.data[index];
            chart.tooltip.setActiveElements([{datasetIndex: 0, index}]);
            chart.update();
        }
    };

    const handleTimelineLeave = () => {
        const chart = chartRef.current;

        if (chart) {
            chart.tooltip.setActiveElements([]);
            chart.update();
        }
    };

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.update();
        }
    }, []);

    return (
        <div className={`p-20 rounded-lg bg-gray-100`}>
            <div className="flex flex-col items-center justify-center">
                <SectionTitle title={"Стабильно вверх"} className={"text-center mb-4"}/>
                <div className="flex flex-row w-full">
                    <div className="w-2/3">
                        <Line ref={chartRef} data={data} options={options}/>
                    </div>
                    <div className="w-1/3 pl-4">
                        <Timeline onHover={handleTimelineHover} onLeave={handleTimelineLeave}/>
                    </div>
                </div>
            </div>
        </div>

    );
}
