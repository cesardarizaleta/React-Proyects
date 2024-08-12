import React, { useEffect } from 'react'
import './pais.css'

export default function Pais({pais}) {

    const [hora, setHora] = React.useState()

    useEffect(() => {
        if (pais === 'Mexico') {
          const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString('es-MX', { timeZone: 'America/Mexico_City' }));
          }, 1000);
          return () => clearInterval(interval);
        }
        if (pais === 'Paris') {
          const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' }));
          }, 1000);
          return () => clearInterval(interval);
        }
        if(pais === 'Madrid') {
          const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString('es-ES', { timeZone: 'Europe/Madrid' }));
          }, 1000);
          return () => clearInterval(interval);
        }
        if(pais === 'New York') {
          const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' }));
          }, 1000);
          return () => clearInterval(interval);
        }
        if(pais === 'Tokyo') {
          const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo' }));
          }, 1000);
          return () => clearInterval(interval);
        }
        if(pais === 'Los Angeles') {
          const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' }));
          }, 1000);
          return () => clearInterval(interval);
        }
        if(pais === 'Sao Paulo') {
          const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }));
          }, 1000);
          return () => clearInterval(interval);
        }
        if(pais === 'Roma') {
          const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString('it-IT', { timeZone: 'Europe/Rome' }));
          }, 1000);
          return () => clearInterval(interval);
        }
        if(pais === 'Berlin') {
          const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString('de-DE', { timeZone: 'Europe/Berlin' }));
          }, 1000);
          return () => clearInterval(interval);
        }

      }, [pais]);      

    return (
        <div className='card'>
            <h2>{pais}</h2>
            <h2 id='hora'>{hora}</h2>
        </div>
    )


}