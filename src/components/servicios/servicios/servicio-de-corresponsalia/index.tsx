import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import DiligenciaciondeExhortosyOficiosenCDMXyEstadodeMéxico from "@/images/Servicios/ServiciodeCorresponsaliaJuridica/DiligenciaciondeExhortosyOficiosenCDMXyEstadodeMéxico.png";
import PasantiadeJuiciosRadicadosenCDMXyEstadodeMexico from "@/images/Servicios/ServiciodeCorresponsaliaJuridica/PasantiadeJuiciosRadicadosenCDMXyEstadodeMexico.png";
import DomicilioProcesalenJuicios from "@/images/Servicios/ServiciodeCorresponsaliaJuridica/DomicilioProcesalenJuicios.png";
import BusquedadeExpedientesenelArchivoJudicialdelaCiudaddeMexico from "@/images/Servicios/ServiciodeCorresponsaliaJuridica/BusquedadeExpedientesenelArchivoJudicialdelaCiudaddeMexico.png";

function Index() {
  return (
    <div className="p-3 md:p-12 2xl:py-24 2xl:px-36 lg:space-y-24">
      <h2
        id="servicio-de-corresponsalicia-juridica"
        className="text-4xl lg:text-5xl font-semibold text-gold text-center py-12 border-b border-b-neutral-200"
      >
        Servicio de Corresponsalía Jurídica
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={DiligenciaciondeExhortosyOficiosenCDMXyEstadodeMéxico}
            alt="Diligenciación de Exhortos y Oficios en CDMX y Estado de México"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Diligenciación de Exhortos y Oficios en CDMX y Estado de México
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Como corresponsales jurídicos en la Ciudad de México y Estado de
            México, nos encargamos de realizar la diligencia de exhortos y
            oficios en tu nombre, asegurándonos de que se lleven a cabo de
            manera eficiente y conforme a la normativa aplicable. Nuestro equipo
            tiene experiencia en la gestión de estos documentos ante diferentes
            autoridades y tribunales, brindando un servicio ágil y profesional
            para asegurar que los procesos judiciales de nuestros clientes se
            desarrollen sin contratiempos.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Ya sea que necesites la notificación de una demanda, la ejecución de
            una sentencia o cualquier otro acto procesal, nuestro servicio de
            diligenciación te ofrece la certeza de que tus trámites serán
            realizados con prontitud y conforme a la ley, facilitando el
            desarrollo de tus procedimientos judiciales.
          </p>
          <Link
            href={"/contacto"}
            className="flex items-center space-x-2 text-gold"
          >
            <span>ADQUIRIR SERVICIO</span>
            <FaArrowRight size={12} />
          </Link>
        </div>
        <div className="flex md:hidden flex-col items-center justify-center">
          <Image
            src={DiligenciaciondeExhortosyOficiosenCDMXyEstadodeMéxico}
            alt="Diligenciación de Exhortos y Oficios en CDMX y Estado de México"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Pasantía de Juicios Radicados en CDMX y Estado de México
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El servicio de pasantía de juicios radicados en la Ciudad de México
            y Estado de México como corresponsales jurídicos está diseñado para
            brindar apoyo a despachos, abogados y empresas que requieren
            gestionar o dar seguimiento a juicios en estas localidades, sin la
            necesidad de contar con personal local. A través de este servicio,
            proporcionamos asistencia en la realización de diversas actividades
            procesales, tales como notificaciones, emplazamientos, recabo de
            pruebas, recabar constancias judiciales, diligencias de ejecución y
            la supervisión del avance de los juicios.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            La pasantía de juicios permite a los abogados y firmas externas
            delegar la gestión de los trámites y diligencias locales a un equipo
            experimentado, asegurando que los juicios se desarrollen
            correctamente y sin demoras innecesarias.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Este servicio es ideal para aquellos que buscan optimizar tiempos,
            reducir costos y evitar desplazamientos, manteniendo un control
            total sobre sus procedimientos judiciales mediante un apoyo local
            confiable.
          </p>
          <Link
            href={"/contacto"}
            className="flex items-center space-x-2 text-gold"
          >
            <span>ADQUIRIR SERVICIO</span>
            <FaArrowRight size={12} />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={PasantiadeJuiciosRadicadosenCDMXyEstadodeMexico}
            alt="Pasantía de Juicios Radicados en CDMX y Estado de México"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={DomicilioProcesalenJuicios}
            alt="Domicilio Procesal en Juicios"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Domicilio Procesal en Juicios
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El servicio de domicilio procesal es una herramienta legal clave que
            permite a las partes involucradas en un proceso judicial contar con
            una dirección válida y oficial donde recibir notificaciones,
            emplazamientos y otros documentos legales relacionados con el
            juicio. Este servicio es esencial para garantizar que todas las
            comunicaciones del tribunal y las partes contrarias lleguen de
            manera oportuna y formal, asegurando el correcto seguimiento de
            cualquier procedimiento.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo se encarga de recibir y gestionar las notificaciones,
            garantizando que cada documento llegue a tiempo y se mantenga
            informado al cliente sobre el avance de su caso.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Este servicio es ideal para abogados que requieren un domicilio
            procesal confiable y profesional.
          </p>
          <Link
            href={"/contacto"}
            className="flex items-center space-x-2 text-gold"
          >
            <span>ADQUIRIR SERVICIO</span>
            <FaArrowRight size={12} />
          </Link>
        </div>
        <div className="flex md:hidden flex-col items-center justify-center">
          <Image
            src={DomicilioProcesalenJuicios}
            alt="Domicilio Procesal en Juicios"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Búsqueda de Expedientes en el Archivo Judicial de la Ciudad de
            México
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El servicio de búsqueda de expedientes en el archivo judicial de la
            Ciudad de México está diseñado para facilitar la localización y
            consulta de documentos legales relacionados con juicios y
            procedimientos judiciales archivados. Este servicio es esencial para
            abogados que necesitan obtener copias o información de casos
            previos, o simplemente retomar el seguimiento de procedimientos
            legales aún no concluidos.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo tiene acceso y experiencia en la gestión de archivos
            judiciales, lo que nos permite realizar una búsqueda exhaustiva,
            principalmente en el archivo judicial de la Ciudad de México. Ya sea
            que se trate de casos civiles, mercantiles o familiares, nos
            encargamos de localizar los expedientes o documentos
            correspondientes, asegurándonos de que los documentos solicitados
            sean entregados en el menor tiempo posible.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Con este servicio, te proporcionamos un apoyo profesional y rápido
            para acceder a la información relevante de cualquier expediente
            judicial, garantizando la legalidad y confidencialidad de los datos.
            Además, optimizamos el tiempo y los recursos al gestionar
            directamente las búsquedas en el archivo judicial, facilitando la
            obtención de la información que necesitas para tu caso o
            investigación.
          </p>
          <p className="text-sm md:text-base text-neutral-500"></p>
          <Link
            href={"/contacto"}
            className="flex items-center space-x-2 text-gold"
          >
            <span>ADQUIRIR SERVICIO</span>
            <FaArrowRight size={12} />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={BusquedadeExpedientesenelArchivoJudicialdelaCiudaddeMexico}
            alt="Búsqueda de Expedientes en el Archivo Judicial de la Ciudad de México"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
    </div>
  );
}

export default Index;
