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
    "revision": "48987d330557be8f68049ed0b1ec60ea"
  },
  {
    "url": "assets/css/4.styles.913d8d1f.css",
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
    "url": "assets/js/0.6b5180ce.js",
    "revision": "4337f71a61d05ed3f2c659ac4cd746d2"
  },
  {
    "url": "assets/js/1.8ec5a159.js",
    "revision": "c0e92b309ba70d097091ce414489d955"
  },
  {
    "url": "assets/js/2.99eb6cf0.js",
    "revision": "080c4b864f971f01743244f45510d373"
  },
  {
    "url": "assets/js/3.12f2e866.js",
    "revision": "fe4c42714e7645e89c5af1eb2fa6eac6"
  },
  {
    "url": "assets/js/app.e28ad4bf.js",
    "revision": "ca728040a3f8eb9e627c51ff6da1ebce"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "193ca19525a9a7d7726c5a641df54575"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "5c08eec979966c615804ca1c623f7eef"
  },
  {
    "url": "index.html",
    "revision": "802c95f6e7f394925a6adfcd02d1b70f"
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
    "url": "what-is-it/index.html",
    "revision": "61f216110258be527f22d37c1111a77b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
