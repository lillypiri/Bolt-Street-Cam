// load in result

import React, { Component } from 'react';
import config from './config.js';

import StreetViewImage from './StreetViewImage';
// import Loading from 'react-loading-animation';

require('isomorphic-fetch');

class FetchStreetView extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);

    this.state = {
      isLoading: false,
      copyright: [],
      status: []
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

   fetch(`https://maps.googleapis.com/maps/api/streetview/metadata?size=600x300&location=${latitude},${longitude}&key=${config.STREET_VIEW}`)
     .then(function(response) {
       console.log("RESPONSE AFTER FETCH", response);
       if (response.status >= 400) {
         throw new Error('Bad response from server');
       }
       return response.json();
     })
     .then(metadata => {
       this.setState({ copyright: metadata.copyright, status: metadata.status });
     });
  }

  render() {
    return <StreetViewImage latitude={this.props.latitude} longitude={this.props.longitude} copyright={this.state.copyright} />;
  }
}

export default FetchStreetView;
