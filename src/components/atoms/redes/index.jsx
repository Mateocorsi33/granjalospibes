import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import youtube from "../../../assets/youtube.png";
import whatsapp from "../../../assets/whatsapp.png";
import web from "../../../assets/web.png";

export default function Redes () {
    return (
        <div className="flex flex-row justify-center gap-4 mt-4">
            <a href='https://www.facebook.com/GranjaLosPibes/'>
                <img className="hover:opacity-80" src={facebook}/>
            </a>
            <a href='https://instagram.com/granja_los_pibes/'>
                <img className="hover:opacity-80" src={instagram}/>
            </a>
            <a href="https://www.youtube.com/@granjalospibes/">
                <img className="hover:opacity-80" src={youtube}/>
            </a>
            <a href="https://wa.me/message/MGKRGV2LBP5CK1">
                <img className="hover:opacity-80" src={whatsapp}/>
            </a>
            <a href="https://www.granjalospibes.com.ar">
                <img className="hover:opacity-80" src={web}/>
            </a> 
        </div>
      );
}