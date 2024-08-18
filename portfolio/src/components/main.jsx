import React from "react";
import ProfilePhoto from "./profile-photo";
import './main.css'

export default function Main(){
    return (
        <div id='content' className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center'>

            <div id="personal-data" className="w-1/5 h-3/4 p-8 flex flex-col gap-4 rounded-lg">
                <ProfilePhoto />
            </div>

            <div id="knowledge">

            </div>
          
        </div>
    )
}