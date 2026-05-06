import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import Hero from "@/images/Servicios/FideicomisosDeGarantia/Hero.png";
import Estrategia from "@/images/Servicios/FideicomisosDeGarantia/Estrategia.png";
import Activacion from "@/images/Servicios/FideicomisosDeGarantia/Activacion.png";
import Recuperacion from "@/images/Servicios/FideicomisosDeGarantia/Recuperacion.png";
import Defensa from "@/images/Servicios/FideicomisosDeGarantia/Defensa.png";

function Index() {
  return (
    <div className="p-3 md:p-12 2xl:py-24 2xl:px-36 lg:space-y-24">
      <h2 id="fideicomisos-de-garantia" className="text-4xl lg:text-5xl font-semibold text-gold text-center py-12 border-b border-b-neutral-200 uppercase">
        Ejecución de Fideicomisos de Garantía
      </h2>
      <div className="max-w-4xl mx-auto text-center py-8">
        <p className="text-lg text-neutral-600">
          Brindamos asesoría y representación especializada en la ejecución de fideicomisos de garantía, tanto para instituciones financieras como para particulares, asegurando la recuperación eficiente de créditos.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={Hero}
            alt="Análisis del contrato de fideicomiso"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0 shadow-xl rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            1. Análisis del contrato de fideicomiso
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Estudiamos la estructura del fideicomiso para determinar:
          </p>
          <ul className="list-disc list-inside text-neutral-500 space-y-2">
            <li>Alcance de los derechos del fideicomisario</li>
            <li>Facultades del fiduciario</li>
            <li>Procedimiento de ejecución pactado</li>
          </ul>
          <Link
            href={"/contacto"}
            className="flex items-center space-x-2 text-gold font-semibold uppercase tracking-wider"
          >
            <span>ADQUIRIR SERVICIO</span>
            <FaArrowRight size={12} />
          </Link>
        </div>
        <div className="flex md:hidden flex-col items-center justify-center">
          <Image
            src={Hero}
            alt="Análisis del contrato de fideicomiso"
            className="flex object-cover h-[400px] w-full mt-6 rounded-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            2. Diseño de estrategia de ejecución
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Definimos la vía más eficaz conforme al contrato y la normativa aplicable:
          </p>
          <ul className="list-disc list-inside text-neutral-500 space-y-2">
            <li>Ejecución extrajudicial</li>
            <li>Procedimientos judiciales relacionados</li>
            <li>Coordinación con fiduciarias</li>
          </ul>
          <Link
            href={"/contacto"}
            className="flex items-center space-x-2 text-gold font-semibold uppercase tracking-wider"
          >
            <span>ADQUIRIR SERVICIO</span>
            <FaArrowRight size={12} />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={Estrategia}
            alt="Diseño de estrategia de ejecución"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0 shadow-xl rounded-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={Activacion}
            alt="Activación del procedimiento de ejecución"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0 shadow-xl rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            3. Activación del procedimiento de ejecución
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Gestionamos:
          </p>
          <ul className="list-disc list-inside text-neutral-500 space-y-2">
            <li>Notificaciones a deudores</li>
            <li>Requerimientos de pago</li>
            <li>Instrucciones al fiduciario para la ejecución</li>
          </ul>
          <Link
            href={"/contacto"}
            className="flex items-center space-x-2 text-gold font-semibold uppercase tracking-wider"
          >
            <span>ADQUIRIR SERVICIO</span>
            <FaArrowRight size={12} />
          </Link>
        </div>
        <div className="flex md:hidden flex-col items-center justify-center">
          <Image
            src={Activacion}
            alt="Activación del procedimiento de ejecución"
            className="flex object-cover h-[400px] w-full mt-6 rounded-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            4. Recuperación y realización de los bienes
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Acompañamos todo el proceso hasta:
          </p>
          <ul className="list-disc list-inside text-neutral-500 space-y-2">
            <li>Venta del bien fideicomitido</li>
            <li>Adjudicación</li>
            <li>Aplicación del producto al crédito garantizado</li>
          </ul>
          <Link
            href={"/contacto"}
            className="flex items-center space-x-2 text-gold font-semibold uppercase tracking-wider"
          >
            <span>ADQUIRIR SERVICIO</span>
            <FaArrowRight size={12} />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={Recuperacion}
            alt="Recuperación y realización de los bienes"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0 shadow-xl rounded-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={Defensa}
            alt="Defensa y contingencias"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0 shadow-xl rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            5. Defensa y contingencias
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Atendemos:
          </p>
          <ul className="list-disc list-inside text-neutral-500 space-y-2">
            <li>Oposiciones o litigios promovidos por deudores</li>
            <li>Suspensiones o medidas cautelares</li>
            <li>Estrategias para asegurar la continuidad del procedimiento</li>
          </ul>
          <Link
            href={"/contacto"}
            className="flex items-center space-x-2 text-gold font-semibold uppercase tracking-wider"
          >
            <span>ADQUIRIR SERVICIO</span>
            <FaArrowRight size={12} />
          </Link>
        </div>
        <div className="flex md:hidden flex-col items-center justify-center">
          <Image
            src={Defensa}
            alt="Defensa y contingencias"
            className="flex object-cover h-[400px] w-full mt-6 rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default Index;
