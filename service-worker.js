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
    "revision": "4bfa18594874242a5d69390235dfc52f"
  },
  {
    "url": "about/contact.html",
    "revision": "653eb470af2674bcaeb257cc5ba7d344"
  },
  {
    "url": "about/contributing.html",
    "revision": "0913b747203aff5201c75a5453035637"
  },
  {
    "url": "about/introduction.html",
    "revision": "5c4d12f68de7728deca3973c26ce51a6"
  },
  {
    "url": "about/license.html",
    "revision": "faf415f1670f6e6bd6a0287d3166fc0d"
  },
  {
    "url": "about/roadmap.html",
    "revision": "8b61700b0a95d7170f3f27bcecd3f89f"
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
    "url": "assets/js/15.838d3fa6.js",
    "revision": "327be75b3f70475cd5e0ad954c34a5e7"
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
    "url": "assets/js/app.c2aa8f3f.js",
    "revision": "6ac017e1288b5711651aa2304c220805"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "8b76597eced0f4f229d5d1661b48068c"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "e740d8466da364b14296fdb599e05686"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "7cedcfb05d25543d3b48f87393af8df5"
  },
  {
    "url": "index.html",
    "revision": "f6f7cac0340a01a0db6acc04bc9df695"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "62e00c43f55e9886d81a70eb70f03b98"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "e4563642da9c72291a979b754018a76a"
  },
  {
    "url": "tips/index.html",
    "revision": "2ff7b72846cc85223081dce5b47c1dc8"
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
