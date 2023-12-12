import React from "react";
import Titulo from "../../atoms/titulo";
import Parrafo from "../../atoms/parrafo";

export default function BoxNosotros() {
  const textoParrafo = [
    "Granja los pibes es una ONG, de la ciudad de Tandil. Bajo su manto se encuentra la ",
    <span key="frase1" className="text-highlight">
      Casa del Niño en la Calle
    </span>,
    ", que funciona como centro de dia para niños y niñas en situaciones de vulnerabilidad y el ",
    <span key="frase2" className="text-highlight">
      Centro de Rescate de Fauna Silvestre
    </span>,
    ", que se dedica al cuidado y proteccion de la flora y fauna nativa.",
  ];

  return (
    <div className="flex flex-col px-6 py-10 gap-2 justify-center" data-aos="fade-up"  data-aos-duration="1500">
        <Titulo texto="Nosotros" classAdicional="text-white"/>
        <Parrafo texto={textoParrafo} classAdicional="text-white"/>
    </div>
  );
}