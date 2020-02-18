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
    "revision": "5265d343247d6aa64e9cb767202e8fb0"
  },
  {
    "url": "about/contact.html",
    "revision": "f09c4ff5a1e1bd65d2c80200492e72c4"
  },
  {
    "url": "about/contributing.html",
    "revision": "5b34efedfc6e33ae1c394b923d9fe04a"
  },
  {
    "url": "about/introduction.html",
    "revision": "dda8129022c24b451b795ed729ab0e4c"
  },
  {
    "url": "about/license.html",
    "revision": "0005cc62491f38a4739c34a0090a166d"
  },
  {
    "url": "about/roadmap.html",
    "revision": "cc5f174a7693990047c329373a2fa737"
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
    "url": "assets/js/10.14447477.js",
    "revision": "48425bebf3a7debc0f66fd1c616967cf"
  },
  {
    "url": "assets/js/11.626cc118.js",
    "revision": "08ce2b5ac367a01d07884915774a1fef"
  },
  {
    "url": "assets/js/12.51ff55ee.js",
    "revision": "6f8833f86ed9fb43b97b0042f153a229"
  },
  {
    "url": "assets/js/13.a6057bb2.js",
    "revision": "2efb0cd121aafef03f12727c691ef053"
  },
  {
    "url": "assets/js/14.a5613aea.js",
    "revision": "00e5c473a62d0599f8bf891c688f9a68"
  },
  {
    "url": "assets/js/15.e6c5265f.js",
    "revision": "2f06a586f35c1388be774949f53a3d96"
  },
  {
    "url": "assets/js/16.73ae6423.js",
    "revision": "1986b7eb61c2be599cd145215cb99d15"
  },
  {
    "url": "assets/js/17.46703b2c.js",
    "revision": "efebf25e3bf857884cac3b47149e173a"
  },
  {
    "url": "assets/js/18.f0c1ae02.js",
    "revision": "8a1c7532775555be111e13c1eb485dda"
  },
  {
    "url": "assets/js/2.585c9caf.js",
    "revision": "68049b53bc7fd9e5f8ea508bb04c0e2a"
  },
  {
    "url": "assets/js/3.ab4fdfbb.js",
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
    "url": "assets/js/6.10d8e1a8.js",
    "revision": "ccef103f72ad7257ec66cdc804235f35"
  },
  {
    "url": "assets/js/7.a3bd8e49.js",
    "revision": "cf9acab060971a1500efad4cf88a5050"
  },
  {
    "url": "assets/js/8.41eac6ca.js",
    "revision": "baf84e9f39d30263d60c5e8065574f33"
  },
  {
    "url": "assets/js/9.a1d7d71e.js",
    "revision": "11b415bf6c10e31ed950d1179b13ee3a"
  },
  {
    "url": "assets/js/app.e2148ad4.js",
    "revision": "eae7ae732fd89f4b66afef4953195932"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "53aee5acae33751ae0ae1fe4f94a493f"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "7bbdd599be12848155a7e424d6981509"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "90ccf8ed49f4f8fa91faffb56c40eddc"
  },
  {
    "url": "index.html",
    "revision": "60977d95d58363fee761e2653e3ed135"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "e3947b67ea56b0ecbaccf8b13f3d0893"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "e5cbc0e719089ca0694096d925b0fd75"
  },
  {
    "url": "tips/index.html",
    "revision": "8b48664cf69c3461c257b44be8e9d9dd"
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
