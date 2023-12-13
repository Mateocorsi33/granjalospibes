import Redes from "../../atoms/redes";
import Titulo from "../../atoms/titulo";

export default function BoxRedes (){
    return (
        <div className="my-10">
            <Titulo texto='Seguinos en' classAdicional="text-white"/>
            <Redes/>
        </div>
        
      );
}