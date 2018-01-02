import React, { Component } from 'react';
import config from '../config.js';

require('isomorphic-fetch');

import Places from './Places';

class FetchPlaces extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);

    this.state = {
      isLoading: false,
      place: null
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

  search(latitude, longitude) {
    this.setState(state => ({ isLoading: true }));

    fetch(`${config.URL}/places?latitude=${latitude}&longitude=${longitude}`)
      .then(function(response) {
        //console.log('PLACES RESPONSE', response);
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(json => {
        const place = json.results[0];
        this.setState({ place });
      });
  }

  render() {
    return <Places place={this.state.place} />;
  }
}

export default FetchPlaces;
