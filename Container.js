import React from 'react';
import SearchBar from './SearchBar';
import QueryRoute from './QueryRoute';
import WeatherRoute from './WeatherRoute';
import PlaceRoute from './PlaceRoute';


class Container extends React.Component {
  constructor(props) {
    super(props) 

    this.state = { keyword: '-28.166673,153.533405' };
  }

  render() {
      return <div>
          <SearchBar onSearch={ keyword => this.setState({ keyword }) }/>

          <QueryRoute keyword={this.state.keyword} />
          <WeatherRoute keyword={this.state.keyword} />
          <PlaceRoute keyword={this.state.keyword} />
        </div>;

  }
}

export default Container;
