import Eslogan from "../../atoms/eslogan";
import Logo from "../../atoms/logo";
import mosaico from "../../../assets/fondo-mosaico.png";

export default function LogoEslogan() {
  return (
    <div className="relative w-screen h-auto overflow-hidden p-6">
      <div className="w-full h-full absolute inset-0 bg-cover bg-center">
        <img src={mosaico} alt="Fondo Mosaico" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full flex flex-col items-center relative z-10">
        <Logo />
        <Eslogan />
      </div>
    </div>
  );
}
