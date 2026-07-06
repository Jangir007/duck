import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./App.css";

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <span className="logo-emoji">🦆</span>
                    <span className="logo-text">DUCK</span>
                </Link>
            </div>
            <div className="navbar-links">
                <NavLink to="/" className="nav-item">Басты бет</NavLink>
                <NavLink to="/grammar" className="nav-item">Грамматика</NavLink>
                <NavLink to="/vocabulary" className="nav-item">Сөздік</NavLink>
                <NavLink to="/listening" className="nav-item">Тыңдалым</NavLink>
                <NavLink to="/reading" className="nav-item">Оқылым</NavLink>
                <NavLink to="/writing" className="nav-item">Жазылым</NavLink>
                <NavLink to="/speaking" className="nav-item">Айтылым</NavLink>
            </div>
        </nav>
    );
}

export default Header;