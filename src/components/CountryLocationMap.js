import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class CountryLocationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true,
    });

  render() {
    const { showInfoWindow, activeMarker } = this.state;
    const { lat, lng, google } = this.props;

    return (
      <>
        <div id="map-container">
          <Map
            google={google}
            zoom={5}
            initialCenter={{
              lat: parseInt(lat),
              lng: parseInt(lng),
            }}
            center={{
              lat: parseInt(lat),
              lng: parseInt(lng),
            }}
            style={{
              width: '90%',
              height: '90%',
              margin: 'auto',
            }}
          >
            <Marker
              position={{
                lat: parseInt(lat),
                lng: parseInt(lng),
              }}
              name={'Location'}
              onClick={this.onMarkerClick}
            ></Marker>

            <InfoWindow marker={activeMarker} visible={showInfoWindow}>
              <div>
                <strong>Latitude:</strong> {lat}
                <br />
                <strong>Longitude:</strong> {lng}
              </div>
            </InfoWindow>
          </Map>
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(CountryLocationMap);
