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
    "revision": "103f7075583b6d9a3a0fa1bd62150b1c"
  },
  {
    "url": "about/contact.html",
    "revision": "7da9d8fa4bf04fbdd8aa15d980ad6971"
  },
  {
    "url": "about/contributing.html",
    "revision": "d159291f77491154f0d9555c7741f2dc"
  },
  {
    "url": "about/introduction.html",
    "revision": "af95d6099790543cab76d735fc8f7c17"
  },
  {
    "url": "about/license.html",
    "revision": "b3420daacc93b5a1ef146ca9b8e15952"
  },
  {
    "url": "about/roadmap.html",
    "revision": "57979a0f96e88d58150b6291e13b9b76"
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
    "url": "assets/js/12.18298fb8.js",
    "revision": "078aeb952d6e7d06f7db8c7f32eb962b"
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
    "url": "assets/js/15.cac2f1ef.js",
    "revision": "f505431518d5dd9c976994845a778fad"
  },
  {
    "url": "assets/js/16.851fc977.js",
    "revision": "ba826f815e41058cd952263ee8725906"
  },
  {
    "url": "assets/js/17.d27657df.js",
    "revision": "a972804e90956c9ae6603e768223d04c"
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
    "url": "assets/js/3.11c6b2b6.js",
    "revision": "5c42f980fa814e1509b3904a535537d4"
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
    "url": "assets/js/6.a0573bff.js",
    "revision": "fb56973216059df2e7ecdb5e7885eb3c"
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
    "url": "assets/js/app.00366ece.js",
    "revision": "cc0b835ff62beab57855ab37ab86041d"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "b15ee9a0cd91348d24b6ae34e18029fa"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "e9f5189f0c35a9a0ea4bbc5d31ef2af5"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "9fdf6783a1b53400624b8b17c779802f"
  },
  {
    "url": "index.html",
    "revision": "e619362b723dad50cb663a001f7bb970"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "6bb1f983467932f128be7f1ed404d343"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "de47bd8a2b3bdb589778b305a333a55b"
  },
  {
    "url": "tips/index.html",
    "revision": "6ca4df472e53e0ed6bc7a641d6e6c8da"
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
