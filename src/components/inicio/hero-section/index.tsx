"use client";
import React from "react";
import Image from "next/image";
import HeroBackground from "@/images/HeroBackground.png";
import HeroDivideLine from "@/images/HeroDivideLine.png";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function Index() {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${HeroBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
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
        <div className="2xl:pl-24 2xl:flex 2xl:flex-col 2xl:tems-start 2xl:justify-center 2xl:mt-12">
          <motion.h1
            className="text-7xl 2xl:text-8xl mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Estrategia <br /> <span className="text-gold">Jurídica Real</span>
          </motion.h1>

          <motion.div
            className="my-6 2xl:my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="text-lg 2xl:text-xl">
              Asesoría experta en Civil, Mercantil, Familia y Juicios de Amparo.{" "}
              <br /> ¡Protegemos tus derechos, construimos tu confianza!
            </p>
          </motion.div>

          <motion.div
            className="flex flex-row items-center justify-start space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.button
              className="bg-gold text-blue font-bold py-2 px-4 uppercase transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Ver servicios
            </motion.button>
            <motion.button
              className="uppercase flex items-center space-x-2 transition-all duration-300 ease-in-out hover:text-gold"
              whileHover={{ scale: 1.05 }}
            >
              <span>Conócenos</span>
              <FaArrowRight size={16} />
            </motion.button>
          </motion.div>

          <motion.div
            className="my-12 2xl:my-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <Image
              src={HeroDivideLine}
              width={200}
              height={200}
              alt="Divide Line"
            />
          </motion.div>

          <motion.section
            className="grid grid-cols-2 md:flex gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="flex flex-col items-center">
              <h3 className="text-4xl 2xl:text-5xl mb-1">1500 +</h3>
              <h3 className="text-sm">Clientes Felices</h3>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl 2xl:text-5xl mb-1">95%</h3>
              <h3 className="text-sm">Casos Ganados</h3>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl 2xl:text-5xl mb-1">120 +</h3>
              <h3 className="text-sm">Indice de Crecimiento</h3>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl 2xl:text-5xl mb-1">15%</h3>
              <h3 className="text-sm">Casos Declinados</h3>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default Index;
