import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import JuiciosSucesoriosIntestamentariosyTestamentarios from "@/images/Servicios/AsesoriaJuridicaenMateriaFamiliar/JuiciosSucesoriosIntestamentariosyTestamentarios.png";
import JuiciodePeticiondeHerencia from "@/images/Servicios/AsesoriaJuridicaenMateriaFamiliar/JuiciodePeticiondeHerencia.png";
import JuiciosdePensiónAlimenticia from "@/images/Servicios/AsesoriaJuridicaenMateriaFamiliar/JuiciosdePensiónAlimenticia.png";
import JuiciosdeGuardayCustodiayRégimendeVisitas from "@/images/Servicios/AsesoriaJuridicaenMateriaFamiliar/JuiciosdeGuardayCustodiayRégimendeVisitas.png";
import JuiciodeDivorcioIncausado from "@/images/Servicios/AsesoriaJuridicaenMateriaFamiliar/JuiciodeDivorcioIncausado.png";
import JuiciodeReconocimientodeConcubinato from "@/images/Servicios/AsesoriaJuridicaenMateriaFamiliar/JuiciodeReconocimientodeConcubinato.png";
import JuiciodeLiquidaciondeSociedadConyugal from "@/images/Servicios/AsesoriaJuridicaenMateriaFamiliar/JuiciodeLiquidaciondeSociedadConyugal.png";

function Index() {
  return (
    <div className="p-3 md:p-12 2xl:py-24 2xl:px-36 lg:space-y-24">
      <h2 id="asesoria-juridica-en-materia-familiar" className="text-4xl lg:text-5xl font-semibold text-gold text-center py-12 border-b border-b-neutral-200">
        Asesoría Jurídica en Materia Familiar
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={JuiciosSucesoriosIntestamentariosyTestamentarios}
            alt="Juicios Sucesorios Intestamentarios y Testamentarios"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Juicios Sucesorios Intestamentarios y Testamentarios
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Los juicios sucesorios son procedimientos legales destinados a
            determinar y formalizar la transmisión de bienes, derechos y
            obligaciones de una persona fallecida a sus herederos. Estos pueden
            ser de dos tipos: intestamentarios, cuando no existe un testamento
            válido, y testamentarios, cuando la persona dejó un testamento.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            En los juicios intestamentarios, el proceso inicia con la
            identificación y declaración de los posibles herederos, conforme a
            las disposiciones establecidas por la ley. Por otro lado, en los
            juicios testamentarios, se respeta y ejecuta la voluntad del
            fallecido, tal como fue expresada en su testamento.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de abogados expertos en materia sucesoria te acompaña
            durante todo el proceso, asegurando que se respeten tus derechos y
            que el procedimiento sea transparente y eficiente. Ya sea que
            necesites asesoría para iniciar un juicio sucesorio o representación
            legal para resolver conflictos entre herederos, estamos aquí para
            ofrecerte soluciones legales sólidas y personalizadas.
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
            src={JuiciosSucesoriosIntestamentariosyTestamentarios}
            alt="Juicios Sucesorios Intestamentarios y Testamentarios"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Juicio de Petición de Herencia
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El juicio de petición de herencia es un procedimiento legal que
            permite a una persona reclamar los derechos que le corresponden como
            heredero, cuando ha sido excluido de la herencia de manera
            injustificada o se le ha impedido participar en su repartición. Este
            proceso es esencial para garantizar que se respeten los derechos
            sucesorios establecidos por ley o por testamento.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            El procedimiento comienza con la presentación de una demanda en la
            que el reclamante debe acreditar su calidad de heredero, ya sea
            mediante pruebas que demuestren su vínculo familiar o con base en el
            testamento del fallecido. Durante el juicio, se examinan los
            documentos presentados, se resuelven posibles conflictos entre los
            herederos y, una vez determinado el derecho del demandante, se
            procede a la restitución de los bienes que le correspondan, ya sea
            de manera individual o en proporción a su participación en la
            herencia.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de abogados expertos en materia sucesoria te acompaña
            en este proceso, asegurando una representación sólida y eficiente.
            Trabajamos para proteger tus derechos como heredero, resolviendo
            disputas de manera efectiva y garantizando que recibas la parte de
            la herencia que legalmente te corresponde.
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
            src={JuiciodePeticiondeHerencia}
            alt="Juicio de Petición de Herencia"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={JuiciosdePensiónAlimenticia}
            alt="Juicios de Pensión Alimenticia"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Juicios de Pensión Alimenticia
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Los juicios de pensión alimenticia son procedimientos legales que
            buscan garantizar el cumplimiento de la obligación de proporcionar
            recursos para la manutención de hijos, cónyuges o familiares en
            situaciones específicas. Estos procesos pueden tener diferentes
            objetivos, dependiendo de las circunstancias y necesidades de las
            partes involucradas.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Cuando se trata de reclamar una pensión alimenticia, el
            procedimiento inicia con la presentación de una demanda en la que se
            establece la relación entre el solicitante y el obligado, así como
            las necesidades económicas de quien reclama la pensión. En casos de
            aumento, se deben acreditar cambios en las circunstancias, como el
            incremento en las necesidades del beneficiario o en los ingresos del
            obligado.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Igualmente, se puede reclamar la falta de cumplimiento de algún
            convenio realizado por este concepto Por otro lado, la reducción o
            cancelación de la pensión alimenticia puede solicitarse cuando el
            obligado enfrenta una disminución significativa en sus ingresos, o
            cuando las circunstancias que dieron origen a la pensión, como la
            mayoría de edad de los hijos, ya no aplican.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de abogados expertos en derecho familiar te asesora y
            representa en cualquiera de estas situaciones, garantizando que tus
            derechos e intereses estén protegidos, y asegurando un proceso justo
            y eficiente para resolver el conflicto de manera favorable.
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
            src={JuiciosdePensiónAlimenticia}
            alt="Juicios de Pensión Alimenticia"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Juicios de Guarda y Custodia y Régimen de Visitas
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            Los juicios de guarda y custodia son procedimientos legales que
            buscan determinar con quién vivirán los hijos menores de edad tras
            una separación o divorcio, priorizando siempre su bienestar físico,
            emocional y psicológico. Por su parte, el régimen de visitas regula
            el tiempo y las condiciones bajo las cuales el progenitor que no
            tiene la custodia puede convivir con ellos, asegurando su derecho a
            mantener una relación cercana y constante.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            En los juicios de guarda y custodia, el juez evalúa diversos
            factores, como la capacidad de cada progenitor para atender las
            necesidades de los menores, la estabilidad del entorno, la relación
            entre los hijos y los padres, y la opinión de los menores cuando su
            edad lo permite.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            En cuanto al régimen de visitas, este procedimiento establece
            horarios y condiciones específicas para las convivencias,
            garantizando que se adapten a las necesidades de los menores y a las
            circunstancias de los padres.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Respecto al régimen de visitas, es importante destacar que este
            constituye un derecho humano de los niños y adolescentes, enfocado
            en garantizar su desarrollo integral mediante una relación afectiva
            con ambos padres. Este derecho no puede estar condicionado al
            cumplimiento del pago de una pensión alimenticia, ya que ambas
            obligaciones son independientes y buscan el interés superior de los
            menores.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo legal te acompaña durante todo el proceso, ya sea que
            busques obtener la custodia, modificar el régimen existente o
            defender tus derechos como progenitor. Trabajamos con un enfoque
            sensible y profesional para proteger el interés superior de los
            menores y alcanzar acuerdos justos y sostenibles.
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
            src={JuiciosdeGuardayCustodiayRégimendeVisitas}
            alt="Juicios de Guarda y Custodia y Régimen de Visitas"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={JuiciodeDivorcioIncausado}
            alt="Juicio de Divorcio Incausado"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Juicio de Divorcio Incausado
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El divorcio incausado, también conocido como divorcio unilateral o
            sin expresión de causa, permite a cualquiera de los cónyuges
            solicitar la disolución del matrimonio sin necesidad de justificar
            el motivo y sin que sea necesario la conformidad de la otra parte.
            Este procedimiento tiene como objetivo facilitar el acceso al
            divorcio de manera rápida y sencilla, garantizando el derecho a
            decidir libremente sobre el estado civil.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            El proceso inicia con la presentación de la demanda por uno de los
            cónyuges, quien no está obligado a argumentar razones específicas
            para solicitar el divorcio. Durante el juicio, se pueden resolver
            aspectos importantes relacionados con el vínculo matrimonial, como
            la guarda y custodia de los hijos menores, el régimen de visitas, la
            pensión alimenticia, la liquidación de la sociedad conyugal (en caso
            de aplicar) y, en su caso, el uso del domicilio conyugal.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de abogados especialistas en derecho familiar te
            acompaña en cada etapa del proceso, asegurando que tus derechos e
            intereses sean protegidos. Ya sea que inicies el trámite o respondas
            a una solicitud de divorcio incausado, te brindaremos asesoría legal
            personalizada y un enfoque estratégico para alcanzar una resolución
            justa y en el menor tiempo posible.
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
            src={JuiciodeDivorcioIncausado}
            alt="Juicio de Divorcio Incausado"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="flex flex-col items-start space-y-5 md:p-8 2xl:pl-32">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Juicio de Reconocimiento de Concubinato
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El juicio de reconocimiento de concubinato es un procedimiento legal
            que tiene como objetivo acreditar la existencia de una relación de
            hecho entre dos personas que han vivido juntas de manera constante y
            bajo una relación similar al matrimonio, sin haberlo formalizado.
            Este reconocimiento es fundamental para acceder a derechos legales y
            patrimoniales derivados de esta unión, como pensión alimenticia,
            derechos sucesorios o beneficios de seguridad social.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            El proceso inicia con la presentación de una demanda en la que se
            deben aportar pruebas que demuestren la convivencia durante el
            tiempo requerido por la ley, que generalmente es de dos años
            continuos, salvo que exista descendencia en común, lo cual puede
            reducir este periodo. Las pruebas pueden incluir testimonios,
            documentación que acredite domicilio compartido, cuentas bancarias
            conjuntas, o cualquier evidencia que confirme la relación de
            concubinato.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de abogados especializados en derecho familiar te
            acompaña durante este procedimiento, asegurando una representación
            sólida y estratégica. Ya sea que busques el reconocimiento del
            concubinato o necesites defenderte en este tipo de casos, trabajamos
            para proteger tus derechos y alcanzar una resolución favorable
            conforme a la ley.
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
            src={JuiciodeReconocimientodeConcubinato}
            alt="Juicio de Reconocimiento de Concubinato"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-12 md:py-0 md:p-12">
        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src={JuiciodeLiquidaciondeSociedadConyugal}
            alt="Juicio de Liquidación de Sociedad Conyugal"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 md:p-8 2xl:pl-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue">
            Juicio de Liquidación de Sociedad Conyugal
          </h2>
          <p className="text-sm md:text-base text-neutral-500">
            El juicio de liquidación de sociedad conyugal es un proceso legal
            que tiene lugar después de la disolución de un matrimonio, con el
            objetivo de repartir de manera justa los bienes adquiridos durante
            la vigencia del mismo.{" "}
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            El procedimiento inicia con la identificación y valoración de los
            bienes comunes, la determinación de las deudas existentes y la
            distribución de los activos según la participación que corresponda a
            cada parte. En caso de desacuerdo entre los cónyuges, el juicio
            puede incluir la intervención de un juez para resolver la disputa y
            garantizar una distribución equitativa.
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            Nuestro equipo de abogados especializados en derecho familiar y
            patrimonial te acompaña a lo largo de todo el proceso, asegurando
            que tus derechos sean protegidos y que la liquidación de la sociedad
            conyugal se realice de manera justa y conforme a la ley. Te
            brindamos asesoría legal personalizada, tanto si eres el solicitante
            como si necesitas defender tu parte de los bienes.
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
            src={JuiciodeLiquidaciondeSociedadConyugal}
            alt="Juicio de Liquidación de Sociedad Conyugal"
            className="flex object-cover h-[400px] w-full md:h-[500px] md:w-[500px] mt-6 md:mt-0"
          />
        </div>
      </section>
    </div>
  );
}

export default Index;
