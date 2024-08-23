import React from "react";
import './product.css'

export default function Product() {
    return (
        <div id="card" className="bg-white p-4 font-bold
         text-center flex flex-col gap-2 rounded-lg">
            <h1>Name</h1>
            <h3>Bio</h3>
            <div id="img-prod" className="w-full h-32 bg-gray-200 rounded-md">

            </div>
            <button className="
            w-full bg-green-300 p-2 rounded-md transition-all
            hover:bg-green-400">+</button>
        </div>
    )
}