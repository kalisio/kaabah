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
    "revision": "aa25cb03d21d7a3c31c1a457e9a879a5"
  },
  {
    "url": "about/contact.html",
    "revision": "9b56d13f8a1419663f068f1ef9526b47"
  },
  {
    "url": "about/contributing.html",
    "revision": "5808fd7c0678577751f71ffff6ef0da5"
  },
  {
    "url": "about/introduction.html",
    "revision": "bc9adc62c5ccd713fe6f84dbb1ef2b8e"
  },
  {
    "url": "about/license.html",
    "revision": "a1def49a76a6de92869942751392c618"
  },
  {
    "url": "about/roadmap.html",
    "revision": "7532c836d7d1140e8578a5e9ac773ac1"
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
    "url": "assets/img/kaabah-topologies.0e3d60e1.svg",
    "revision": "0e3d60e1264df42818d6c98f68355d81"
  },
  {
    "url": "assets/img/kaabah-volumes.707343a6.svg",
    "revision": "707343a6fa30eb6a54c16acb0c0efd6b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c34ea2e3.js",
    "revision": "073d1e9dfbc67847fcabccb3acfe3ef9"
  },
  {
    "url": "assets/js/11.58873f73.js",
    "revision": "c7e290abd2346b4beb71c9663eaa6b7c"
  },
  {
    "url": "assets/js/12.e68e72a6.js",
    "revision": "bc51c34a1b19997265ceb2ab5ffd5f6b"
  },
  {
    "url": "assets/js/13.fb12e602.js",
    "revision": "46121ee9b224523d019bac7b896335b3"
  },
  {
    "url": "assets/js/14.16640ec9.js",
    "revision": "badc3c42c760512c4024e77852ff41a0"
  },
  {
    "url": "assets/js/15.ac669eca.js",
    "revision": "5e74e0a1317b4ec56211406c1ef12d12"
  },
  {
    "url": "assets/js/16.d07c8c01.js",
    "revision": "17e468cc92219143c7afaa67f3a711ea"
  },
  {
    "url": "assets/js/17.81b5f98f.js",
    "revision": "0118c43921ac91b393bc03e049b6d2ba"
  },
  {
    "url": "assets/js/18.4925108f.js",
    "revision": "89bf48796a50a8e45eb8f888c1e2bd46"
  },
  {
    "url": "assets/js/19.47977048.js",
    "revision": "76e68594c9e3f9e1391fa76d41ae1eef"
  },
  {
    "url": "assets/js/2.9437c851.js",
    "revision": "96026ddc9689cee265bfb9fab669c306"
  },
  {
    "url": "assets/js/20.9da25748.js",
    "revision": "ff6bd1f9f7860ccceb55ad98c53e287d"
  },
  {
    "url": "assets/js/21.7c4b4274.js",
    "revision": "36adb357b45bdadc85f25f14a2c578e1"
  },
  {
    "url": "assets/js/3.e65ea628.js",
    "revision": "3f3145830efad09a7c01d1af6c15f000"
  },
  {
    "url": "assets/js/4.cfcd4076.js",
    "revision": "bd6204a41a26fe57abb78e7ad35af3e7"
  },
  {
    "url": "assets/js/5.813644f4.js",
    "revision": "731e9cbbc272c8a8bad1710d0fefca0f"
  },
  {
    "url": "assets/js/6.81be51ac.js",
    "revision": "b1059d9cbf566ce7a14397aa8f8af3ff"
  },
  {
    "url": "assets/js/7.a364ba67.js",
    "revision": "703b7afbcc4bfa3c0f76b80a7effb6bf"
  },
  {
    "url": "assets/js/8.3e3d8346.js",
    "revision": "5c752f6a9e02883eda5692b9d82687a8"
  },
  {
    "url": "assets/js/9.2a2330d8.js",
    "revision": "ae9ec90f6e726c979be916d7deb1a31a"
  },
  {
    "url": "assets/js/app.236018af.js",
    "revision": "ddc25a6f25c636ba6cbb4222d5f84809"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "060784737e6198ceceda34e6a58ec8c3"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "e46a35c8f9d49fdcae5e08b14f3a6b26"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "1f58d27a364be648e19922aaecff9fda"
  },
  {
    "url": "index.html",
    "revision": "1b5abf7d97336f91efd7fc3e91b401b1"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "168cdfcbf706007209d6a182cc471c94"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "cf2452e1048e64a44dc94991f82f1dc3"
  },
  {
    "url": "tips/index.html",
    "revision": "9c86cad6f0381d604f025bc1dc10457d"
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
