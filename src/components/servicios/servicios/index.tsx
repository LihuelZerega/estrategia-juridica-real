import React from "react";
import AsesoriaEnMateriaCivil from "./asesoria-en-materia-civil";
import AsesoríaJuridicaEnMateriaFamiliar from "./asesoria-juridica-en-materia";
import ServicioDeCorresponsaliaJuridica from "./servicio-de-corresponsalia";
import GestionDeTramitesAnteDependencias from "./gestion-de-tramites";
import RematesBancarios from "./remates-bancarios";
import FideicomisosDeGarantia from "./fideicomisos-de-garantia";

function Index() {
  return (
    <>
      <AsesoriaEnMateriaCivil />
      <AsesoríaJuridicaEnMateriaFamiliar />
      <RematesBancarios />
      <FideicomisosDeGarantia />
      <ServicioDeCorresponsaliaJuridica />
      <GestionDeTramitesAnteDependencias />
    </>
  );
}

export default Index;
