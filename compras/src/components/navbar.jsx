import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="components/comprar">Comprar</NavLink>
                </li>
                <li>
                    <NavLink to="components/gestionar">Gestionar</NavLink>
                </li>
            </ul>
        </nav>
    )
}