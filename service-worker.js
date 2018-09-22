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
    "revision": "84eeda3312b0bf7bafdc255d5b7c04eb"
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
    "url": "assets/js/10.9437f54d.js",
    "revision": "261b3a64463b0960db04487283cd6ade"
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
    "url": "assets/js/7.ff976bc6.js",
    "revision": "22a6e18838e12bb6a7a9051fe48851c2"
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
    "url": "assets/js/app.b82fdef6.js",
    "revision": "3af0201f741540f68affd5978f357418"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "cddc9a572f1526b23cd4ed6f8b066255"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "d0412cf991ae1d301cbc9d50784b3e9b"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "51b6f92f466e54687a104ba962ad68fa"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "7d70211ed02534067ccc895d7da5aea0"
  },
  {
    "url": "index.html",
    "revision": "2eb92f16fc92ecca66741623cc08f7b2"
  },
  {
    "url": "LICENSE.html",
    "revision": "56822592ac567de7d86a1caa30012677"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "731851abef46045aab7c5deff97a3c2f"
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
