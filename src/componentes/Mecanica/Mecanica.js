import React from "react"
import './Mecanica.css';
import Titulo from "../Titulo/Titulo"
import MecanicaHeader from "./MecanicaHeader"
import ImgMecanica from "../../imagens/Mecanica.jpg"

export default function Mecanica() {
    return (
        <div>
            <Titulo texto ='Seção de Mecânica'/>
            <div className="mecanica">
                <MecanicaHeader />
                <figure>
                    <img className="img-mecanica" src={ImgMecanica}/>
                </figure>
            </div>
        </div>
    )
}