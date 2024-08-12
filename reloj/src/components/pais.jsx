import React from 'react'

export default function Pais({pais}) {

    const [hora, setHora] = React.useState(new Date().toLocaleTimeString())

    return (
        <div className='card'>
            <h2>{pais}</h2>
            <h2 id='hora'>{hora}</h2>
        </div>
    )


}