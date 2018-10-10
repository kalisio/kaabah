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
    "revision": "028c6f24a8b488a10d10224f09506003"
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
    "url": "assets/js/10.46f423ba.js",
    "revision": "942f7a3633316ebdfbd15dea3d66a7fe"
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
    "url": "assets/js/7.2bc7ab80.js",
    "revision": "f4136a09dc1fe77be1d6e3a3c468ae52"
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
    "url": "assets/js/app.b9c351e5.js",
    "revision": "db27d78cfe40728b504c9d6555f86835"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "a93e67997a620251e4985ef323efb5c9"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "e5dab4bc7196afeca1fe859e0b9a4f5f"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "44fbba9339a20e93714d79619b196cec"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "f1388aa23caa754bb780ad925b992e10"
  },
  {
    "url": "how-to-use-it/helper-commands.html",
    "revision": "94bc4429181de93e43e96f443d43f114"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "8a4b0951a8a3b3e643a8b9a7d12229c8"
  },
  {
    "url": "index.html",
    "revision": "84f64dff50ca3403009b68e8b65e242e"
  },
  {
    "url": "LICENSE.html",
    "revision": "9abf8fe72fed440cd01d8fb93179d5da"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "d5ee98b6b94f98ec1256e884ef53f913"
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
