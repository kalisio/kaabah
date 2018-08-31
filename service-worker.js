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
    "revision": "a664e23115b33859283e372c880c1927"
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
    "url": "assets/js/10.5da3b5ec.js",
    "revision": "830d0e37a4337d3d13aba5ecdd9aa0d2"
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
    "url": "assets/js/4.30d68523.js",
    "revision": "7bb3a5c8824f2f79610ed1ad1e169718"
  },
  {
    "url": "assets/js/5.3932839c.js",
    "revision": "0aafc354d479558216d10ad1e03429cc"
  },
  {
    "url": "assets/js/6.0c07f657.js",
    "revision": "988d621afa21cecc2c4d9356349b534a"
  },
  {
    "url": "assets/js/7.6737fe35.js",
    "revision": "dba76255fad1b76b4203af1e45cd03f5"
  },
  {
    "url": "assets/js/8.af007864.js",
    "revision": "e5005bd5af24fecd863f46b3b466a239"
  },
  {
    "url": "assets/js/9.a3ea111a.js",
    "revision": "0c62f0d19392b459667d682cfe5b8492"
  },
  {
    "url": "assets/js/app.9204143c.js",
    "revision": "ba7d2a79b3ff3e8c8e5eb8fe9a22050a"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "bd126318d8853fa3681dc77d8b621bc3"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "4888b4a6cc229e88abcefec6158495f1"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "108192411c8068c9ed0202771d432903"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "48df36c3fb7ab9a8ce4da935bce8d0e5"
  },
  {
    "url": "index.html",
    "revision": "a745c642521d866dbd87eceb8280ab42"
  },
  {
    "url": "LICENSE.html",
    "revision": "dfc896a3956d4da3687334a6fef16824"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "15c0e0389966fc9ebe071912f9d96286"
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
