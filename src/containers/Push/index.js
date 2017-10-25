import React, { Component } from 'react';

import PushPermButton from '../../components/PushPermButton'

class Home extends Component {
  render() {
    return (
      <div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PushPermButton/>
      </div>
    );
  }
}

export default Home;
