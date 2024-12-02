import React from "react";
import Image from "next/image";
import { GoNorthStar } from "react-icons/go";

import AreasDeEspecializacion from "@/images/AreasDeEspecializacion.png";

function Index() {
  return (
    <div id="areas-de-especializacion" className="px-6 md:p-12 2xl:py-24 2xl:px-36 lg:space-y-24">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-center lg:items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-center lg:text-left text-4xl lg:text-5xl font-semibold text-blue">
            <span className="text-gold">Áreas <br /> </span> De Especialización
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex flex-row items-center space-x-1">
              <GoNorthStar className="text-gold" />
              <p>Derecho Civil</p>
            </div>
            <div className="flex flex-row items-center space-x-1">
              <GoNorthStar className="text-gold" />
              <p>Derecho Mercantil</p>
            </div>
            <div className="flex flex-row items-center space-x-1">
              <GoNorthStar className="text-gold" />
              <p>Derecho Familiar</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={AreasDeEspecializacion}
            alt="Areas De Especializacion"
            className="flex h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
    </div>
  );
}

export default Index;
