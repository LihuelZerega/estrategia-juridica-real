import React from "react";

function Index() {
  return (
    <div className="p-3 md:p-12 2xl:py-24 2xl:px-36">
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
        <div className="bg-blue h-[300px]">s</div>
        <div className="bg-blue h-[300px]">s</div>
        <div className="bg-blue h-[300px]">s</div>
        <div className="bg-blue h-[300px]">s</div>
      </div>
    </div>
  );
}

export default Index;
