import React from 'react';
import Map from './Map';

export default props => {
  if (!props.place) return <div></div>;

  const { lat, lng } = props.place.geometry.location;

  return <div>
      <div>Nearby hardware store: {props.place.name}</div>
      <Map latitude={lat} longitude={lng} />
    </div>;
};
