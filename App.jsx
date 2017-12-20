import React from 'react';
import apiKey from './config.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetchStreetView = this.fetchStreetView.bind(this);

    this.state = {
      query: '',
      image: null
    };
  }
  // rememeber to put in the copyright
  // do we need pitch or fov or heading? options?

  fetchStreetView (event) {
        event.preventDefault();

        if (!this.state.query) {
            alert("Type in a lat and long");
            return;
        }

        fetch(`https://maps.googleapis.com/maps/api/streetview/metadata?size=600x300&location=${encodeURIComponent(this.state.query)}&key=${apiKey}`)
          .then(function(response) {
            console.log(response);
            if (response.status >= 400) {
              throw new Error('Bad response from server');
            }
            return response.json();
          }).then(function(json) {
            console.log('actual json', json);
          })
    }

  render() {
      return <div>
          <form onSubmit={this.fetchStreetView}>
            <input autoFocus type="text" onChange={e => this.setState({
                  query: e.target.value
                })} value={this.state.query} placeholder="<lat>,<long>" />
            <button type="submit">Find a location</button>
          </form>
          <div>Example query: 46.414382,10.013988</div>

          {this.state.query && <div>
              <img src={'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + this.state.query + '&key=' + apiKey} />
            </div>}
        </div>;

  }
}

// console.log('pay attn', this.state.query);
// const splitQ = this.state.query.split(',');
// console.log('split stuff', splitQ);
export default App;
