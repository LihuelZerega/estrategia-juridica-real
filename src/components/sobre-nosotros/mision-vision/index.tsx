import React from "react";
import Image from "next/image";
import { GoNorthStar } from "react-icons/go";

import MisionVision from "@/images/MisionVision.jpg";

function Index() {
  return (
    <div className="px-6 md:p-12 2xl:py-24 2xl:px-36 lg:space-y-24">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-4xl lg:text-5xl font-semibold text-blue">
            Nuestra <br />
            <span className="text-gold">Misión </span>y
            <span className="text-gold"> Visión</span>
          </h2>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6">
            <div className="flex flex-col items-start space-x-1">
              <div className="flex flex-row items-center space-x-1">
                <GoNorthStar className="text-gold" />
                <h3 className="text-blue text-lg">Misión:</h3>
              </div>
              <p className="text-sm text-neutral-500">
                Brindar una asesoría legal integral de alta calidad, enfocada en
                la prevención y resolución de conflictos legales en las áreas de
                Derecho Civil, Mercantil y Familiar. Nos comprometemos a ofrecer
                un servicio profesional y cercano, poniendo a disposición de
                nuestros clientes más de 11 años de experiencia en litigio y una
                sólida formación en el derecho. Nuestro objetivo es proteger los
                intereses de nuestros clientes mediante un enfoque proactivo y
                personalizado, asegurando que reciban las mejores soluciones
                legales adaptadas a sus necesidades específicas. Trabajamos con
                la máxima transparencia, ética y compromiso, buscando siempre
                que nuestros clientes alcancen resultados favorables y que sus
                derechos sean plenamente respetados.
              </p>
            </div>
            <div className="flex flex-col items-start space-x-1">
              <div className="flex flex-row items-center space-x-1">
                <GoNorthStar className="text-gold" />
                <h3 className="text-blue text-lg">Visión:</h3>
              </div>
              <p className="text-sm text-neutral-500">
                Ser un referente de excelencia en el ámbito del derecho,
                reconocido por nuestra capacidad para resolver los problemas
                legales más complejos y por nuestra estrategia preventiva que
                ayuda a nuestros clientes a evitar complicaciones legales en el
                futuro. Aspiramos a ser el despacho de confianza para nuestros
                clientes, convirtiéndonos en sus abogados de cabecera a lo largo
                del tiempo, y a extender nuestra influencia en el ámbito legal
                nacional, estableciendo relaciones duraderas basadas en la
                confianza, la ética y la calidad del servicio.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={MisionVision}
            alt="Mision y Vision"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
    </div>
  );
}

export default Index;
