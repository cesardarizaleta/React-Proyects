import React from 'react';
import './App.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className='text-4xl font-bold text-center'>Map</h1>
      <div id='map-content' className='w-1/2 h-2/4 overflow-hidden'>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;