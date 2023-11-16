import React from "react";
import logo from "../../img/Logo2.png"
import fondo from "../../img/Pagina-Principal23.png";
import desktop from "../../img/FondoDesktop.png";
import styled from "styled-components";
import facebook from "../../img/facebook.png"
import instagram from "../../img/instagram.png"
import whatsapp from "../../img/whatsapp.png"
import youtube from "../../img/youtube.png"
import ubicacion from "../../img/ubicacion.png"
import archivo from "../../Archivo/Guia - Granja Los Pibes.pdf"
import { Analytics } from '@vercel/analytics/react';



const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    background-image: url(${desktop});
    background-position: center;
    background-repeat: no-repeat;
    height: 800px;
    min-width: 290px;
    @media (max-width: 649px){
        width: auto;
        background-image: url(${fondo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`

const Logo = styled.img`
    box-sizing: border-box;
    width: 184px;
    height: 184px;
    margin-top: 65px;
`

const Titulo = styled.h1`
    line-height: 23px;
    align-items:center;
    font-family: 'Bebas Neue';
    color: #D6D582;
    letter-spacing: 1px;
    margin: 0;
`

const Parrafo = styled.p`
    font-family: 'Bebas Neue';
    font-size: 1.5rem;
    font-weight: 400;
    width: 298px;
    height: 127px;
    line-height: 23px;
    letter-spacing: 4px;
    margin: 0;
    color: #FFFFFF;
`
const Boton = styled.button`
    width: 222px;
    height: 46px;
    margin: 0 0 1rem 0;
    background-color: #9FB23B;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: .3s;
    &:hover {
        opacity: 0.9;
    }
`
const Iconos = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 1.5rem; */
    margin-bottom: 2rem;
`
const Redes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem 0 1rem 0;
`

const Icon = styled.img`
    width: 2rem;
    height: 2rem;
`
const Vinculo = styled.a`
    text-decoration: none;
    width: 32px;
    height: 32px;
`
const Ubicacion = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
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
    margin: 0;
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
            <Analytics />
            <Logo src={logo}></Logo>
            <Titulo>Antes de salir a las sierras</Titulo>
            <Parrafo>Descarga nuestra guía para conocer más sobre la flora y fauna con la que te encontrarás y los cuidados que debes tener sobre ella.</Parrafo>
            <Boton><Descarga download= 'Guia - Granja los Pibes' href={archivo}>Descargar</Descarga></Boton>
            <Iconos>
                <Titulo>Seguinos</Titulo>
                <Redes>
                    <Vinculo href='https://www.facebook.com/GranjaLosPibes/'>
                        <Icon src={facebook} alt='Facebook' />
                    </Vinculo>
                    <Vinculo href='https://instagram.com/granja_los_pibes/'>
                        <Icon src={instagram} alt='instagram' />
                    </Vinculo>
                    <Vinculo href="https://wa.me/message/MGKRGV2LBP5CK1">
                        <Icon src={whatsapp} alt='whatsapp' />
                    </Vinculo>
                    <Vinculo href="https://www.youtube.com/@granjalospibes/">
                        <Icon src={youtube} alt='youtube' />
                    </Vinculo>
                </Redes>
                <Ubicacion href="https://goo.gl/maps/MSTzN4kZi1pCCFms5" >
                        <Ubi src={ubicacion} alt='ubicacion' />
                        <Texto>Pje el Centinela - Tandil</Texto>
                </Ubicacion>
            </Iconos>
        </Box>
    );
}

export default PaginaPrincipal;