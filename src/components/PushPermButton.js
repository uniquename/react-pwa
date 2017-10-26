import React from 'react'
import Button from 'material-ui/Button'

import { withStyles } from 'material-ui/styles'
import green from 'material-ui/colors/green'
import Switch from 'material-ui/Switch'

const styles = {
  bar: {},
  checked: {
    color: green[500],
    '& + $bar': {
      backgroundColor: green[500],
    },
  },
};

class PushPermButton extends React.Component {

  constructor(props) {
    super(props);

    var value = '';

    if (typeof Notification !== 'undefined'){
      if (Notification.permission === 'granted') {
        value = 'you r granted permissions'
      } else {
        value = 'give permission'
      }
    }

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      value: value,
      checked: false
    };
  }

  urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
    this.handleClick();
    console.log('test');
  };

  handleClick() {
    var that = this;

    Notification.requestPermission().then(function(permission){

      if (permission === 'granted') {
        that.setState({value : 'you`r granted permissions'});
      }

      navigator.serviceWorker.ready.then(function(registration) {
        console.log(registration)

        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          icon: 'static/images/badge.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        });

        const subscribeOptions = {
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U'
          )
        };

        registration.pushManager.subscribe(subscribeOptions).then(
          function(pushSubscription) {
            console.log(pushSubscription);
            // The push subscription details needed by the application
            // server are now available, and can be sent to it using,
            // for example, an XMLHttpRequest.
          }, function(error) {
            // During development it often helps to log errors to the
            // console. In a production environment it might make sense to
            // also report information about errors back to the
            // application server.
            console.log(error);
          }
        );

      });

    });
  }

  render() {
    return (
      <div>

        <Switch
          checked={this.state.checked}
          onChange={this.handleChange('checked')}
          aria-label="checked"
        />

        <Button onClick={this.handleClick.bind(this)}>
          {this.state.value}
        </Button>

      </div>
    );
  }
}


export default withStyles(styles)(PushPermButton)
