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
    "revision": "de47b6f1be5a88ac79d26372c572c58c"
  },
  {
    "url": "assets/css/0.styles.8280e1ab.css",
    "revision": "f43b5946ff4cc02bc40bf3e9906733b3"
  },
  {
    "url": "assets/img/kaabah-overview.74a01c42.svg",
    "revision": "74a01c42f4bb848d1bf4e6d2f0ae0b4e"
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
    "url": "assets/js/10.f5ed4eb9.js",
    "revision": "5c4cb61d5857e1f64b7dcbd87cd19931"
  },
  {
    "url": "assets/js/2.ef81631e.js",
    "revision": "70942fb94c5d2ac8769b826ae17f4834"
  },
  {
    "url": "assets/js/3.2bac8d78.js",
    "revision": "d404a02308c055411f327513fa0b0808"
  },
  {
    "url": "assets/js/4.6b0f67a7.js",
    "revision": "f3025062d37a842dd793a25253ad55ad"
  },
  {
    "url": "assets/js/5.3932839c.js",
    "revision": "0aafc354d479558216d10ad1e03429cc"
  },
  {
    "url": "assets/js/6.861fc3e8.js",
    "revision": "351013ae67f803c3b01f84caeb4433e2"
  },
  {
    "url": "assets/js/7.8421df83.js",
    "revision": "4db96c302c7ca0c3025d5e03e0559c88"
  },
  {
    "url": "assets/js/8.af007864.js",
    "revision": "e5005bd5af24fecd863f46b3b466a239"
  },
  {
    "url": "assets/js/9.d9dfeba2.js",
    "revision": "a69ea71c325b1e605cffd05dc5736c88"
  },
  {
    "url": "assets/js/app.da5f6921.js",
    "revision": "2cd0877f0d1c489c9cf9341bc5f76084"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "d972ad3ae43562c6ed6d13ab529768b8"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "7bdec14e4dc920e075f384b5bb16b2f1"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "27444cb0b017ac613d2cd27d9859cd6a"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "7041b6528bc281eb85cce2e9d6e8261a"
  },
  {
    "url": "index.html",
    "revision": "6df2c52434e4518788c8a3d69ead79d6"
  },
  {
    "url": "LICENSE.html",
    "revision": "6990e1791faeb3961a9fac54abfb83d0"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "ad09efd55a63f0676b48d0c21e594dc9"
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
