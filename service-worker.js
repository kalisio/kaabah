/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a1c08ebab98b68cf3629007258310c2f"
  },
  {
    "url": "assets/css/0.styles.8280e1ab.css",
    "revision": "f43b5946ff4cc02bc40bf3e9906733b3"
  },
  {
    "url": "assets/img/kaabah-overview.e8d8ef98.svg",
    "revision": "e8d8ef98228a9042bc7e673b680e0834"
  },
  {
    "url": "assets/img/kaabah-swarm.d67d6932.svg",
    "revision": "d67d6932d2eadf22716ac6ed7866033e"
  },
  {
    "url": "assets/img/kaabah-terraform.555a6e18.svg",
    "revision": "555a6e1874a33aa44d51fdb799ff8d10"
  },
  {
    "url": "assets/img/kaabah-traefik.96292850.svg",
    "revision": "96292850fde5e2c3e334b02f22d41661"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e0889c19.js",
    "revision": "fb82d2b85d60b0ce6a4cca4d23bd580b"
  },
  {
    "url": "assets/js/11.6b630c9c.js",
    "revision": "63662ee3df3a7d7eaaef7b050bf625e9"
  },
  {
    "url": "assets/js/2.ef81631e.js",
    "revision": "70942fb94c5d2ac8769b826ae17f4834"
  },
  {
    "url": "assets/js/3.aeea5ff6.js",
    "revision": "f1a3362f68b87d61831693a9cd502248"
  },
  {
    "url": "assets/js/4.ca126ddb.js",
    "revision": "576a11c097ffb5e6052958ef844dd15b"
  },
  {
    "url": "assets/js/5.629da084.js",
    "revision": "8acf41bc181fe8f9beb8f4b8cf70d389"
  },
  {
    "url": "assets/js/6.c408d63e.js",
    "revision": "0f9f86fa85f266a5faa475a535d5a9d3"
  },
  {
    "url": "assets/js/7.fcdbda67.js",
    "revision": "a9aac991089ad1b8bfff42e4aba64bd1"
  },
  {
    "url": "assets/js/8.4e2db15e.js",
    "revision": "fc20d3cca9aa907346ced71d35653dc1"
  },
  {
    "url": "assets/js/9.7d4b3ee7.js",
    "revision": "e83bf96414ef30c979cbdb64a367e337"
  },
  {
    "url": "assets/js/app.a1ac7b8c.js",
    "revision": "64781a4145ceacc6f2c929e428310b16"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "0a549a53fcdbe970b4c96ee58a727e62"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "ad7c13db445986cdebd0e7375563db73"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "dc3a8285b9c0b8532e9788fcba234d23"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "4fbc3dbc045a746325d8803b6f11c7e8"
  },
  {
    "url": "index.html",
    "revision": "a0d2685fbf343be5e560ebf1fda8d92e"
  },
  {
    "url": "LICENSE.html",
    "revision": "63404e2d93b781b40edfec62251c9413"
  },
  {
    "url": "license/index.html",
    "revision": "bcdc263ca608a97a2b388744c7dbd455"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "8444b7ad8d5e181ec6b90a1a15d6e584"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
