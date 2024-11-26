"use client"
import { motion } from "framer-motion";
import React, { useState } from "react";

function index() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav className="relative max-w-[85rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <a
            className="flex-none font-semibold text-xl text-white focus:outline-none focus:opacity-80"
            href="/"
            aria-label="Brand"
          >
            EJR
          </a>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-white disabled:opacity-50 disabled:pointer-events-none"
              onClick={toggleMenu}
              aria-expanded={isOpen ? "true" : "false"}
              aria-controls="hs-header-classNameic"
              aria-label="Toggle navigation"
            >
              <svg
                className={`hs-collapse-open:hidden size-4 ${isOpen ? "hidden" : ""}`}
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className={`hs-collapse-open:block shrink-0 hidden size-4 ${!isOpen ? "hidden" : ""}`}
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        <motion.div
          id="hs-header-classNameic"
          className={`hs-collapse transition-all duration-300 ${isOpen ? "block" : "hidden"} md:block`}
          aria-labelledby="hs-header-classNameic-collapse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-6">
              <a
                className="p-2 flex items-center text-sm/5 text-white hover:text-gold hover:border-b-2 border-gold"
                href="/"
                aria-current="page"
              >
                Inicio
              </a>

              <a
                className="p-2 flex items-center text-sm/5 text-white hover:text-gold hover:border-b-2 border-gold"
                href="/servicios"
              >
                Servicios
              </a>

              <a
                className="p-2 flex items-center text-sm/5 text-white hover:text-gold hover:border-b-2 border-gold"
                href="/sobre-nosotros"
              >
                Sobre Nosotros
              </a>

              <a
                className="py-2 px-3 flex items-center text-sm/5 text-white hover:bg-gold border"
                href="/contacto"
              >
                Contactanos
              </a>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}

export default index;
