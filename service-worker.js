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
    "revision": "d1a1958984e15910b2b3112bb16c9255"
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
    "url": "assets/js/10.faa1d7a2.js",
    "revision": "4d6d5c136931fcf80bd08d7f5a344bcb"
  },
  {
    "url": "assets/js/2.ef81631e.js",
    "revision": "70942fb94c5d2ac8769b826ae17f4834"
  },
  {
    "url": "assets/js/3.2bac8d78.js",
    "revision": "d404a02308c055411f327513fa0b0808"
  },
  {
    "url": "assets/js/4.6b0f67a7.js",
    "revision": "f3025062d37a842dd793a25253ad55ad"
  },
  {
    "url": "assets/js/5.3932839c.js",
    "revision": "0aafc354d479558216d10ad1e03429cc"
  },
  {
    "url": "assets/js/6.861fc3e8.js",
    "revision": "351013ae67f803c3b01f84caeb4433e2"
  },
  {
    "url": "assets/js/7.ee295345.js",
    "revision": "8a1eeae1950f3593d3bbf6b8ea72ef22"
  },
  {
    "url": "assets/js/8.af007864.js",
    "revision": "e5005bd5af24fecd863f46b3b466a239"
  },
  {
    "url": "assets/js/9.a9b9a2ff.js",
    "revision": "d7c3a4323fce14b2dd92223a8983b6e1"
  },
  {
    "url": "assets/js/app.9700d0d2.js",
    "revision": "92ac9731013469ef360f688ee5931644"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "2e1c0f8d9a52761db8252ba59bcd32dd"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "053dcd8d4bdd590bf29e24a1094dbdd9"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "69e2ca0439c07cd04a6b8c2ec6c1c01f"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "15df3813fc8c0155d1360b5d9df4f909"
  },
  {
    "url": "index.html",
    "revision": "3418f8ff505f99bad98b94253c55ca11"
  },
  {
    "url": "LICENSE.html",
    "revision": "22bc39d86189c19217435a0ab636b171"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "fc01808faf970bef1bddc6ccb7e9dba3"
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
