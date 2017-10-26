import React, { Component } from 'react';

import PushPermButton from '../../components/PushPermButton'

class Home extends Component {
  render() {
    return (
      <div>
        <p>
          Enable Push Notifications
        </p>
        <PushPermButton/>
      </div>
    );
  }
}

export default Home;
