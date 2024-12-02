import React from "react";

function Index() {
  return (
    <div id="quienes-somos" className="px-6 py-12 md:p-12 2xl:py-24 2xl:px-56">
      <div className="flex flex-col md:flex-row items-center w-full">
        <h2 className="md:w-2/5 text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-blue mt-6 md:mt-0">
          ¿Quienes <span className="text-gold">Somos?</span>
        </h2>
        <p className="md:w-4/5 text-center md:text-left text-sm md:text-base text-neutral-500 mt-4 md:mt-0">
          Si está buscando un despacho con un enfoque integral, especializado y
          con un historial comprobado de éxito en casos complejos, estamos aquí
          para ayudarle. En Estrategia Jurídica Real encontrará no solo abogados
          capaces, sino también un equipo que valora su confianza y su bienestar
          legal, brindándole una atención personalizada y el compromiso de
          siempre.
        </p>
      </div>
    </div>
  );
}

export default Index;
