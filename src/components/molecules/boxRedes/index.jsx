import Redes from "../../atoms/redes";
import Titulo from "../../atoms/titulo";

export default function BoxRedes (){
    return (
        <div className="mt-8">
            <Titulo texto='Seguinos en' classAdicional="text-white"/>
            <Redes/>
        </div>
        
      );
}