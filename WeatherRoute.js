import React from 'react';

import FetchWeather from './FetchWeather';

export default props => {
  return <FetchWeather keyword={props.keyword || props.match.params.keyword} />;
};
