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
      longitude: 153.533405,
      errorMsg: ''
    };
  }

  onSearch(q) {
    if (!q) {
      this.setState(state => ({ errorMsg: 'Please enter a valid mark number.' }));
      return;
    }
    fetch(`${config.URL}/marks/` + q)
      .then(r => {
        if (r.status === 404) throw new Error('No mark found with that mark number.');
        return r.json();
      })
      .then(json => {
        const { latitude, longitude } = json;
        this.setState(state => ({ latitude, longitude, errorMsg: '' }));
      }).catch(error => {
        this.setState(state => ({ errorMsg: error.message }));
      });
  }

  render() {
    return <div className="container">
        <div className="title">
          Bolt Street View
          <div className="subtitle">
            Survey marks (or bolts) are objects that mark key survey points on the Earth's surface, and are used in
            geodetic and land surveying.
          </div>
        </div>

        <div className="search">
          {this.state.errorMsg && <div className="error">{this.state.errorMsg}</div>}
          <SearchBar onSearch={this.onSearch} />
        </div>
        <div className="street-view">
          <FetchStreetView latitude={this.state.latitude} longitude={this.state.longitude} />
        </div>
        <div className="panel weather">
          <FetchWeather latitude={this.state.latitude} longitude={this.state.longitude} />
        </div>
        <div className="panel places">
          <FetchPlaces latitude={this.state.latitude} longitude={this.state.longitude} />
        </div>
        <div className="footer">
          Check out the <a href="https://github.com/lillypiri/Bolt-Street-Cam">github repository</a> for this page.
        </div>
      </div>;
  }
}

export default Container;
