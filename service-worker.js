importScripts('js/workbox-sw.prod.js');
importScripts('js/workbox-google-analytics.prod.js');

const workboxSW = new self.WorkboxSW({clientsClaim: true});


this.workbox.googleAnalytics.initialize();

workboxSW.precache([
  {
    "url": "/react-pwa/index.html",
    "revision": "1192ce04f8df5701ac8d9e9d19013ed4"
  },
  {
    "url": "/react-pwa/js/app.js",
    "revision": "50d7a454385c1ddfc5feca55f1d6dd94"
  },
  {
    "url": "/react-pwa/js/vendor.js",
    "revision": "ebc21f25a6811b965265ae2bea1a55b7"
  },
  {
    "url": "/react-pwa/js/workbox-google-analytics.prod.js",
    "revision": "cd1046ac2addb14e8b7235dc3856793a"
  },
  {
    "url": "/react-pwa/js/workbox-sw.prod.js",
    "revision": "e5f207838d7fd9c81835d5705a73cfa2"
  },
  {
    "url": "/react-pwa/server/server.js",
    "revision": "e48ca8e857dfa8a1fd5c9df418d10c88"
  }
]);

workboxSW.router.registerRoute('https://fonts.googleapis.com/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 20
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);

const applicationServerPublicKey = '30866bc9-da39-4ce7-8c9c-3f410945db8b';


function urlB64ToUint8Array(base64String) {
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

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');
  console.log(event);

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://developers.google.com/web/')
  );
});


self.addEventListener('pushsubscriptionchange', function(event) {
  console.log('[Service Worker]: \'pushsubscriptionchange\' event fired.');
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  event.waitUntil(
    self.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
    .then(function(newSubscription) {
      // TODO: Send to application server
      console.log('[Service Worker] New subscription: ', newSubscription);
    })
  );
});
