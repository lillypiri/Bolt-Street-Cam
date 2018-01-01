import React, { Component } from 'react';

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
    this.search(this.props.latitude, this.props.longitude);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.latitude !== this.props.latitude || nextProps.longitude !== this.props.longitude) {
      this.search(nextProps.latitude, nextProps.longitude);
    }
  }

  search(latitude, longitude) {
    this.setState(state => ({ isLoading: true }));

    fetch(`http://localhost:7777/places?latitude=${latitude}&longitude=${longitude}`)
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
    return <Places names={this.state.names} />;
  }
}

export default FetchPlaces;
