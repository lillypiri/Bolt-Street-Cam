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
        <div>Example query: 46.414382,10.013988</div>
      </div>
    );
  }
}


// console.log('pay attn', this.state.query);
// const splitQ = this.state.query.split(',');
// console.log('split stuff', splitQ);
export default SearchBar;
