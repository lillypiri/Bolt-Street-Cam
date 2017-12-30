import React, { Component } from 'react';
import config from './config.js';

require('isomorphic-fetch');

class FetchWeather extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);

    this.state = {
      isLoading: false,
      weather: null,
      name: null,
      country: null,
      temperature: null,
      wind: null
    };
  }

  componentDidMount() {
    this.search(this.props.latitude, this.props.longitude);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.latitude !== this.props.latitude || nextProps.longitude !== this.props.longitude) {
      this.search(nextProps.latitude, nextProps.longitude);
    }
  }

  search(lat, long) {
    this.setState(state => ({ isLoading: true }));

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${config.WEATHER}`)
      .then(function(response) {
        //console.log("RESPONSE", response);
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(weather => {
        this.setState({
          isLoading: false,
          weather: weather.weather[0].description,
          name: weather.name,
          country: weather.sys.country,
          temperature: weather.main.temp,
          wind: weather.wind.speed
        })
      });
  }  

  render() {
    if (this.state.isLoading) return <div>...</div>;

    return <div>
        The current weather in {this.state.name}, {this.state.country} is {this.state.weather}, {Math.floor(this.state.temperature - 273.15)}°C and wind speed of {this.state.wind}. 
      </div>;
  }
}

export default FetchWeather;
