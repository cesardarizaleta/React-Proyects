import React, { useState, useEffect } from "react";
import './weather.css';
import API from '../api.txt'

export default function Weather() {

    const [weather, setWeather] = useState();
    const [key, setKey] = useState('');

    useEffect(() => {
        fetch(API)
            .then((response) => response.text())
            .then((data) => {
                setKey(data);
            })
            .catch((error) => {
                console.log(error);
            });
          }, []);

    function getWeather() {
        const inputVal = document.querySelector("input").value;
        const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${inputVal}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("City not found");
                }
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                setWeather(data.current.temp_c);
            })
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <main className="w-64 h-64 rounded-lg absolute
        flex flex-col justify-center items-center gap-2">
            <h1 className="font-bold text-xl text-white">Weather App</h1>
            <input onChange={getWeather} className="p-2 rounded-md w-full outline-none bg-transparent text-white text-center
            font-bold text-2xl" type="text" placeholder="Enter city name" />
            <h3 className="font-bold text-white text-7xl">{weather}</h3>
        </main>
    )
}