import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79zm-2-1V9.978l-7-5.444l-7 5.444V19z"/></svg>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M7.5 5.5a4.5 4.5 0 0 1 9 0V7H21v16H3V7h4.5zm0 3.5H5v12h14V9h-2.5v3h-2V9h-5v3h-2zm7-2V5.5a2.5 2.5 0 0 0-5 0V7z"/></svg>
                    <NavLink to="components/comprar">Comprar</NavLink>
                </li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="white" d="M16 21a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-8a3 3 0 1 0 0 6a3 3 0 0 0 0-6" class="ouiIcon__fillSecondary"/><path fill="white" d="M20 32h-8v-4.06a1 1 0 0 0-1.61-.67l-2.88 2.87l-5.65-5.65l2.87-2.87a.92.92 0 0 0 .2-1a.93.93 0 0 0-.86-.6H0V12h4.06a.92.92 0 0 0 .85-.58a.94.94 0 0 0-.19-1L1.86 7.51l5.65-5.65l2.87 2.87A1 1 0 0 0 12 4.06V0h8v4.06a1 1 0 0 0 1.61.67l2.87-2.87l5.66 5.66l-2.87 2.87a.92.92 0 0 0-.2 1a.93.93 0 0 0 .86.6H32v8h-4.06a.92.92 0 0 0-.85.58a.94.94 0 0 0 .19 1l2.87 2.87l-5.66 5.66l-2.87-2.87a1 1 0 0 0-1.61.67zm-6-2h4v-2.06a3 3 0 0 1 5-2.08l1.46 1.46l2.83-2.83L25.86 23a3 3 0 0 1 2.08-5H30v-4h-2.06a3 3 0 0 1-2.08-5l1.46-1.46l-2.83-2.85L23 6.14a3 3 0 0 1-5-2.08V2h-4v2.06a3 3 0 0 1-5 2.08L7.51 4.69L4.69 7.51L6.14 9a3 3 0 0 1-2.08 5H2v4h2.06a3 3 0 0 1 2.08 5l-1.45 1.49l2.83 2.83L9 25.86a3 3 0 0 1 5 2.08z"/></svg>
                    <NavLink to="components/gestionar">Gestionar</NavLink>
                </li>
            </ul>
        </nav>
    )
}