import { footer } from "framer-motion/m";
import React from "react";

function index() {
  return (
    <footer className="bg-blue">
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <a
              className="flex-none font-semibold text-xl text-white focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Brand"
            >
              EJR
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gold uppercase">
              Inicio
            </h3>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Sobre Nosotros
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Nuestros Servicios
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Nuestros Proyectos
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Testimonios
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Preguntas Frecuentes
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gold uppercase">
              Servicios
            </h3>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Trámites ante Dependencias
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Asesoría Civil y Mercantil
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Asesoría En lo Familiar
                </a>{" "}
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Juicios De Amparo
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Gestoría
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gold uppercase">
              Sobre Nosotros
            </h3>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Quienes Somos
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Nuestra Historia
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Nuestros Valores
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Áreas de Especializacion
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1">
            <h3 className="text-xs font-semibold text-gold uppercase">
              Contacto
            </h3>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  contacto@estrategiajuridicareal.com
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  55 2334 3676
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  Lunes-Viernes: 9am – 7pm
                </a>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-5 mt-5 border-t border-gold">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <div className="space-x-4 text-sm">
                <p className="inline-flex gap-x-2 text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500">
                  Copyright © 2024 Estratégia Jurídica Real. Todos los derechos
                  reservados.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-3">
              <div className="mt-3 sm:hidden">
                <a
                  className="flex-none font-semibold text-xl text-white focus:outline-none focus:opacity-80"
                  href="#"
                  aria-label="Brand"
                >
                  EJR
                </a>
              </div>

              <div className="space-x-4">
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    color="#ded8db"
                    fill="none"
                  >
                    <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    color="#ded8db"
                    fill="none"
                  >
                    <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M17.5078 6.5L17.4988 6.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    color="#ded8db"
                    fill="none"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.8824 12C14.0519 12 15 13.0074 15 14.25C15 15.4926 14.0519 16.5 12.8824 16.5H10.4118C9.74625 16.5 9.4135 16.5 9.20675 16.2972C9 16.0945 9 15.7681 9 15.1154V12M12.8824 12C14.0519 12 15 10.9926 15 9.75C15 8.50736 14.0519 7.5 12.8824 7.5H10.4118C9.74625 7.5 9.4135 7.5 9.20675 7.70277C9 7.90554 9 8.2319 9 8.88462V12M12.8824 12H9"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    color="#ded8db"
                    fill="none"
                  >
                    <path
                      d="M7 10V17"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.00801 7L6.99902 7"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default index;
