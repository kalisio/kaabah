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
    "revision": "bda53c78be133db1a4034ca158d48e2f"
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
    "url": "assets/img/kaabah-principle.9287b283.svg",
    "revision": "9287b283b4f9f41f9e203f2e079e858d"
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
    "url": "assets/js/10.ab9d1445.js",
    "revision": "6b05600ab790c0023939111e4136c660"
  },
  {
    "url": "assets/js/11.cc47f4ce.js",
    "revision": "1f0b10acc0d4f67fd6205c9829f7ee23"
  },
  {
    "url": "assets/js/12.4eb5235e.js",
    "revision": "c844eb68bf3feb131bdb786ea6ed1155"
  },
  {
    "url": "assets/js/13.ea2ed627.js",
    "revision": "eff3a4379e0759cca3355c48da83c6ce"
  },
  {
    "url": "assets/js/2.ef81631e.js",
    "revision": "70942fb94c5d2ac8769b826ae17f4834"
  },
  {
    "url": "assets/js/3.5b658cdb.js",
    "revision": "6fb393636c75955ff6eb7f73dcb5b33d"
  },
  {
    "url": "assets/js/4.03ff8b2f.js",
    "revision": "45c7b9b11863f6bfba36d8910ef95fff"
  },
  {
    "url": "assets/js/5.e66b8c53.js",
    "revision": "f1af2faa8a14436ec1629eeb0826a336"
  },
  {
    "url": "assets/js/6.18e9f71f.js",
    "revision": "5da2cdeeab1d5b02ae7e09bcb9cf0af8"
  },
  {
    "url": "assets/js/7.cc881cf6.js",
    "revision": "71e23277b0b54c3030c7745e353f59e5"
  },
  {
    "url": "assets/js/8.57af3f82.js",
    "revision": "97c586f75ef2929b5fe1edd7be904ac5"
  },
  {
    "url": "assets/js/9.542150ce.js",
    "revision": "6ac7ca7a859abdcfaabcd2c31653f156"
  },
  {
    "url": "assets/js/app.df6f1b81.js",
    "revision": "249651d18a33406b07e8b44282247100"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "cc309b0586651643fef6e228a8a259b4"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "1a573138c4a214a00e80e9c1c1206658"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "2203ef154ebc2d7587dcf329c95b4eb9"
  },
  {
    "url": "how-to-use-it/configuration-variables.html",
    "revision": "ff3cc399c340de3e4aead6dad71be746"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "5c4ec235ef00fd6f2d69db6bd9a3c79a"
  },
  {
    "url": "how-to-use-it/helper-commands.html",
    "revision": "d758fb474b4fb944db74dd90cc4bf969"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "aafd1d2a647913a4f19e0f6fc901ac92"
  },
  {
    "url": "index.html",
    "revision": "21791f08497816e12f7b8aaa90a56bbe"
  },
  {
    "url": "LICENSE.html",
    "revision": "3fb1c4939c18a8ac44877eef0aac79b7"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "2ae4a07cb016730d810ef226390769ac"
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
