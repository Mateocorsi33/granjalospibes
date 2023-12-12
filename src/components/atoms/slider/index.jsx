import p1 from "../../../assets/p1.jpg";
import p2 from "../../../assets/p2.jpg";
import p3 from "../../../assets/p3.jpg";
import p4 from "../../../assets/p4.jpg";
import p5 from "../../../assets/p5.jpg";

export default function Slider (){
  return (
   <div class='slider'>
        <img src={p1}/>
        <img src={p2}/>
        <img src={p3}/>
        <img src={p4}/>
        <img src={p5}/>
   </div>
  );
};