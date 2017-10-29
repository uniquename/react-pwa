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

    var that = this;

    var value = '';

    if (typeof Notification !== 'undefined'){
      if (Notification.permission === 'granted') {
        value = 'you r granted permissions'
      } else {
        value = 'give permission'
      }
    }

    var fcmToken = ''

    messaging.getToken()
    .then(function(currentToken) {
      console.log(currentToken)
      console.log(that)
      that.setState({token: currentToken});
      that.state.token = currentToken
    })

    this.state = {
      value: value,
      checked: false,
    };
  }

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
    this.fcmPermissions();
    //this.handleClick();
    console.log('test');
  };

  fcmPermissions(){

    var that = this;

    messaging.requestPermission()
      .then(function() {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.

        // Get Instance ID token. Initially this makes a network call, once retrieved
        // subsequent calls to getToken will return from cache.
        messaging.getToken()
        .then(function(currentToken) {
          if (currentToken) {
            that.sendTokenToServer(currentToken);
            that.showToken(currentToken);
          } else {
            // Show permission request.
            console.log('No Instance ID token available. Request permission to generate one.');
            // Show permission UI.
            //updateUIForPushPermissionRequired();
            that.setTokenSentToServer(false);
          }
        })
        .catch(function(err) {
          console.log('An error occurred while retrieving token. ', err);
          that.showToken('Error retrieving Instance ID token. ', err);
          that.setTokenSentToServer(false);
        });


      })
      .catch(function(err) {
        console.log('Unable to get permission to notify.', err);
      });
  }


  // Send the Instance ID token your application server, so that it can:
  // - send messages back to this app
  // - subscribe/unsubscribe the token from topics
  sendTokenToServer(currentToken) {
    if (!this.isTokenSentToServer()) {
      console.log('Sending token to server...');
      // TODO(developer): Send the current token to your server.
      this.setTokenSentToServer(true);
    } else {
      console.log('Token already sent to server so won\'t send it again ' +
          'unless it changes');
    }
  }

  isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') == 1;
  }

  setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? 1 : 0);
  }

  showToken(currentToken) {
    // Show token in console and UI.
    this.setState({token : currentToken});
    //var tokenElement = document.querySelector('#token');
    //tokenElement.textContent = currentToken;
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

        <div> Token:
          {this.state.token}
        </div>

          <pre>{`
curl -X POST -H "Authorization: key=AAAAJHzT65A:APA91bGoYxS_RcfZCD1OyN1vTVbLzJ5RfXDst-ySKo9uhD9hAfV-rpvxNccLx2Vf-DdME3YEgQdr1x7ydJdpY2f7LVew5YQOloX7WGYJE9vOelzvESY1JlvZzP7ZzbxES6HzxC6tQWD_" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Portugal vs. Denmark",
    "body": "5 to 1",
    "icon": "firebase-logo.png",
    "click_action": "https://pwa.12deg.de/push"
  },
  "to": "${this.state.token}"
}' "https://fcm.googleapis.com/fcm/send"
          `}</pre>


      </div>
    );
  }
}


export default withStyles(styles)(PushPermButton)


/**

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






 */


