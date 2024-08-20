import React from "react";
import ProfilePhoto from "./profile-photo";
import './main.css'
import ReactPhoto from '../resources/devicon--react.png'
import TwlPhoto from '../resources/devicon--tailwindcss.png'

export default function Main(){
    return (
        <div id='content' className='absolute gap-6 top-0 left-0 h-screen w-screen flex justify-center items-center flex-wrap'>

            <div id="personal-data" className="w-80 h-3/4 p-10 flex flex-col gap-4 rounded-lg">
                <ProfilePhoto URL={''} />
                <h1 className="text-white text-center font-bold text-xl">Name</h1>
                <h2 className="text-white text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas nisi illum voluptatem suscipit maiores dolor, impedit nemo aliquam, molestias mollitia sed voluptatum debitis, nostrum fugit earum animi incidunt accusantium!</h2>
            </div>

            <div id="knowledge" className="w-3/5 h-3/4 p-10 flex flex-col gap-4 rounded-lg overflow-auto">
                <h2 className="text-white text-2xl font-bold">Technologies</h2>
                <div className="flex gap-4">
                    <img className="w-28" src={ReactPhoto}></img>
                    <img className="w-28" src={TwlPhoto}></img>
                </div>
                <h2 className="text-white text-2xl font-bold">Proyects</h2>
                <div className="flex flex-wrap gap-4">
                    <div className="w-44 transition-all duration-700 hover:scale-90 bg-white h-28 rounded-md cursor-pointer"></div>
                    <div className="w-44 transition-all duration-700 hover:scale-90 bg-white h-28 rounded-md cursor-pointer"></div>
                    <div className="w-44 transition-all duration-700 hover:scale-90 bg-white h-28 rounded-md cursor-pointer"></div>
                    <div className="w-44 transition-all duration-700 hover:scale-90 bg-white h-28 rounded-md cursor-pointer"></div>
                    <div className="w-44 transition-all duration-700 hover:scale-90 bg-white h-28 rounded-md cursor-pointer"></div>
                </div>
                <h2 className="text-white text-2xl font-bold">Experience</h2>
                <div>
                    <ul className="flex text-center gap-2 text-white">
                        <li className="flex-1 p-3 rounded-md transition-all duration-500 cursor-pointer hover:bg-white hover:text-black">Lorem</li>
                        <li className="flex-1 p-3 rounded-md transition-all duration-500 cursor-pointer hover:bg-white hover:text-black">Lorem</li>
                        <li className="flex-1 p-3 rounded-md transition-all duration-500 cursor-pointer hover:bg-white hover:text-black">Lorem</li>
                        <li className="flex-1 p-3 rounded-md transition-all duration-500 cursor-pointer hover:bg-white hover:text-black">Lorem</li>
                        <li className="flex-1 p-3 rounded-md transition-all duration-500 cursor-pointer hover:bg-white hover:text-black">Lorem</li>
                    </ul>
                </div>
                <h2 className="text-white text-2xl font-bold">Education</h2>
                <div>
                    <div className="w-full items-center justify-around h-4 flex bg-white rounded-full border-none transition-all duration-700 hover:h-6 cursor-pointer">
                        <div className="bg-blue-400 w-3 h-3 rounded-full transition-all duration-500 hover:w-10"></div>
                        <div className="bg-blue-400 w-3 h-3 rounded-full transition-all duration-500 hover:w-10"></div>
                        <div className="bg-blue-400 w-3 h-3 rounded-full transition-all duration-500 hover:w-10"></div>
                        <div className="bg-blue-400 w-3 h-3 rounded-full transition-all duration-500 hover:w-10"></div>
                        <div className="bg-blue-400 w-3 h-3 rounded-full transition-all duration-500 hover:w-10"></div>
                    </div>
                </div>
                <h2 className="text-white text-2xl font-bold">Contact</h2>
            </div>
          
        </div>
    )
}