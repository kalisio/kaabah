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
    "revision": "f883229aa3fae3b1235e70fe48cd3671"
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
    "url": "assets/js/7.10c1789f.js",
    "revision": "09352752e2b07017c56e58f592ee4519"
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
    "url": "assets/js/app.9789bfd0.js",
    "revision": "b6ca70b921b70bc00a51abcaa9f3c2c4"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "407e4412066dfc9dc8aeaca57041a45b"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "75a48f3d9ed325bddbf7ef78aead054b"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "b8a6d22724b0e5a1012cc7237413e2b5"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "3d09d8ac0e6ce395b7ab942633dabfd0"
  },
  {
    "url": "index.html",
    "revision": "d8ce679d0bff1ec4c96035feb9288cd3"
  },
  {
    "url": "LICENSE.html",
    "revision": "8c42537e1ffb1d43944191881d772896"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "6b264f52c1410dcc44f5451d86e4af80"
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
