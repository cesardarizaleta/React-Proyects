import React from 'react'
import { useEffect, useState } from 'react';

export default function Photo() {

    const [photos, setPhotos] = useState('https://picsum.photos/200/300')

    //useEffect renderiza el componente solo una vez despues de que se monta el componente
    useEffect(() => {

    })

    return (
        <div>
            <img src={photos} alt=""/>
        </div>
    );
}