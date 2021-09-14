import React from "react"
import './Brasilia.css';
import Titulo from "../Titulo/Titulo"
import BrasiliaHeader from "./BrasiliaHeader"
import ImgBrasilia from "../../imagens/Brasilia.jpg"

export default function Brasilia() {
    return (
        <div>
            <Titulo texto ='Seção de Brasília'/>
            <div className="brasilia">
                <BrasiliaHeader />
                <figure>
                    <img className="img-brasilia" src={ImgBrasilia}/>
                </figure>
            </div>
        </div>
    )
}