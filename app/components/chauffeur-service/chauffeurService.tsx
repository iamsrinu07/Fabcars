import React from 'react';
import { Plane, Spool, CircleDollarSign, CarFront, Headset } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { url } from 'inspector';
import Image from "next/image";
<CarFront />
const ChauffeurService = () => {
    const services = [
        {
            thum: "/images/card1.png",
            title: "Airport Transfers",
            description: "Stress-free airport pickups with flight tracking, luggage assistance and complimentary waiting time."
        },
        {
            thum: "/images/card2.png",
            title: "Corporate Travel",
            description: "Reliable, discreet chauffeur service for meetings, executive schedules and business travel across London."
        },
        {
            thum: "/images/card3.png",
            title: "Events & VIP Transport",
            description: "Premium chauffeured travel for galas, concerts, award nights and high-profile guest movements"
        },
        {
            thum: "/images/card6.png",
            title: "Flexible Hourly & Day Hire",
            description: "A dedicated chauffeur at your service for multi-stop schedules and personalised itineraries."
        },
        {

            thum: "/images/card5.png",
            title: "Private Sightseeing & Tours",
            description: "Tailored city tours with a professional chauffeur, showcasing London’s finest landmarks and attractions."
        },
        {

            thum: "/images/card4.png",
            title: "Private Sightseeing & Tours",
            description: "Tailored city tours with a professional chauffeur, showcasing London’s finest landmarks and attractions."
        }
    ];

    return (
        <div className="py-12 px-4 md:px-8 lg:px-16 relative">
            <Image
                src="/images/why-choose-roldrive-bg.png"
                alt="Luxury Chauffeur"
                fill
                priority
                className="object-cover -z-10"
            />
            <div className="absolute inset-0 bg-[#081017]/80 -z-1" />
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className='text-[#FDC65C]'>London</span> Chauffeur Service
                    </h1>
                    <p className="text-lg text-white max-w-4xl mx-auto">
                        Experience a seamless London chauffeur service with professional drivers, luxury vehicles, and fully personalised travel for airport journeys, business schedules, VIP events, tours, and more.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {services.map((service, index) => (
                        <div key={index} className="relative group">
                            <Card className="p-0 rounded-none bg-transparent border-none shadow-sm hover:shadow-md transition-shadow duration-300 h-full group">
                                <CardContent className="p-0 h-full">
                                    <div className="relative w-full overflow-hidden">
                                        {/* Image */}
                                        <Image
                                            src={service.thum}
                                            alt={service.title}
                                            width={300}
                                            height={500}
                                            className="w-full object-cover rounded-none"
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Title + Description container */}
                                        <div className="absolute bottom-4 md:-bottom-16 left-0 w-full px-4  md:transform md:group-hover:-translate-y-20 md:transition-transform md:duration-300">
                                            {/* Title always visible initially, moves up on hover */}
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                {service.title}
                                            </h3>

                                            {/* Description appears as it moves up */}
                                            <p className="text-white text-sm md:opacity-0  md:group-hover:opacity-100 md:group-hover:translate-y-0 md:transition-opacity md:duration-300">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>



                        </div>
                    ))}
                </div>



            </div>
        </div>
    );
};

export default ChauffeurService;