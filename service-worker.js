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
    "revision": "de35f4f0688b3fc0e9164c8bbc598d17"
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
    "url": "assets/js/4.75569306.js",
    "revision": "1766c9e0e0a651b3eabf3a2d9b9dd3e8"
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
    "url": "assets/js/app.c6770af4.js",
    "revision": "398e2c42fce2b58afa704d8bd0196507"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "66b93513379ad00011383cc715c4697e"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "d28ce726bc90132e5e2d882c5e6bb6bd"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "87bb7ecd66b611a06d531f24d81b7f49"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "ef94236522c17f01542814dc4fca84c1"
  },
  {
    "url": "index.html",
    "revision": "4ba453bcfb892a6cb283c86507ba9c2e"
  },
  {
    "url": "LICENSE.html",
    "revision": "8082b73ea503508803712728081cbd69"
  },
  {
    "url": "license/index.html",
    "revision": "535485a67e1eed633e8608c3db4abe49"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "4e37824e410205238f53242daf8b39b8"
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
