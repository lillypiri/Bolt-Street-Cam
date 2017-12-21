// load in result

import React, { Component } from 'react';
import apiKey from './config.js';

import Result from './Result';
// import Loading from 'react-loading-animation';

require('isomorphic-fetch');

class QueryResult extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);

    this.state = {
      isLoading: false,
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

   fetch(`https://maps.googleapis.com/maps/api/streetview/metadata?size=600x300&location=${encodeURIComponent(this.state.query)}&key=${apiKey}`)
     .then(function(response) {
       console.log(response);
       if (response.status >= 400) {
         throw new Error('Bad response from server');
       }
       return response.json();
     })
     .then(function(json) {
       console.log('actual json', json);
     });
  }

  render() {
    return <div>
        <h2>{this.props.keyword}</h2>
        <Result keyword={this.props.keyword} />
      </div>;
  }
}

export default QueryResult;
