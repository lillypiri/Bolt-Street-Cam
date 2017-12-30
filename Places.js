import React from 'react';

export default props => {
  console.log("NAME HERE", props.names)
  
  if (!props.names) return <div></div>;

  return <div>
      <div>Nearby hardware store: {props.names}</div>
    </div>;
};
