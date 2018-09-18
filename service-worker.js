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
    "revision": "9630c222837d1c9f4f1f5e1c8c510090"
  },
  {
    "url": "assets/css/0.styles.8280e1ab.css",
    "revision": "f43b5946ff4cc02bc40bf3e9906733b3"
  },
  {
    "url": "assets/img/kaabah-overview.e8d8ef98.svg",
    "revision": "e8d8ef98228a9042bc7e673b680e0834"
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
    "url": "assets/js/10.5da3b5ec.js",
    "revision": "830d0e37a4337d3d13aba5ecdd9aa0d2"
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
    "url": "assets/js/7.8421df83.js",
    "revision": "4db96c302c7ca0c3025d5e03e0559c88"
  },
  {
    "url": "assets/js/8.af007864.js",
    "revision": "e5005bd5af24fecd863f46b3b466a239"
  },
  {
    "url": "assets/js/9.5d1082b4.js",
    "revision": "ddb709b8bfe6cb260b2ae0730a4b7883"
  },
  {
    "url": "assets/js/app.367e65ee.js",
    "revision": "338dfd5fe886dc5f8fbd5039126e2a1e"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "8f795284602cb476348e03acf1a2d66f"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "b0fe7708cfdf4a9b669b0b680e9354d8"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "65ea97ccd237a32a5e8608baa3e88d98"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "4d5b270923ce07b4d3f176b7b7890a5b"
  },
  {
    "url": "index.html",
    "revision": "c433a4a9bd3fbffa5255ce8b83758e62"
  },
  {
    "url": "LICENSE.html",
    "revision": "93a2a1c7b1c7376c35465f9857ad9111"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "786961bbe9ca92e3b909cfc55fc44292"
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
