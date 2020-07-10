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
    "revision": "6dfe4ed466a8dd09cf05533b1918adf1"
  },
  {
    "url": "about/contact.html",
    "revision": "ed80322e857b1b7148c974a4ee44ce0a"
  },
  {
    "url": "about/contributing.html",
    "revision": "f246315fa78b71585df12f4bbefcf871"
  },
  {
    "url": "about/introduction.html",
    "revision": "81aa157f070fc780e2d8c0bb4c1cd432"
  },
  {
    "url": "about/license.html",
    "revision": "8a7629c465bacd211425b5f40c804002"
  },
  {
    "url": "about/roadmap.html",
    "revision": "0fde90e9317fc925806d21f6ed170ad1"
  },
  {
    "url": "assets/css/0.styles.b0d4fd5f.css",
    "revision": "8187676b519b194bd3753d33a26eb532"
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
    "url": "assets/js/10.0b4395e5.js",
    "revision": "9c8bcb015b9b0c15370da9f0f4d621c6"
  },
  {
    "url": "assets/js/11.9e44ffb8.js",
    "revision": "ffc1f440f76f6e05730d923b8e5f0071"
  },
  {
    "url": "assets/js/12.668e52c2.js",
    "revision": "72fbd179851519b3c62a8a921fe18667"
  },
  {
    "url": "assets/js/13.694878c4.js",
    "revision": "ad058541d4eca8df549a4f6013790bf9"
  },
  {
    "url": "assets/js/14.02b009c4.js",
    "revision": "b9fb6873eaec24777e080e80d222eefe"
  },
  {
    "url": "assets/js/15.92e6a03a.js",
    "revision": "c65c6f19bd7c09dde02f999ed579392d"
  },
  {
    "url": "assets/js/16.c7d9bf40.js",
    "revision": "0ad303b6762f9bcbff23fde21ea438f7"
  },
  {
    "url": "assets/js/17.7938617d.js",
    "revision": "de364cbd9f44c0464f09be0137b1fbd0"
  },
  {
    "url": "assets/js/18.acdc0ce4.js",
    "revision": "73a4043ad9808d379a9fa2c5090824c6"
  },
  {
    "url": "assets/js/19.8705ea01.js",
    "revision": "42045e973d486ede76e6884405318623"
  },
  {
    "url": "assets/js/2.86e28b2f.js",
    "revision": "c64b4bc0d6f353e5c66c894dd9de836f"
  },
  {
    "url": "assets/js/20.5762d6b4.js",
    "revision": "3c69f39112ed45cef370bd8632e80ba9"
  },
  {
    "url": "assets/js/21.ecb437b0.js",
    "revision": "cfa54793b444002820ab74ed870cbc88"
  },
  {
    "url": "assets/js/3.85a7ffcf.js",
    "revision": "8af52d13c1e052186533ab2a0bfe658e"
  },
  {
    "url": "assets/js/4.c15a462f.js",
    "revision": "9eae9fbd73d40c047b0c819533f22bc0"
  },
  {
    "url": "assets/js/5.d1fcc5a4.js",
    "revision": "96a2cf90a5ba3ebee8c9c4465c4abfd0"
  },
  {
    "url": "assets/js/6.d6514cc0.js",
    "revision": "312f93af5fe83df74682ccb493b0d1e4"
  },
  {
    "url": "assets/js/7.c6d136ee.js",
    "revision": "813570e04304b4e6d9c3da0494d9c8d2"
  },
  {
    "url": "assets/js/8.59681b3d.js",
    "revision": "e32010e6919d0830a0980c51142b8f95"
  },
  {
    "url": "assets/js/9.f48a3aa1.js",
    "revision": "d1f4e47d5fd647e93c1afea663b0f2a1"
  },
  {
    "url": "assets/js/app.10f40a17.js",
    "revision": "81e6f4a1a5e09fa1f671842504c3502e"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "e55204f98607ececbc205ba2f3250dfe"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "9b228614dc8311cc09d31bc42b2f6b15"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "7c784ca7fb03afb9864b23339c5621da"
  },
  {
    "url": "index.html",
    "revision": "f00f3eb47914413a5907164c022a9edb"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "8a3f5412f76e913a0642605a12c81b6b"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "8c214b1924e7d53bf548a354dc2457ce"
  },
  {
    "url": "tips/index.html",
    "revision": "cc2b473a9e1e1e06698e7a5322c11550"
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
