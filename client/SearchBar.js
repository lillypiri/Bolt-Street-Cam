import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      query: '',
      image: null
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state.query);
  }

  render() {
    return <div>
        <form onSubmit={this.onSubmit}>
          <input className="search-input" autoFocus type="text" onChange={e => this.setState({
                query: e.target.value
              })} value={this.state.query} placeholder="PM150124" />
          <button className="search-button" type="submit">Find a survey mark</button>
        </form>
        <div>Example query: PM150124</div>
        <div> Enter in a NSW survey mark number or a latitude and longitude,
           to see a Street View of the area the mark is located in.</div>
      </div>;
  }
}

export default SearchBar;
