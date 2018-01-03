import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.selectMarker = this.selectMarker.bind(this);

    this.state = {
      query: '',
      image: null
    };
  }

  onSubmit(event) {
    if (event) event.preventDefault();
    this.props.onSearch(this.state.query);
  }

  selectMarker(markerId) {
    this.setState(state => ({ query: markerId }), () => {
      this.onSubmit();
    });
  }

  render() {
    return <div>
        <form onSubmit={this.onSubmit}>
          <input className="search-input" autoFocus type="text" onChange={e => this.setState({
                query: e.target.value
              })} value={this.state.query} placeholder="PM150124" />
          <button className="search-button" type="submit">
            Find a survey mark
          </button>
        </form>
        <div>
          {' '}
          Enter in a NSW survey mark number or a latitude and longitude, to see a Street View of the area the mark
          is located in.
        </div>
        <br />
        <br />
        <div>
          Example queries:
          <span className="select-markers" onClick={e => this.selectMarker('PM150124')}>PM150124</span>,
          <span className="select-markers" onClick={e => this.selectMarker('SS112568')}>SS112568</span>,
          <span className="select-markers" onClick={e => this.selectMarker('PM22679')}>PM22679</span>,
          <span className="select-markers" onClick={e => this.selectMarker('PM22678')}>PM22678</span>,
          <span className="select-markers" onClick={e => this.selectMarker('PM120624')}>PM120624</span>
        </div>
      </div>;
  }
}

export default SearchBar;
