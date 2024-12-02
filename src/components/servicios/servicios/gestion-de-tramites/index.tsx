import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import MisionVision from "@/images/MisionVision.jpg";

function Index() {
  return (
    <div className="p-3 md:p-12 2xl:py-24 2xl:px-36 lg:space-y-24">
      <h2 id="gestion-de-tramites-ante-dependencias" className="text-4xl lg:text-5xl font-semibold text-gold text-center py-12 border-b border-b-neutral-200">
        Gestión de Trámites ante Dependencias
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={MisionVision}
            alt="Mision y Vision"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Trámites ante el Registro Civil
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El servicio de trámites ante el Registro Civil está diseñado para
            facilitar a particulares la gestión de documentos y actos legales
            relacionados con el estado civil de las personas. Estos trámites son
            esenciales para garantizar el reconocimiento y la formalización de
            eventos importantes, como nacimientos, matrimonios, divorcios,
            defunciones, adopciones y rectificaciones de actas.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de expertos se encarga de realizar el proceso de
            manera eficiente y conforme a los requisitos legales establecidos.
            Entre los servicios que ofrecemos se incluyen la gestión de copias
            certificadas de actas, inscripción de actos del estado civil,
            rectificación o corrección de datos en actas.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Al delegar tus trámites ante el Registro Civil a nuestro equipo,
            garantizas un manejo profesional, rápido y sin complicaciones. Nos
            aseguramos de que tu documentación sea procesada en tiempo y forma,
            ahorrándote tiempo y esfuerzo, y evitando errores que puedan
            retrasar el procedimiento. Este servicio es ideal para quienes
            buscan soluciones prácticas y confiables para cumplir con los
            requerimientos legales del estado civil.
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
            src={MisionVision}
            alt="Mision y Vision"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Trámites ante el Registro Público de la Propiedad de la Ciudad de
            México
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El servicio de trámites ante el Registro Público de la Propiedad de
            la Ciudad de México está diseñado para facilitar la gestión de actos
            legales relacionados con la consulta y actualización de bienes
            inmuebles. Este registro es fundamental para garantizar la seguridad
            jurídica de las operaciones inmobiliarias y proteger los derechos de
            propiedad y posesión.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Entre los trámites más comunes que gestionamos se encuentran: la
            cancelación de gravámenes por prescripción; rectificación de errores
            en registros; y obtención de certificados de libertad de gravamen,
            existencia de gravamen o historial registral. Además, ofrecemos
            servicios de búsqueda y localización de antecedentes registrales,
            necesarios para el análisis legal de propiedades.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Estas gestiones de igual manera las realizamos ante los Institutos
            de la Función Registral del Estado de México, de los diferentes
            municipios.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de expertos en trámites registrales se encarga de
            revisar minuciosamente la documentación y de realizar los
            procedimientos conforme a los requisitos establecidos por las
            autoridades, asegurando que el proceso sea ágil y sin contratiempos.
            Este servicio es ideal tanto para particulares como para empresas
            que deseen garantizar la certeza legal de sus bienes inmuebles.
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
            src={MisionVision}
            alt="Mision y Vision"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={MisionVision}
            alt="Mision y Vision"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Trámites ante el Archivo General de Notarías
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El servicio de trámites ante el Archivo General de Notarías está
            orientado a facilitar la obtención, registro y gestión de documentos
            notariales esenciales para garantizar la seguridad jurídica en actos
            y transacciones legales. Este archivo es la institución encargada de
            conservar y administrar los protocolos notariales, brindando acceso
            a documentos como escrituras públicas, actas y testamentos.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Entre los trámites que gestionamos se encuentran: la obtención de
            copias certificadas de escrituras o actas notariales, búsqueda de
            documentos específicos en los protocolos notariales, inscripción de
            documentos notariales en los registros correspondientes, así como la
            rectificación o corrección de errores en documentos previamente
            inscritos.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de expertos conoce a fondo los procedimientos y
            requisitos necesarios para llevar a cabo estos trámites de manera
            ágil y efectiva, evitando demoras o contratiempos. Este servicio es
            ideal para particulares, empresas, abogados y notarios que necesitan
            gestionar documentación de manera profesional y confiable. Con
            nuestra asesoría, puedes tener la certeza de que tus trámites ante
            el Archivo General de Notarías serán atendidos con la mayor
            diligencia y precisión.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Estas gestiones de igual manera las realizamos ante los Archivos
            Generales de Notarías del Estado de México, de los diferentes
            municipios.
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
            src={MisionVision}
            alt="Mision y Vision"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Trámites de Cancelación de Adeudo de Agua y Predial por Prescripción
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El servicio de trámites para la cancelación de adeudos de agua y
            predial por prescripción está diseñado para ayudar a particulares y
            empresas a regularizar sus obligaciones fiscales cuando estas han
            quedado sin cobrarse durante el periodo establecido por la ley. La
            prescripción es una figura legal que permite extinguir deudas
            tributarias cuando la autoridad no las ha exigido en tiempo y forma,
            brindando a los contribuyentes la posibilidad de solicitar su
            cancelación.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de expertos se encarga de analizar la situación
            específica de tu adeudo, verificando los plazos aplicables según la
            normativa vigente y las condiciones bajo las cuales procede la
            prescripción. Una vez confirmado el derecho a la cancelación,
            gestionamos todos los trámites ante las autoridades
            correspondientes, incluyendo la presentación de solicitudes, la
            argumentación legal y el seguimiento necesario hasta obtener la
            resolución favorable.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Este servicio es ideal para quienes buscan poner en orden sus
            obligaciones fiscales sin incurrir en pagos indebidos. Con nuestra
            asesoría profesional, garantizamos que el proceso se lleve a cabo de
            manera eficiente, evitando complicaciones y asegurando la protección
            de tus derechos como contribuyente.
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
            src={MisionVision}
            alt="Mision y Vision"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
    </div>
  );
}

export default Index;
