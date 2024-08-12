import React from "react";
import './home.css';
import document from '../resources/Document_Text_1_0001.png';
import folder from '../resources/Folder0001.png';

export default function Home() {
    return (
        <div className="home-global">
            <img src={folder}></img>
            <div>
                <h1>Home</h1>
                <p>Sistema de Gestion para todo tipo de Productos</p>
            </div>
            <img src={document}></img>
        </div>
    )
}