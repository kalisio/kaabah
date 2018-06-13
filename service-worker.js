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
    "revision": "d79e1c7deb52e1a48d0faea44ba431d1"
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
    "url": "assets/js/1.0e852f0a.js",
    "revision": "2a1b802eda54c43a875fc53ae44b0219"
  },
  {
    "url": "assets/js/2.57a36524.js",
    "revision": "7f9559db105919a0afb06317f578ed79"
  },
  {
    "url": "assets/js/3.c843e869.js",
    "revision": "c99bea750efe1f63aa07373237b142bc"
  },
  {
    "url": "assets/js/app.a4d131d2.js",
    "revision": "b8624d786163451a4b515dbaf0df16d8"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "c8ef3c1ab89ce2b28308b736ce2976c9"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "abd9a8a296261aeca6a583079bb1e4c7"
  },
  {
    "url": "index.html",
    "revision": "729207110d7f5f644164fa44ca0d8415"
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
    "revision": "d943aaf44ae2abed7c31e7945a984a7b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
