import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Home() {
    return (
        <div className="h-screen w-screen bg-black text-white pt-10">
            <div className="text-3xl text-center">Leaflet PoC</div>
            <div className='h-[50%]'>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className=' h-60'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
        </div>
    );
}