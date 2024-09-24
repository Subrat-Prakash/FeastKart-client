"use client";
import React from "react";
import { Foodtype } from "./Constant/Foodtype";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Carousel = () => {
  return (
    <div className="mt-[7rem]">
      {/* Section title */}
      <div className="flex justify-start px-4 sm:px-6 md:px-8 lg:px-16">
        <h2 className="mb-4 font-bold text-2xl sm:text-3xl lg:text-4xl text-yellow-900">
          Best Food Items
        </h2>
      </div>

      {/* Swiper Carousel */}
      <div className="justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16 mt-5 cursor-pointer">
        <Swiper
          spaceBetween={15}
          slidesPerView={1} // Default to 1 slide on small screens
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides on medium screens
            },
            768: {
              slidesPerView: 3, // 3 slides on large screens
            },
            1024: {
              slidesPerView: 4, // 4 slides on extra-large screens
            },
          }}
        >
          {Foodtype.map((food, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <Link href={`/Food/${food.search}`}>
                <img
                  src={food.img}
                  alt={food.name}
                  className="w-full max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] h-auto mb-2 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <p className="font-bold text-sm sm:text-base lg:text-lg text-center text-yellow-800 mt-2">
                {food.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
