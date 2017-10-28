import React from 'react'
import Button from 'material-ui/Button'

import { withStyles } from 'material-ui/styles'
import green from 'material-ui/colors/green'
import Switch from 'material-ui/Switch'

import fire from './firebase';

const messaging = fire.messaging();

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
    this.fcmPermissions();
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

  fcmPermissions(){

    messaging.requestPermission()
      .then(function() {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.

        // Get Instance ID token. Initially this makes a network call, once retrieved
        // subsequent calls to getToken will return from cache.
        messaging.getToken()
        .then(function(currentToken) {
          if (currentToken) {
            sendTokenToServer(currentToken);
            updateUIForPushEnabled(currentToken);
          } else {
            // Show permission request.
            console.log('No Instance ID token available. Request permission to generate one.');
            // Show permission UI.
            updateUIForPushPermissionRequired();
            setTokenSentToServer(false);
          }
        })
        .catch(function(err) {
          console.log('An error occurred while retrieving token. ', err);
          //this.showToken('Error retrieving Instance ID token. ', err);
          //setTokenSentToServer(false);
        });


      })
      .catch(function(err) {
        console.log('Unable to get permission to notify.', err);
      });

  }

  showToken(currentToken) {
    // Show token in console and UI.
    var tokenElement = document.querySelector('#token');
    tokenElement.textContent = currentToken;
  }

  render() {
    return (
      <div>

        <Switch
          checked={this.state.checked}
          onChange={this.handleChange('checked')}
          aria-label="checked"
        />

        {this.state.value}

      </div>
    );
  }
}


export default withStyles(styles)(PushPermButton)
