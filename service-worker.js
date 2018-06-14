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
    "revision": "d9b14687fdbb08cd8ac91671f348c7a4"
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
    "url": "assets/js/1.0e60d1ab.js",
    "revision": "b1cd6a5e9cdbd2f1486c631ca9b77d9c"
  },
  {
    "url": "assets/js/2.8dfe9c9a.js",
    "revision": "0c709e2a586c3385626c9ec58b32d0ef"
  },
  {
    "url": "assets/js/3.a26e738a.js",
    "revision": "6983c5d0f7ed43df7f2b6643b3e9c760"
  },
  {
    "url": "assets/js/4.55f36712.js",
    "revision": "26d032bff1c5b1efef83048110594987"
  },
  {
    "url": "assets/js/app.036f95da.js",
    "revision": "bfb207a7209cbf0b11ddb1119e05198c"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "0dac813de4e22a0642f9fc3e1e78f8c4"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "0b6e8e732092fdb20a37f9391d0a1107"
  },
  {
    "url": "index.html",
    "revision": "652b7c46849b3df23915680e35c387d4"
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
    "url": "LICENSE.html",
    "revision": "32c812d8ddb09713f8e66374a132aedd"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "c7cfc380bb319362848184ce97a2aecf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
