import React from "react";

function Index() {
  return (
    <div className="p-3 md:p-12 2xl:py-24 2xl:px-36">
      <div className="flex flex-col items-start w-full">
        <h2 className="text-4xl lg:text-5xl font-semibold text-blue">
          Proyectos Realizados
        </h2>
        <p className="text-left text-sm md:text-base text-neutral-500 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aspernatur quod illo tenetur provident. Deserunt eius consectetur aliquid rerum in iusto tempore, mollitia ab? Laudantium eius vero exercitationem quos atque?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="bg-blue w-full h-[300px]">s</div>
        <div className="bg-blue w-full h-[300px]">s</div>
      </div>
    </div>
  );
}

export default Index;
