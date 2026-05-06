import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import AnalisisJuridico from "@/images/Servicios/RematesBancarios/AnalisisJuridico.png";
import DueDiligence from "@/images/Servicios/RematesBancarios/DueDiligence.png";
import Estrategia from "@/images/Servicios/RematesBancarios/Estrategia.png";
import Acompanamiento from "@/images/Servicios/RematesBancarios/Acompanamiento.png";
import Ejecucion from "@/images/Servicios/RematesBancarios/Ejecucion.png";
import Blindaje from "@/images/Servicios/RematesBancarios/Blindaje.png";

function Index() {
  return (
    <div className="p-3 md:p-12 2xl:py-24 2xl:px-36 lg:space-y-24">
      <h2 id="remates-bancarios" className="text-4xl lg:text-5xl font-semibold text-gold text-center py-12 border-b border-b-neutral-200 uppercase">
        Asesoría, Adquisición y Ejecución en Remates Bancarios
      </h2>
      <div className="max-w-4xl mx-auto text-center py-8">
        <p className="text-lg text-neutral-600">
          Ofrecemos un servicio integral dirigido a inversionistas y particulares interesados en la adquisición de bienes inmuebles a través de remates bancarios, garantizando seguridad jurídica en cada etapa del proceso.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={AnalisisJuridico}
            alt="Análisis jurídico previo del expediente"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0 shadow-xl rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            1. Análisis jurídico previo del expediente
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Revisamos a detalle el estado procesal del juicio (hipotecario, ejecutivo mercantil o especial), verificando:
          </p>
          <ul className="list-disc list-inside text-neutral-500 space-y-2">
            <li>Existencia y viabilidad del remate</li>
            <li>Cargas, gravámenes y posibles contingencias</li>
            <li>Situación posesoria del inmueble</li>
            <li>Riesgos legales asociados a la adjudicación</li>
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
            src={AnalisisJuridico}
            alt="Análisis jurídico previo del expediente"
            className="flex object-cover h-[400px] w-full mt-6 rounded-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            2. Due diligence del inmueble
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Realizamos una investigación integral que comprende:
          </p>
          <ul className="list-disc list-inside text-neutral-500 space-y-2">
            <li>Revisión registral ante el Registro Público de la Propiedad</li>
            <li>Validación de adeudos (predial, agua, servicios)</li>
            <li>Estudio de la situación jurídica y material del bien</li>
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
            src={DueDiligence}
            alt="Due diligence del inmueble"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0 shadow-xl rounded-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={Estrategia}
            alt="Estrategia de participación en remate"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0 shadow-xl rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            3. Estrategia de participación en remate
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Asesoramos sobre:
          </p>
          <ul className="list-disc list-inside text-neutral-500 space-y-2">
            <li>Modalidad de participación (postura legal, cesión de derechos, adjudicación directa, etc.)</li>
            <li>Determinación del monto óptimo de inversión</li>
            <li>Preparación de postura y cumplimiento de requisitos legales</li>
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
            src={Estrategia}
            alt="Estrategia de participación en remate"
            className="flex object-cover h-[400px] w-full mt-6 rounded-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            4. Acompañamiento durante el procedimiento
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Representación y seguimiento en:
          </p>
          <ul className="list-disc list-inside text-neutral-500 space-y-2">
            <li>Celebración y seguimiento de cesiones de derechos litigiosos</li>
            <li>Audiencias de remate</li>
            <li>Presentación de posturas</li>
            <li>Adjudicación del bien</li>
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
            src={Acompanamiento}
            alt="Acompañamiento durante el procedimiento"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0 shadow-xl rounded-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={Ejecucion}
            alt="Ejecución y toma de posesión"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0 shadow-xl rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            5. Ejecución y toma de posesión
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Gestionamos:
          </p>
          <ul className="list-disc list-inside text-neutral-500 space-y-2">
            <li>Trámites para la escrituración del inmueble</li>
            <li>Procedimientos de lanzamiento o desocupación</li>
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
            src={Ejecucion}
            alt="Ejecución y toma de posesión"
            className="flex object-cover h-[400px] w-full mt-6 rounded-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            6. Blindaje legal de la inversión
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro enfoque está orientado a minimizar riesgos y asegurar que la adquisición se traduzca en un activo jurídicamente seguro y económicamente rentable.
          </p>
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
            src={Blindaje}
            alt="Blindaje legal de la inversión"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0 shadow-xl rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default Index;
