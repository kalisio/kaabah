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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8ea8115026f44e36eac44c2f0a4c6a25"
  },
  {
    "url": "assets/css/4.styles.ef9ed187.css",
    "revision": "fd7af715c26b8e0a09ed481a2911a455"
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
    "url": "assets/js/0.64520438.js",
    "revision": "1cf48e7ccd7894f937e3d363d9161f5a"
  },
  {
    "url": "assets/js/1.8ec5a159.js",
    "revision": "c0e92b309ba70d097091ce414489d955"
  },
  {
    "url": "assets/js/2.473be1f3.js",
    "revision": "042be72a19902a028096e5b89071de6c"
  },
  {
    "url": "assets/js/3.12f2e866.js",
    "revision": "fe4c42714e7645e89c5af1eb2fa6eac6"
  },
  {
    "url": "assets/js/app.14ace856.js",
    "revision": "f3033fa15e6f0cf233d03ddedad6f0ef"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "71c349ec1402aeff1bd7a928a8706480"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "5f9a5b88bb332fca9ae989654cb3522f"
  },
  {
    "url": "icons/kalisio-logo-256x256.png",
    "revision": "5d8a749b1865a4a845fbaaab972dd315"
  },
  {
    "url": "icons/kalisio-logo-512x512.png",
    "revision": "6f108455a9a95bca6278dfaa58eaa8ec"
  },
  {
    "url": "icons/kalisio-logo-64x64.png",
    "revision": "2065682e5cd8f7ac0e1db3eec6f2078e"
  },
  {
    "url": "index.html",
    "revision": "ab14194d0543bc0fea8c2ab19817e69c"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "e1fa4ebd758d963386a63361cb7327dd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
