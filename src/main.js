import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>React with hot reloading is the cats pajamas!</div>
    )
  }
}

render(<App/>, document.getElementById('app'));
