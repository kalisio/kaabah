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
    "revision": "2c7244a9559b7aca75ab5612c24eff8f"
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
    "url": "assets/js/app.f10d6449.js",
    "revision": "c10e667b160b88635ec086c0a60dfcf2"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "7a800aed2ff5bb07b4a87954ff0a933a"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "7a4c6d4a3474603f482753f863daf8f0"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "ef482a3730506f1f33594ee4ff558ed3"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "8818c2026dc7504b13bd52ad862174bf"
  },
  {
    "url": "how-to-use-it/helper-commands.html",
    "revision": "34a3301ec8692fb1e9104b067abf51dc"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "1a4a5f26b3614e004fea5c5023978a12"
  },
  {
    "url": "index.html",
    "revision": "cc316bbba618a85a89cb4519c51f81d5"
  },
  {
    "url": "LICENSE.html",
    "revision": "2366651a604f914fe1718c3faec57044"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "4e7bf82f044d92a98ef7a50029bfc14d"
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
