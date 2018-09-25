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
    "revision": "3bdf4b3010b658524d58c4b927a51796"
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
    "url": "assets/js/10.bcc209c7.js",
    "revision": "b8bcde572a9bdf73a9561eead0ce1fb6"
  },
  {
    "url": "assets/js/2.e69eec40.js",
    "revision": "c9ef5eccec94be6b75165bb145114d6e"
  },
  {
    "url": "assets/js/3.702158b9.js",
    "revision": "4fe101addd45ab646bc2d324179632f0"
  },
  {
    "url": "assets/js/4.8eecaaf7.js",
    "revision": "3eb9a3f720f502ac4a347b68a38cef1e"
  },
  {
    "url": "assets/js/5.1ea87e1e.js",
    "revision": "416605432aadef8265b10290a85dc8b5"
  },
  {
    "url": "assets/js/6.4c71ed54.js",
    "revision": "55a187a40056eab77b51c325394daea3"
  },
  {
    "url": "assets/js/7.f5376f50.js",
    "revision": "93d3f40d1291624bfa2017d81250a92c"
  },
  {
    "url": "assets/js/8.3b04fe92.js",
    "revision": "24316c8f500b7e7c6084719dc467a807"
  },
  {
    "url": "assets/js/9.909954aa.js",
    "revision": "abefe4db8f35943656d54ef503cad95e"
  },
  {
    "url": "assets/js/app.be8c1d95.js",
    "revision": "0fe712290380ac1f981eda47bacf49c9"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "75ae9471bf7a9c36c23ed600b1917726"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "4565f788c6136c1fbba4ca8a122037c0"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "3d2edb741c40ce0c9b0be0bb03619072"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "a880e65d847f7263090044ae8301dbf0"
  },
  {
    "url": "index.html",
    "revision": "197ec06f8062c61920a2017ae18038be"
  },
  {
    "url": "LICENSE.html",
    "revision": "8d8b3513c7e9946b7683247651c56ec7"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "abf5af2c7a77c3a1f409cc9cb0ea5ead"
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
