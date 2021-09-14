import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

export default function MecanicaHeader() {
    return (
        <><header className="menu">
        <nav className="navMenu">
            <ul>
                <li><Link to="/" > Menu </Link></li>
                <li><Link to="/brasilia" > Voltar </Link></li>
                <li><Link to="/mecanica" > MOTOR </Link></li>
                <li><Link to="/mecanica" > PEDAIS </Link></li>
                <li><Link to="/mecanica" > CÂMBIO </Link></li>
                <li><Link to="/mecanica" > VOLANTE </Link></li>
                <li><Link to="/mecanica" > SENSORES </Link></li>
            </ul>
        </nav>
    </header>
        </>
    )
}