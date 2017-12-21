import React, { Component } from 'react';
import config from './config.js';

let apiKey = config.STREET_VIEW;
  // rememeber to put in the copyright
  // do we need pitch or fov or heading? options?

class StreetView extends Component {

  fetchStreetView(event) {
    event.preventDefault();

    if (!this.state.query) {
      alert('Type in a lat and long');
      return;
    }

    fetch(`https://maps.googleapis.com/maps/api/streetview/metadata?size=600x300&location=${encodeURIComponent(this.state.query)}&key=${config.STREET_VIEW}`)
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
}
