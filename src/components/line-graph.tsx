import React, {ReactNode, useEffect, useRef} from "react";
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
    text: ReactNode,
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
                className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white group-hover:bg-default-violet-500 transition duration-300 ease-in-out"
            ></div>
            <div
                className={"group-hover:translate-x-6 group-hover:text-black transition duration-300 ease-in-out group-hover:scale-105"}
            >
                <time
                    className="mb-1 text-sm font-normal leading-none text-gray-400 group-hover:text-gray-600"
                > {year}
                </time>
                <div className="mb-4 text-base font-normal text-gray-500 group-hover:text-gray-700">{text}</div>
            </div>
        </li>
    );
}

function Timeline({onHover, onLeave}: { onHover: (index: number) => void, onLeave: () => void }) {
    return (
        <ol className="relative border-s border-gray-200">
            <TimelineItem year={"2009"} text={"Общее количество отправленного груза составило 11 тысяч тонн"} index={0}
                          onHover={onHover} onLeave={onLeave}/>
            <TimelineItem year={"2015"}
                          text={"Были налажены партнёрские отношения с такими заводами как Технониколь, Новороссийский прокатный завод, Кнауф, Абинский металлургический завод, Макфа, и количество доставленного груза составило 25 тысяч тонн"}
                          index={1} onHover={onHover} onLeave={onLeave}/>
            <TimelineItem year={"2018"} text={"Аренда 30 крытых вагонов, отправлено 127 тысяч тонн груза"} index={2}
                          onHover={onHover} onLeave={onLeave}/>
            <TimelineItem year={"2022"}
                          text={<p>На момент середины 2022 года количество доставленного груза составило уже 295 тысяч тонн, партнёрская работа <span className={"whitespace-nowrap"}>со всеми</span>  крупными заводами России по всей сети железной дороги</p>}
                          index={3} onHover={onHover} onLeave={onLeave}/>
            <TimelineItem year={"2023"} text={"Компания становится собственником вагонов,  перевезено 433 тысяч тонн"}
                          index={4} onHover={onHover} onLeave={onLeave}/>
        </ol>
    );
}

export default function LineGraph() {
    const chartRef = useRef<any>(null);

    const data = {
        labels: ['2009', '2015', '2018', '2022', '2023'],
        datasets: [
            {
                label: 'Количество тонн отправленного груза',
                data: [11, 25, 127, 295, 433],
                fill: false,
                borderColor: 'rgb(120,82,183)',
                pointBackgroundColor: 'rgb(120,82,183)',
                pointRadius: 3,
                tension: 0.1,
                // customTooltipData: [
                //     [' 2009 год:', 'Общее количество перевезенного груза составило 11тыс.тонн.'],
                //     [' В 2015 году были налажены партнёрские отношения', ' с такими заводами как Технониколь, Новороссийский прокатный завод,', ' Кнауф, Абинский металлургический завод, Макфа,', ' и количество доставленного груза составило 25 тысяч тонн.'],
                //     ['Аренда 30 крытых вагонов, перевезено 127 тысяч тонн груза'],
                //     ['На момент середины 2022 года', ' количество доставленного груза составило уже 295 тысяч тонн,', ' партнёрская работа со всеми крупными заводами России', ' по всей сети железной дороги. '],
                //     ['Компания становится собственником вагонов,  перевезено 432150 тонн']
                // ],
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
                    text: 'тонн груза',
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
    // TODO: ЗА 16 лет существования компании было перевезено около 900 тысяч тонн груза
    return (
        <div className="w-full">
            <div className="py-20 w-full px-4 lg:px-16">
                {/*mobile view*/}
                <SectionTitle title="Стабильно вверх:" className="text-center lg:hidden mb-8"/>
                <div className="lg:hidden flex flex-col items-center justify-center w-full">
                    {/* Line chart: spans full width on smaller screens */}
                    <div className="w-full lg:w-2/3 mb-8">
                        <Line ref={chartRef} data={data} options={options}/>
                    </div>

                    {/* Section title and timeline: stacked on smaller screens*/}
                    <div className="w-full flex flex-col items-center">
                        <Timeline onHover={handleTimelineHover} onLeave={handleTimelineLeave}/>
                    </div>
                </div>
                {/*PC view*/}
                <div className="hidden lg:flex flex-row items-center justify-center w-full">
                    {/* 2/3 width on large screens */}
                    <div className="w-2/3 mb-0 pr-4">
                        <Line ref={chartRef} data={data} options={options}/>
                    </div>

                    {/* 1/3 width on large screens */}
                    <div className="w-1/3 flex flex-col items-start justify-self-start self-start">
                        <SectionTitle title="Стабильно вверх:" className="text-left mb-8"/>
                        <Timeline onHover={handleTimelineHover} onLeave={handleTimelineLeave}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
