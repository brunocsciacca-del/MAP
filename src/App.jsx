
import { useState } from 'react'
import s from './App.module.css'
import { Menu } from './components/menu'

import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet'

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function App() {

  const position = [-25.4248519, -49.2749849]

  const [mapType, setMapType] = useState('normal')

  const maps = {
    normal: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; OpenStreetMap contributors'
    },

    satellite: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Tiles &copy; Esri'
    },
  }

  return (
    <>
      <Menu />

      <div className={s.wrapHome}>

        <div className={s.mapButtons}>
          <button onClick={() => setMapType('normal')}>
            Normal
          </button>

          <button onClick={() => setMapType('satellite')}>
            Satélite
          </button>

        </div>

        <MapContainer
          className={s.map}
          center={position}
          zoom={17}
          scrollWheelZoom={false}
        >

          <TileLayer
            key={mapType}
            attribution={maps[mapType].attribution}
            url={maps[mapType].url}
          />

          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br />
              Easily customizable.
            </Popup>
          </Marker>

        </MapContainer>

      </div>
    </>
  )
}

export default App
