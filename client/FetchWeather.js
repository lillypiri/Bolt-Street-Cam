import React, { Component } from 'react';
import config from '../config.js';

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

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${config.WEATHER}`)
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
          id: weather.weather[0].id,
          weather: weather.weather[0].description,
          name: weather.name,
          country: weather.sys.country,
          temperature: weather.main.temp,
          wind: weather.wind.speed
        });
      });
  }

  render() {
    if (this.state.isLoading) return <div>...</div>;

    return (
      <div>
        The current weather in {this.state.name}, {this.state.country} is {this.state.weather},{' '}
        {Math.floor(this.state.temperature - 273.15)}°C and wind speed of {this.state.wind}.
        {this.state.id >= 200 && this.state.id <= 233 &&
          <img src="https://openweathermap.org/img/w/11d.png" />
        } 
        {this.state.id >= 300 && this.state.id <= 322 && 
          <img src="https://openweathermap.org/img/w/09d.png" />
        } 
        {this.state.id >= 500 && this.state.id <= 510 && 
          <img src="https://openweathermap.org/img/w/10d.png" />
        } 
        {this.state.id >= 511 && this.state.id <= 532 &&
        <img src="https://openweathermap.org/img/w/09d.png" />
        }
        {this.state.id >= 600 && this.state.id <= 623 &&
        <img src="https://openweathermap.org/img/w/13d.png" />
        }
        {this.state.id >= 700 && this.state.id <= 782 &&
          <img src="https://openweathermap.org/img/w/50d.png" />
        } 
        {this.state.id === 800 &&
          <img src="https://openweathermap.org/img/w/01d.png" />
        } 
        {this.state.id === 801 && 
          <img src="https://openweathermap.org/img/w/02d.png" />
        } 
        {this.state.id === 802 && 
          <img src="https://openweathermap.org/img/w/03d.png" />
        } 
        {this.state.id >= 804 && this.state.id <= 805 && 
          <img src="https://openweathermap.org/img/w/04d.png" />
        } 
      </div>
    );
  }
}

export default FetchWeather;
