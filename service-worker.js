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
    "revision": "fb2fe5c1671e965213f6d27be0deee9b"
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
    "url": "assets/js/10.d6e12a5c.js",
    "revision": "a142404398e50becf8709d44b421f873"
  },
  {
    "url": "assets/js/11.a86dbc32.js",
    "revision": "dc765ea51a0dd413d0e8689e3048c590"
  },
  {
    "url": "assets/js/2.e69eec40.js",
    "revision": "c9ef5eccec94be6b75165bb145114d6e"
  },
  {
    "url": "assets/js/3.f991aea9.js",
    "revision": "6083ae7d8abee468198511b8b0d03c3f"
  },
  {
    "url": "assets/js/4.7dfe1e17.js",
    "revision": "c0c4ec727c2e9431aaf7f721d9f70bd7"
  },
  {
    "url": "assets/js/5.1520fa4f.js",
    "revision": "dc23fb1113b2fb9d72a3735b75ff63a9"
  },
  {
    "url": "assets/js/6.a85bfd0e.js",
    "revision": "aaae913e63bff52a7cafb0cfff2d1821"
  },
  {
    "url": "assets/js/7.fc7a6bc9.js",
    "revision": "f49124b8f5fdd0f1e124b9ced77fcf79"
  },
  {
    "url": "assets/js/8.ece40632.js",
    "revision": "fcb45e862f427541c183e8ebe4ff04c4"
  },
  {
    "url": "assets/js/9.c92f4c60.js",
    "revision": "5a730e4c18d89e94b5595974a4cd580c"
  },
  {
    "url": "assets/js/app.39946a4f.js",
    "revision": "40ead463140cbbb47f90f60695085ed6"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "224003b81a60c884cf984570934daeec"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "ff4bb4e14c07d47addcf54ff38f66292"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "a53b3ae8dfa848b7ba73519767d4f988"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "f8a6814e6b4c749889ddf35a2a2b6263"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "008d90689d5527ebda42f1ac14d3b8e7"
  },
  {
    "url": "index.html",
    "revision": "0d1fe4faf3847a6d3e0f3ef7a3471b35"
  },
  {
    "url": "LICENSE.html",
    "revision": "cbcef12a1dc5bcee29bed8fdf1532a7a"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "73bfeba6da2def33e98cd3041aa900c5"
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
