import React from "react";
import ProfilePhoto from "./profile-photo";
import './main.css'

export default function Main(){
    return (
        <div id='content' className='absolute gap-6 top-0 left-0 h-screen w-screen flex justify-center items-center flex-wrap'>

            <div id="personal-data" className="w-1/5 h-3/4 p-10 flex flex-col gap-4 rounded-lg">
                <ProfilePhoto URL={''} />
                <h1 className="text-white text-center font-bold text-xl">Name</h1>
                
            </div>

            <div id="knowledge" className="w-3/5 h-3/4 p-10 flex flex-col gap-4 rounded-lg">

            </div>
          
        </div>
    )
}