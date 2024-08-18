import React from "react";
import { useEffect } from "react";

export default function ProfilePhoto({URL}){

    useEffect(() => {

        if(URL){
            document.querySelector('#profile-photo img').src = URL
            return
        }

        document.querySelector('#profile-photo img').src = 'https://avatars.githubusercontent.com/u/77490521?v=4'
    },[])

    return (
        <div id='profile-photo' className='flex justify-center'>
            <img className='h-32 w-32 rounded-full' />
        </div>
    )
}