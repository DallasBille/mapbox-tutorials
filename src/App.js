// import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./App.css";
import React from "react";
import ReactMapGL, { GeolocateControl, NavigationControl } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZGFsbGFzYmlsbGUiLCJhIjoiY2p6OHR1aGhoMDZnZDNjbXB2ZWZlcXFudCJ9.gjjYkOkTtA-Qe1jhbvF2gQ";
class App extends React.Component {
  state = {
    viewport: {
      latitude: 40.7250863,
      longitude: -73.9773608,
      zoom: 12
    }
  };
  myMap = React.createRef();

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  render() {
    console.log(this.state.viewport);
    return (
      <div>
        <ReactMapGL
          ref={this.myMap}
          {...this.state.viewport}
          width="100vw"
          height="100vh"
          onViewportChange={this.handleViewportChange}
          mapStyle="mapbox://styles/mapbox/navigation-preview-day-v2"
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <Geocoder
            position="top-left"
            mapRef={this.myMap}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onViewportChange={this.handleViewportChange}
          />
          <GeolocateControl />
          <NavigationControl />
        </ReactMapGL>
      </div>
    );
  }
}

export default App;
