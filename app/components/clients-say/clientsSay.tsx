import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ClientsSay = () => {
    const clienttext = [
        {
            profile: "/images/ellipse.png",
            name: "Mehwish",
            tag: "Content Writer",
            description: "I recently hired a chauffeur service for a special event, and I couldn't be happier! The driver was punctual, professional, and made the ride incredibly comfortable. Highly recommend!",
            rating: 5,
        },
        {
            profile: "/images/ellipse.png",
            name: "Jonathan",
            tag: "Marketing Manager",
            description: "I recently hired a chauffeur service for a special event, and I couldn't be happier! The driver was punctual, professional, and made the ride incredibly comfortable. Highly recommend!",
            rating: 4,
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Side Text Section */}
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#4C4C4C] mb-4">
                            What Our <span className="text-[#FDC65C]">Clients Say</span>
                        </h2>
                        <p className="text-lg text-[#4C4C4C] mb-6">
                            Every journey is one-of-a-kind. Be it a corporate roadshow, a VIP
                            gathering, or a private tour, we design a customized chauffeur
                            experience just for you.
                        </p>
                        <Button className="p-6 bg-orange-600 hover:bg-orange-700 text-white rounded-0">
                            Discover More
                        </Button>
                    </div>

                    {/* Right Side Testimonials */}
                    <div className="lg:w-1/2 w-full flex flex-col gap-6 relative">
                        {clienttext.map((client, index) => (
                            <div
                                key={index}
                                className="flex  gap-6 p-6 border  hover:bg-[#F3F4F9] transition-all duration-300"
                            >
                                {/* Left Image */}
                                <div className="flex-shrink-0">
                                    <Image
                                        src={client.profile}
                                        width={80}
                                        height={80}
                                        alt={client.name}
                                        className="rounded-full border-2 "
                                    />
                                </div>

                                {/* Right Info */}
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {client.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm">{client.tag}</p>
                                    <p className="mt-2 text-gray-600 italic">
                                        "{client.description}"
                                    </p>

                                    {/* Rating */}
                                    <div className="flex items-center mt-3 text-sm text-gray-700">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`h-5 w-5 ${i < client.rating
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                                    }`}
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.455a1 1 0 00-1.176 0l-3.39 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                                            </svg>
                                        ))}
                                        <span className="ml-2">
                                            {client.rating.toFixed(1)}/5.0
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <span className="flex items-center justify-center rounded-full absolute
                        bottom-0 right-0 lg:-bottom-6 lg:-right-6 h-13 w-13 bg-[#FDC65C] text-white cursor-pointer">
                            <FontAwesomeIcon className="text-2xl" icon={faAngleDown} />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSay;
