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
import React from "react";

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

export default function LineGraph() {
    const data = {
        labels: ['2009', '2015', '2018', '2022', '2023'],
        datasets: [
            {
                label: 'Количество тонн перевезенных грузов',
                data: [11, 25, 0, 295, 0],
                fill: false,
                borderColor: 'rgb(120,82,183)',
                tension: 0.1,
                customTooltipData: [ // Custom tooltip data
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
                    text: 'Года',
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
                display: false, // Hide the legend
            },
            tooltip: {
                mode: "nearest" as const,
                intersect: false,
                callbacks: {
                    label: function (context: any) {
                        const dataset = context.dataset;
                        const index = context.dataIndex;
                        return dataset.customTooltipData[index];
                    }
                }
            }
        },
    };
    return (
        <div className={`p-20 rounded-lg bg-gray-100`}>
            <h2 className="text-4xl font-bold mb-8 animate-fade-in-down text-right pr-4">Стабильно вверх</h2>
            <Line data={data} options={options}/>
        </div>
    );
}