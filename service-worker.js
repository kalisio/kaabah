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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "229d0056292ee337d9c9404917edae20"
  },
  {
    "url": "about/contact.html",
    "revision": "bec1130f72da0ed69b125ab17d9ae03a"
  },
  {
    "url": "about/contributing.html",
    "revision": "2455422e8387a1287328687cb947ef30"
  },
  {
    "url": "about/introduction.html",
    "revision": "0c7915628622780cfcab4d145a3a831b"
  },
  {
    "url": "about/license.html",
    "revision": "9c1b28af5252758e2dd15b5f396dc0e6"
  },
  {
    "url": "about/roadmap.html",
    "revision": "2d048e3db4d078583ce473d44cd5ce76"
  },
  {
    "url": "assets/css/0.styles.b0d4fd5f.css",
    "revision": "8187676b519b194bd3753d33a26eb532"
  },
  {
    "url": "assets/img/kaabah-bastion.02afd837.svg",
    "revision": "02afd8375d885d6e0145c7ef90fdcf83"
  },
  {
    "url": "assets/img/kaabah-gluster.d015860b.svg",
    "revision": "d015860b3b8f0e5cc661f5be98658288"
  },
  {
    "url": "assets/img/kaabah-overview.bbd6d94d.svg",
    "revision": "bbd6d94dc92ddfc5793e70e6e4d31378"
  },
  {
    "url": "assets/img/kaabah-principle.cca0399c.svg",
    "revision": "cca0399c28af2dcf88a0abd4c8ff05f3"
  },
  {
    "url": "assets/img/kaabah-swarm.bd36259a.svg",
    "revision": "bd36259a03af2a5a4b0081bec2c3cb08"
  },
  {
    "url": "assets/img/kaabah-terraform.2b43f23c.svg",
    "revision": "2b43f23c55fabc257038af3f5b0871b6"
  },
  {
    "url": "assets/img/kaabah-volumes.7ca8df28.svg",
    "revision": "7ca8df28dde7afd2d7182592fc915255"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2540251a.js",
    "revision": "04813c3dbca06e2e48287a06d8b08039"
  },
  {
    "url": "assets/js/11.e2ee213a.js",
    "revision": "58c64c74f44368963fe30698a8070ad4"
  },
  {
    "url": "assets/js/12.e5f6dd24.js",
    "revision": "a92ddff03bf065bf55ef6733ff8de511"
  },
  {
    "url": "assets/js/13.15c2ffa5.js",
    "revision": "b7b509f29aaab3f387565af9a3c6b965"
  },
  {
    "url": "assets/js/14.57fdc616.js",
    "revision": "b7a6d1178cb0f86ba15f5221b686c670"
  },
  {
    "url": "assets/js/15.7f2c0c04.js",
    "revision": "87617a989c36bb0d62c5a1191bbdc023"
  },
  {
    "url": "assets/js/16.6cd790ad.js",
    "revision": "1c59deb863184134863599936043314c"
  },
  {
    "url": "assets/js/17.5545d614.js",
    "revision": "e56c29281685e60ebd610ddc85a89089"
  },
  {
    "url": "assets/js/18.2de2dc44.js",
    "revision": "5440da64d423da485a5642931a01fc35"
  },
  {
    "url": "assets/js/19.6d0a3115.js",
    "revision": "5b078b7ebb966ae5e8a67861b5dc5575"
  },
  {
    "url": "assets/js/2.8f18f075.js",
    "revision": "540653d04fe47091911376863b138b9a"
  },
  {
    "url": "assets/js/20.46e19d77.js",
    "revision": "8093b8a1412bfdf94bd762829f06872e"
  },
  {
    "url": "assets/js/21.c621e489.js",
    "revision": "1a60b9bc9d11cbaba089da4c718e7ee9"
  },
  {
    "url": "assets/js/3.bb2e47bd.js",
    "revision": "85658bac228259c201e228f5f2279681"
  },
  {
    "url": "assets/js/4.13f7fdb6.js",
    "revision": "6d014264a90ad7129b52d997b360ae49"
  },
  {
    "url": "assets/js/5.c21d6619.js",
    "revision": "ba3b721e7199db2177d31990f606bacf"
  },
  {
    "url": "assets/js/6.56173d71.js",
    "revision": "09cad6f3f9d0a8974a70f1c327181cde"
  },
  {
    "url": "assets/js/7.9f99aadb.js",
    "revision": "99a98279b49fd67a626d598bca642430"
  },
  {
    "url": "assets/js/8.68199981.js",
    "revision": "2461a4eae26c87be4bec6f9ed1f17200"
  },
  {
    "url": "assets/js/9.0a62e98c.js",
    "revision": "8e2f5623e14a0d53de1b4285fb8fb522"
  },
  {
    "url": "assets/js/app.d4d16fcd.js",
    "revision": "288c3d35e55900849acb5c98000f0297"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "a32f7fba4545903c916a3f98fcb5bdb9"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "4ae338490415e5a644688dd9ddbf5978"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "e50fd8ac9ebc9d9a04a71d5d995ca5fd"
  },
  {
    "url": "index.html",
    "revision": "f82f24a0750fc14e0e1f598442eca242"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "8f348a3c9b48aa1937dcebc8266dd3d0"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "03aa4d90e3334257ddb4e07432b3b52d"
  },
  {
    "url": "tips/index.html",
    "revision": "98db7814b123dfc68cb912ca49cba101"
  }
].concat(self.__precacheManifest || []);
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
