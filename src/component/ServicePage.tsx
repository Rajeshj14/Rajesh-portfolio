import React from "react";
import { FaLayerGroup, FaCode, FaDesktop, FaBullhorn } from "react-icons/fa";

const services = [
    {
        title: "App Development",
        icon: <FaLayerGroup size={28} className="text-white" />,
    },
    {
        title: "Web Development",
        icon: <FaCode size={28} className="text-white" />,
    },
    {
        title: "UI / UX Design",
        icon: <FaDesktop size={28} className="text-white" />,
    },
    {
        title: "Digital Marketing",
        icon: <FaBullhorn size={28} className="text-white" />,
    },
];

export default function ServicesSection() {
    return (
        <div id="service" className="py-16 px-4 text-center relative bg-[#00162A] text-white py-20 px-6 overflow-hidden">
            <h1
                className="absolute top-8 left-1/2 transform -translate-x-1/2 select-none z-0 uppercase"
                style={{
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#fff',
                    fontSize: '7vw',
                    color: 'transparent',
                    margin: 0,
                    fontWeight: 600,
                    lineHeight: 1,
                    opacity: 0.1,
                    letterSpacing: '0.8rem',
                }}
            >
                SERVICES
            </h1>
      {/* Title */}
      <div className="relative z-10 text-center mb-12 mt-8">
        <div className="flex justify-center items-center gap-4">
          <div className="w-12 h-1 bg-red-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">MY SERVICES</h2>
          <div className="w-12 h-1 bg-red-500" />
        </div>
      </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto ">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[rgba(255,255,255,0.05)] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
                    >
                        {/* Gradient Spinning Circle */}
                        <div className="relative w-20 h-20 mb-4">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-200 to-blue-500 animate-[spin_1s_linear_infinite]"></div>
                            <div className="absolute inset-1 flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-md">
                                {service.icon}
                            </div>
                        </div>

                        <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure inventore ea nemo ab
                            recusandae modi voluptates maxime ipsam eveniet. Facilis.
                        </p>
                        <button className="px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-gray-300 rounded-md shadow-sm hover:shadow-md">
                            Read More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
