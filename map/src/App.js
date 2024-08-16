import React from 'react';
import './App.css';
import Sky from './resources/sky.png';
import Eiffel from './resources/eifel.png';
import Cloud from './resources/cloud.png';
import Tower from './resources/capa.png';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div id='content' className=''>
        <img src={Sky} className='absolute -top-32 -left-32 w-1/3 -rotate-45'/>
        <img src={Eiffel} className='absolute w-1/3 -right-20 top-0 z-10'/>
        <img src={Cloud} className='absolute w-5/12 -right-20 top-0'/>
        <img src={Tower} className='absolute w-1/3 left-5'/>

        <h1 className='text-4xl font-bold text-center'>Map</h1>
        <div id='map-content' className='w-96 h-80'>

        </div>
      </div>
    </div>
  );
}

export default App;
