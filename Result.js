import React from 'react';
import apiKey from './config.js';
// display results, if none, let user know

export default props => {
  {console.log('keyword is......', props.keyword)}
  if (!props.keyword) return <div></div>;

  return <div>
     <img src={'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + props.keyword + '&key=' + apiKey} />
    </div>;
};