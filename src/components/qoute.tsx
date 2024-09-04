import React from 'react';

const InspiringQuote: React.FC = () => {
    return (
        <section className="flex justify-end items-center p-6">
            <div className="text-right">
                <blockquote className="text-2xl font-semibold italic text-gray-800">
                    Единственный способ добиться успеха в работе - это любить то, что вы делаете.
                </blockquote>
                <div className="w-[100%] h-1 bg-default-violet-500 mt-4 ml-auto"></div>
            </div>
        </section>
    );
};

export default InspiringQuote;