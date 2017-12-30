import React from 'react';
import config from './config.js';
// display results, if none, let user know


export default props => {
  if (!props.latitude || !props.longitude) return <div></div>;

  return <div>
      <img src={'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + props.latitude + ',' + props.longitude + '&key=' + config.STREET_VIEW} />
      <div>Image {props.copyright}</div>
    </div>;
};