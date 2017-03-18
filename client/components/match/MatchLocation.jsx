import React from 'react';
import MatchList from './MatchList';

class MatchLocation extends React.Component {
  constructor(props) {
    super(props);
    console.log("INVOKE FOR FUCKS SAKE")
    this.state = {
      mapStyle: { width: '100%', height: '400px' },
    };
  }
  componentDidMount() {
    console.log("gotta render lol");
    if(this.props.listings && this.props.listings.length > 0) {
      this
        .createOptions()
        .initMap(this.props.listings);
    }
  }
  initMap(openTableData) {
    setTimeout(() => {
      this.buildPins(openTableData);
    }, 0);
  }
  createOptions() {
    this.setState({
      mapOptions: {
        zoom: 14,
        center: new google.maps.LatLng(37.787507, -122.399838),
        mapTypeId: "roadmap",
        mapTypeControl: false,
        scrollwheel: false,
        streetViewControl: false,
        panControl: false,
        rotateControl: false,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER,
        },
        styles: [{ "featureType": "landscape.man_made", "elementType": "geometry", "stylers": [{ "color": "#f7f1df" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#d0e3b4" }] }, { "featureType": "landscape.natural.terrain", "elementType": "geometry", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "geometry", "stylers": [{ "color": "#fbd3da" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#bde6ab" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffe15f" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#efd151" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "color": "black" }] }, { "featureType": "transit.station.airport", "elementType": "geometry.fill", "stylers": [{ "color": "#cfb2db" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#a2daf2" }] }],
      }
    });
    return this;
  }
  buildPins(openTableData) {
    let infowindow = new google.maps.InfoWindow();
    let map = new google.maps.Map(this.refs.map, this.state.mapOptions);

    openTableData.forEach((rest, i) => {
      let myLatLng2 = { lat: Number(rest.rawData.latitude), lng: Number(rest.rawData.longitude) };
      let marker = new google.maps.Marker({
        position: myLatLng2,
        map: map,
        title: 'name',
      });
      google.maps.event.addListener(marker, 'click', (function () {
        return function () {
          infowindow.setContent('helloooo add some info here');
        }
      })());
    });
    new google.maps.event.trigger(map, "resize");
    return this;
  }
  render() {
    return (
      <section className="map-container">
        <div className="gMap" ref="map" style={this.state.mapStyle}></div>
        <MatchList restData={this.props.listings} />
        <button onClick={this.props.nextResults}>Next 5</button>
        <button onClick={this.props.previousResults}>Previous 5</button>
      </section>
    );
  }
}

export default MatchLocation;
