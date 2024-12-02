import React from "react";
import Image from "next/image";
import { GoNorthStar } from "react-icons/go";

import NuestrosValores from "@/images/NuestrosValores.png";

function Index() {
  return (
    <div id="nuestros-valores" className="px-6 md:p-12 2xl:py-24 2xl:px-36 lg:space-y-24">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={NuestrosValores}
            alt="Nuestros Valores"
            className="flex bg-blue md:h-[500px] md:w-[500px]"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-center lg:text-left text-4xl lg:text-5xl font-semibold text-blue">
            <span className="text-gold">Nuestros</span> Valores
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Actuamos con responsabilidad y dedicación para defender los derechos
            de nuestros clientes, siempre con el objetivo de obtener los
            resultados más favorables posibles en cada caso.
          </p>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6">
            <div className="flex flex-col items-start space-x-1">
              <div className="flex flex-row items-center space-x-1">
                <GoNorthStar className="text-gold" />
                <h3 className="text-blue text-lg">Compromiso:</h3>
              </div>
              <p className="text-sm text-neutral-500">
                Nos comprometemos con cada cliente a brindar lo mejor de nuestra
                experiencia y conocimiento en el ámbito legal.
              </p>
            </div>
            <div className="flex flex-col items-start space-x-1">
              <div className="flex flex-row items-center space-x-1">
                <GoNorthStar className="text-gold" />
                <h3 className="text-blue text-lg">Transparencia:</h3>
              </div>
              <p className="text-sm text-neutral-500">
                Ofrecemos una comunicación clara y constante sobre el avance de
                los casos y las tarifas involucradas.
              </p>
            </div>
            <div className="flex flex-col items-start space-x-1">
              <div className="flex flex-row items-center space-x-1">
                <GoNorthStar className="text-gold" />
                <h3 className="text-blue text-lg">Confianza:</h3>
              </div>
              <p className="text-sm text-neutral-500">
                En todo momento, puede contar con que defenderemos sus intereses
                con la máxima confidencialidad y ética.
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:hidden flex-col items-center justify-center">
          <Image
            src={NuestrosValores}
            alt="Nuestros Valores"
            className="flex h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
    </div>
  );
}

export default Index;
