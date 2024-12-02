import React from "react";
import AsesoriaEnMateriaCivil from "./asesoria-en-materia-civil";
import AsesoríaJuridicaEnMateriaFamiliar from "./asesoria-juridica-en-materia";
import ServicioDeCorresponsaliaJuridica from "./servicio-de-corresponsalia";
import GestionDeTramitesAnteDependencias from "./gestion-de-tramites";

function Index() {
  return (
    <>
      <AsesoriaEnMateriaCivil />
      <AsesoríaJuridicaEnMateriaFamiliar />
      <ServicioDeCorresponsaliaJuridica />
      <GestionDeTramitesAnteDependencias />
    </>
  );
}

export default Index;
