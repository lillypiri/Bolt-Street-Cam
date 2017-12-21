import React from 'react';

import FetchPlaces from './FetchPlaces';

export default props => {
  return <FetchPlaces keyword={props.keyword || props.match.params.keyword} />;
};
