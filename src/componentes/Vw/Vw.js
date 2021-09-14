import React from "react"
import './Vw.css';
import Titulo from "../Titulo/Titulo"
import VwHeader from "./VwHeader"
import ImgVW from "../../imagens/vw.jpeg"

export default function Vw() {
    return (
        <div>
            <Titulo texto ='Seção de Vw'/>
            <div className="vw">
                <VwHeader />
                <figure>
                    <img className='img-vw' src={ImgVW}></img>
                </figure>
            </div>
        </div>
    )
}