"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import TramitesAnteDependencias from "@/images/TramitesAnteDependencias.png";

function Index() {
  return (
    <div className="px-6 py-12 md:p-12 2xl:py-24 2xl:px-36">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-4xl lg:text-5xl font-semibold text-blue">
          Nuestros <span className="text-gold">Servicios</span>
        </h2>
        <p className="text-center text-sm md:text-base text-neutral-500 mt-4 max-w-2xl">
          Eligendi voluptatibus ducimus a, placeat dolorum sed officia debitis
          dicta ex est neque id, nesciunt illum magnam deserunt aliquid,
          aspernatur voluptatum quos?
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
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className="object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className=" object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className=" object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className=" object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className=" object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="hidden md:block 2xl:hidden">
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
          <SwiperSlide className="py-12">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className="h-[300px] w-[300px] object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="py-12">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className="h-[300px] w-[300px] object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="py-12">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className="h-[300px] w-[300px] object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="py-12">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className="h-[300px] w-[300px] object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="py-12">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className="h-[300px] w-[300px] object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
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
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className="object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className="object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className="object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className="object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="py-12 h-[300px] w-[300px]">
            <a href="/servicios">
              <motion.div
                className="bg-blue relative border-4 border-gold shadow-sm"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={TramitesAnteDependencias}
                  alt="Trámites ante dependencias"
                  className="object-cover opacity-90"
                />
                <h3 className="w-full absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
                  Trámites ante dependencias
                </h3>
              </motion.div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Index;
