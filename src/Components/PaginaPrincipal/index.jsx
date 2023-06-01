import React from "react";
import logo from "../../img/Logo2.png"
import fondo from "../../img/Pagina-Principal.png";
import styled from "styled-components";
import facebook from "../../img/facebook.png"
import instagram from "../../img/instagram.png"
import whatsapp from "../../img/whatsapp.png"
import ubicacion from "../../img/ubicacion.png"
import archivo from "../../Archivo/Guia - Granja Los Pibes.pdf"


const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-image: url(${fondo});
    height: 800px;
    min-width: 290px;
    @media (max-width: 800px){
        width: auto;
    }
`

const Logo = styled.img`
    box-sizing: border-box;
    width: 184px;
    height: 184px;
    margin-top: 65px;
`

const Titulo = styled.h1`
    position: absolute;
    top: 275px;
    line-height: 23px;
    align-items:center;
    font-family: 'Roboto Condensed', sans-serif;
    color: #ffffff;
`
const Parrafo = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    width: 298px;
    height: 127px;
    top: 340px;
    line-height: 23px;
    letter-spacing: 4px;
    color: #FFFFFF;
`
const Boton = styled.button`
    position: absolute;
    width: 222px;
    height: 46px;
    top: 540px;
    background: #F58220;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: .3s;
    /* DF751A  F8923B */
    &:hover {
        background-color: #DC6D0F;
    }
`
const Redes = styled.div`
    position: absolute;
    top: 660px;
`

const Icon = styled.img`
    width: 32px;
    height: 32px;
    margin-inline: 15px;
`
const Vinculo = styled.a`
    text-decoration: none;
    width: 32px;
    height: 32px;
`

const Ubicacion = styled.a`
    position: absolute;
    top: 700px;
    display: flex;
    align-items: center;
    text-decoration: none;
`
const Ubi = styled.img`
    width: 20px;
    height: 20px;
    margin: 0 3px 3px 0;
`

const Texto = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #ffffff;
`

const Descarga = styled.a`
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
`


const PaginaPrincipal = () => {
    return (
        <Box>
            <Logo src={logo}></Logo>
            <Titulo>Antes de salir a las sierras</Titulo>
            <Parrafo>Descarga nuestra guía para conocer más sobre la flora y fauna con la que te encontrarás y los cuidados que debes tener sobre ella.</Parrafo>
            <Boton><Descarga download= 'Guia - Granja los Pibes' href={archivo}>Descargar</Descarga></Boton>
            <Redes>
                <Vinculo href='https://www.facebook.com/GranjaLosPibes/'>
                    <Icon src={facebook} alt='Facebook' />
                </Vinculo>
                <Vinculo href='https://instagram.com/granja_los_pibes/'>
                    <Icon src={instagram} alt='instagram' />
                </Vinculo>
                <Vinculo href="tel:+542494545992">
                    <Icon src={whatsapp} alt='whatsapp' />
                </Vinculo>
            </Redes>
            <Ubicacion href="https://goo.gl/maps/MSTzN4kZi1pCCFms5" >
                    <Ubi src={ubicacion} alt='ubicacion' />
                    <Texto>Pje el Centinela - Tandil</Texto>
            </Ubicacion>
        </Box>
    );
}

export default PaginaPrincipal;