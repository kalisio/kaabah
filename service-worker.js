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
    "revision": "699534cbc6d4358b1c974ae76c5df47f"
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
    "url": "assets/js/7.161f2774.js",
    "revision": "ff481f5e5a68a445d9eb2290572225ad"
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
    "url": "assets/js/app.35b951b9.js",
    "revision": "936f9a0d23b034b44e90a557163af85e"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "a401082d02707592f26d2b2959ccc288"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "3a1fccfdec1ba8c70395c3d45289f99e"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "bbaf4b98deecbe46cf3bac80d2071b70"
  },
  {
    "url": "how-to-use-it/configuration-variables.html",
    "revision": "8f1d6dba09cc97f2d28417adb73fce11"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "2bf845ae9b34fa039dd4ddaebb3dfd6c"
  },
  {
    "url": "how-to-use-it/helper-commands.html",
    "revision": "af77d6ea8756b898f027947a866f1d1d"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "84d06053d4dfa268e0107fb40719b705"
  },
  {
    "url": "index.html",
    "revision": "5b74fc96a5c4137eea6f66ff5507b36b"
  },
  {
    "url": "LICENSE.html",
    "revision": "94c03db43feb9f9719108d5d1f3651b5"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "56fa27e9eee7f4ebdc33e19c8d6d9a2d"
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
