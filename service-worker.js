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
    "revision": "2e564aedc8bcab3088fa4c6b14e8fc28"
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
    "url": "assets/js/2.830be329.js",
    "revision": "54be942cac5dabf3a2471acf2b192424"
  },
  {
    "url": "assets/js/3.7ada4ce0.js",
    "revision": "eb44afdba3f868cafaeb1cbdf1b3c0de"
  },
  {
    "url": "assets/js/4.24c47045.js",
    "revision": "1a9d37fc2df7ee6933af179f2fb73896"
  },
  {
    "url": "assets/js/app.9ef48394.js",
    "revision": "0ae535b836fbb57b7dc87e9e86a1606e"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "676868f28296bcf8f3047b52a1e13dd4"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "e0a17b99a97cd2da94165cb0b0a5ff46"
  },
  {
    "url": "index.html",
    "revision": "373bb622af2cdd3abb1b297eecd26c82"
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
    "revision": "2dac818b3d5b9c7d6d52561d79c6637e"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "938e5e3e42d3e5060b5a1cfe2ad84a08"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
