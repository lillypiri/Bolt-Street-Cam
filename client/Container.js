import React from 'react';
import SearchBar from './SearchBar';
import FetchStreetView from './FetchStreetView';
import FetchWeather from './FetchWeather';
import FetchPlaces from './FetchPlaces';
import config from '../config.js';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);

    this.state = {
      latitude: -28.166673,
      longitude: 153.533405
    };
  }

  onSearch(q) {
    fetch(`${config.URL}/marks/` + q)
      .then(r => r.json())
      .then(json => {
        const { latitude, longitude } = json;
        ``;
        this.setState(state => ({ latitude, longitude }));
      });
  }

  render() {
    return (
      <div className="container">
        <div className="title">
          Bolt Street View
          <div className="subtitle">
            Survey marks (or bolts) are objects that mark key survey points on the Earth's surface, and are used in
            geodetic and land surveying.
          </div>
        </div>

        <div className="search">
          <SearchBar onSearch={this.onSearch} />
        </div>
        <div className="street-view">
          <FetchStreetView latitude={this.state.latitude} longitude={this.state.longitude} />
        </div>
        <div className="weather">
          <FetchWeather latitude={this.state.latitude} longitude={this.state.longitude} />
        </div>
        <div className="places">
          <FetchPlaces latitude={this.state.latitude} longitude={this.state.longitude} />
        </div>
        <div className="footer">
          Check out the <a href="https://github.com/lillypiri/Bolt-Street-Cam">github repository</a> for this page.
        </div>
      </div>
    );
  }
}

export default Container;
