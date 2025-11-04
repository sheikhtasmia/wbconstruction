import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const ServicesBanner = () => {
    const banners = [
        {
            image:
                "https://plus.unsplash.com/premium_photo-1681823643449-3c3d99541b0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
            title: "Services",
            text: "Our best services  architecture & construction firm",
        }

    ];

    return (
        <div className="relative w-full h-screen  overflow-hidden" id="home">


            {banners.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-in-out hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-6 md:px-12">
                            <h2 className="text-xl md:text-5xl  font-extrabold mb-4 tracking-tight shadow-text animate-fadeInUp">
                                {item.title}
                            </h2>
                            <p className="text-md md:text-xl lg:text-2xl max-w-4xl font-light mb-10 opacity-95 animate-fadeInUp delay-200">
                                {item.text}
                            </p>
                            
                        </div>
                    </div>
                </SwiperSlide>
            ))}



        </div>
    );
};

export default ServicesBanner;