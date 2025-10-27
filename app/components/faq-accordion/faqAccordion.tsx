"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQAccordion() {
    const [openItem, setOpenItem] = useState<string | null>(null);

    const faqs = [
        {
            question: "What if my flight is delayed?",
            answer:
                "We monitor all flights in real-time and include 60 minutes free waiting time at airports.",
        },
        {
            question: "Are your rates all-inclusive?",
            answer: "Yes, our rates include all taxes, tolls, and fees.",
        },
        {
            question: "Can I book hourly?",
            answer: "Yes, you can book our chauffeur service on an hourly basis.",
        },
        {
            question: "Which vehicles do you offer?",
            answer:
                "We offer a range of luxury sedans, SUVs, and business vans for your comfort.",
        },
    ];

    return (
        <section className="w-full max-w-4xl mx-auto py-16 px-4">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#081017] mb-4">
                    Frequently Asked{" "}
                    <span className="text-[#FDC65C]">Questions</span>
                </h2>
                <p className="text-lg text-[#081017] max-w-4xl mx-auto">
                    Everything you need to know about our chauffeur service
                </p>
            </div>

            {/* Accordion */}
            <Accordion
                type="single"
                collapsible
                className="rounded-none"
                onValueChange={(value) => setOpenItem(value)}
            >
                {faqs.map((faq, index) => {
                    const value = `item-${index}`;
                    const isOpen = openItem === value;

                    return (
                        <AccordionItem
                            key={index}
                            value={value}
                            className="border-b border-gray-200"
                        >
                            <AccordionTrigger className="flex relative justify-between items-center px-6 py-4 text-left text-gray-900 hover:bg-gray-50 rounded-none">
                                <span className="w-full">{faq.question}</span>
                                <div
                                    className={`absolute right-3 z-1 flex items-center justify-center w-7 h-7 rounded-full bg-gray-800 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    <ChevronDown size={16} className="text-white" />
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="px-6 py-4 text-gray-700">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </section>
    );
}
