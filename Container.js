import React from 'react';
import SearchBar from './SearchBar';
import QueryRoute from './QueryRoute';

class Container extends React.Component {
  constructor(props) {
    super(props) 

    this.state ={
      keyword: '46.414382,10.013988'
    };
  }

  render() {
      return <div>
          <SearchBar onSearch={ keyword => this.setState({ keyword }) }/>

          <QueryRoute keyword={this.state.keyword} />
        </div>;

  }
}

export default Container;
