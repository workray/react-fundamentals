import React, {Component} from 'react';
import Contact from './Contact';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  render() {
    return (
      <Contact/>
    );
  }
}

export default App;
