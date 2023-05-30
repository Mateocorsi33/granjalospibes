import React from "react";
import logo from "../../img/Logo2.png"
import fondo from "../../img/Fondoancho.png";
import styled from "styled-components";


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
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
    cursor: pointer;
    transition: .3s;
    /* DF751A  F8923B */
    &:hover {
        background-color: #DC6D0F;
    }
`

const PaginaPrincipal = () => {
    return (
        <Box>
            <Logo src={logo}/>
            <Titulo>Antes de salir a las sierras</Titulo>
            <Parrafo>Descarga nuestra guia para conocer mas sobre la flora y fauna con la que te encontraras y los cuidados que debes tener sobre ella.</Parrafo>
            <Boton>Descargar</Boton>
        </Box>
    );
}

export default PaginaPrincipal;