import React from 'react';
import SearchBar from './SearchBar';
import FetchStreetView from './FetchStreetView';
import FetchWeather from './FetchWeather';
import FetchPlaces from './FetchPlaces';

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
    const [latitude, longitude] = q.split(',');
    this.setState(state => ({ latitude, longitude }));
  }

  render() {
    return <div>
        <SearchBar onSearch={this.onSearch} />

        <FetchStreetView latitude={this.state.latitude} longitude={this.state.longitude} />
        <FetchWeather latitude={this.state.latitude} longitude={this.state.longitude} />
        <FetchPlaces latitude={this.state.latitude} longitude={this.state.longitude} />
      </div>;
  }
}

export default Container;
