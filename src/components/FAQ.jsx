import React, { useState } from "react";

const faqs = [
    {
        question: "What are the regulations around hunting at Heart Rate Ridge?",
        answer:
            "We follow all state and local guidelines for hunting in Ohio. You can find more information about weapon regulations and hunting seasons here.",
    },
    {
        question: "What does a hunter need prior to hunting at HRR?",
        answer:
            "Hunters must have a valid hunting license, appropriate tags, and sign a waiver before participating in any hunting activities at HRR.",
    },
    {
        question: "Are meals and lodging included?",
        answer:
            "Yes, most of our packages include lodging and meals. Check the specific hunt package for more details.",
    },
    {
        question: "Is taxidermy or meat processing available?",
        answer:
            "We partner with local taxidermists and processors. Ask your guide for recommendations after your hunt.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-11/12 mx-auto mt-16">
            <h2 className="text-4xl font-bold text-center mb-10">
                Frequently Asked Questions
                <div className="w-20 h-1 bg-green-700 mt-2 mx-auto rounded"></div>
            </h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-4 text-left text-gray-800 text-base font-medium focus:outline-none"
                        >
                            <span>{index + 1}. {faq.question}</span>
                            <i className={`fa-solid ${openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-600`}></i>
                        </button>

                        {openIndex === index && (
                            <div className="px-6 pb-5 pt-1 text-gray-700 text-sm leading-relaxed border-t border-gray-200">
                                <strong className="text-gray-800">Ans.</strong> {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
