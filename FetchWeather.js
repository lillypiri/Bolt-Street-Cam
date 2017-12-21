import React, { Component } from 'react';
import config from './config.js';

require('isomorphic-fetch');

class FetchWeather extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);

    this.state = {
      isLoading: false,
      weather: [],
      name: [],
      country: [],
      temperature: [],
      wind: []
    };
  }

  componentDidMount() {
    this.search(this.props.keyword);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyword !== this.props.keyword) {
      this.search(nextProps.keyword);
    }
  }

  search(keyword) {
    var [lat, long] = this.props.keyword.split(',');
    this.setState(state => ({ isLoading: true }));

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${config.WEATHER}`)
      .then(function(response) {
        console.log("RESPONSE", response);
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(weather => {
        this.setState({
          weather: weather.weather[0].description,
          name: weather.name,
          country: weather.sys.country,
          temperature: weather.main.temp,
          wind: weather.wind.speed,
        })
      });
  }  

  render() {
    return <div>
        The current weather in {this.state.name}, {this.state.country} is {this.state.weather}, {this.state.temperature.toString().substr(0, 2)}°C and wind speed of {this.state.wind}. 
      </div>;
  }
}

export default FetchWeather;
