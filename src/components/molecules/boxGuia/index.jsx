import Button from "../../atoms/button";
import Titulo from "../../atoms/titulo";
import Parrafo from "../../atoms/parrafo";
import imgGuia from "../../../assets/opt7.jpg";
import styled from "styled-components";

const Img = styled.img`
  border-radius: 15px;
  filter: brightness(0.7);
`

export default function BoxGuia (){
    return (
        <div className="flex flex-col px-6 py-8 gap-6 justify-center shadow-xl">
          <div>
            <Titulo texto="Antes de salir a las sierras" classAdicional=""/>
            <Parrafo texto="Descarga nuestra guía para conocer más sobre la flora y fauna con la que te encontrarás y los cuidados que debes tener sobre ella." classAdicional=""/>
          </div>
            <Img src={imgGuia}/>
            <Button/>
        </div>
      );
}