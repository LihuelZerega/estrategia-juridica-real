"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/Logo.png";

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-blue flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav className="relative max-w-[85rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="my-1.5" aria-label="Brand">
            <Image src={Logo} alt="Logo" width={120} height={120} className="block md:hidden"/>
            <Image src={Logo} alt="Logo" width={180} height={180} className="hidden md:block"/>
          </Link>

          <div className="md:hidden">
            <button
              type="button"
              className="relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-white disabled:opacity-50 disabled:pointer-events-none"
              onClick={toggleMenu}
              aria-expanded={isOpen ? "true" : "false"}
              aria-controls="hs-header-classic"
              aria-label="Toggle navigation"
            >
              <svg
                className={`size-4 ${isOpen ? "hidden" : ""}`}
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
                className={`shrink-0 size-4 ${!isOpen ? "hidden" : ""}`}
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
          id="hs-header-classic"
          className={`transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:block`}
          aria-labelledby="hs-header-classic-collapse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-3 md:gap-6">
            <Link
              className="p-2 flex items-center text-sm/5 text-white hover:text-gold hover:border-b-2 border-gold"
              href="/"
              aria-current="page"
            >
              Inicio
            </Link>

            {/* Dropdown Servicios */}
            <div className="relative">
              <button
                type="button"
                className="w-full p-2 flex items-center text-sm text-white hover:text-gold focus:outline-none"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen ? "true" : "false"}
              >
                Servicios
                <svg
                  className={`duration-300 ml-2 transform ${
                    isDropdownOpen ? "-rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute lg:w-80 top-full mt-2 bg-white shadow-md z-10">
                  <Link
                    className="block px-4 py-3 text-base text-gray-800 hover:bg-gray-100"
                    href="/servicios#asesoria-en-materia-civil-y-mercantil"
                  >
                    Asesoría en materia Civil y Mercantil
                  </Link>
                  <Link
                    className="block px-4 py-3 text-base text-gray-800 hover:bg-gray-100 border-t"
                    href="/servicios#asesoria-juridica-en-materia-familiar"
                  >
                    Asesoría Jurídica en Materia Familiar
                  </Link>
                  <Link
                    className="block px-4 py-3 text-base text-gray-800 hover:bg-gray-100 border-t"
                    href="/servicios#servicio-de-corresponsalicia-juridica"
                  >
                    Servicio de Corresponsalía Jurídica
                  </Link>
                  <Link
                    className="block px-4 py-3 text-base text-gray-800 hover:bg-gray-100 border-t"
                    href="/servicios#gestion-de-tramites-ante-dependencias"
                  >
                    Gestión de Trámites ante Dependencias
                  </Link>
                </div>
              )}
            </div>

            <Link
              className="p-2 flex items-center text-sm/5 text-white hover:text-gold hover:border-b-2 border-gold"
              href="/sobre-nosotros"
            >
              Sobre Nosotros
            </Link>

            <Link
              className="py-2 px-3 flex items-center text-sm/5 text-white hover:bg-gold border"
              href="/contacto"
            >
              Contactanos
            </Link>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}

export default Index;
