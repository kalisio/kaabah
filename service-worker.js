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
    "revision": "28453ca9a617650d258dacbe13c90cbc"
  },
  {
    "url": "about/contact.html",
    "revision": "f9cce4383fe60e279c61de3a01c89a81"
  },
  {
    "url": "about/contributing.html",
    "revision": "2273a6e89a9e95de92dad836bb0ae455"
  },
  {
    "url": "about/introduction.html",
    "revision": "11bfc9cb00d1730921119f0ee3fef6db"
  },
  {
    "url": "about/license.html",
    "revision": "47f38230c82b244a62a7d989fd9d8236"
  },
  {
    "url": "about/roadmap.html",
    "revision": "fdda756c9e26de9ba7bf326b013b6298"
  },
  {
    "url": "assets/css/0.styles.92de6ef3.css",
    "revision": "7d4050a8b26d65e355dadeb7e2418c7b"
  },
  {
    "url": "assets/img/bastion-architecture.26f462e8.svg",
    "revision": "26f462e845d87d05a4f976b7c1f4a3cb"
  },
  {
    "url": "assets/img/kaabah-overview.e27bf66a.svg",
    "revision": "e27bf66ace08f58e366dd11c4aa8fb3c"
  },
  {
    "url": "assets/img/kaabah-principle.86122ac7.svg",
    "revision": "86122ac745e5c0172223788a78bb136d"
  },
  {
    "url": "assets/img/kaabah-swarm.9d28a804.svg",
    "revision": "9d28a804fc6bf91af24873a2eb64f862"
  },
  {
    "url": "assets/img/kaabah-terraform.99a18566.svg",
    "revision": "99a18566ab74c9bac7f3d828e75b987b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.019d5ae6.js",
    "revision": "48425bebf3a7debc0f66fd1c616967cf"
  },
  {
    "url": "assets/js/11.8d966988.js",
    "revision": "08ce2b5ac367a01d07884915774a1fef"
  },
  {
    "url": "assets/js/12.f1b50753.js",
    "revision": "6f8833f86ed9fb43b97b0042f153a229"
  },
  {
    "url": "assets/js/13.6c362905.js",
    "revision": "2efb0cd121aafef03f12727c691ef053"
  },
  {
    "url": "assets/js/14.a9af6c22.js",
    "revision": "00e5c473a62d0599f8bf891c688f9a68"
  },
  {
    "url": "assets/js/15.b006e0d3.js",
    "revision": "2f06a586f35c1388be774949f53a3d96"
  },
  {
    "url": "assets/js/16.a85ff922.js",
    "revision": "1986b7eb61c2be599cd145215cb99d15"
  },
  {
    "url": "assets/js/17.050ca9aa.js",
    "revision": "efebf25e3bf857884cac3b47149e173a"
  },
  {
    "url": "assets/js/18.f0c1ae02.js",
    "revision": "8a1c7532775555be111e13c1eb485dda"
  },
  {
    "url": "assets/js/2.36fa6463.js",
    "revision": "68049b53bc7fd9e5f8ea508bb04c0e2a"
  },
  {
    "url": "assets/js/3.dd9f5cd8.js",
    "revision": "cdfc1917c3d508809887ea529f2b4365"
  },
  {
    "url": "assets/js/4.a092fa21.js",
    "revision": "7e02abc318b922c322f4134dce919a69"
  },
  {
    "url": "assets/js/5.00abcfad.js",
    "revision": "33e430d6d7ea345b10072459be1a7894"
  },
  {
    "url": "assets/js/6.6ae4bf39.js",
    "revision": "ccef103f72ad7257ec66cdc804235f35"
  },
  {
    "url": "assets/js/7.a3bd8e49.js",
    "revision": "cf9acab060971a1500efad4cf88a5050"
  },
  {
    "url": "assets/js/8.99b27aad.js",
    "revision": "baf84e9f39d30263d60c5e8065574f33"
  },
  {
    "url": "assets/js/9.6009c940.js",
    "revision": "11b415bf6c10e31ed950d1179b13ee3a"
  },
  {
    "url": "assets/js/app.0f485e33.js",
    "revision": "6a90e518b810045f745922228aac9a4f"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "ab81e61e522564cec11381a743f9a023"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "b529c3055207304969db77907df4c202"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "e820964a611d7767258ac8258135a52b"
  },
  {
    "url": "index.html",
    "revision": "45dcffe286e4b34c84c24790a3dadb3b"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "6599778d9fd39b90c35d74d88f93a821"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "8809b391806137fbdd9310b549f72c17"
  },
  {
    "url": "tips/index.html",
    "revision": "d3fd6c7e4e85b8cd79195645c9d33395"
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
