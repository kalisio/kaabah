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
    "revision": "45ddd8723b23e342cad8862aae165317"
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
    "url": "assets/js/10.c35057eb.js",
    "revision": "3b9fc17a4a1c1771e116a15b3c9cc317"
  },
  {
    "url": "assets/js/11.01152ee6.js",
    "revision": "eb805e8c409ae523529803498749367f"
  },
  {
    "url": "assets/js/12.6bb55d9a.js",
    "revision": "38376b9cff4c35f1839c9728a2d1dc8c"
  },
  {
    "url": "assets/js/13.44aa4255.js",
    "revision": "7f1e9047bd17a140fe277efadbf4eb38"
  },
  {
    "url": "assets/js/2.e69eec40.js",
    "revision": "c9ef5eccec94be6b75165bb145114d6e"
  },
  {
    "url": "assets/js/3.aeea5ff6.js",
    "revision": "f1a3362f68b87d61831693a9cd502248"
  },
  {
    "url": "assets/js/4.6b0f67a7.js",
    "revision": "f3025062d37a842dd793a25253ad55ad"
  },
  {
    "url": "assets/js/5.6a324788.js",
    "revision": "55487daacd731d6c425a33251e6d7e31"
  },
  {
    "url": "assets/js/6.ad7fb63a.js",
    "revision": "820615ece6c9ec80fa9f49ef6944eec9"
  },
  {
    "url": "assets/js/7.50d193ec.js",
    "revision": "0247b9c063221aa2a8757048adee595b"
  },
  {
    "url": "assets/js/8.6e412be3.js",
    "revision": "7aeb0fe408c481d64b80f46a656b2b43"
  },
  {
    "url": "assets/js/9.2bc38904.js",
    "revision": "b2691203e7b8c2946073102e079962f6"
  },
  {
    "url": "assets/js/app.dd338cd8.js",
    "revision": "ad90fc1792ecb4ff2efc2d06836c7d7f"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "eee9af02d4a8b077e882a3174872a713"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "935445648452ffe4bc3ed91318e2da7c"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "82e3c15d9e46405c37a0fe84689b8e0f"
  },
  {
    "url": "how-to-use-it/configuration-variables.html",
    "revision": "ddbf195a6a22b5645f5afd5e9c99ea70"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "95fcbe17d4fe23cd82ea1973fb505d19"
  },
  {
    "url": "how-to-use-it/helper-commands.html",
    "revision": "dc65e274d2e206c065e0bcf7bf263bd8"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "919fcf3680ad930831ca263f137d6003"
  },
  {
    "url": "index.html",
    "revision": "1ecf8871bd4e8538b58da6331979df86"
  },
  {
    "url": "LICENSE.html",
    "revision": "91e413bb4352d7572524919bd6792147"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "284f18e07c9e6a1f9b1577a9d7a32e63"
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
