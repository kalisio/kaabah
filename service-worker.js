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
    "revision": "74eb59238e7301ba0d57c9800eac2953"
  },
  {
    "url": "assets/css/5.styles.c888f2fb.css",
    "revision": "78042c0e2949ba3d095491d85abe2502"
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
    "url": "assets/js/0.4a8f523d.js",
    "revision": "413892b691bc10e58d620261716be2ad"
  },
  {
    "url": "assets/js/1.ee444ecf.js",
    "revision": "2b301b6a1b7d15a8ffc720c4c8010990"
  },
  {
    "url": "assets/js/2.c695e18e.js",
    "revision": "d1ba33996997061737141efbd0e16c79"
  },
  {
    "url": "assets/js/3.92b2e3bf.js",
    "revision": "28e9097f33226b8eb746bc1df7fd38ff"
  },
  {
    "url": "assets/js/4.24c47045.js",
    "revision": "1a9d37fc2df7ee6933af179f2fb73896"
  },
  {
    "url": "assets/js/app.7b1ca4bc.js",
    "revision": "41de306f0b833a82b2fac4f1660c252f"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "a2edf40e426140affebc81bffba345c5"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "d7aa8bbafe730e2a06e04d9edf13ca5d"
  },
  {
    "url": "index.html",
    "revision": "861b62350ec93769c7ffedc7cb864d56"
  },
  {
    "url": "kalisio-logo-256x256.png",
    "revision": "5d8a749b1865a4a845fbaaab972dd315"
  },
  {
    "url": "kalisio-logo-512x512.png",
    "revision": "6f108455a9a95bca6278dfaa58eaa8ec"
  },
  {
    "url": "kalisio-logo-64x64.png",
    "revision": "2065682e5cd8f7ac0e1db3eec6f2078e"
  },
  {
    "url": "license/index.html",
    "revision": "6bb0894d2ea1fad910be200fe1935c06"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "1c4e299d5b3287e2cd4269b773c350d3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
