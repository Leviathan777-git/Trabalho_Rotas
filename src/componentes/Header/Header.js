import React from "react"
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/" > FIAT </Link></li>
                    <li><Link to="/" > FORD </Link></li>
                    <li><Link to="/" > CHEVROLET </Link></li>
                    <li><Link to="/vw" > VW </Link></li>
                    <li><Link to="/" > HYUNDAI </Link></li>
                </ul>
            </nav>
        </header>
    )

}