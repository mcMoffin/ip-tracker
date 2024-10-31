import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

function Leaflet({ longitude, latitude }) {

    const customIcon = L.icon({
        iconUrl: `${process.env.PUBLIC_URL}/images/icon-location.svg`,
        iconSize: [46, 56],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });

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
            <Marker className="marker" position={[latitude, longitude]} icon={customIcon}></Marker>
        </MapContainer>
    );
}

export default Leaflet;