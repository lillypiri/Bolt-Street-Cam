import React from 'react';
import config from '../config.js';
// display results, if none, let user know

class StreetViewImage extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      degree: 0
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState(prevState => {
      if (this.state.degree === 360) {
        return { degree: 45 };
      } else {
        return { degree: this.state.degree + 45 };
      }
    });
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
        <form onSubmit={this.onSubmit}>
          <button className="search-button" type="submit">
            →
          </button>
        </form>
      </div>
    );
  }
}
export default StreetViewImage;
