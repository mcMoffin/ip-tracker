import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import reportWebVitals from './reportWebVitals';

import SearchBar from './componenet/Searchbar/SearchBar'
import Leaflet from './componenet/Leaflet/Leaflet';
import IPDisplay from './componenet/IPDisplay/IPDisplay';

const App = () => {
  const [IPAddress, setIPAddress] = useState('');
  const [IPInfo, setIPInfo] = useState({});

  useEffect(() => {
    fetch(`https://ipapi.co/${IPAddress !== '' ? IPAddress : ''}/json/`)
    .then(function(response) {
      response.json().then(jsonData => {
        setIPAddress(jsonData.ip);
        setIPInfo(jsonData);
      });
    })
    .catch(function(error) {
      console.log(error);
    });

  }, [IPAddress])
  
  // Validate latitude and longitude
  const isValidLatLng = (lat, lng) => {
    return !isNaN(lat) && lat >= -90 && lat <= 90 && !isNaN(lng) && lng >= -180 && lng <= 180;
  };

  const validLatLng = isValidLatLng(IPInfo.latitude, IPInfo.longitude);

  return (
    <React.StrictMode>
      <header>
        <div className='header-content'>
          <h1>IP Address Tracker</h1>
          <SearchBar user_ip={IPAddress} setIPAddress={setIPAddress}/>
        </div>
        <IPDisplay IPData={IPInfo}/>
      </header>
      
      {IPInfo.latitude && IPInfo.longitude && validLatLng ? (
        <Leaflet
          longitude={IPInfo.longitude}
          latitude={IPInfo.latitude}
          IPAddress={IPAddress}
        />
      ) : (
        <div>Loading...</div>
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();