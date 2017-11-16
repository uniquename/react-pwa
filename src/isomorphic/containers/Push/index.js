import React, { Component } from 'react'

import fire from '../../components/firebase'
import PushPermButton from '../../components/PushPermButton'


const messaging = fire.messaging();

messaging.onMessage(function(payload) {
  console.log("Message received in push/index.js ", payload);
  // ...
});


class Push extends Component {
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

export default Push;
