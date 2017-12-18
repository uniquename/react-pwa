importScripts('js/workbox-sw.prod.js');
importScripts('js/workbox-google-analytics.prod.js');

const workboxSW = new self.WorkboxSW({clientsClaim: true});

this.workbox.googleAnalytics.initialize();

workboxSW.precache([]);

workboxSW.router.registerRoute(
  'https://hn.algolia.com/api/v1/(.*)',
  workboxSW.strategies.staleWhileRevalidate({
    cacheName: 'hn',
    cacheExpiration: {
      maxAgeSeconds: 60, // cache for one minute
    },
    //cacheableResponse: {statuses: [0, 200]},
  })
);
