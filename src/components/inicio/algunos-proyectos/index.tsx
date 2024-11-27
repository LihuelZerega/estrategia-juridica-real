"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import TramitesAnteDependencias from "@/images/TramitesAnteDependencias.png";

function Index() {
  return (
    <div className="bg-blue px-6 py-12 md:p-12 2xl:py-24 2xl:px-36">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-center text-4xl lg:text-5xl font-semibold text-white">
          Algunos de Nuestros <span className="text-gold">Proyectos</span>
        </h2>
        <p className="text-center text-sm md:text-base text-neutral-200 mt-4 max-w-2xl">
          Eligendi voluptatibus ducimus a, placeat dolorum sed officia debitis
          dicta ex est neque id, nesciunt illum magnam deserunt aliquid,
          aspernatur voluptatum quos?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 lg:mx-24">
        <section>
          <div className="bg-black relative lg:h-[300px] 2xl:h-[400px]">
            <Image
              src={TramitesAnteDependencias}
              alt="Defensa de la alcaldía Benito Juárez"
              className="object-cover opacity-90 lg:h-[300px] 2xl:h-[400px]"
            />
            <h3 className="w-full absolute text-left pl-6 bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              <h3 className="text-3xl font-bold lg:max-w-sm">
                Defensa de la alcaldía Benito Juárez
              </h3>
              <a href="/" className="flex flex-row items-center space-x-2 text-lg mt-2">
                <p className="hover:underline">Leer mas</p>
                <FaArrowRight size={12} />
              </a>
            </h3>
          </div>
        </section>
        <section>
          <div className="bg-black relative lg:h-[300px] 2xl:h-[400px]">
            <Image
              src={TramitesAnteDependencias}
              alt="Defensa de la alcaldía Benito Juárez"
              className="object-cover opacity-90 lg:h-[300px] 2xl:h-[400px]"
            />
            <h3 className="w-full absolute text-left pl-6 bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              <h3 className="text-3xl font-bold lg:max-w-sm">
                Defensa de la alcaldía Benito Juárez
              </h3>
              <a href="/" className="flex flex-row items-center space-x-2 text-lg mt-2">
                <p className="hover:underline">Leer mas</p>
                <FaArrowRight size={12} />
              </a>
            </h3>
          </div>
        </section>
        <section>
          <div className="bg-black relative lg:h-[300px] 2xl:h-[400px]">
            <Image
              src={TramitesAnteDependencias}
              alt="Defensa de la alcaldía Benito Juárez"
              className="object-cover opacity-90 lg:h-[300px] 2xl:h-[400px]"
            />
            <h3 className="w-full absolute text-left pl-6 bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              <h3 className="text-3xl font-bold lg:max-w-sm">
                Defensa de la alcaldía Benito Juárez
              </h3>
              <a href="/" className="flex flex-row items-center space-x-2 text-lg mt-2">
                <p className="hover:underline">Leer mas</p>
                <FaArrowRight size={12} />
              </a>
            </h3>
          </div>
        </section>
        <section>
          <div className="bg-black relative lg:h-[300px] 2xl:h-[400px]">
            <Image
              src={TramitesAnteDependencias}
              alt="Defensa de la alcaldía Benito Juárez"
              className="object-cover opacity-90 lg:h-[300px] 2xl:h-[400px]"
            />
            <h3 className="w-full absolute text-left pl-6 bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              <h3 className="text-3xl font-bold lg:max-w-sm">
                Defensa de la alcaldía Benito Juárez
              </h3>
              <a href="/" className="flex flex-row items-center space-x-2 text-lg mt-2">
                <p className="hover:underline">Leer mas</p>
                <FaArrowRight size={12} />
              </a>
            </h3>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-6 md:mt-12 md:my-12 bg-transparent border-2 border-white uppercase px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm">
          Ver Todos
        </button>
      </div>
    </div>
  );
}

export default Index;
