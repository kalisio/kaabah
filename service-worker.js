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
    "revision": "b4d398fb9848433abf9823fdfc6e47ec"
  },
  {
    "url": "about/contact.html",
    "revision": "254648a6c1bf5c2c92a78fcdeb99a47b"
  },
  {
    "url": "about/contributing.html",
    "revision": "f7aa92d74114036490830f31a53b4b03"
  },
  {
    "url": "about/introduction.html",
    "revision": "d5a56e7b452f4b9f4ae5c916ea949ded"
  },
  {
    "url": "about/license.html",
    "revision": "8892e5cf7fa76472e7f7ddf8f59041ba"
  },
  {
    "url": "about/roadmap.html",
    "revision": "288372314db9161fd54f467e47a2a29b"
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
    "url": "assets/js/15.0e2e6bfc.js",
    "revision": "34ea5044f2bf015d2541b0d43706c5dc"
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
    "url": "assets/js/18.1a800e52.js",
    "revision": "8cecfb97a4adef2ec4867328e30e303c"
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
    "url": "assets/js/3.416bafba.js",
    "revision": "0e94319dee8a5b3bf72d66c9040dc527"
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
    "url": "assets/js/app.4536baf2.js",
    "revision": "3c83f7046c830d488647f8a499f8891f"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "64c96c9ea538ccd1bdb2b67ea95b0e6e"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "99213878f4c62631370b5fdff639dbc9"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "8d79dfb23bb7d82f9a16325ee2aa9153"
  },
  {
    "url": "index.html",
    "revision": "b9ee48a54871ee3453fdd9f842b23868"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "f44ec00f462e06dbe3bdae13b23d6b9f"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "3c33df09131420a39dae1dc6c5c752f2"
  },
  {
    "url": "tips/index.html",
    "revision": "12f40d446a9c0bee392f91ae35d7fe43"
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
