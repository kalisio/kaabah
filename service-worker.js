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
    "revision": "e765cf5a83f06112af34f4c49c2663e0"
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
    "url": "assets/js/7.a56d2415.js",
    "revision": "fbff894e4bc813d5d371132997a93698"
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
    "url": "assets/js/app.6bfeeb4c.js",
    "revision": "97695c7b4e9791cf3cc54a5a03308f85"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "7810e1a9f207cfa2b057814c661f79a8"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "49657f99ba5f1781c8df5ec6dd9dff4a"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "2c8320892f642445c14c140bcd858598"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "28fad54786a44b9b4554acc4e3d89625"
  },
  {
    "url": "index.html",
    "revision": "2f3c42575dd4d51df3883be04e18883a"
  },
  {
    "url": "LICENSE.html",
    "revision": "5b328635398c77117513eb69d869a9a6"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "dfaa5167c373ad8da3ec87f75e4719c1"
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
