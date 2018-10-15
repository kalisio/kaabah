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
    "revision": "37d826f89823bf2adb500e424b98cfe1"
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
    "url": "assets/js/7.b600f0ae.js",
    "revision": "ec8444a3be58c0da8d6e0c0c875b6082"
  },
  {
    "url": "assets/js/8.6e412be3.js",
    "revision": "7aeb0fe408c481d64b80f46a656b2b43"
  },
  {
    "url": "assets/js/9.10436e03.js",
    "revision": "c7a4373355c8e8912622ea852d7fdc12"
  },
  {
    "url": "assets/js/app.cba5d0d3.js",
    "revision": "879658d38e816a170ba19a4e990fdce2"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "5d4a5950dc86d77dfaf5e5cf85206144"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "ed627cf23df81b98d3dac8d8aea65257"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "5c1ff1fdb0cf6dad444ff71a46e605cf"
  },
  {
    "url": "how-to-use-it/configuration-variables.html",
    "revision": "d3d82e4d1582d67e73309145788086a3"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "dc330a4c57dbce9e76bb0e85141fb4cb"
  },
  {
    "url": "how-to-use-it/helper-commands.html",
    "revision": "6b9e1ed08006053ea6a2ae11633275c9"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "d8c63d0b5c85d5f9a823b42ed59cf9aa"
  },
  {
    "url": "index.html",
    "revision": "8f4b8d2a01b4f9192524e0b205f2ec16"
  },
  {
    "url": "LICENSE.html",
    "revision": "a5624b31bae1026691c564b3c4172308"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "09da6b9c3177c3a72aed1cf0a17596f7"
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
