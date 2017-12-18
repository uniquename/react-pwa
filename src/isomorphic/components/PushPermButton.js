import React from 'react'

import { withStyles } from 'material-ui/styles'
import green from 'material-ui/colors/green'
import Switch from 'material-ui/Switch'
import { FormControlLabel } from 'material-ui/Form';

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
    super(props)

    var that = this
    var value = ''
    var fcmToken = ''

    if (typeof Notification !== 'undefined'){
      if (Notification.permission === 'granted' && this.isTokenSentToServer()) {
        messaging.getToken()
        .then(function(currentToken) {
          if (currentToken) {
            that.setState({
              token: currentToken,
              checked: true,
              value: 'Unsubscribe from Push Notifications'
            })

            that.sendTokenToServer(currentToken)
          }
        })
      } else {
        value = 'Receive Push Notifications'
      }
    }

    this.state = {
      value: value,
      checked: false,
    };
  }

  handleChange = () => (event, checked) => {
    if (checked) {
      this.setState({ 'checked': checked })
      this.fcmPermissions()
    } else {
      this.setState({ 'checked': checked })
      this.deleteTokenFromServer()
    }
  };

  fcmPermissions(){

    var that = this;

    messaging.requestPermission()
      .then(function() {
        console.log('Notification permissions granted.');

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
        // Permission were not granted
        console.log('Unable to get permission to notify.', err);
      });
  }

  // Send the Instance ID token your application server
  sendTokenToServer(currentToken) {
    if (!this.isTokenSentToServer()) {
      console.log('Sending token to server... ')
      // TODO: Send the current token to your server.
      this.setState({
        token : false,
        value: 'Unsubscribe from Push Notifications'
      })
      this.setTokenSentToServer(true)
    } else {
      console.log('Token already sent to server so won\'t send it again unless it changes')
    }
  }

  deleteTokenFromServer(){
    if (this.isTokenSentToServer()) {
      console.log('Deleting token from server...')
      // TODO: Delete token from server.
      this.setState({
        token : false,
        value: 'Receive Push Notifications'
      })

      this.setTokenSentToServer(false)
    } else {
      console.log('Token already deleted on server')
    }
  }

  isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') == 1
  }

  setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? 1 : 0)
  }

  showToken(currentToken) {
    // Show token in console and UI.
    this.setState({token : currentToken})
    console.log('Show token: ', currentToken)
  }

  render() {

    return (
      <div>

        <FormControlLabel
          control={
            <Switch
              checked={this.state.checked}
              onChange={this.handleChange()}
            />
          }
          label={this.state.value}
        />

        <p> Token: {this.state.token}</p>

        {this.state.token &&
          <div>
            <p>
              Use this curl command to send a message via fcm.googleapis.com to this client.<br/><br/>
              Note: it has no "notification" object, else setBackgroundMessageHandler() would be ignored. See https://github.com/firebase/quickstart-js/issues/71<br/>
            </p>

            <pre>{`
              curl -X POST -H "Authorization: key=AAAAJHzT65A:APA91bGoYxS_RcfZCD1OyN1vTVbLzJ5RfXDst-ySKo9uhD9hAfV-rpvxNccLx2Vf-DdME3YEgQdr1x7ydJdpY2f7LVew5YQOloX7WGYJE9vOelzvESY1JlvZzP7ZzbxES6HzxC6tQWD_" -H "Content-Type: application/json" -d '{
                "data": {
                  "title": "Portugal vs. Denmark",
                  "body": "5 to 1",
                  "icon": "firebase-logo.png",
                  "click_action": "https://pwa.12deg.de/push"
                },
                "to": "${this.state.token}"
              }' "https://fcm.googleapis.com/fcm/send"
            `}</pre>
          </div>
        }
      </div>
    )
  }
}

export default withStyles(styles)(PushPermButton)
