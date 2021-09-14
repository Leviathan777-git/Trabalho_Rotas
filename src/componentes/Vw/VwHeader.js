import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

export default function VwHeader() {
    return (
        <><header className="menu">
        <nav className="navMenu">
            <ul>
                <li><Link to="/" > Voltar </Link></li>
                <li><Link to="/brasilia" > BRASÍLIA </Link></li>
                <li><Link to="/vw" > FUSCA </Link></li>
                <li><Link to="/vw" > KOMBI </Link></li>
                <li><Link to="/vw" > POLO </Link></li>
                <li><Link to="/vw" > GOL </Link></li>
            </ul>
        </nav>
    </header>
        </>
    )
}