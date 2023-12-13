import React, { useState, useEffect } from 'react';
import p1 from '../../../assets/p1.jpg';
import p2 from '../../../assets/p2.jpg';
import p3 from '../../../assets/p3.jpg';
import p4 from '../../../assets/p4.jpg';
import p5 from '../../../assets/p5.jpg';
import p6 from '../../../assets/p6.jpg';
import p7 from '../../../assets/p7.jpg';
import p8 from '../../../assets/p8.jpg';
import p9 from '../../../assets/p9.jpg';
import p10 from '../../../assets/p10.jpg';

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Incrementa el índice de la imagen actual
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Cambia la imagen cada 3 segundos (ajusta según tus necesidades)

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El segundo argumento del useEffect asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div className="slider">
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
    </div>
  );
}
