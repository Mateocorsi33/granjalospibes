import Eslogan from "../../atoms/eslogan";
import Logo from "../../atoms/logo";

export default function LogoEslogan (){
    return (
        <div className="relative bg-primary-1 w-full h-auto p-6 shadow-lg">
            <div className="absolute inset-0 bg-custom-image bg-cover bg-center"></div>
            <div className="w-full flex flex-col items-center relative z-10">
                <Logo/>
                <Eslogan/>
          </div>
        </div>
      );
}