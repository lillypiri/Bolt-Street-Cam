import React, { Component } from 'react';
import config from '../config.js';

class Map extends Component {
  constructor(props) {
    super(props);
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.id = 'gmaps';
    script.onload = () => {
      this.initMap();
    };
    script.src = `https://maps.googleapis.com/maps/api/js?key=${config.PLACES}`;
    if (!document.querySelector(`#gmaps`)) {
      document.querySelector('head').appendChild(script);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.map.setCenter({ lat: nextProps.latitude, lng: nextProps.longitude });
    this.marker.setPosition({ lat: nextProps.latitude, lng: nextProps.longitude });
  }

  initMap() {
    this.map = new google.maps.Map(this.base, {
      center: { lat: this.props.latitude, lng: this.props.longitude },
      zoom: 12
    });
    this.marker = new google.maps.Marker({
      position: { lat: this.props.latitude, lng: this.props.longitude },
      map: this.map
    });
  }

  render() {
    return <div className="map" ref={element => (this.base = element)} />;
  }
}

export default Map;
