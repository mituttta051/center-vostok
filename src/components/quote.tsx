import React from 'react';
import UnderLine from "@/components/common/under-line";

const InspiringQuote: React.FC = () => {
    return (
        <section className="flex justify-end items-center p-6 pt-14 bg-gray-200">
            <div className="text-right">
                <blockquote className="text-2xl font-semibold italic text-gray-800">
                    Если ваша цель: эффективность, с наименьшими затратами - доверьтесь нам!
                </blockquote>
                <UnderLine classname={"mt-4 ml-auto"}/>
            </div>
        </section>
    );
};

export default InspiringQuote;