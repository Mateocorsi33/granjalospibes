import React, { useState } from "react";
import guia from "../../../document/Guia - Granja Los Pibes.pdf";

export default function Button() {
  const [downloading, setDownloading] = useState(false);
  const handleClick = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      const link = document.createElement("a");
      link.href = guia;
      link.download = "Guia - Granja los Pibes.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);
  };

  return (
    <button className="bg-secondary-2 hover:bg-secondary-3 text-white font-poppins rounded-full px-8 py-2 cursor-pointer">
    <a
      download="Guia - Granja los Pibes"
      href={guia}
      onClick={handleClick}
    >
      {downloading ? "Descargando..." : "Descargar"}
    </a>
    </button>
  );
}
