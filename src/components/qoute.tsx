import React from 'react';
import UnderLine from "@/components/common/under-line";

const InspiringQuote: React.FC = () => {
    return (
        <section className="flex justify-end items-center p-6">
            <div className="text-right">
                <blockquote className="text-2xl font-semibold italic text-gray-800">
                    Единственный способ добиться успеха в работе - это любить то, что вы делаете.
                </blockquote>
                <UnderLine classname={"mt-4 ml-auto"}/>
            </div>
        </section>
    );
};

export default InspiringQuote;