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
    "revision": "805a0f61fb18a72adf415a751c827e9d"
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
    "url": "assets/js/11.f366afea.js",
    "revision": "0b1e556f7d4cbbb04acc220e1e6acf66"
  },
  {
    "url": "assets/js/12.67f80405.js",
    "revision": "b83ba57f3f9082b2c4b394bf894f48d7"
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
    "url": "assets/js/6.c69cdcc0.js",
    "revision": "0934f969ac7806d2b2935e1c856774b4"
  },
  {
    "url": "assets/js/7.ae3bf9bd.js",
    "revision": "968a3dab481069a196aafc0c5a1141aa"
  },
  {
    "url": "assets/js/8.57af3f82.js",
    "revision": "97c586f75ef2929b5fe1edd7be904ac5"
  },
  {
    "url": "assets/js/9.6fb3d9ee.js",
    "revision": "fcbead85113525e837d7b073d9feeefa"
  },
  {
    "url": "assets/js/app.0cc5bdb1.js",
    "revision": "53a27790a0fd678986a972a8a3b0107f"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "85cec9b87804cbd269c0042293d78c20"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "0b2b636ba041c3585807e712a14a5862"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "c85ec84b74f75010ffb136b922d8132e"
  },
  {
    "url": "how-to-use-it/configuration-variables.html",
    "revision": "00626324ca7f24432a5438daacf0d645"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "d42da05aa0ae0d61b0b1ca1f6a282478"
  },
  {
    "url": "how-to-use-it/helper-commands.html",
    "revision": "ba0c7f1dde8d9c7a862f3264eee968f4"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "8e0ac81b8412cbf5f594c1fe8a4ea889"
  },
  {
    "url": "index.html",
    "revision": "60c89552a55a8feaa504b7922aa4bd81"
  },
  {
    "url": "LICENSE.html",
    "revision": "5d4cf87c1b81f7a637163fba5df0b1fd"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "4d5363d086e58fd5ee5e8249f3dab9ba"
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
