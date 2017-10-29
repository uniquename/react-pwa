importScripts('js/workbox-sw.prod.js');
importScripts('js/workbox-google-analytics.prod.js');

const workboxSW = new self.WorkboxSW({clientsClaim: true});

this.workbox.googleAnalytics.initialize();

workboxSW.precache([]);

workboxSW.router.registerRoute('https://fonts.googleapis.com/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 20
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);


