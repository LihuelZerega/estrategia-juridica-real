import React from "react";

function Index() {
  return (
    <div className="bg-blue p-3 md:p-12 2xl:py-24 2xl:px-36">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white">
          Algunos de Nuestros <span className="text-gold">Proyectos</span>
        </h2>
        <p className="text-center text-sm md:text-base text-neutral-200 mt-4 max-w-2xl">
          Eligendi voluptatibus ducimus a, placeat dolorum sed officia debitis
          dicta ex est neque id, nesciunt illum magnam deserunt aliquid,
          aspernatur voluptatum quos?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 lg:mx-24">
        <div className="bg-white w-full h-[300px]">s</div>
        <div className="bg-white w-full h-[300px]">s</div>
        <div className="bg-white w-full h-[300px]">s</div>
        <div className="bg-white w-full h-[300px]">s</div>
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-12 bg-transparent border-2 border-white uppercase px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm">
          Ver Todos
        </button>
      </div>
    </div>
  );
}

export default Index;
