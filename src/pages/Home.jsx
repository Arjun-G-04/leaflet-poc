import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';

function Pin() {
    const map = useMapEvent('move', () => {
        setCoords([map.getCenter().lat, map.getCenter().lng]);
    })

    const [coords, setCoords] = useState([map.getCenter().lat, map.getCenter().lng]);
    
    return (
        <Marker position={coords}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    )
}

export default function Home() {

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col items-center justify-evenly">
            <div className="text-3xl text-center">Leaflet PoC</div>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className=' h-[90%] aspect-square'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Pin />
            </MapContainer>
        </div>
    );
}