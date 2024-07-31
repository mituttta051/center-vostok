import React from 'react';

type ColumnProps = {
    subtitle: string;
    text: string;
};

type SectionComponentProps = {
    title: string;
    columns: ColumnProps[];
};

export default function SectionWithColumns(props: SectionComponentProps) {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8 animate-fade-in-down">{props.title}</h2>
                <div className="flex flex-col md:flex-row justify-around">
                    {props.columns.map((column, index) => (
                        <div
                            key={index}
                            className="md:w-1/3 p-4 mb-8 md:mb-0 animate-fade-in-up"
                        >
                            <h3 className="text-2xl font-semibold mb-4">{column.subtitle}</h3>
                            <p className="text-gray-700">{column.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


