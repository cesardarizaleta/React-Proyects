import React from "react";
import { useEffect } from "react";
import DefaultPhoto from '../resources/profile_default.webp'

export default function ProfilePhoto({URL}){

    useEffect(() => {

        if(URL){
            document.querySelector('#profile-photo img').src = URL
            return
        }

        document.querySelector('#profile-photo img').src = DefaultPhoto
    },[])

    return (
        <div id='profile-photo' className='flex justify-center'>
            <img className='h-32 w-32 rounded-full' />
        </div>
    )
}