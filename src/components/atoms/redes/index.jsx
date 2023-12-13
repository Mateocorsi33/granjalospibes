import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import youtube from "../../../assets/youtube.png";
import whatsapp from "../../../assets/whatsapp.png";
import logo from "../../../assets/Logo2.png";

export default function Redes () {
    return (
        <div className="flex flex-row justify-center gap-6 mt-4">
            <a href='https://www.facebook.com/GranjaLosPibes/'>
                <img className="hover:opacity-80 w-12" src={facebook} alt="facebook"/>
            </a>
            <a href='https://instagram.com/granja_los_pibes/'>
                <img className="hover:opacity-80 w-12" src={instagram}  alt="instagram"/>
            </a>
            <a href="https://www.youtube.com/@granjalospibes/">
                <img className="hover:opacity-80 w-12" src={youtube}  alt="youtube"/>
            </a>
            <a href="https://wa.me/message/MGKRGV2LBP5CK1">
                <img className="hover:opacity-80 w-12" src={whatsapp}  alt="whatsapp"/>
            </a>
            <a href="https://www.granjalospibes.com.ar">
                <img className="hover:opacity-80 w-12" src={logo}  alt="sitio web"/>
            </a> 
        </div>
      );
}