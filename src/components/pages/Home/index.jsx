import React from "react";
import Header from "../../organisms/header";
import GuiaSierras from "../../organisms/guiaSierras";
import Nosotros from "../../organisms/nosotros";
import Slider from "../../atoms/slider";
import Redes from "../../organisms/redes";
import Footer from "../../organisms/footer";

const Home = () => {
    return (
        <div className="bg-primary-1">
            <Header/>
            <GuiaSierras/>
            <Nosotros/>
            <Slider/>
            <Redes/>
            <Footer/>
        </div>
    );
}

export default Home