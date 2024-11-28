"use client";
import React from "react";
import HeroBackground from "@/images/HeroSobreNosotros.png";
import { motion } from "framer-motion";

function Index() {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${HeroBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "30px",
        }}
      >
        <div className="2xl:flex 2xl:flex-col 2xl:tems-center 2xl:justify-center 2xl:mt-12">
          <motion.h1
            className="text-6xl 2xl:text-7xl mt-10 lg:mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Más Que Abogados, Tus Aliados Legales
          </motion.h1>

          <motion.div
            className="flex flex-col items-center justify-center mt-6 2xl:my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="text-md md:text-lg 2xl:text-xl text-center max-w-5xl w-full">
              Nos enfocamos en construir relaciones de confianza con nuestros
              clientes, entendiendo sus necesidades y trabajando con ética y
              transparencia. Cada caso es único, y tratamos el tuyo con la
              dedicación que merece.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Index;