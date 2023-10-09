import React from 'react'
//import GoogleMapReact from 'google-map-react'
//import { Icon } from '@iconify/react'
//import locationIcon from '@iconify/icons-mdi/map-marker'
import { Map, GoogleApiWrapper , Marker} from 'google-maps-react';



export class Maps extends React.Component {
  render() {
    const mapStyles = {
      width: "40%",
      height: "60%",
    };
    return (
      <Map
        google={this.props.google}
        zoom={17}
       style={mapStyles}
        initialCenter={{ lat: 22.284600016527815, lng: 114.1374949586399 }}
      >
        <Marker position={{ lat:  22.284600016527815, lng: 114.1374949586399 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCLBhF4Lro6fSP-TkG7fqkNFrzAlKf_iWo',
})(Maps);
  


/* 


const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2"> Address</h2>
    <h5 >IDendron HKU </h5>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_APIKEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map */