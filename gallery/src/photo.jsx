import React from 'react'
import { useEffect, useState } from 'react';

export default function Photo() {

    const [photos, setPhotos] = useState('https://picsum.photos/300/300')

    //useEffect renderiza el componente solo una vez despues de que se monta el componente
    useEffect(() => {
        return
    })

    return (
        <div className='bento-square'>
            <img src={photos} alt="Foto Random"/>
        </div>
    );
}