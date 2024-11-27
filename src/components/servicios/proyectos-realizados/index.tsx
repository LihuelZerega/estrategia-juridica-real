"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function Index() {
  return (
    <div className="p-3 md:p-12 2xl:py-24 2xl:px-36">
      <div className="flex flex-col items-start w-full">
        <h2 className="text-4xl lg:text-5xl font-semibold text-blue">
          Proyectos Realizados
        </h2>
        <p className="text-left text-sm md:text-base text-neutral-500 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          aspernatur quod illo tenetur provident. Deserunt eius consectetur
          aliquid rerum in iusto tempore, mollitia ab? Laudantium eius vero
          exercitationem quos atque?
        </p>
      </div>

      <div className="block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue h-[300px] w-full">s</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue h-[300px] w-full">s</div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue h-[300px] w-full">s</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue h-[300px] w-full">s</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden md:block 2xl:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={12}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue h-[300px] w-full">s</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue h-[300px] w-full">s</div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue h-[300px] w-full">s</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue h-[300px] w-full">s</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden 2xl:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue h-[300px] w-full">s</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue h-[300px] w-full">s</div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue h-[300px] w-full">s</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue h-[300px] w-full">s</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Index;
