import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import ProcedimientodeRescisiónoCumplimientodeContrato from "@/images/Servicios/AsesoriaEnMateriaCivilyMercantil/ProcedimientodeRescisiónoCumplimientodeContrato.png";
import ControversiasdeArrendamiento from "@/images/Servicios/AsesoriaEnMateriaCivilyMercantil/ControversiasdeArrendamiento.png";
import CobrosyDefensadePagarés from "@/images/Servicios/AsesoriaEnMateriaCivilyMercantil/CobrosyDefensadePagarés.png";
import JuiciodeOtorgamientoyFirmadeEscritura from "@/images/Servicios/AsesoriaEnMateriaCivilyMercantil/JuiciodeOtorgamientoyFirmadeEscritura.png";
import ElaboraciónyRevisióndeContratos from "@/images/Servicios/AsesoriaEnMateriaCivilyMercantil/ElaboraciónyRevisióndeContratos.png";
import JuiciosHipotecarios from "@/images/Servicios/AsesoriaEnMateriaCivilyMercantil/JuiciosHipotecarios.png";
import AsesoríaLegalaCondominios from "@/images/Servicios/AsesoriaEnMateriaCivilyMercantil/AsesoríaLegalaCondominios.png";
import ElaboraciónyRevisióndeRequerimientosExtrajudiciales from "@/images/Servicios/AsesoriaEnMateriaCivilyMercantil/ElaboraciónyRevisióndeRequerimientosExtrajudiciales.png";

function Index() {
  return (
    <div className="p-3 md:p-12 2xl:py-24 2xl:px-36 lg:space-y-24">
      <h2 id="asesoria-en-materia-civil-y-mercantil" className="text-4xl lg:text-5xl font-semibold text-gold text-center py-12 border-b border-b-neutral-200">
        Asesoría en materia Civil y Mercantil
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={ProcedimientodeRescisiónoCumplimientodeContrato}
            alt="Asesoría en materia Civil y Mercantil"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Procedimiento de Rescisión o Cumplimiento de Contrato
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Cuando una de las partes incumple las obligaciones establecidas en
            un contrato, es posible recurrir a procedimientos legales para
            buscar su cumplimiento forzoso o, en su defecto, la rescisión del
            acuerdo. Este proceso inicia con la identificación del
            incumplimiento y el análisis de las cláusulas contractuales
            aplicables. Posteriormente, se notifica formalmente a la parte
            incumplida para dar oportunidad de subsanar la falta o llegar a un
            acuerdo.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            En caso de no obtener una solución, se procede a interponer la
            acción legal correspondiente, presentando pruebas del incumplimiento
            y argumentando los derechos afectados. Durante el procedimiento, se
            busca que la autoridad determine el cumplimiento de las obligaciones
            pactadas o, si no es viable, la rescisión del contrato con las
            consecuencias legales que correspondan.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de expertos te acompaña en cada etapa, asegurando una
            estrategia sólida para proteger tus derechos y alcanzar una
            resolución favorable.
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
            src={ProcedimientodeRescisiónoCumplimientodeContrato}
            alt="Asesoría en materia Civil y Mercantil"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Controversias de Arrendamiento
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Las disputas relacionadas con contratos de arrendamiento son comunes
            y pueden surgir por diversas razones, como el incumplimiento en el
            pago de rentas, deterioro del inmueble, uso indebido de la propiedad
            o incumplimiento de las obligaciones estipuladas en el contrato por
            alguna de las partes.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            En estos casos, es fundamental contar con asesoría legal
            especializada para abordar el conflicto de manera eficiente. El
            proceso puede incluir la mediación para buscar una solución amistosa
            o, en su defecto, la iniciación de un procedimiento judicial. Esto
            puede abarcar desde el desalojo del inmueble, la recuperación de
            rentas adeudadas o la reparación de daños ocasionados al bien.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de abogados expertos en arrendamiento está preparado
            para representar tanto a arrendadores como a arrendatarios,
            ofreciendo soluciones personalizadas y estrategias legales sólidas
            que garanticen la protección de tus derechos y una resolución justa
            del conflicto.
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
            src={ControversiasdeArrendamiento}
            alt="Controversias de Arrendamiento"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={CobrosyDefensadePagarés}
            alt="Cobros y Defensa de Pagarés"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Cobros y Defensa de Pagarés
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El pagaré es un instrumento financiero clave para garantizar el
            cumplimiento de obligaciones de pago. Cuando ocurre un
            incumplimiento, es esencial actuar de manera rápida y estratégica
            para recuperar el crédito.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            En nuestro servicio de cobro, implementamos una estrategia legal que
            nos permite embargar bienes de manera previa al inicio de la demanda
            judicial. Esto garantiza la posibilidad de recuperar el monto
            adeudado, ya sea mediante el cumplimiento del pagaré o mediante una
            negociación con el deudor para reestructurar la deuda en términos
            favorables. Posteriormente, continuamos con el proceso judicial para
            consolidar el cobro del adeudo.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Si eres demandado, también ofrecemos defensas sólidas y
            personalizadas que incluyen el análisis detallado del pagaré, la
            validez del documento y posibles causas de oposición como vicios de
            consentimiento o prescripción.{" "}
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo está enfocado en proteger tus intereses, asegurando
            una representación legal eficaz y orientada a resultados, siempre
            dentro del marco de la ley.
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
            src={CobrosyDefensadePagarés}
            alt="Cobros y Defensa de Pagarés"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Juicio de Otorgamiento y Firma de Escritura
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El otorgamiento y firma de escritura es una acción legal utilizada
            cuando una de las partes involucradas en un contrato o acuerdo, como
            una compraventa o donación, se niega injustificadamente a formalizar
            el acto ante notario público. Este proceso tiene como objetivo
            garantizar que los derechos adquiridos queden plenamente protegidos
            mediante la inscripción en el Registro Público de la Propiedad.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            El procedimiento inicia con la presentación de una demanda en la que
            se solicita al juez que ordene a la parte renuente otorgar y firmar
            la escritura correspondiente. Si la parte demandada no cumple
            voluntariamente con esta obligación, el juez puede designar a un
            representante judicial que firme en su nombre, asegurando así la
            formalización del acto jurídico.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de abogados expertos en esta materia te acompaña
            durante todo el proceso, desde la preparación de la demanda y la
            presentación de pruebas hasta la conclusión del juicio, garantizando
            una representación profesional y efectiva para proteger tus derechos
            y alcanzar una solución favorable.
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
            src={JuiciodeOtorgamientoyFirmadeEscritura}
            alt="Juicio de Otorgamiento y Firma de Escritura"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={ElaboraciónyRevisióndeContratos}
            alt="Elaboración y Revisión de Contratos"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Elaboración y Revisión de Contratos
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Un contrato bien elaborado es la base para establecer relaciones
            legales claras y seguras, evitando conflictos futuros. Nuestro
            servicio de elaboración y revisión de contratos está diseñado para
            proteger tus intereses y garantizar el cumplimiento de los acuerdos
            entre las partes.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Ofrecemos la redacción personalizada de contratos que reflejen con
            precisión tus necesidades y objetivos, cumpliendo con los requisitos
            legales aplicables. Además, revisamos contratos existentes para
            identificar posibles riesgos, cláusulas ambiguas o desventajosas,
            proponiendo ajustes que fortalezcan tu posición legal.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Ya sea que necesites contratos de compraventa, arrendamiento,
            prestación de servicios, confidencialidad o cualquier otro, nuestro
            equipo de abogados expertos asegura un enfoque detallado y
            estratégico. Confía en nosotros para respaldar tus relaciones
            legales con documentos sólidos, claros y enfocados en proteger tus
            derechos.
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
            src={ElaboraciónyRevisióndeContratos}
            alt="Elaboración y Revisión de Contratos"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Juicios Hipotecarios
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Los juicios hipotecarios son procedimientos legales utilizados para
            garantizar el cumplimiento de un crédito respaldado por una
            hipoteca. Estos procesos son comunes cuando el deudor incumple con
            los pagos acordados, permitiendo al acreedor recuperar el monto
            adeudado mediante la ejecución de la garantía hipotecaria,
            generalmente a través del remate del inmueble.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            El procedimiento inicia con la interposición de una demanda ante el
            juzgado correspondiente, en la que se solicita la venta del bien
            hipotecado para liquidar la deuda. Durante el juicio, se presentan
            pruebas, se notifican a las partes involucradas y, en caso de ser
            procedente, se emite una sentencia que ordena el remate del
            inmueble.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            En nuestro despacho, contamos con experiencia en la representación
            de acreedores y deudores en este tipo de procesos. Ofrecemos
            estrategias legales personalizadas, ya sea para ejecutar la garantía
            de manera eficiente o para defender los derechos del deudor,
            buscando soluciones alternativas como la negociación y
            reestructuración del crédito. Nuestro compromiso es brindarte un
            servicio profesional y enfocado en alcanzar una resolución
            favorable.
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
            src={JuiciosHipotecarios}
            alt="Juicios Hipotecarios"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={AsesoríaLegalaCondominios}
            alt="Asesoría Legal a Condominios"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Asesoría Legal a Condominios
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El cobro de cuotas de mantenimiento y el cumplimiento de los
            reglamentos condominales son fundamentales para garantizar la
            convivencia armónica y el buen funcionamiento de los inmuebles bajo
            régimen de condominio. Cuando los propietarios incumplen con sus
            obligaciones, es posible iniciar procedimientos legales para exigir
            el pago de adeudos o corregir conductas que infringen los estatutos
            o el reglamento interno.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            El proceso para el cobro de cuotas de mantenimiento inicia con un
            requerimiento formal de pago al deudor. Si este no responde, se
            puede interponer una demanda ante el juez competente para reclamar
            el monto adeudado, incluyendo intereses moratorios y otros cargos
            que correspondan. Durante el juicio, se presentan pruebas como los
            estatutos del condominio, estados de cuenta y notificaciones previas
            e incluso, se puede solicitar el embargo de bienes del deudor para
            garantizar el pago.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Además del cobro de cuotas, proporcionamos asesoría especializada
            para casos de incumplimiento de los reglamentos condominales,
            ayudando a las administraciones a tomar acciones legales contra los
            infractores. Esto puede incluir la solicitud de indemnizaciones,
            penalizaciones, daños y perjuicios, e incluso la venta forzosa del
            inmueble en casos graves de desacato.
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
            src={AsesoríaLegalaCondominios}
            alt="Asesoría Legal a Condominios"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Elaboración y Revisión de Requerimientos Extrajudiciales
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Los requerimientos extrajudiciales son herramientas legales
            fundamentales para exigir el cumplimiento de obligaciones sin
            necesidad de recurrir de inmediato a un juicio. Estos documentos
            permiten comunicar formalmente a una persona o entidad la existencia
            de un incumplimiento, otorgándole la oportunidad de resolver la
            situación de manera voluntaria y evitando procedimientos judiciales
            costosos y prolongados.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Ofrecemos un servicio integral en la elaboración y revisión de
            requerimientos extrajudiciales, adaptados a cada caso particular.
            Nuestros abogados se encargan de redactar notificaciones claras,
            fundamentadas y con el tono adecuado, asegurando que cumplan con los
            requisitos legales necesarios para su validez.{" "}
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Ya sea que necesites exigir el pago de una deuda, la entrega de un
            bien, el cumplimiento de un contrato o cualquier otra obligación,
            nuestro equipo te brindará un servicio profesional y estratégico,
            diseñado para resolver conflictos de manera efectiva y preservar una
            buena relación entre las partes siempre que sea posible.
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
            src={ElaboraciónyRevisióndeRequerimientosExtrajudiciales}
            alt="Elaboración y Revisión de Requerimientos Extrajudiciales"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
    </div>
  );
}

export default Index;
