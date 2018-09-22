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
    "revision": "d0417294766206c469b5f67eff13f517"
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
    "url": "assets/js/10.05b3c617.js",
    "revision": "ae1ed4a67c9bc656c7324136bea34d04"
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
    "url": "assets/js/6.098f9386.js",
    "revision": "254bbfb867b229a9fa7d9d953742dc1e"
  },
  {
    "url": "assets/js/7.0f69a593.js",
    "revision": "fa39258857147ed83e0f1c3ad60a9bdc"
  },
  {
    "url": "assets/js/8.3b04fe92.js",
    "revision": "24316c8f500b7e7c6084719dc467a807"
  },
  {
    "url": "assets/js/9.b55dbb8d.js",
    "revision": "95a3670344578ecc9b98547c979878a2"
  },
  {
    "url": "assets/js/app.1c515349.js",
    "revision": "5849febad5627ca98c91a881de8f7d19"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "fe199948d652f9ada301434545dd6636"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "fc66555c61a72ce866dfe73724ae6da4"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "5248011ae92d6e45bf3f6902d7af53b1"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "c3dbc6b5afd54b2b0443760379b1b18b"
  },
  {
    "url": "index.html",
    "revision": "f878a05a316fce13551152ec0f9877d7"
  },
  {
    "url": "LICENSE.html",
    "revision": "835d75dcd231ee88d30f387e3aa370f0"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "8fdf465e29301fc0107c8599b290c8b1"
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
