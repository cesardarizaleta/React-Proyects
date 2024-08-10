import React from 'react'
import { useEffect, useState } from 'react';

export default function Photo() {

    const [photos, setPhotos] = useState('https://picsum.photos/200/300')

    useEffect(() => {

    })

    return (
        <div>
            <img src={photos} alt=""/>
        </div>
    );
}