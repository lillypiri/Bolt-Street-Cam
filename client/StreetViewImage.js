import React from 'react';
import config from '../config.js';
// display results, if none, let user know

class StreetViewImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: 0
    };
  }

  render() {
    if (!this.props.latitude || !this.props.longitude) return <div />;
    return (
      <div>
        <img
          src={
            'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' +
            this.props.latitude +
            ',' +
            this.props.longitude +
            '&heading=' +
            this.state.degree +
            '&key=' +
            config.STREET_VIEW
          }
        />
        <div className="copyright">Image {this.props.copyright}</div>
        <button className="search-button" type="submit" onClick={e => this.setState(state => ({ degree: (state.degree - 45) % 360 }))}>
            ←
          </button>
          <button className="search-button" type="submit" onClick={e => this.setState(state => ({ degree: (state.degree + 45) % 360 }))}>
            →
          </button>
      </div>
    );
  }
}
export default StreetViewImage;
