import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

function Leaflet({ longitude, latitude, IPAddress }) {
    console.log("Longitude:", longitude, "Latitude:", latitude);

    return (
        <MapContainer
            key={`${latitude}-${longitude}`}
            className='map' center={[latitude, longitude]}
            zoom={13} scrollWheelZoom={true}
            zoomControl={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}></Marker>
        </MapContainer>
    );
}

export default Leaflet;