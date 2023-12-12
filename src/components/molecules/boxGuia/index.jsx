import Button from "../../atoms/button";
import Titulo from "../../atoms/titulo";
import Parrafo from "../../atoms/parrafo";

export default function BoxGuia (){
    return (
        <div className="flex flex-col px-6 py-8 gap-6 justify-center shadow-xl">
          <div>
            <Titulo texto="Antes de salir a las sierras" classAdicional=""/>
            <Parrafo texto="Descarga nuestra guía para conocer más sobre la flora y fauna con la que te encontrarás y los cuidados que debes tener sobre ella." classAdicional=""/>
          </div>
            <img src="https://cdn.discordapp.com/attachments/1062447758587473931/1184150217411534899/Rectangle_52_1.png?ex=658aecd4&is=657877d4&hm=705f38d932653a2f862b24b3ab60451e9562fcad677306bc1eb6aeb83127e190&a"/>
            <Button/>
        </div>
      );
}