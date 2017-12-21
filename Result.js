import React from 'react';
import config from './config.js';
// display results, if none, let user know


export default props => {
  var [lat, long] = props.keyword.split(',');
  if (!props.keyword) return <div></div>;

  return <div>
      <img src={'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + props.keyword + '&key=' + config.STREET_VIEW} />
      <div>Image {props.copyright}</div>
    </div>;
};