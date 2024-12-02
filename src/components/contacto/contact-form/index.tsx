"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "",
    situation: "",
  });

  // const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedService) {
      setModalContent({
        title: "Error",
        message: "Por favor, seleccione un Servicio.",
      });
      setIsModalOpen(true);
      return;
    }

    // if (!isTermsChecked) {
    //   setModalContent({
    //     title: "Error",
    //     message: "Debes aceptar los términos y condiciones antes de continuar.",
    //   });
    //   setIsModalOpen(true);
    //   return;
    // }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        service: selectedService,
      }),
    });

    if (res.ok) {
      setModalContent({
        title: "Mensaje enviado exitosamente",
        message:
          "El mensaje ha sido enviado exitosamente, pronto nos pondremos en contacto. ¡Gracias por contactarnos!",
      });
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        service: "",
        situation: "",
      });
      setSelectedService("");
      // setIsTermsChecked(false);
    } else {
      setModalContent({
        title: "Error",
        message: "Error al enviar el mensaje",
      });
    }
    setIsModalOpen(true);
  };

  // const openTerms = () => {
  //   setIsTermsOpen(true);
  // };

  const closeTerms = () => {
    setIsTermsOpen(false);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-left">
          <h1 className="text-4xl text-center md:text-left font-bold text-blue sm:text-4xl mb-4 md:mb-0">
            Realizá tu Consulta Gratuita
          </h1>
          <p className="text-center md:text-left mt-1 text-gray-600">
            En Estrategia Jurídica Real, estamos aquí para responder a tus
            necesidades legales. Ya sea que enfrentes un desafío legal,
            necesites asesoría o quieras conocer más sobre nuestros servicios,
            estamos listos para ayudarte.
          </p>
        </div>

        <div className="mt-6 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col border border-blue p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="sr-only"
                    >
                      Nombre
                    </label>
                    <input
                      id="first-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full border border-gold text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                      Apellido
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                      autoComplete=""
                      className="py-3 px-4 block w-full border border-gold text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Apellido"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    autoComplete="email"
                    className="py-3 px-4 block w-full border border-gold text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">
                    Número de Teléfono
                  </label>
                  <input
                    id="phone-number"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    required
                    autoComplete="tel"
                    className="py-3 px-4 block w-full border border-gold text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Número de Teléfono"
                  />
                </div>

                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">
                    Seleccione un Servicio
                  </label>
                  <select
                    name="hs-country-1"
                    id="hs-country-1"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="py-3 px-4 block w-full border border-gold text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <option value="" disabled selected>
                      Seleccione un Servicio
                    </option>
                    <option value="procedimiento-rescision-cumplimiento-contrato">
                      Procedimiento de Rescisión o Cumplimiento de Contrato
                    </option>
                    <option value="controversias-arrendamiento">
                      Controversias de Arrendamiento
                    </option>
                    <option value="cobros-defensa-pagares">
                      Cobros y Defensa de Pagarés
                    </option>
                    <option value="juicio-otorgamiento-firma-escritura">
                      Juicio de Otorgamiento y Firma de Escritura
                    </option>
                    <option value="elaboracion-revision-contratos">
                      Elaboración y Revisión de Contratos
                    </option>
                    <option value="juicios-hipotecarios">
                      Juicios Hipotecarios
                    </option>
                    <option value="asesoria-legal-condominios">
                      Asesoría Legal a Condominios
                    </option>
                    <option value="elaboracion-revision-requerimientos-extrajudiciales">
                      Elaboración y Revisión de Requerimientos Extrajudiciales
                    </option>
                    <option value="juicios-sucesorios-intestamentarios-testamentarios">
                      Juicios Sucesorios Intestamentarios y Testamentarios
                    </option>
                    <option value="juicio-peticion-herencia">
                      Juicio de Petición de Herencia
                    </option>
                    <option value="juicios-pension-alimenticia">
                      Juicios de Pensión Alimenticia
                    </option>
                    <option value="juicios-guarda-custodia-regimen-visitas">
                      Juicios de Guarda y Custodia y Régimen de Visitas
                    </option>
                    <option value="juicio-divorcio-incaustado">
                      Juicio de Divorcio Incausado
                    </option>
                    <option value="juicio-reconocimiento-concubinato">
                      Juicio de Reconocimiento de Concubinato
                    </option>
                    <option value="juicio-liquidacion-sociedad-conyugal">
                      Juicio de Liquidación de Sociedad Conyugal
                    </option>
                    <option value="diligenciacion-exhortos-oficios-cdmx-edomex">
                      Diligenciación de Exhortos y Oficios en CDMX y Estado de
                      México
                    </option>
                    <option value="pasantia-juicios-radicados-cdmx-edomex">
                      Pasantía de Juicios Radicados en CDMX y Estado de México
                    </option>
                    <option value="domicilio-procesal-juicios">
                      Domicilio Procesal en Juicios
                    </option>
                    <option value="busqueda-expedientes-archivo-judicial-cdmx">
                      Búsqueda de Expedientes en el Archivo Judicial de la
                      Ciudad de México
                    </option>
                    <option value="tramites-registro-civil">
                      Trámites ante el Registro Civil
                    </option>
                    <option value="tramites-registro-publico-propiedad-cdmx">
                      Trámites ante el Registro Público de la Propiedad de la
                      Ciudad de México
                    </option>
                    <option value="tramites-archivo-general-notarias">
                      Trámites ante el Archivo General de Notarías
                    </option>
                    <option value="tramites-cancelacion-adeudo-agua-predial-prescripcion">
                      Trámites de Cancelación de Adeudo de Agua y Predial por
                      Prescripción
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hs-about-contacts-1" className="sr-only">
                    Describanos su situación
                  </label>
                  <textarea
                    id="situation"
                    name="situation"
                    value={formData.situation}
                    onChange={(e) =>
                      setFormData({ ...formData, situation: e.target.value })
                    }
                    required
                    rows={4}
                    className="py-3 px-4 block w-full border border-gold text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Describanos su situación"
                  ></textarea>
                </div>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium border border-transparent bg-blue hover:bg-sky-950 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Enviar
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  Lo contactaremos a la brevedad.
                </p>
              </div>
            </form>
          </div>

          {isTermsOpen && (
            <div
              id="hs-modal-upgrade-to-pro"
              className="hs-overlay size-full fixed top-0 left-0 z-[80] overflow-x-hidden overflow-y-auto flex justify-center items-center inset-0 bg-black/30 bg-black bg-opacity-20"
              role="dialog"
              aria-labelledby="hs-modal-upgrade-to-pro-label"
            >
              <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-100 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="bg-white border border-gray-200 shadow-sm pointer-events-auto">
                  <div className="p-4 sm:p-7">
                    <div className="text-center">
                      <h3
                        id="hs-modal-upgrade-to-pro-label"
                        className="block text-3xl sm:text-4xl font-semibold text-gray-800"
                      >
                        Política de Privacidad
                      </h3>
                      <div className="max-w-lg mx-auto">
                        <p className="mt-2 text-sm text-gray-600">
                          Última actualización: 01 de Octubre de 2024
                        </p>
                        <p className="mt-3 text-xs text-gray-600">
                          En <strong>NF Arquitecta</strong>, respetamos su
                          privacidad y estamos comprometidos a proteger sus
                          datos personales. Esta política de privacidad describe
                          cómo recopilamos, utilizamos, y compartimos la
                          información cuando usted interactúa con nosotros a
                          través de nuestro formulario de contacto.
                        </p>
                      </div>

                      <div className="mt-5">
                        <hr />
                      </div>
                    </div>

                    <div className="py-4 sm:py-6 divide-y divide-gray-200 max-h-72 lg:max-h-32 xl:max-h-52 2xl:max-h-72 overflow-y-auto">
                      <div className="pb-4 sm:pb-6">
                        <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                          1. Información que Recopilamos
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                          Cuando usted completa el formulario de contacto en
                          nuestro sitio web, podemos recopilar los siguientes
                          datos personales:
                        </p>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                          <li>- Nombre y apellido completo</li>
                          <li>- Dirección de correo electrónico</li>
                          <li>- Número de teléfono</li>
                          <li>- Mensaje o consulta</li>
                        </ul>
                      </div>

                      <div className="pb-4 sm:py-6">
                        <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                          2. Cómo Utilizamos su Información
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                          La información que recopilamos se utiliza únicamente
                          para los siguientes propósitos:
                        </p>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                          <li>
                            <strong>Responder a sus consultas:</strong>{" "}
                            Utilizaremos su nombre, correo electrónico y número
                            de teléfono para ponernos en contacto con usted y
                            responder a sus preguntas.
                          </li>
                          <li>
                            <strong>Mejorar nuestros servicios:</strong>La
                            información nos ayuda a mejorar nuestras respuestas
                            y la experiencia de usuario en nuestro sitio web.
                          </li>
                        </ul>
                      </div>

                      <div className="pb-4 sm:py-6">
                        <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                          3. Compartir su Información
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                          No compartimos, vendemos ni alquilamos sus datos
                          personales con terceros, excepto en las siguientes
                          circunstancias:
                        </p>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                          <li>
                            <strong>Proveedores de servicios:</strong> Podemos
                            compartir su información con proveedores de
                            servicios que nos ayudan a gestionar nuestro sitio
                            web o comunicarnos con usted (por ejemplo, servicios
                            de correo electrónico).
                          </li>
                          <li>
                            <strong>Cumplimiento legal:</strong> Podemos
                            divulgar su información si así lo requiere la ley o
                            una autoridad judicial.
                          </li>
                        </ul>
                      </div>

                      <div className="pb-4 sm:py-6">
                        <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                          4. Seguridad de su Información
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                          Implementamos medidas de seguridad técnicas y
                          organizativas para proteger sus datos personales
                          frente a accesos no autorizados, pérdida, alteración o
                          divulgación. Sin embargo, no podemos garantizar la
                          seguridad absoluta de la información transmitida por
                          internet.
                        </p>
                      </div>

                      <div className="pb-4 sm:py-6">
                        <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                          5. Retención de sus Datos
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                          Mantendremos sus datos personales solo durante el
                          tiempo necesario para cumplir con los propósitos
                          mencionados en esta política de privacidad, o según lo
                          exija la ley.
                        </p>
                      </div>

                      <div className="pb-4 sm:py-6">
                        <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                          6. Derechos de los Usuarios
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                          Usted tiene los siguientes derechos con respecto a sus
                          datos personales:
                        </p>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                          <li>
                            <strong>Derecho de acceso:</strong> Puede solicitar
                            una copia de los datos que tenemos sobre usted.
                          </li>
                          <li>
                            <strong>Derecho de rectificación:</strong> Puede
                            solicitar la corrección de cualquier información
                            incorrecta o incompleta.
                          </li>
                          <li>
                            <strong>Derecho de supresión:</strong> Puede
                            solicitar que eliminemos sus datos personales cuando
                            ya no sean necesarios para los fines por los que
                            fueron recopilados.
                          </li>
                          <li>
                            <strong>
                              Derecho a la limitación del tratamiento:
                            </strong>{" "}
                            Puede solicitar que limitemos el tratamiento de sus
                            datos en determinadas circunstancias.
                          </li>
                          <li>
                            <strong>Derecho de oposición:</strong> Puede
                            oponerse al tratamiento de sus datos para ciertos
                            fines.
                          </li>
                        </ul>
                        <p className="text-sm md:text-base text-gray-600 mt-2">
                          Para ejercer cualquiera de estos derechos, puede
                          contactarnos utilizando los metodos de contacto
                          proporcionados en nuestra web.
                        </p>
                      </div>

                      <div className="pb-4 sm:py-6">
                        <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                          7. Cambios a esta Política de Privacidad
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                          Nos reservamos el derecho de actualizar esta política
                          de privacidad en cualquier momento. Cualquier cambio
                          será publicado en esta página con la fecha de
                          actualización correspondiente.
                        </p>
                      </div>

                      <div className="pb-4 sm:py-6">
                        <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                          8. Contacto
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                          Si tiene alguna pregunta o desea ejercer sus derechos
                          relacionados con la privacidad de sus datos, puede
                          contactarnos utilizando los metodos de contacto
                          proporcionados en nuestra web.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end items-center gap-x-2 p-4 sm:px-7 border-t">
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
                      onClick={closeTerms}
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      onClick={closeTerms}
                    >
                      Aceptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isModalOpen && (
            <div
              id="hs-task-created-alert"
              className="fixed inset-0 z-[80] flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black/30 px-12 "
              role="dialog"
              aria-labelledby="hs-task-created-alert-label"
            >
              <div className="relative flex flex-col bg-white shadow-lg w-full max-w-lg">
                <div className="p-4 sm:p-10 text-center overflow-y-auto">
                  <h3
                    id="hs-task-created-alert-label"
                    className="mb-2 text-xl font-bold text-gray-800"
                  >
                    {modalContent.title}
                  </h3>
                  <p className="text-gray-500">{modalContent.message}</p>

                  <div className="mt-6 flex justify-center gap-x-4">
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="divide-y divide-gray-200">
            <div className="flex gap-x-7 py-6">
              <svg
                className="shrink-0 size-6 mt-1.5 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">Dirección</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Rio Lerma #94 3er piso, Colonia Cuauhtemoc
                </p>
              </div>
            </div>

            <div className="flex gap-x-7 py-6">
              <svg
                className="shrink-0 size-6 mt-1.5 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="mt-1 text-sm text-gray-500">
                  contacto@estrategiajuridicareal.com
                </p>
              </div>
            </div>

            <div className=" flex gap-x-7 py-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
              >
                <path
                  d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11 19H13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">Teléfono</h3>
                <p className="mt-1 text-sm text-gray-500">55 2334 3676</p>
              </div>
            </div>

            <div className=" flex gap-x-7 py-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="13"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M5 19L3 21M19 19L21 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 3.5697L19.5955 3.27195C20.4408 2.84932 20.7583 2.89769 21.4303 3.5697C22.1023 4.2417 22.1507 4.55924 21.728 5.4045L21.4303 6M5 3.5697L4.4045 3.27195C3.55924 2.84932 3.2417 2.89769 2.5697 3.5697C1.89769 4.2417 1.84932 4.55924 2.27195 5.4045L2.5697 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 9.5V13.5L14 15.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3.5V2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 2H14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">
                  Horario de oficina
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Lunes-Viernes: 9am – 7pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
