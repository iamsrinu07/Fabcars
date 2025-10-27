import React from 'react';
import { Plane, Spool, CircleDollarSign, CarFront, Headset } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { url } from 'inspector';
import Image from "next/image";
<CarFront />
const WhyChooseRolDrive = () => {
    const services = [
        {
            icon: "/images/plen.png",
            title: "60 Minutes Free Airport Waiting",
            description: "Peace of mind for delayed flights"
        },
        {
            icon: "/images/driver.png",
            title: "Professional Drivers",
            description: "Uniformed, discreet and well-presented"
        },
        {
            icon: "/images/dolar.png",
            title: "All-Inclusive Pricing",
            description: "No hidden fees, surcharges or surprises"
        },
        {
            icon: "/images/traffic-jam.png",
            title: "Luxury Fleet",
            description: "Hand-picked vehicles for a first-class travel experience"
        },
        {

            icon: "/images/customer-service.png",
            title: "24/7 Support",
            description: "Always available for bookings and assistance"
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why Choose <span className='text-[#FDC65C]'>RolDrive</span>
                    </h2>
                    <p className="text-lg text-white max-w-3xl mx-auto">
                        London's premium chauffeur service trusted by business and VIP clients for seamless,
                        reliable, and comfortable journeys.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                    {services.map((service, index) => (
                        <div key={index} className="relative">
                            <Card className="bg-transparent border-none shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                                <CardContent className="p-2 text-center">
                                    <div className="flex justify-center mb-4">
                                        <div className="p-[1px] rounded-sm bg-gradient-to-r from-yellow-400 to-white">
                                            <div className="p-3 bg-[#20313F]/95 rounded-sm">

                                                <Image src={service.icon}
                                                    alt={service.title}
                                                    width={20}
                                                    height={20}
                                                    className="h-5 w-5"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-md font-semibold text-white mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-white">{service.description}</p>
                                </CardContent>
                            </Card>

                            {/* --- lg screen: 5 columns --- */}
                            <div
                                className={`
          hidden 
          absolute top-1/4 right-0 h-1/2 border-r-2 border-dashed border-[#363636]
          ${((index + 1) % 5 === 0 || index === services.length - 1) ? 'none' : 'lg:block'}
        `}
                            ></div>

                            {/* --- md screen: 2 columns --- */}
                            <div
                                className={`
          hidden  lg:hidden
          absolute top-1/4 right-0 h-1/2 border-r-2 border-dashed border-[#363636]
          ${(((index + 1) % 2 === 0) || index === services.length - 1) ? 'none' : 'md:block'}
        `}
                            ></div>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    );
};

export default WhyChooseRolDrive;