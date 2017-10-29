#!/bin/bash




curl -X POST -H "Authorization: key=AAAAJHzT65A:APA91bGoYxS_RcfZCD1OyN1vTVbLzJ5RfXDst-ySKo9uhD9hAfV-rpvxNccLx2Vf-DdME3YEgQdr1x7ydJdpY2f7LVew5YQOloX7WGYJE9vOelzvESY1JlvZzP7ZzbxES6HzxC6tQWD_" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Portugal vs. Denmark",
    "body": "5 to 1",
    "icon": "firebase-logo.png",
    "click_action": "https://pwa.12deg.de/push"
  },
  "to": "cmoYIARrRWg:APA91bH_jGbqVgFjmzA60UrZbUGE1DK6CSh7vpNNic0qOvdATL_VyXXcV8AQ37cqjprmJvxjAW-vBSKj-usg2Ya9vMXmMT7Div3FM0KEU-2tUbtbD_Hv8PakV_w2tCz7mZK6TXu7yuKk"
}' "https://fcm.googleapis.com/fcm/send"
