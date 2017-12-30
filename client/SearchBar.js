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
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            type="text"
            onChange={e =>
              this.setState({
                query: e.target.value
              })
            }
            value={this.state.query}
            placeholder="<lat>,<long>"
          />
          <button type="submit">Find a location</button>
        </form>
        <div>Example queries: -28.166673,153.533405 - 46.414382,10.013988</div>
      </div>
    );
  }
}

export default SearchBar;
