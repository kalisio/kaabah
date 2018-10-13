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
    "revision": "d2366de1ac4bfa1993e86397a8cd2112"
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
    "url": "assets/js/10.a6324418.js",
    "revision": "2a069f6cb76fc86fd202b979cb43126f"
  },
  {
    "url": "assets/js/11.54fdf934.js",
    "revision": "490126517f770d8794dcfe19e3c66559"
  },
  {
    "url": "assets/js/12.cb9dd6f6.js",
    "revision": "e6c82e69788770aad88d419d61e4c6a1"
  },
  {
    "url": "assets/js/2.e69eec40.js",
    "revision": "c9ef5eccec94be6b75165bb145114d6e"
  },
  {
    "url": "assets/js/3.aeea5ff6.js",
    "revision": "f1a3362f68b87d61831693a9cd502248"
  },
  {
    "url": "assets/js/4.03ff8b2f.js",
    "revision": "45c7b9b11863f6bfba36d8910ef95fff"
  },
  {
    "url": "assets/js/5.1520fa4f.js",
    "revision": "dc23fb1113b2fb9d72a3735b75ff63a9"
  },
  {
    "url": "assets/js/6.0483a207.js",
    "revision": "f5e3d3eaaffe0334463c1c6376cc5dab"
  },
  {
    "url": "assets/js/7.0a31af3e.js",
    "revision": "6bec88c82aaec44ca59128de3e2c00f4"
  },
  {
    "url": "assets/js/8.493a2a20.js",
    "revision": "46bbd410aa2e00bc248a364367189659"
  },
  {
    "url": "assets/js/9.176911a3.js",
    "revision": "0e4ad3283eeed379797435e4bf307063"
  },
  {
    "url": "assets/js/app.fd0d65be.js",
    "revision": "32f6710bf2402e20e63ddaa1524557c3"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "21c1edeb3e8fe47563d3d255bff98777"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "0e210e06b6c5c9ca8323aa6bcdfc6e41"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "01870be0e80c214d1bdb65de9faa6fee"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "8f9a4c0e1d772dd2214c370f537d5e6c"
  },
  {
    "url": "how-to-use-it/helper-commands.html",
    "revision": "dfe35807c2ab889065b34a240d17f154"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "03eda1646a5d57fe2e243a22ca122ae1"
  },
  {
    "url": "index.html",
    "revision": "aa382525791bc30bc33b72940df84183"
  },
  {
    "url": "LICENSE.html",
    "revision": "159cd8be2bd1df1726d131b3236831d0"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "f64119694982ab1e52c02d399880051c"
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
