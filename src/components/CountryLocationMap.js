import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

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
    const { lat, lng, country, google } = this.props;

    console.log(this.props);
    console.log(parseInt(this.props.lat));

    return (
      <>
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
            margin: "auto",
            width: "95%",
            height: "95%",
            border: "2px solid black",
          }}
        >
          <Marker
            position={{
              lat: parseInt(lat),
              lng: parseInt(lng),
            }}
            name={"Location"}
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
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDgYSEUDOXvQpldfmt_sS1_Qqp4mWIYCko",
})(CountryLocationMap);

// export default CountryLocationMap;
