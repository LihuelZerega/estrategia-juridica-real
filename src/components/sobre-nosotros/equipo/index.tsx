"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Maricruz from "@/images/Equipo/Lic Maricruz.jpeg";
import JoseAlejandro from "@/images/Equipo/Lic Jose Alejandro.jpeg";
import CynthiaGonzalez from "@/images/Equipo/Lic Cynthia Gonzalez.jpeg";

const team = [
  {
    name: "Lic. Maricruz Real",
    role: "Fundadora",
    description: "Egresada con honores del Centro Universitario IMEC",
    image: Maricruz,
  },
  {
    name: "Lic. José Alejandro Orozco",
    role: "Asociado Jr.",
    description: "Egresado del Instituto Nacional de Estudios Sindicales y de Administración Pública de la FSTSE",
    image: JoseAlejandro,
  },
  {
    name: "Lic. Cynthia González",
    role: "Asociada Jr.",
    description: "Egresada de la Facultad de Estudios Superiores de la UNAM",
    image: CynthiaGonzalez,
  },
];

function Equipo() {
  return (
    <div id="equipo" className="px-6 py-12 md:p-12 2xl:py-24 2xl:px-56 bg-neutral-50">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-blue text-center">
          Nuestro <span className="text-gold">Equipo</span>
        </h2>
        <div className="w-24 h-1 bg-gold mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden aspect-[4/5] bg-neutral-200 border-b-4 border-gold shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mt-6 text-center md:text-left">
              <h3 className="text-xl font-bold text-blue uppercase tracking-wider">
                {member.name}
              </h3>
              <p className="text-gold font-medium mt-1 uppercase text-sm tracking-widest">
                {member.role}
              </p>
              <p className="text-neutral-500 text-sm mt-3 leading-relaxed max-w-xs mx-auto md:mx-0">
                {member.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Equipo;
