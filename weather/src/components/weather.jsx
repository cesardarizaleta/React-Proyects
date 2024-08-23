import React from "react";
import './weather.css';

export default function Weather() {
    return (
        <main className="w-64 h-64 rounded-lg absolute
        flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl text-white">Weather App</h1>
            <input type="text" placeholder="Enter city name" />
            <h3></h3>
            <h3></h3>
        </main>
    )
}