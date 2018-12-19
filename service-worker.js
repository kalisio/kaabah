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
    "revision": "94f051732042e5f5511899e9f3ad1c6c"
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
    "url": "assets/js/11.2e16e7b2.js",
    "revision": "b6dbafb7822b91852225b6ad73f09b45"
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
    "url": "assets/js/app.98a115ce.js",
    "revision": "a5197bc1e801a0620f511f316a828265"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "cde42213f75e354d390bf15c663408b8"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "cc68e25e5f34237ca75c2d0416c1e505"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "9bc6bd2c06efebee67a42602f45a0a81"
  },
  {
    "url": "how-to-use-it/configuration-variables.html",
    "revision": "beb4d9b625d042a505fa96ebcb58995a"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "b49b27beec151a0fef561ddaf5077689"
  },
  {
    "url": "how-to-use-it/helper-commands.html",
    "revision": "428568d1bdbc1aa7206ae2b7600033ba"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "fa4e67e4c67b86801c640ffd5509e069"
  },
  {
    "url": "index.html",
    "revision": "65773cf25ceecea50ff4931c5c65595d"
  },
  {
    "url": "LICENSE.html",
    "revision": "02985b6aafa42bfc9ba90f103d1f33a6"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "0c67a107dbda56a55e500c2890bd52c8"
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
