"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function Index() {
  return (
    <div className="p-3 md:p-12 2xl:py-24 2xl:px-36">
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
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden md:block 2xl:hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={3}
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
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden 2xl:block">
        <Swiper
          slidesPerView={4}
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
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <div className="flex flex-col items-center justify-center">
              <div className="border-gold border-2 p-3 space-y-2 h-[270px] w-[300px]">
                <p className="italic text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos neque mollitia perspiciatis eveniet. Vitae rerum
                  corporis eaque illum at neque veritatis, non, accusamus magni
                  voluptatem maiores a reiciendis unde eius.
                </p>
                <hr />
                <h3 className="text-lg font-semibold text-blue">
                  Arturo Herrera
                </h3>
                <span className="text-sm text-neutral-500">
                  Empresario | 02 - 02 - 2022
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Index;
