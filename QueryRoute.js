import React from 'react';

import QueryResult from './QueryResult';

export default props => {
  return <QueryResult keyword={props.keyword || props.match.params.keyword} />;
};
