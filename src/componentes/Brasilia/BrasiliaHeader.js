import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

export default function BrasiliaHeader() {
    return (
        <><header className="menu">
        <nav className="navMenu">
            <ul>
                <li><Link to="/" > Menu </Link></li>
                <li><Link to="/vw" > Voltar </Link></li>
                <li><Link to="/mecanica" > MECÂNICA </Link></li>
                <li><Link to="/brasilia" > ELÉTRICA </Link></li>
                <li><Link to="/brasilia" > ELETRÔNICA </Link></li>
                <li><Link to="/brasilia" > SUSPENSÃO </Link></li>
            </ul>
        </nav>
    </header>
        </>
    )
}