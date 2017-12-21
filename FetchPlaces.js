import React, { Component } from 'react';
import config from './config.js';

require('isomorphic-fetch');

import Places from './Places';

class FetchPlaces extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);

    this.state = {
      isLoading: false,
      names: null
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

    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1000&type=restaurant&key=${config.PLACES}`, {mode: 'cors'})
      .then(function(response) {
        //console.log('PLACES RESPONSE', response);
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(state => {
        this.setState({ names: state.results[0].name });
      });
  }

  render() {
    return (
      <div>
        {console.log("NAME??????????", this.state.names)}
        <Places names={this.state.names} />
      </div>
    );
  }
}

export default FetchPlaces;
