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
    "revision": "d3f881700dcfd80d88694e53721eba54"
  },
  {
    "url": "about/contact.html",
    "revision": "aa18bb0081ac960fe1c10fa16ad52afc"
  },
  {
    "url": "about/contributing.html",
    "revision": "d858f83c33bbbc9c2719cf1ae4da1750"
  },
  {
    "url": "about/introduction.html",
    "revision": "d567c6d1b34eab129a27cb78e3140a5a"
  },
  {
    "url": "about/license.html",
    "revision": "a627f275ac0c7ff0350eb6ae97dfff79"
  },
  {
    "url": "about/roadmap.html",
    "revision": "566d586f7563f49c7721dfbb866932b2"
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
    "url": "assets/js/15.3c27682e.js",
    "revision": "6e0d3336a7ed5541620e4568fb71eb21"
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
    "url": "assets/js/app.1334a6cb.js",
    "revision": "77e3f980c245a3ff159cfef9aaa74b8d"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "daa4b1e5c3c2a15ef9d908d745377461"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "a94561a9d04d0dbe853c5d3cbd82c7da"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "a0edac9350414c5ad6d0bf545446825a"
  },
  {
    "url": "index.html",
    "revision": "5266075026f73e0bfa80a11b49c28bfb"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "e4adb3a93e5895db78c30a76fb682798"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "ce9bcfcdbc22f707ee8f4efe9bf05c4b"
  },
  {
    "url": "tips/index.html",
    "revision": "b5952a27180e10e6ae7b49b80ea1d449"
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
