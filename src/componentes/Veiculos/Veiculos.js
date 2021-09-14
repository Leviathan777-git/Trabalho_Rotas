import React from "react"
import './Veiculos.css';
import Titulo from "../Titulo/Titulo"
import ImgCarros from "../../imagens/Carros.jpg"


export default function Veiculos() {
    return (
        <div>
            <Titulo texto ='Seção de Veiculos'/>
            <div className="veiculos">
                <figure>
                    <img className="img-carros" src={ImgCarros} />
                </figure>
            </div>
        </div>
    )
}