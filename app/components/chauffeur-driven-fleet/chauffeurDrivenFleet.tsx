"use client";
import React, { useEffect, useState } from 'react';
import {
    Wifi,
    Navigation,
    Droplet,
    Baby,
    Users,
    Luggage
} from 'lucide-react';

interface Vehicle {
    name: string;
    description: string;
    image: string;
    features: string[];
    prices: { [key: string]: number };
    maxPassengers: number;
}

const vehicles: Vehicle[] = [
    {
        name: 'Mercedes E-Class',
        description: 'The smart executive choice for every business travel and airport transfers.',
        image: '/e-class.jpg', // Replace with actual image path
        features: ['Wifi', 'GPS Tracking', 'Water', 'Child seat', 'Max 3'],
        prices: {
            'Heathrow to Central London': 149.40,
            '4 hours hire': 255.40,
            'Round trip': 220.00,
        },
        maxPassengers: 3,
    },
    {
        name: 'Mercedes S Class',
        description: 'The benchmark for first-class executive travel, offering exceptional comfort and prestige.',
        image: '/s-class.jpg', // Replace with actual image path
        features: ['Wifi', 'GPS Tracking', 'Water', 'Child seat', 'Max 2'],
        prices: {
            'Heathrow to Central London': 149.40,
            '4 hours hire': 255.40,
            'Round trip': 220.00,
        },
        maxPassengers: 2,
    },
    {
        name: 'Mercedes V Class',
        description: 'Spacious executive travel for families, groups and VIP movements in total comfort.',
        image: '/v-class.jpg', // Replace with actual image path
        features: ['Wifi', 'GPS Tracking', 'Water', 'Child seat', 'Max 3', 'Max 2'],
        prices: {
            'Heathrow to Central London': 149.40,
            '4 hours hire': 255.40,
            'Round trip': 220.00,
        },
        maxPassengers: 3,
    },
];

const ChauffeurDrivenFleet: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getIcon = (feature: string) => {
        const icons = {
            'Wifi': <Wifi className="w-5 h-5" />,
            'GPS Tracking': <Navigation className="w-5 h-5" />,
            'Water': <Droplet className="w-5 h-5" />,
            'Child seat': <Baby className="w-5 h-5" />,
            'Max 3': <Users className="w-5 h-5" />,
            'Max 2': <Users className="w-5 h-5" />,
            'Luggage': <Luggage className="w-5 h-5" />,
        };
        return icons[feature] || null;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
        }, 5000); // Slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Our Luxury Chauffeur Driven Fleet</h2>
                <p className="text-gray-400 mb-8">
                    Choose from our selection of premium chauffeur-driven vehicles, ideal for airport transfers, corporate travel, events
                    and VIP movements across London.
                </p>
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="min-w-full md:min-w-0 md:w-1/3 p-4">
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                                    <p className="text-gray-400 mb-4">{vehicle.description}</p>
                                    <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover mb-4 rounded" />
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {vehicle.features.map((feature, idx) => (
                                            <span key={idx} className="flex items-center bg-gray-700 px-2 py-1 rounded text-sm">
                                                {getIcon(feature)}
                                                <span className="ml-1">{feature}</span>
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mb-4">
                                        {Object.entries(vehicle.prices).map(([service, price]) => (
                                            <div key={service} className="flex justify-between text-sm">
                                                <span>{service}</span>
                                                <span>£{price.toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500 mb-4">Prices Subject to VAT</p>
                                    <button className="w-full bg-yellow-500 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-600 transition">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700"
                        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + vehicles.length) % vehicles.length)}
                    >
                        ‹
                    </button>
                    <button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700"
                        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length)}
                    >
                        ›
                    </button>
                </div>
                <button className="mt-8 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition">
                    View our vehicles
                </button>
            </div>
        </div>
    );
};

export default ChauffeurDrivenFleet;