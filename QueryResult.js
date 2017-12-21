// load in result

import React, { Component } from 'react';
import config from './config.js';

import Result from './Result';
// import Loading from 'react-loading-animation';

require('isomorphic-fetch');

class QueryResult extends Component {
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
    this.search(this.props.keyword);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyword !== this.props.keyword) {
      this.search(nextProps.keyword);
    }
  }

  search(keyword) {
    this.setState(state => ({ isLoading: true }));

   fetch(`https://maps.googleapis.com/maps/api/streetview/metadata?size=600x300&location=${encodeURIComponent(this.state.query)}&key=${config.STREET_VIEW}`)
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
    return <div>
        <h2>{this.props.keyword}</h2>
        <Result keyword={this.props.keyword} copyright={this.state.copyright} />
      </div>;
  }
}

export default QueryResult;
