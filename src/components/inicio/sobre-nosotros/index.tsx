"use client";
import React from "react";
import Image from "next/image";
import SobreNosotros1 from "@/images/SobreNosotros1.png";
import SobreNosotros2 from "@/images/SobreNosotros2.png";
import SobreNosotros3 from "@/images/SobreNosotros3.png";

function Index() {
  return (
    <div className="p-3 md:p-12 2xl:py-24 2xl:px-36">
      <div className="flex flex-col md:flex-row items-center w-full">
        <h2 className="md:w-2/5 text-4xl lg:text-5xl font-semibold text-blue mt-6 md:mt-0">
          Sobre <span className="text-gold">Nosotros</span>
        </h2>
        <p className="md:w-4/5 text-left text-sm md:text-base text-neutral-500 mt-4 md:mt-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          voluptatibus ducimus a, placeat dolorum sed officia debitis dicta ex
          est neque id, nesciunt illum magnam deserunt aliquid, aspernatur
          voluptatum quos?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
        <div className="w-full aspect-square relative">
          <Image
            src={SobreNosotros1}
            alt=""
            className="object-contain w-full h-full"
            fill
          />
        </div>
        <div className="hidden md:flex flex-col gap-3">
          <div className="w-full aspect-[2/1] relative">
            <Image
              src={SobreNosotros2}
              alt=""
              className="object-contain w-full h-full"
              fill
            />
          </div>
          <div className="w-full aspect-[2/1] relative">
            <Image
              src={SobreNosotros3}
              alt=""
              className="object-contain w-full h-full"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
